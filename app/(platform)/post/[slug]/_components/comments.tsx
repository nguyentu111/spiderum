import { Button } from "@/components/ui/button";
import { CommentForm } from "./comment-form";
import { CommentNode } from "./comment-node";

export const Comments = () => {
  return (
    <div
      className="md:p-10 md:pb-0 px-6 pt-6  my-6 mx-auto border border-[var(--common-border-color)] rounded-[var(--border-radius)]"
      style={{
        boxShadow:
          "0 10px 15px -3px rgba(var(--blue-500),.05),0 4px 6px -2px rgba(var(--blue-500),.025)!important",
      }}
    >
      <CommentForm />
      <div className="flex justify-end mt-4 mb-6">
        <ul className="flex items-center">
          <li>
            <Button variant={"link"} className="font-normal">
              Hot nhất
            </Button>
          </li>
          <li>
            <Button variant={"link"} className="ml-3 text-blue-500 ">
              Mới nhất
            </Button>
          </li>
        </ul>
      </div>
      <div>
        <CommentNode />
        <CommentNode />
      </div>
      <Button
        variant={"ghost"}
        className="w-full py-2 font-bold hover:text-blue-500 border-t border-[rgb(var(--border)]"
      >
        Tải thêm bình luận
      </Button>
    </div>
  );
};

const ChildComment = () => {
  return (
    <div
      className="md:p-10 px-6 pt-6 pb-10  my-6 mx-auto border border-[var(--common-border-color)] rounded-[var(--border-radius)]"
      style={{
        boxShadow:
          "0 10px 15px -3px rgba(var(--blue-500),.05),0 4px 6px -2px rgba(var(--blue-500),.025)!important",
      }}
    >
      <CommentForm />
      <div className="flex justify-end mt-4 mb-6">
        <ul className="flex items-center">
          <li>
            <Button variant={"link"} className="font-normal">
              Hot nhất
            </Button>
          </li>
          <li>
            <Button variant={"link"} className="ml-3 text-blue-500 ">
              Mới nhất
            </Button>
          </li>
        </ul>
      </div>
      <div>
        <CommentNode />
        <CommentNode />
        <CommentNode />
        <CommentNode />
        <CommentNode />
      </div>
    </div>
  );
};
