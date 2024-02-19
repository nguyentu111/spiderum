import { CardVertical } from "@/components/post-card-2";

export const SavedPosts = () => {
  return (
    <>
      {/* <div className="mt-2 text-center text-18">
      Không có gì để xem ở đây cả :'(
    </div> */}
      <div className="flex flex-col gap-6">
        <CardVertical />
        <CardVertical />
        <CardVertical />
      </div>
    </>
  );
};
