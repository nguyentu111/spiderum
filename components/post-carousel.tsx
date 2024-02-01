"use client";
import { CardVertical } from "@/components/CardVertical";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function PostCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full p-4 border-[1px] "
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            {/* <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div> */}
            <CardVertical />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious variant={"carousel"} size={"carousel"} />
      <CarouselNext variant={"carousel"} size={"carousel"} />
    </Carousel>
  );
}
