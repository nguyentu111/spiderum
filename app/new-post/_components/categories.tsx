import { Search } from "@/components/icons/Search";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CategoryWithTag, Tag } from "@/types";
import { CheckIcon, PlusIcon } from "@radix-ui/react-icons";
import { useMemo, useState } from "react";

export const Categories = ({
  categories,
}: {
  categories: CategoryWithTag[];
}) => {
  const [show, setShow] = useState(false);
  const [chossingCategories, setChoosingCategories] = useState<
    CategoryWithTag[]
  >([]);
  const [chossingTags, setChoosingTags] = useState<Tag[]>([]);
  const canAddMoreCategory = !!(chossingCategories.length < 3);

  const handleAddOrRemoveCategories = (category: CategoryWithTag) => {
    const existingIndex = chossingCategories.findIndex(
      (cc) => cc.id === category.id
    );
    if (existingIndex !== -1) {
      setChoosingCategories([
        ...chossingCategories.slice(0, existingIndex),
        ...chossingCategories.slice(existingIndex + 1),
      ]);
    } else {
      if (!canAddMoreCategory) return;
      setChoosingCategories((prev) => [...prev, category]);
    }
  };
  const handleAddOrRemoveTag = (tag: Tag) => {
    const existingIndex = chossingTags.findIndex((cc) => cc.id === tag.id);
    if (existingIndex !== -1) {
      setChoosingTags([
        ...chossingTags.slice(0, existingIndex),
        ...chossingTags.slice(existingIndex + 1),
      ]);
    } else setChoosingTags((prev) => [...prev, tag]);
  };
  return (
    <>
      <p className="font-bold text-14 mb-2">Chọn danh mục</p>
      {!show && (
        <Button
          onClick={() => setShow(true)}
          className="text-14 border-dashed border-black"
          variant={"secondary"}
        >
          <PlusIcon className="w-3 h-3 mr-1" />
          Thêm danh mục
        </Button>
      )}
      {show && (
        <div className="border-2 border-gray-200">
          <div className="flex w-full h-[300px]">
            <div className="flex flex-col max-h-full overflow-auto select-none">
              {categories.map((category) => (
                <div
                  onClick={() => handleAddOrRemoveCategories(category)}
                  className={cn(
                    "py-3 px-4 text-sm cursor-pointer flex justify-between items-center gap-6"
                  )}
                  key={category.id}
                >
                  <div>{category.name}</div>
                  <input
                    className={cn(
                      !chossingCategories.find((cc) => cc.id === category.id) &&
                        !canAddMoreCategory &&
                        "invisible"
                    )}
                    checked={
                      !!chossingCategories.find((cc) => cc.id === category.id)
                    }
                    placeholder=""
                    type="checkbox"
                  />
                </div>
              ))}
            </div>
            <div className="p-4 flex-1 max-h-full overflow-auto text-sm">
              <div className="p-2 border-2 border-gray-200 flex gap-2 rounded  w-full">
                <Search
                  width={18}
                  height={18}
                  viewBox="0 0 18 24"
                  className="text-[#969696]"
                />
                <input className="outline-none " placeholder="Lọc..." />
              </div>
              <p className="my-4">Các tag đã chọn:</p>
              <div className="mb-4 flex gap-4 flex-wrap">
                {chossingTags.map((tag) => (
                  <Button
                    variant={"secondary"}
                    onClick={() => handleAddOrRemoveTag(tag)}
                    className={cn(
                      !!chossingTags.find((cc) => cc.id === tag.id) &&
                        "border-green-500"
                    )}
                  >
                    {!!chossingTags.find((cc) => cc.id === tag.id) ? (
                      <CheckIcon className="text-green-500" />
                    ) : (
                      <PlusIcon />
                    )}

                    {tag.name}
                  </Button>
                ))}
              </div>
              <div className="flex gap-4 flex-wrap border-t-2 py-4">
                {chossingCategories.map((category) =>
                  category.tags.map((tag) => (
                    <Button
                      variant={"secondary"}
                      onClick={() => handleAddOrRemoveTag(tag)}
                      className={cn(
                        !!chossingTags.find((cc) => cc.id === tag.id) &&
                          "border-green-500"
                      )}
                    >
                      {!!chossingTags.find((cc) => cc.id === tag.id) ? (
                        <CheckIcon className="text-green-500" />
                      ) : (
                        <PlusIcon />
                      )}
                      {tag.name}
                    </Button>
                  ))
                )}
              </div>
            </div>
          </div>
          <div className="p-2 flex justify-end gap-2 border-t-2">
            <Button variant={"secondary"} className="rounded">
              Hủy
            </Button>
            <Button variant={"primary"} className="rounded">
              Xác nhận
            </Button>
          </div>
        </div>
      )}
    </>
  );
};
