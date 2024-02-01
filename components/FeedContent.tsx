import { CardHorizontal } from "./CardHorizontal";

export const FeedContent = ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  return (
    <div className="mb-[66px]">
      <CardHorizontal />
    </div>
  );
};
