import { CardHorizontal } from "@/components/CardHorizontal";

export const SavedPosts = () => {
  return (
    <>
      {/* <div className="mt-2 text-center text-18">
      Không có gì để xem ở đây cả :'(
    </div> */}
      <div className="flex flex-col gap-6">
        <CardHorizontal
          avatarSize={24}
          hasBookmarkBtn
          titleClass="text-normal !text-[16px] mb-[5px]"
        />
        <CardHorizontal
          avatarSize={24}
          hasBookmarkBtn
          titleClass="text-normal !text-[16px] mb-[5px]"
        />
        <CardHorizontal
          avatarSize={24}
          hasBookmarkBtn
          titleClass="text-normal !text-[16px] mb-[5px]"
        />
      </div>
    </>
  );
};
