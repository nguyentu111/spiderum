import { Bell } from "../icons/Bell";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

export const BellBtn = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="lg"
          className="w-10 flex items-center justify-center mx-1"
          aria-label="Thông báo"
        >
          <Bell
            className="text-gray-400"
            width={17}
            height={19}
            viewBox="0 0 17 19"
          />
        </Button>
      </PopoverTrigger>

      <PopoverContent
        align="end"
        side="bottom"
        className="w-[414px] select-none"
      >
        <div className="px-4 text-20 font-bold ">Thông báo</div>
        <div className="p-2 h-60 flex items-center justify-center text-gray-800/50">
          <p className="">Không có thông báo nào.</p>
        </div>
      </PopoverContent>
    </Popover>
  );
};
