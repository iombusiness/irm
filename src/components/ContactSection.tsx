const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-background">
      <div className="max-w-3xl mx-auto rounded-3xl border bg-background p-8 text-center shadow-sm md:p-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-2">Contact Support</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4">
            Have questions? Contact us at{" "}
            <a
              href="mailto:admin@iombusiness.com.au"
              className="font-medium text-primary hover:underline"
            >
              admin@iombusiness.com.au
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
