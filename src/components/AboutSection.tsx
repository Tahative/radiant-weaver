import aboutImage from "@/assets/about-craftsmanship.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-accent/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img
                src={aboutImage}
                alt="Jewelry craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-primary/30 rounded-sm hidden md:block" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-sm hidden md:block" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <p className="text-primary font-medium tracking-[0.3em] text-sm mb-4">
              OUR STORY
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-8 leading-tight">
              Crafted with
              <br />
              Passion & Precision
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Since 1987, Lumière has been synonymous with exceptional craftsmanship and timeless design. Each piece in our collection is meticulously handcrafted by master artisans who bring decades of expertise to every creation.
              </p>
              <p>
                We source only the finest materials — ethically mined diamonds, lustrous pearls, and precious metals of the highest purity — ensuring that every piece not only dazzles but endures as a cherished heirloom for generations.
              </p>
              <p>
                Our commitment to excellence extends beyond beauty. We believe in sustainable luxury, transparent sourcing, and the art of slow craftsmanship in a world of mass production.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-border">
              <div>
                <p className="font-serif text-3xl md:text-4xl text-foreground mb-1">35+</p>
                <p className="text-sm text-muted-foreground">Years of Excellence</p>
              </div>
              <div>
                <p className="font-serif text-3xl md:text-4xl text-foreground mb-1">50k+</p>
                <p className="text-sm text-muted-foreground">Pieces Crafted</p>
              </div>
              <div>
                <p className="font-serif text-3xl md:text-4xl text-foreground mb-1">100%</p>
                <p className="text-sm text-muted-foreground">Ethically Sourced</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
