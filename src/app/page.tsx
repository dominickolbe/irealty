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
    <div>
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link
          href="#"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <LogoIcon className="h-6 w-6" />
          <span className="sr-only">TSaaS Platform</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Features
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Pricing
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
      </header>

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
                Explore our Properties. Buy, Rent, Sell, and Invest in your
                dream property. Free and easy to use.
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
    </div>
  );
}

function LogoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="22.0907px"
      height="19.1877px"
      viewBox="0 0 22.0907 19.1877"
      {...props}
    >
      <g stroke="currentColor">
        <path d="M8.4824,10.2517 L8.4824,11.9754 L11.6123,11.9754 C12.323,12.1115 13.7624,12.7465 13.835,14.1981 C13.9257,16.0125 14.3793,19.1424 18.1896,19.1424 L22.0453,19.1424 L22.0453,17.464 C21.1532,17.5245 19.3599,17.0013 19.3236,14.4249 C19.2783,11.2042 16.103,10.2517 15.4226,10.2517 L8.4824,10.2517 Z M14.7422,11.9753 C15.6948,11.9149 17.5999,12.4199 17.5999,14.9238 C17.5999,15.831 17.9175,17.1918 18.4618,17.3279 C17.6604,17.5245 15.6948,17.3279 15.5133,14.6516 C15.5133,13.7898 15.468,12.6648 14.7422,11.9753 Z"></path>
        <path d="M10.4103,0.0454 L16.7835,0.0454 C22.0907,0.8619 22.4536,7.8474 16.7835,8.9814 L8.5278,8.9814 L8.5278,7.2577 L13.1546,7.2577 C16.1031,6.5773 16.1938,2.5402 13.1546,1.7691 L10.4103,1.7691 L10.4103,0.0454 Z M16.3752,1.7691 C17.6907,2.767 17.7814,6.1237 16.3752,7.2124 C20.0948,6.3959 19.868,2.4949 16.3752,1.7691 Z"></path>
        <path d="M1.8145,10.2062 L1.8145,11.9753 L1.8145,17.4186 L0.0454,17.4186 L0.0454,19.1423 L9.3444,19.1423 L9.3444,17.4186 L7.2124,17.4186 L7.2124,11.9753 L7.2124,10.2062 L1.8145,10.2062 Z M3.5835,12.0206 L5.398,12.0206 L5.398,17.3732 L3.5835,17.3732 L3.5835,12.0206 Z"></path>
        <path d="M0.0454,0.0454 L0.0454,1.8144 L1.8145,1.8144 L1.8145,7.2577 L1.8145,8.9814 L7.2124,8.9814 L7.2124,7.2577 L7.2124,1.8144 L9.0042,1.8144 L9.0042,0.0454 L0.0454,0.0454 Z M3.5835,1.8598 L5.398,1.8598 L5.398,7.2124 L3.5835,7.2124 L3.5835,1.8598 Z"></path>
      </g>
    </svg>
  );
}
