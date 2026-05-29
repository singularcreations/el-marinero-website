import { HeroSlider } from "@/components/HeroSlider";
import { RestaurantLogo } from "@/components/RestaurantLogo";

const restaurant = {
  name: "El Marinero Family Restaurant",
  address: "11025 Alondra Blvd, Norwalk, CA 90650",
  phone: "(562) 863-5252",
  phoneHref: "tel:+15628635252",
  hours: "8:00 AM - 10:00 PM",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=11025%20Alondra%20Blvd%2C%20Norwalk%2C%20CA%2090650",
  mapsEmbed:
    "https://www.google.com/maps?q=11025%20Alondra%20Blvd%2C%20Norwalk%2C%20CA%2090650&output=embed",
};

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "Contact", href: "#contact" },
];

const contactCards = [
  {
    label: "Phone",
    value: restaurant.phone,
    detail: "Call for takeout and restaurant information.",
  },
  {
    label: "Address",
    value: restaurant.address,
    detail: "Serving families and seafood lovers in Norwalk.",
  },
  {
    label: "Hours",
    value: restaurant.hours,
    detail: "Open daily for breakfast, lunch, and dinner.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-cream text-cocoa">
      <header className="sticky top-0 z-30 border-b border-gold/25 bg-cocoa/95 text-cream shadow-[0_18px_55px_rgba(40,24,14,0.18)] backdrop-blur">
        <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(135deg,#f5b041_25%,transparent_25%),linear-gradient(225deg,#f5b041_25%,transparent_25%)] [background-position:0_0,10px_0] [background-size:20px_20px]" />

        <nav className="relative mx-auto flex max-w-7xl flex-col gap-4 px-5 py-4 lg:flex-row lg:items-center lg:justify-between">
          <a href="#home" className="flex min-w-0 items-center gap-4">
            <RestaurantLogo />
            <span className="min-w-0">
              <span className="block text-xl font-black leading-tight text-white sm:text-2xl">
                {restaurant.name}
              </span>
              <span className="mt-1 block text-sm font-semibold leading-5 text-cream/75">
                {restaurant.address}
              </span>
            </span>
          </a>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center lg:justify-end">
            <a
              href={restaurant.phoneHref}
              className="inline-flex items-center justify-center rounded-full border border-gold/40 bg-white/10 px-4 py-2 text-sm font-black text-gold transition hover:bg-gold hover:text-cocoa"
            >
              {restaurant.phone}
            </a>
            <div className="flex rounded-full border border-white/10 bg-black/20 p-1 text-sm font-bold text-cream/85">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-3 py-2 transition hover:bg-white/20 hover:text-white sm:px-4"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>

      <section id="home" className="relative min-h-[calc(100vh-96px)] overflow-hidden">
        <HeroSlider />

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-96px)] max-w-7xl items-center px-5 py-20">
          <div className="max-w-3xl text-white">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-gold/40 bg-cocoa/50 px-4 py-2 text-sm font-black uppercase tracking-[0.16em] text-gold shadow-soft backdrop-blur">
              Mexican Kitchen & Fresh Seafood
            </div>

            <h1 className="text-5xl font-black leading-[0.95] tracking-normal sm:text-6xl lg:text-7xl">
              El Marinero Family Restaurant
            </h1>

            <p className="mt-7 max-w-2xl text-lg font-medium leading-8 text-cream/90 sm:text-xl">
              Authentic Mexican flavors, fresh seafood, and warm family hospitality
              in the heart of Norwalk.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#menu"
                className="inline-flex items-center justify-center rounded-full bg-gold px-7 py-3.5 text-sm font-black text-cocoa shadow-soft transition hover:bg-maize"
              >
                View Menu
              </a>
              <a
                href={restaurant.phoneHref}
                className="inline-flex items-center justify-center rounded-full bg-orange px-7 py-3.5 text-sm font-black text-white shadow-soft transition hover:bg-chile"
              >
                Call Now
              </a>
              <a
                href={restaurant.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-black text-white backdrop-blur transition hover:bg-white hover:text-cocoa"
              >
                Get Directions
              </a>
            </div>

            <div className="mt-10 grid max-w-2xl gap-3 text-sm font-bold text-cream/85 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/20 bg-cocoa/50 p-4 backdrop-blur">
                Open Daily
                <span className="mt-1 block text-xl font-black text-white">
                  {restaurant.hours}
                </span>
              </div>
              <div className="rounded-2xl border border-white/20 bg-cocoa/50 p-4 backdrop-blur">
                Local Favorite
                <span className="mt-1 block text-xl font-black text-white">
                  Norwalk, California
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="relative bg-cream px-5 py-20 sm:py-24">
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-cocoa/10 to-transparent" />
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-gold/25 bg-white shadow-soft">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(245,176,65,0.2),transparent_28rem),linear-gradient(135deg,rgba(194,74,35,0.08),transparent_45%)]" />
          <div className="relative grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="flex min-h-[20rem] flex-col justify-between bg-cocoa p-8 text-white sm:p-10 lg:p-12">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.2em] text-gold">
                  Menu
                </p>
                <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
                  Explore the full menu
                </h2>
              </div>
              <p className="mt-8 max-w-md text-base leading-8 text-cream/85">
                View the official menu PDF for current seafood plates, Mexican
                favorites, drinks, and family dining options.
              </p>
            </div>

            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
              <div className="max-w-xl">
                <p className="text-lg leading-8 text-cocoa/75">
                  The printed menu stays in one simple place: a clean PDF link
                  guests can open before visiting or while ordering by phone.
                </p>
                <a
                  href="/menu.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center justify-center rounded-full bg-orange px-8 py-4 text-sm font-black text-white shadow-soft transition hover:bg-chile"
                >
                  Open Menu PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-orange">
                Contact
              </p>
              <h2 className="mt-4 text-4xl font-black leading-tight text-cocoa sm:text-5xl">
                {restaurant.name}
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-cocoa/70">
                Visit us on Alondra Boulevard for a warm local dining experience
                with Mexican cooking, fresh seafood, and friendly service.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={restaurant.phoneHref}
                  className="inline-flex items-center justify-center rounded-full bg-cocoa px-7 py-3.5 text-sm font-black text-white shadow-soft transition hover:bg-brown"
                >
                  Call Now
                </a>
                <a
                  href={restaurant.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-orange/25 bg-cream px-7 py-3.5 text-sm font-black text-cocoa transition hover:border-orange hover:bg-gold/25"
                >
                  Open Google Maps
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {contactCards.map((card) => (
                <div
                  key={card.label}
                  className="rounded-2xl border border-gold/25 bg-cream p-5 shadow-[0_14px_40px_rgba(40,24,14,0.08)]"
                >
                  <p className="text-sm font-black uppercase tracking-[0.14em] text-orange">
                    {card.label}
                  </p>
                  <p className="mt-3 text-lg font-black leading-6 text-cocoa">
                    {card.value}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-cocoa/60">
                    {card.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 overflow-hidden rounded-[2rem] border border-gold/25 bg-cocoa p-2 shadow-soft">
            <iframe
              title="Map to El Marinero Family Restaurant"
              src={restaurant.mapsEmbed}
              className="h-[28rem] w-full rounded-[1.5rem] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="mt-8 rounded-[1.5rem] bg-cocoa px-6 py-5 text-sm font-semibold leading-6 text-cream/80 sm:flex sm:items-center sm:justify-between sm:gap-6">
            <span>{restaurant.address}</span>
            <span className="mt-2 block text-gold sm:mt-0">
              {restaurant.phone} · Open Daily {restaurant.hours}
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
