import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchProducts, ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";
import { Loader2, ShoppingBag, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const ShopifyProducts = () => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { addItem, isLoading: cartLoading } = useCartStore();

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts(20);
        setProducts(data);
      } catch (err) {
        setError("Failed to load products");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  const handleAddToCart = async (e: React.MouseEvent, product: ShopifyProduct) => {
    e.preventDefault();
    e.stopPropagation();
    
    const variant = product.node.variants.edges[0]?.node;
    if (!variant) return;

    await addItem({
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || []
    });

    toast.success("Added to cart", {
      description: `${product.node.title} has been added to your cart.`,
    });
  };

  if (loading) {
    return (
      <section id="shop" className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary font-medium tracking-[0.3em] text-sm mb-4">
              OUR COLLECTION
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground">
              Shop Jewelry
            </h2>
          </div>
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="shop" className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6 text-center">
          <p className="text-destructive">{error}</p>
        </div>
      </section>
    );
  }

  if (products.length === 0) {
    return (
      <section id="shop" className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary font-medium tracking-[0.3em] text-sm mb-4">
              OUR COLLECTION
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground">
              Shop Jewelry
            </h2>
          </div>
          <div className="text-center py-20">
            <ShoppingBag className="w-16 h-16 text-muted-foreground mx-auto mb-6" />
            <h3 className="font-serif text-2xl text-foreground mb-4">No products found</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              We're currently curating our collection. Tell us what jewelry you'd like to add, 
              and we'll create products for your store.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="shop" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-[0.3em] text-sm mb-4">
            OUR COLLECTION
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground">
            Shop Jewelry
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => {
            const image = product.node.images.edges[0]?.node;
            const price = product.node.priceRange.minVariantPrice;
            const variant = product.node.variants.edges[0]?.node;
            
            return (
              <Link 
                key={product.node.id} 
                to={`/product/${product.node.handle}`}
                className="group cursor-pointer block"
              >
                <div className="relative aspect-square overflow-hidden rounded-sm bg-secondary mb-4">
                  {image ? (
                    <img
                      src={image.url}
                      alt={image.altText || product.node.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-secondary">
                      <ShoppingBag className="w-12 h-12 text-muted-foreground" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300 flex items-center justify-center">
                    <Button
                      size="sm"
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0"
                      onClick={(e) => handleAddToCart(e, product)}
                      disabled={cartLoading || !variant?.availableForSale}
                    >
                      {cartLoading ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <>
                          <Plus className="w-4 h-4 mr-1" />
                          Add to Cart
                        </>
                      )}
                    </Button>
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="font-serif text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                    {product.node.title}
                  </h3>
                  <p className="text-foreground font-medium">
                    {price.currencyCode} {parseFloat(price.amount).toLocaleString()}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ShopifyProducts;
