const screenshots = [
  {
    src: "screenshotProposal.png",
    alt: "Proposal Report screenshot",
    className: "md:col-span-7 md:row-span-2",
    frameClassName: "min-h-[320px] md:min-h-[520px]",
  },
  {
    src: "screenshotStrategicStock.png",
    alt: "Strategic Stock screen",
    className: "md:col-span-5",
    frameClassName: "min-h-[260px]",
  },
  {
    src: "screenshotSetting1.png",
    alt: "Configuration screen 1",
    className: "md:col-span-5",
    frameClassName: "min-h-[220px]",
  },
  {
    src: "screenshotSetting2.png",
    alt: "Configuration screen 2",
    className: "md:col-span-4",
    frameClassName: "min-h-[220px]",
  },
  {
    src: "screenshotSetting3.png",
    alt: "Configuration screen 3",
    className: "md:col-span-8",
    frameClassName: "min-h-[260px]",
  },
];

const ScreenshotsSection = () => {
  return (
    <section id="screenshots" className="py-20 px-6 bg-background">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-2">Screenshots</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid gap-5 md:grid-cols-12 md:auto-rows-[minmax(180px,_auto)]">
          {screenshots.map((screenshot) => (
            <div
              key={screenshot.src}
              className={`rounded-3xl border bg-muted/60 p-4 shadow-sm ${screenshot.className ?? ""}`}
            >
              <div
                className={`flex h-full items-center justify-center rounded-2xl border border-border/70 bg-white p-4 ${screenshot.frameClassName ?? "min-h-[220px]"}`}
              >
                <img
                  src={`${import.meta.env.BASE_URL}${screenshot.src}`}
                  alt={screenshot.alt}
                  className="max-h-full w-full rounded-xl object-contain shadow-sm"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScreenshotsSection;
