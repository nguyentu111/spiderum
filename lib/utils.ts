import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { formatDistanceToNow, parseISO } from "date-fns";
import { vi } from "date-fns/locale";

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
