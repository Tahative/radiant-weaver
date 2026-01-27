import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

const products = [
  {
    id: 1,
    name: "Aurora Diamond Ring",
    price: 2450,
    image: product1,
    category: "Rings",
  },
  {
    id: 2,
    name: "Celestial Pearl Necklace",
    price: 1890,
    image: product2,
    category: "Necklaces",
  },
  {
    id: 3,
    name: "Moonlight Drop Earrings",
    price: 980,
    image: product3,
    category: "Earrings",
  },
  {
    id: 4,
    name: "Eternal Gold Bracelet",
    price: 1650,
    image: product4,
    category: "Bracelets",
  },
];

const FeaturedProducts = () => {
  return (
    <section id="new" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-[0.3em] text-sm mb-4">
            CURATED FOR YOU
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground">
            New Arrivals
          </h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden rounded-sm bg-secondary mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Quick View Overlay */}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-background bg-foreground/90 px-6 py-2 text-sm tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                    Quick View
                  </span>
                </div>
              </div>
              
              {/* Product Info */}
              <div className="text-center">
                <p className="text-xs text-muted-foreground tracking-wider mb-1">
                  {product.category}
                </p>
                <h3 className="font-serif text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-foreground font-medium">
                  ${product.price.toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="#shop"
            className="inline-block border-b-2 border-foreground text-foreground hover:border-primary hover:text-primary transition-colors duration-300 text-sm tracking-widest pb-1"
          >
            VIEW ALL PIECES
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
