"use client";

import { useEffect, useState } from "react";

export function RestaurantLogo() {
  const [logoLoaded, setLogoLoaded] = useState(false);

  useEffect(() => {
    const logo = new window.Image();
    logo.onload = () => setLogoLoaded(true);
    logo.onerror = () => setLogoLoaded(false);
    logo.src = "/logo.png";
  }, []);

  return (
    <span className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-gold/70 bg-cream text-lg font-black text-orange shadow-soft">
      <span aria-hidden="true">EM</span>
      {logoLoaded ? (
        <span
          aria-label="El Marinero Family Restaurant logo"
          role="img"
          className="absolute inset-0 h-full w-full bg-cream object-contain p-1"
          style={{
            backgroundImage: "url('/logo.png')",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        />
      ) : null}
    </span>
  );
}
