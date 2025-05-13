import Image from "next/image";
import Link from "next/link";
import StaySection from "./stay";
import Services from "./services";
import TestimonialCarousel from "./testi";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-screen w-full">
        <Image
          src="/hero.jpg"
          alt="Kyathanamakki Homestay"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold">
            Kyathanamakki Homestay
          </h1>
          <p className="mt-4 text-lg md:text-2xl">Escape to Nature's Lap</p>
          <Link href="#contact">
            <button className="mt-6 px-6 py-3 bg-green-600 hover:bg-green-700 rounded-full text-white font-semibold">
              Book Now
            </button>
          </Link>
        </div>
      </section>

      <StaySection />
      <Services />
      <TestimonialCarousel />

      <section className="bg-black pt-20">
        <div className="p-20 text-white">
          <h1 className="text-4xl font-bold">
            <i>EXPERIENCES</i>
          </h1>
          <p className="text-lg text-gray-700">
            Immerse yourself in the beauty of nature with our curated
            experiences.
            <br />
            From thrilling jeep rides to serene nature walks, we have something
            for everyone.
            <br />
          </p>
        </div>
        <div className="flex flex-wrap">
          {[
            {
              title: "Waterfall",
              description:
                "Hidden waterfalls just a short trek away from the homestay.",
              image:
                "https://plus.unsplash.com/premium_photo-1661883809211-eb59f508b3d9?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              title: "Jeep Ride",
              description:
                "Experience an adrenaline-pumping off-road ride to the hilltop.",
              image:
                "https://images.unsplash.com/photo-1515049497350-e9dfc9527f5d?q=80&w=3275&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              title: "Camp Fire",
              description:
                "Unwind by the fire under a starry sky with stories and music.",
              image:
                "https://images.unsplash.com/photo-1475483768296-6163e08872a1?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              title: "Caves",
              description:
                "Explore mysterious local caves surrounded by natural beauty.",
              image:
                "https://images.unsplash.com/photo-1532980216874-21f93fa9fd15?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
          ].map((exp, idx) => (
            <div
              key={idx}
              className="w-full md:w-1/2 lg:w-1/4 h-[50vh] relative overflow-hidden"
            >
              <img
                src={exp.image}
                alt={exp.title}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-opacity-40 flex flex-col justify-end p-8 text-white">
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="text-sm">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
