"use server";
import { cloudinary } from "@/lib/cloudinary";
import { error } from "console";
export const uploadFile = async (formData: FormData) => {
  const image = formData.get("image") as File;
  const arrayBuffer = await image.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);
  return await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          folder: "spiderum",
        },
        function (err, result) {
          if (err) {
            reject(err);
            return;
          }
          resolve({
            success: 1,
            file: {
              url: result?.secure_url,
            },
          });
        }
      )
      .end(buffer);
  });
};
export const uploadFileByUrl = async (url: string) => {
  return await cloudinary.uploader.upload(url, {
    folder: "spiderum",
  });
};
