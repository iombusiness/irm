const links = [
  { label: "About", href: "#about" },
  { label: "How to Guides", href: "#guides" },
  { label: "Screenshots", href: "#screenshots" },
  { label: "Disclaimer", href: "#disclaimer" },
  { label: "Data Privacy", href: "#privacy" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const handleClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-3 px-6 py-4">
        {links.map((l) => (
          <button
            key={l.href}
            onClick={() => handleClick(l.href)}
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            {l.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
