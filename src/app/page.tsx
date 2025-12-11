import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-linear-to-br from-rose-100 to-rose-50 py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-rose-900 mb-6 text-balance">
                Welcome to Crown Bar & Grill
              </h1>
              <p className="text-lg md:text-xl text-rose-700 mb-8 max-w-2xl mx-auto text-balance">
                Indulge in an exceptional culinary journey where passion meets
                artistry. Every dish is crafted with the finest ingredients.
              </p>
              <a
                href="https://www.just-eat.co.uk/restaurants-swan-bar-and-grill-netherton/menu?utm_source=google&utm_medium=organic&utm_campaign=orderaction"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-rose-900 text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity text-lg">
                  Order Online
                </button>
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-rose-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="max-w-xl">
                <h2 className="text-4xl font-bold mb-6 text-rose-900">
                  Crafted with Passion
                </h2>

                <p className="text-lg text-rose-800/80 mb-4">
                  At{" "}
                  <span className="font-semibold text-rose-900">
                    Crown Bar & Grill
                  </span>
                  , dining is more than just a meal its an experience. Our chefs
                  blend traditional flavors with modern culinary artistry to
                  create unforgettable dishes.
                </p>

                <p className="text-lg text-rose-800/80 mb-6">
                  Every ingredient is carefully selected from local farmers and
                  premium suppliers, ensuring the highest quality and freshest
                  flavors on every plate.
                </p>
              </div>

              <div className="rounded-lg overflow-hidden shadow-lg relative w-full h-64">
                <Image
                  src="/crown.png"
                  alt="Crown Bar and Grill Interior"
                  className="object-cover"
                  fill
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
