import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container space-y-8 px-4 md:px-6 lg:space-y-12">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="flex flex-col items-center justify-center space-y-2 mb-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4">
              iRealty. Real Estate, Reimagined.
            </h1>
            <h2 className="text-1xl font-bold tracking-tighter sm:text-xl md:text-3xl">
              Discover over 20000+ properties for sale and rent.
            </h2>
            <p className="max-w-[500px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore our Properties. Buy, Rent, Sell, and Invest in your dream
              property. Free and easy to use.
            </p>
          </div>
          <div className="px-12">
            <Carousel
              className="w-full max-w-[750px]"
              opts={{
                loop: true,
              }}
            >
              <CarouselContent className="-ml-2 md:-ml-2">
                <CarouselItem>
                  <Image
                    src="/hero/1.jpg"
                    width={750}
                    height={500}
                    alt="Hero 1"
                    className="aspect-[2/1] overflow-hidden rounded-xl object-cover"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    src="/hero/2.jpg"
                    width={750}
                    height={500}
                    alt="Hero 2"
                    className="aspect-[2/1] overflow-hidden rounded-xl object-cover"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    src="/hero/3.jpg"
                    width={750}
                    height={500}
                    alt="Hero 3"
                    className="aspect-[2/1] overflow-hidden rounded-xl object-cover"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    src="/hero/4.jpg"
                    width={750}
                    height={500}
                    alt="Hero 4"
                    className="aspect-[2/1] overflow-hidden rounded-xl object-cover"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link
              href="/explore"
              className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-12 text-md font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 mt-4"
              prefetch={false}
            >
              Explore Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
