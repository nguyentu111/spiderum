import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";

export const Cover = () => {
  return (
    <div className="mb-9 w-full h-[400px] relative">
      <div className="bg-[url(https://spiderum.com/assets/images/categories/business-min.jpg)] h-full bg-cover bg-center blur-[3px]"></div>
      <Container className="">
        <div
          className="flex flex-col items-center justify-center bg-black/30 text-white 
        font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center absolute w-full h-full"
        >
          <div className="uppercase font-bold text-3xl lg:text-5xl ">
            Quan điểm - tranh luận
          </div>
          <div className="mt-4">
            <Button
              variant={"outline"}
              className="text-black bg-transparent px-4 py-2 "
            >
              Theo dõi
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
