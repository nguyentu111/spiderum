import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { format, formatDistanceToNow, parseISO } from "date-fns";
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

export function getDayFromTimestamp(timestampString: string) {
  const date = parseISO(timestampString);
  const formattedDay = format(date, "do 'tháng' M", { locale: vi });
  return formattedDay;
}
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

export function getRandomElementsFromArray(
  array: any[],
  numberOfElements: number
) {
  if (numberOfElements > array.length) {
    return array;
  }
  const newArray = array.slice();
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray.slice(0, numberOfElements);
}
