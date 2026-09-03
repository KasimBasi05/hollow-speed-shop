import { createFileRoute } from "@tanstack/react-router";
import { ChevronDown, Flame, Zap } from "lucide-react";
import { products } from "@/lib/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hot Wheels Store — Neon Die-Cast Collectibles" },
      {
        name: "description",
        content:
          "Shop bold neon-charged die-cast cars. Featured best sellers, full collection grid, and instant Buy Now — all on one page.",
      },
      { property: "og:title", content: "Hot Wheels Store — Neon Die-Cast Collectibles" },
      {
        property: "og:description",
        content: "Bold neon-charged die-cast collectibles. Browse best sellers and the full garage.",
      },
    ],
  }),
  component: StorePage,
});

const featured = products.slice(0, 3);

function StorePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <Featured />
      <ProductGrid />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-primary/30 blur-[120px]" />
        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-secondary/30 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,color-mix(in_oklab,var(--color-primary)_10%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_oklab,var(--color-primary)_10%,transparent)_1px,transparent_1px)] bg-[size:64px_64px] opacity-40" />
      </div>

      <div className="relative mx-auto max-w-3xl text-center">
        <div className="glass mx-auto mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.3em] text-primary">
          <Flame className="h-4 w-4 shrink-0" />
          Die-Cast Speed
        </div>

        <h1 className="font-display text-4xl font-black uppercase leading-[1.05] tracking-tight neon-text sm:text-6xl lg:text-7xl">
          Hot Wheels
          <span className="block text-secondary neon-text-alt">Store</span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-base font-medium text-muted-foreground sm:text-lg">
          Neon-charged collectibles built for the track and the shelf. One page. Full throttle.
        </p>

        <a href="#products" className="neon-btn mt-10 inline-flex items-center gap-2">
          <Zap className="h-5 w-5 shrink-0" />
          Shop Now
        </a>

        <div className="mt-16 flex justify-center">
          <ChevronDown className="h-7 w-7 animate-bounce text-primary/70" />
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-12 text-center">
      <p className="text-xs font-bold uppercase tracking-[0.4em] text-secondary">{label}</p>
      <h2 className="font-display mt-3 text-3xl font-black uppercase tracking-tight neon-text sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

function Featured() {
  return (
    <section id="featured" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <SectionHeading label="Best Sellers" title="Featured Rides" />

      <div className="grid gap-8 md:grid-cols-3">
        {featured.map((product, i) => (
          <article
            key={product.id}
            className="glass neon-card group relative overflow-hidden rounded-3xl p-4 transition-transform duration-300 hover:-translate-y-2"
          >
            <span className="font-display absolute right-4 top-4 z-10 rounded-full bg-primary px-3 py-1 text-xs font-black text-primary-foreground">
              #{i + 1}
            </span>
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
              <img
                src={product.image}
                alt={`${product.name} die-cast car`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="mt-5 px-1 pb-2">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-secondary">
                {product.category}
              </p>
              <h3 className="font-display mt-2 text-xl font-black uppercase">{product.name}</h3>
              <p className="font-display mt-2 text-2xl font-black text-primary">
                ${product.price.toFixed(2)}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProductGrid() {
  return (
    <section id="products" className="mx-auto max-w-7xl scroll-mt-8 px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <SectionHeading label="The Garage" title="All Cars" />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <article
            key={product.id}
            className="glass neon-card group flex flex-col overflow-hidden rounded-2xl p-3 transition-transform duration-300 hover:-translate-y-1.5"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-xl bg-muted">
              <img
                src={product.image}
                alt={`${product.name} die-cast car`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="mt-4 flex flex-1 flex-col px-1">
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.25em] text-secondary">
                {product.category}
              </p>
              <h3 className="font-display mt-1.5 text-lg font-black uppercase leading-tight">
                {product.name}
              </h3>
              <p className="font-display mt-2 text-xl font-black text-primary">
                ${product.price.toFixed(2)}
              </p>
              <button type="button" className="neon-btn mt-4 w-full justify-center text-sm">
                Buy Now
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 text-center sm:flex sm:items-center sm:justify-between sm:text-left">
        <a href="#hero" className="font-display text-xl font-black uppercase tracking-widest neon-text">
          Hot Wheels Store
        </a>
        <nav className="flex flex-wrap justify-center gap-6 text-sm font-semibold text-muted-foreground">
          <a href="#featured" className="transition-colors hover:text-primary">
            Featured
          </a>
          <a href="#products" className="transition-colors hover:text-primary">
            Products
          </a>
          <a href="#hero" className="transition-colors hover:text-primary">
            Back to top
          </a>
        </nav>
        <p className="text-xs font-medium text-muted-foreground">
          &copy; {new Date().getFullYear()} Hot Wheels Store
        </p>
      </div>
    </footer>
  );
}
