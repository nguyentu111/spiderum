import { Button } from "@/components/ui/button";
import { SerieCard } from "./SerieCard";
import { NewSerieBtn } from "./new-serie-btn";
import { PlusIcon } from "@radix-ui/react-icons";

export const Series = () => {
  return (
    <>
      <div className="flex mb-4 w-full">
        <NewSerieBtn>
          <Button variant={"primary"} className="rounded px-3 ml-auto">
            <PlusIcon className="mr-2" />
            Tạo series
          </Button>
        </NewSerieBtn>
      </div>
      <div className="grid grid-cols-3 gap-2 md:gap-4">
        <SerieCard />
        <SerieCard />
        <SerieCard />
      </div>
    </>
  );
};
