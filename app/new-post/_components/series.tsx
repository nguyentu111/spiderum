import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import { useSession } from "next-auth/react";
import { FormEvent, useState } from "react";

export const Series = () => {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const handleAddSerie = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOpen(false);
    setName("");
  };
  return (
    <>
      <p className="font-bold text-14 mb-2">Series</p>
      {open ? (
        <form
          onSubmit={handleAddSerie}
          className="bg-[rgba(237,242,247,1)] rounded flex items-center"
        >
          <input
            className="outline-none pt-3 pr-8 pb-3 pl-4 text-14 w-full bg-transparent"
            placeholder="Tên Series mới"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className="whitespace-nowrap text-14 mr-3 hover:underline">
            Xác nhận
          </button>
        </form>
      ) : (
        <>
          <div className="flex items-center gap-4 w-full">
            <div className="w-full">
              <select className="rounded pt-3 pr-8 pb-3 pl-4 text-14 outline-none w-full appearance-none bg-[rgba(237,242,247,1)]">
                <option className="" value="null">
                  -- Chọn series --
                </option>
              </select>
            </div>
            <div className="text-14">Hoặc</div>
            <Button
              className="text-14"
              variant={"secondary"}
              onClick={() => setOpen(true)}
            >
              <PlusIcon className="w-3 h-3 mr-1" />
              Tạo mới
            </Button>
          </div>
        </>
      )}
    </>
  );
};
