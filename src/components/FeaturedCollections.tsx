import ringImage from "@/assets/ring-collection.jpg";
import necklaceImage from "@/assets/necklace-collection.jpg";
import earringImage from "@/assets/earring-collection.jpg";

const collections = [
  {
    id: 1,
    name: "Rings",
    description: "Symbols of eternal love",
    image: ringImage,
    href: "#rings",
  },
  {
    id: 2,
    name: "Necklaces",
    description: "Grace your neckline",
    image: necklaceImage,
    href: "#necklaces",
  },
  {
    id: 3,
    name: "Earrings",
    description: "Elegance in every detail",
    image: earringImage,
    href: "#earrings",
  },
];

const FeaturedCollections = () => {
  return (
    <section id="collections" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-[0.3em] text-sm mb-4">
            EXPLORE
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground">
            Our Collections
          </h2>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <a
              key={collection.id}
              href={collection.href}
              className="group relative overflow-hidden rounded-sm aspect-[3/4] block"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <img
                src={collection.image}
                alt={collection.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-background">
                <h3 className="font-serif text-3xl mb-2 group-hover:translate-x-2 transition-transform duration-300">
                  {collection.name}
                </h3>
                <p className="text-background/80 text-sm tracking-wide">
                  {collection.description}
                </p>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-4 border border-background/0 group-hover:border-background/30 transition-all duration-300 rounded-sm" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
