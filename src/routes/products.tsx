import { createFileRoute } from "@tanstack/react-router";
import { ShoppingCart, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { products } from "@/lib/products";
import { useCart } from "@/lib/cart-context";
import { useState } from "react";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Hollow Cars" },
      { name: "description", content: "Browse our collection of bold, fast die-cast cars." },
      { property: "og:title", content: "Products — Hollow Cars" },
      { property: "og:description", content: "Browse our collection of bold, fast die-cast cars." },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const { addItem } = useCart();
  const [addedIds, setAddedIds] = useState<Set<string>>(new Set());

  const handleAdd = (product: (typeof products)[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    setAddedIds((prev) => new Set(prev).add(product.id));
    setTimeout(() => {
      setAddedIds((prev) => {
        const next = new Set(prev);
        next.delete(product.id);
        return next;
      });
    }, 1500);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-black tracking-tight sm:text-5xl">THE GARAGE</h1>
        <p className="mx-auto mt-3 max-w-xl text-base font-medium text-muted-foreground">
          Hand-picked die-cast rides. Add your favorites to the cart and build the ultimate
          collection.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <Card
            key={product.id}
            className="group overflow-hidden border-border bg-card transition-shadow hover:shadow-lg"
          >
            <div className="aspect-[4/3] overflow-hidden bg-muted">
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <CardHeader className="p-4 pb-2">
              <div className="text-xs font-black uppercase tracking-wider text-primary">
                {product.category}
              </div>
              <CardTitle className="text-lg font-black leading-tight">{product.name}</CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <p className="text-2xl font-black">${product.price.toFixed(2)}</p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button
                onClick={() => handleAdd(product)}
                className="w-full gap-2 font-black"
                variant={addedIds.has(product.id) ? "secondary" : "default"}
              >
                {addedIds.has(product.id) ? (
                  <>
                    <Check className="h-4 w-4" />
                    Added
                  </>
                ) : (
                  <>
                    <ShoppingCart className="h-4 w-4" />
                    Add to Cart
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
