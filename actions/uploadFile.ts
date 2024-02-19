"use server";
import { cloudinary } from "@/lib/cloudinary";
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
