const screenshots = [
  {
    src: "screenshotProposal.png",
    alt: "Proposal Report screenshot",
    featured: true,
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
    <section id="screenshots" className="py-20 px-6 bg-background">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-2">Screenshots</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="space-y-5">
          {screenshots.map((screenshot) => (
            <div
              key={screenshot.src}
              className={screenshot.featured ? "rounded-3xl border bg-muted/60 p-4 shadow-sm" : ""}
            >
              <img
                src={`${import.meta.env.BASE_URL}${screenshot.src}`}
                alt={screenshot.alt}
                className={`w-full rounded-2xl border border-border/70 object-cover shadow-sm ${
                  screenshot.featured ? "" : "bg-muted/60"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScreenshotsSection;
