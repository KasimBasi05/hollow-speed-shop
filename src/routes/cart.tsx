import { createFileRoute, Link } from "@tanstack/react-router";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCart } from "@/lib/cart-context";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Cart — Hollow Cars" },
      { name: "description", content: "Review your Hollow Cars cart and checkout." },
      { property: "og:title", content: "Cart — Hollow Cars" },
      { property: "og:description", content: "Review your Hollow Cars cart and checkout." },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  const { items, updateQuantity, removeItem, totalPrice, totalItems } = useCart();

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <h1 className="text-4xl font-black tracking-tight sm:text-5xl">YOUR CART</h1>
      <p className="mt-2 text-base font-medium text-muted-foreground">
        {totalItems} {totalItems === 1 ? "item" : "items"} ready to race home.
      </p>

      {items.length === 0 ? (
        <div className="mt-12 flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-card py-16 text-center">
          <ShoppingBag className="h-12 w-12 text-muted-foreground" />
          <h2 className="mt-4 text-xl font-black">Your cart is empty</h2>
          <p className="mt-2 text-sm font-medium text-muted-foreground">
            Time to stock up on speed. Browse the garage and add some cars.
          </p>
          <Button asChild className="mt-6 gap-2 font-black" size="lg">
            <Link to="/products">
              Shop Products
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      ) : (
        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_360px]">
          {/* Cart items */}
          <div className="space-y-4">
            {items.map((item) => (
              <Card key={item.id} className="border-border bg-card">
                <CardContent className="flex gap-4 p-4">
                  <div className="h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-muted sm:h-28 sm:w-28">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <h3 className="text-base font-black sm:text-lg">{item.name}</h3>
                      <p className="text-sm font-bold text-primary">${item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="min-w-[1.5rem] text-center text-sm font-black">
                          {item.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-muted-foreground hover:text-destructive"
                        onClick={() => removeItem(item.id)}
                        aria-label="Remove item"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order summary */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-xl font-black">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between text-sm font-medium">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-black">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm font-medium">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-black">Free</span>
                </div>
                <div className="border-t border-border pt-4">
                  <div className="flex justify-between text-lg font-black">
                    <span>Total</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                </div>
                <Button className="w-full gap-2 py-6 text-base font-black">
                  Checkout
                  <ArrowRight className="h-5 w-5" />
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full font-black"
                >
                  <Link to="/products">Continue Shopping</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}
