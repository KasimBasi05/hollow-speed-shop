import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Flame, Zap, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hollow Cars — Hot Wheels Inspired Shop" },
      { name: "description", content: "Shop bold, fast, collectible die-cast cars at Hollow Cars." },
      { property: "og:title", content: "Hollow Cars — Hot Wheels Inspired Shop" },
      { property: "og:description", content: "Shop bold, fast, collectible die-cast cars at Hollow Cars." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden bg-accent text-accent-foreground">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-primary blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-primary blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary ring-1 ring-inset ring-primary/20">
              <Flame className="h-4 w-4" />
              <span>Collectible Die-Cast Speed</span>
            </div>
            <h1 className="text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              BUILT FOR
              <span className="block text-primary">THE TRACK.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg font-medium text-muted-foreground sm:text-xl">
              Bold designs. Blazing colors. The ultimate Hot Wheels-inspired car shop for collectors
              who live life in the fast lane.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2 px-8 text-base font-black">
                <Link to="/products">
                  Shop Now
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/30 bg-transparent px-8 text-base font-black text-white hover:bg-white/10 hover:text-white"
              >
                <Link to="/cart">View Cart</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-3">
          <FeatureCard
            icon={<Zap className="h-6 w-6 text-primary" />}
            title="Lightning Fast"
            description="Speed-inspired designs that look ready to race off the shelf."
          />
          <FeatureCard
            icon={<Trophy className="h-6 w-6 text-primary" />}
            title="Track Tested"
            description="Durable builds made for loops, jumps, and display cases."
          />
          <FeatureCard
            icon={<Flame className="h-6 w-6 text-primary" />}
            title="Bold Style"
            description="Red, black, and white finishes that turn heads on every lap."
          />
        </div>
      </section>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-sm">
      <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-accent">{icon}</div>
      <h3 className="text-lg font-black">{title}</h3>
      <p className="mt-2 text-sm font-medium text-muted-foreground">{description}</p>
    </div>
  );
}
