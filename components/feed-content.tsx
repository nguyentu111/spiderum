import { CardVertical } from "./post-card-2";

export const FeedContent = ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  return (
    <div className="mb-[66px]">
      <CardVertical />
    </div>
  );
};
