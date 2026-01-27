import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-jewelry.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Elegant jewelry collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-20">
        <div className="max-w-2xl">
          <p className="text-primary font-medium tracking-[0.3em] text-sm mb-6 animate-fade-in">
            NEW COLLECTION 2026
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground leading-tight mb-8 animate-slide-up">
            Timeless
            <br />
            <span className="text-primary">Elegance</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-md animate-fade-in-delay">
            Discover our exquisite collection of handcrafted jewelry, where every piece tells a story of sophistication and grace.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2">
            <Button variant="default" size="lg" className="text-base tracking-wide">
              Shop Collection
            </Button>
            <Button variant="outline" size="lg" className="text-base tracking-wide">
              Our Story
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
