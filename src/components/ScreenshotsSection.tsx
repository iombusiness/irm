import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const screenshots = [
  {
    src: "screenshotProposal.png",
    alt: "Proposal Report screenshot",
  },
  {
    src: "screenshotStrategicStock.png",
    alt: "Strategic Stock screen",
  },
  {
    src: "screenshotSetting1.png",
    alt: "Configuration screen 1",
  },
  {
    src: "screenshotSetting2.png",
    alt: "Configuration screen 2",
  },
  {
    src: "screenshotSetting3.png",
    alt: "Configuration screen 3",
  },
];

const ScreenshotsSection = () => {
  return (
    <section id="screenshots" className="py-20 px-4 bg-background sm:px-6">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-2">Screenshots</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <Carousel
          opts={{
            align: "start",
          }}
          className="px-3 sm:px-8 md:px-14"
        >
          <CarouselContent className="-ml-3 md:-ml-6">
            {screenshots.map((screenshot) => (
              <CarouselItem
                key={screenshot.src}
                className="pl-3 md:pl-6 sm:basis-[92%] lg:basis-[82%] xl:basis-[76%]"
              >
                <div className="rounded-[2rem] border bg-muted/60 p-3 shadow-sm md:p-5">
                  <div className="flex min-h-[280px] items-center justify-center rounded-[1.5rem] border border-border/70 bg-white p-4 md:min-h-[620px] md:p-6">
                    <img
                      src={`${import.meta.env.BASE_URL}${screenshot.src}`}
                      alt={screenshot.alt}
                      className="max-h-full w-full rounded-xl object-contain"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 h-10 w-10 border-border/70 bg-background/95 shadow-sm" />
          <CarouselNext className="right-0 h-10 w-10 border-border/70 bg-background/95 shadow-sm" />
        </Carousel>
      </div>
    </section>
  );
};

export default ScreenshotsSection;
