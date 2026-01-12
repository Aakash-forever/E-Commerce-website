"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import ProductCard from "@/components/ui/productCard";

const LayoutTextFlip = dynamic(
  () => import("@/components/ui/layout-text-flip.client"),
  { ssr: false }
);

export default function Home() {
  const bgRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
    });

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    lenis.on("scroll", ({ scroll }) => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${scroll * 0.4}px)`;
      }
    });

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <section className="relative h-screen overflow-hidden font-['Source Sans 3']">
        <div
          ref={bgRef}
          className="absolute inset-0 -z-20 bg-[url('/hero-img.jpg')] bg-cover bg-center will-change-transform"
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

        <div className="flex flex-col h-full justify-center max-w-3xl mx-10 mt-20 gap-2 text-slate-200 font-semibold">
          <p className="inline-flex max-w-38 items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs uppercase tracking-wide backdrop-blur-md">
  New Collection 2026
</p>

          <h1 className="text-6xl leading-[1.05] font-extrabold tracking-tight text-white my-2 flex items-center">
            Designed for <LayoutTextFlip />
          </h1>

          <p className="my-3 text-xl">
            More than clothing — it’s a statement of confidence, culture, and
            individuality.
          </p>

          <button className="group relative overflow-hidden rounded-xl bg-[#d4af37] px-7 py-4 mt-5 text-black font-semibold shadow-lg w-fit">
            <span className="relative z-10 flex items-center gap-3">
              Shop Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                width={20}
                height={20}
                className="transition-transform group-hover:translate-x-1.5 duration-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12L13.5 19.5M21 12H3"
                />
              </svg>
            </span>
            <span className="absolute inset-0 bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </button>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              width={35}
              height={35}
              className="animate-bounce"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v14m0 0l-5-5m5 5l5-5"
              />
            </svg>
          </div>
        </div>
      </section>

      <section className="h-screen bg-white p-25">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-5xl font-bold">Featured Collections</h2>
          <p className="my-3 text-lg text-gray-700">
            Explore our carefully curated collections designed for every
            occasion and style preference.
          </p>
        </div>

        <div className="flex justify-evenly my-10 gap-8">
  {[
    {
      title: "Casual Wears",
      img: "/casual-wear2-img.jpg",
      desc: "Everyday comfort with effortless street style",
      items: "24 items",
    },
    {
      title: "Premium Watches",
      img: "/watch-img.jpg",
      desc: "Precision-crafted timepieces for timeless elegance",
      items: "18 items",
    },
    {
      title: "Men's Collection",
      img: "/mens-collection-img.jpg",
      desc: "Refined styles built for confidence and power",
      items: "32 items",
    },
    {
      title: "Women's Collection",
      img: "/womens-collection-img.jpg",
      desc: "Graceful silhouettes with a contemporary edge",
      items: "29 items",
    },
  ].map((item) => (
    <div
      key={item.title}
      className="group relative overflow-hidden flex flex-col justify-end px-2 py-3 w-[300px] h-[340px] rounded-3xl text-white"
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${item.img})` }}
      />

      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10">
        <h3 className="text-3xl font-bold backdrop-blur-sm rounded-xl">
          {item.title}
        </h3>
        <p>{item.desc}</p>
        <span className="text-gray-300">{item.items}</span>
      </div>
    </div>
  ))}
</div>

      </section>

      <section className="h-screen px-20 py-10">
        <div className="flex flex-col justify-center">
          <h2 className="text-5xl font-bold">Trending Now</h2>
          <p className="my-3 text-lg text-gray-700">
            Discover our most popular pieces loved by fashion enthusiasts
            worldwide.
          </p>
        </div>

        <div className="mt-10">
          <ProductCard/>
        </div>
      </section>

      <section className="h-screen bg-green-400 p-10">Section 3</section>
    </>
  );
}
