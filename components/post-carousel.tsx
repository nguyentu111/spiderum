"use client";
import { CardVertical } from "@/components/post-card-1";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Post } from "@/types";

export function PostCarousel({ posts }: { posts: Post[] }) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full p-4 border-[1px] "
    >
      <CarouselContent>
        {posts.map((post, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <CardVertical post={post} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        variant={"carousel"}
        size={"carousel"}
        className="hidden lg:block"
      />
      <CarouselNext
        variant={"carousel"}
        size={"carousel"}
        className="hidden lg:block"
      />
    </Carousel>
  );
}
