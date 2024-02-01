import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";

export const Categories = () => {
  return (
    <>
      <p className="font-bold text-14 mb-2">Chọn danh mục</p>
      <Button
        className="text-14 border-dashed border-black"
        variant={"secondary"}
      >
        <PlusIcon className="w-3 h-3 mr-1" />
        Thêm danh mục
      </Button>
    </>
  );
};
