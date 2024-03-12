import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { formatDistanceToNow, parseISO } from "date-fns";
import { vi } from "date-fns/locale";
import { OutputData } from "@editorjs/editorjs";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const cutWords = (words: string, num = 20) => {
  const w = words.split(" ");
  if (w.length > num) return w.slice(0, num).join(" ") + "...";
  return words;
};
// export const getRandomAvatar = () => {
//   cloudinary.api.resources(
//     {
//       type: "upload",
//       prefix: "spiderum", // add your folder
//     },
//     function (error, result) {
//       console.log(result, error);
//     }
//   );
// };
export const formatTimeToDistant = (time: string) => {
  return formatDistanceToNow(parseISO(time), {
    addSuffix: true,
    locale: vi,
  });
};
export const getDescriptionFromEditorContent = (content: OutputData) => {
  let rs = "";
  content.blocks.every((block) => {
    if (block.type == "paragraph") {
      rs =
        removeHtmlTagsFromString(block.data.text as string)
          .split(" ")
          .slice(0, 30)
          .join(" ") + " ...";
      return false;
    }
    return true;
  });
  return rs;
};
function removeHtmlTagsFromString(inputString: string) {
  var div = document.createElement("div");
  div.innerHTML = inputString;
  var textContent = div.textContent || div.innerText;
  div.remove();
  return textContent;
}
export function calculateReadTimeFromContent(text: string) {
  const wordsPerMinute = 230;
  const wordCount = text.split(/\s+/).length;
  const readTimeInMinutes = wordCount / wordsPerMinute;
  const roundedReadTime = Math.ceil(readTimeInMinutes);
  return roundedReadTime;
}
