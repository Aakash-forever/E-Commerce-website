import Image from "next/image"

function ProductCard() {
  return (
    <div>
      <div className="w-72 rounded-2xl px-2.5 py-3 bg-slate-50 overflow-hidden shadow-[0_2px_6px_rgba(0,0,0,0.05),0_12px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_12px_rgba(0,0,0,0.06),0_20px_40px_rgba(0,0,0,0.1)] transition-shadow duration-300">
            <div className="relative h-56 w-full">
              <Image
                src="/casual-wear-img.jpg"
                alt="Product"
                fill
                className="object-cover rounded-2xl"
                sizes="(max-width: 768px) 100vw, 300px"
              />
            </div>

            <div className="p-4 space-y-2">
              <h3 className="text-lg font-semibold text-gray-900">
                Classic Cotton T-Shirt
              </h3>

              <p className="text-sm text-gray-600 line-clamp-2">
                Soft, breathable cotton fabric designed for all-day comfort and
                style.
              </p>

              <div className="flex items-center gap-1 text-yellow-500">
                ★★★★☆
                <span className="ml-2 text-sm text-gray-500">(4.2)</span>
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-xl font-bold text-gray-900">₹1,299</span>

                <button className="rounded-lg bg-black px-3 py-1.5 text-sm text-white hover:bg-gray-800 transition">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
    </div>
  )
}

export default ProductCard
