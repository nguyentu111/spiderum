import { uploadFile } from "@/actions/uploadFile";
import { Camera } from "@/components/icons/Camera";
import { Button } from "@/components/ui/button";

import { updateAccountSchema } from "@/schema";
import { format, parse } from "date-fns";
import { Loader } from "lucide-react";
import { useSession } from "next-auth/react";
import { ChangeEvent, useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { axiosClient } from "@/lib/fetcher";
import { UserWithInfo } from "@/types";
export const AccountSetting = () => {
  const { data: sessionData, update: updateSesion } = useSession();
  const user = sessionData?.user!;
  const dob = parse(
    sessionData?.user.user_info.dob ?? "1990-01-01 10:10:10",
    "yyyy-MM-dd HH:mm:ss",
    new Date()
  );

  const formatNum = (t: string) => {
    const num = Number(t);
    return num.toString();
  };

  const [isUploadingWallpaper, setIsUploadingWallpaper] = useState(false);
  const [isUploadingAvatar, setIsUploadingAvatar] = useState(false);
  const [wallpaper, setWallpaper] = useState<string | null>(
    sessionData?.user.user_info.wallpaper ?? null
  );
  const [avatar, setAvatar] = useState<string | null>(
    sessionData?.user.avatar_url ?? null
  );
  const handleUpload = async (
    e: ChangeEvent<HTMLInputElement>,
    type: "wallpaper" | "avatar"
  ) => {
    const file = e.target.files ? (e.target.files[0] as File) : null;
    if (file) {
      try {
        if (type === "wallpaper") setIsUploadingWallpaper(true);
        else setIsUploadingAvatar(true);
        const formData: FormData = new FormData();
        formData.append("image", file);
        const rs = (await uploadFile(formData)) as any;
        if (type === "wallpaper") setWallpaper(rs?.file?.url);
        else setAvatar(rs?.file?.url);
      } catch (error) {
        toast.error("Lỗi server! Hãy thử lại sau");
      }
      setIsUploadingWallpaper(false);
      setIsUploadingAvatar(false);
    }
  };
  const { register, handleSubmit, reset, getFieldState, formState, watch } =
    useForm<z.infer<typeof updateAccountSchema>>({
      resolver: zodResolver(updateAccountSchema),
      defaultValues: {
        description: user.user_info.description ?? "",
        alias: user.alias!,
        avatar: avatar,
        day: formatNum(format(dob, "dd")),
        month: formatNum(format(dob, "MM")),
        year: formatNum(format(dob, "yyyy")),
        gender: user.user_info.gender ?? "male",
        wallpaper: wallpaper,
      },
    });
  const mutateUpdate = useMutation({
    mutationFn: (data: any) =>
      axiosClient.put("/users/update-account", data, {
        headers: { Authorization: `Bearer ${user.token}` },
      }),
  });
  const onSubmit = async (value: z.infer<typeof updateAccountSchema>) => {
    const data = {
      ...value,
      dob: `${value.year}-${value.month.slice(-2)}-${value.day.slice(
        -2
      )} 10:10:10`,
      avatar,
      wallpaper,
    };
    mutateUpdate.mutate(data, {
      async onSuccess(data) {
        const newUserData = data.data.data as UserWithInfo;
        try {
          await updateSesion({
            ...sessionData,

            user: { ...newUserData },
          });
          toast.success("Lưu thành công");
        } catch (error) {
          toast.error("Lỗi server, hãy thử lại sau ");
        }
      },
      onError(error) {
        toast.error("Lỗi server, hãy thử lại sau ");
      },
    });
  };
  const handleReset = () => {
    setAvatar(user.avatar_url);
    setWallpaper(user.user_info.wallpaper);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div
        className="h-40 rounded relative border "
        style={{ backgroundImage: undefined }}
      >
        {wallpaper && (
          <img
            src={wallpaper}
            alt=""
            className="absolute inset-0 w-full h-full object-cover z-10"
          />
        )}

        <label className="flex flex-col items-center justify-center group absolute inset-0 cursor-pointer z-30 bg-black/50">
          {isUploadingWallpaper ? (
            <Loader className="animate-spin w-10 h-10 text-white" />
          ) : (
            <Camera
              width={40}
              height={40}
              viewBox="0 0 1000 1000"
              className="text-white group-hover:scale-110 transition-all duration-200"
            />
          )}
          <div className="text-white">Thay đổi ảnh bìa</div>

          <input
            disabled={isUploadingWallpaper}
            name="image"
            className="hidden"
            type="file"
            accept="image/*"
            onChange={(e) => handleUpload(e, "wallpaper")}
          />
        </label>
      </div>

      <div className="p-5">
        <div className="mb-6 justify-between flex flex-wrap">
          <div className="w-32 h-32 rounded-full overflow-hidden relative ">
            <label className="cursor-pointer absolute inset-0 flex flex-col items-center z-30 justify-center bg-black/50">
              {isUploadingAvatar ? (
                <Loader className="animate-spin w-10 h-10 text-white " />
              ) : (
                <Camera
                  width={40}
                  height={40}
                  viewBox="0 0 1000 1000"
                  className="text-white group-hover:scale-110 transition-all duration-200"
                />
              )}
              <input
                name="image"
                className="hidden"
                disabled={isUploadingAvatar}
                type="file"
                accept="image/*"
                onChange={(e) => handleUpload(e, "avatar")}
              />
            </label>
            {avatar && (
              <img
                src={avatar}
                alt=""
                className="absolute inset-0 w-full h-full object-cover z-10"
              />
            )}
          </div>

          <div className="!w-2/3">
            <textarea
              {...register("description")}
              cols={30}
              rows={10}
              className="h-32 appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white resize-none"
            ></textarea>
            <p className="text-xs italic ng-tns-c106-85 text-gray-800">
              {watch("description")?.length}/150
            </p>
            <p className="text-rose-500 text-sm">
              {getFieldState("description").error?.message}
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 mb-2 gap-4">
          <div className="px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              tên hiển thị
            </label>
            <input
              {...register("alias")}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            />
            <p className="text-rose-500 text-sm">
              {getFieldState("alias").error?.message}
            </p>
          </div>

          <div className="px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="day"
            >
              Ngày sinh
            </label>
            <div className="flex gap-4">
              <select
                {...register("day")}
                id="day"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              >
                <option disabled>Ngày</option>
                {Array.from({ length: 31 }).map((v, i) => (
                  <option key={i} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
              <select
                {...register("month")}
                id="month"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              >
                <option disabled>Tháng</option>
                {Array.from({ length: 12 }).map((v, i) => (
                  <option key={i} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
              <select
                {...register("year")}
                id="year"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              >
                <option disabled>Năm</option>
                {Array.from({ length: 80 }).map((v, i) => (
                  <option key={i} value={i + 1940}>
                    {i + 1940}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="px-3">
            <label
              htmlFor=""
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Giới tính
            </label>

            <div className="flex items-center h-[45px]">
              <input
                {...register("gender")}
                id="male"
                type="radio"
                name="gender"
                value="male"
                className="mr-1"
              />
              <label htmlFor="male" className="mr-4">
                Nam
              </label>
              <input
                {...register("gender")}
                id="female"
                type="radio"
                name="gender"
                value="female"
                className="mr-1"
              />
              <label htmlFor="female" className="mr-4">
                Nữ
              </label>
            </div>
            <div className="flex justify-end items-center gap-4">
              <Button
                variant={"secondary"}
                type="button"
                onClick={() => handleReset()}
              >
                Hủy
              </Button>
              <Button
                variant={"primary"}
                className="rounded-full"
                type="submit"
              >
                Lưu
              </Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
