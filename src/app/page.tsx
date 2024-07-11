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
    <div className="flex flex-col min-h-[100dvh]">
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
      <main className="flex-1">
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
                <HeroCarousel />
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="/explore"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-12 text-md font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 mt-4"
                >
                  Explore Now
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Discover Your Dream Property
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Browse 20,000+ listings spanning charming Spanish villas to
                  chic Parisian apartments. Your perfect property awaits.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                  <RocketIcon className="h-6 w-6 text-primary" />
                  <h3 className="text-lg font-bold">
                    Rapid Search and Filtering
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Instantly find properties that match your criteria with our
                  advanced search tools.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                  <ShieldIcon className="h-6 w-6 text-primary" />
                  <h3 className="text-lg font-bold">Secure and Reliable</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Your data is protected with top-notch security measures.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                  <BoltIcon className="h-6 w-6 text-primary" />
                  <h3 className="text-lg font-bold">Optimized Performance</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Seamlessly browse through thousands of listings without any
                  hassle.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                  <CogIcon className="h-6 w-6 text-primary" />
                  <h3 className="text-lg font-bold">Personalized Experience</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Tailor your search to fit your specific needs and preferences.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                  <BriefcaseIcon className="h-6 w-6 text-primary" />
                  <h3 className="text-lg font-bold">Expert Support</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Our dedicated team is here to assist you every step of the
                  way.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                  <LayersIcon className="h-6 w-6 text-primary" />
                  <h3 className="text-lg font-bold">Easy Integration</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Connect with various tools and services to streamline your
                  property search process.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Get Started?
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Browse 20,000+ listings and find your dream property completely
                FREE.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
              <Link
                href="/explore"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Explore Now
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 iRealty. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Privacy
          </Link>
        </nav>
      </footer>
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

function HeroCarousel() {
  return (
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
  );
}

function BoltIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}

function BriefcaseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}

function CogIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
      <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="M12 2v2" />
      <path d="M12 22v-2" />
      <path d="m17 20.66-1-1.73" />
      <path d="M11 10.27 7 3.34" />
      <path d="m20.66 17-1.73-1" />
      <path d="m3.34 7 1.73 1" />
      <path d="M14 12h8" />
      <path d="M2 12h2" />
      <path d="m20.66 7-1.73 1" />
      <path d="m3.34 17 1.73-1" />
      <path d="m17 3.34-1 1.73" />
      <path d="m11 13.73-4 6.93" />
    </svg>
  );
}

function LayersIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
      <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
      <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
    </svg>
  );
}
function RocketIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

function ShieldIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  );
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
