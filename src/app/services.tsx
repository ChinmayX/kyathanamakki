// components/Services.tsx
export default function Services() {
  const services = [
    {
      title: "Food",
      description:
        "Enjoy 3 delicious meals a day, crafted with local ingredients and served fresh.",
      icon: "🍽️",
    },
    {
      title: "Activities",
      description:
        "Explore nature through guided waterfall trips, cave visits, and more adventures.",
      icon: "🏞️",
    },
    {
      title: "Trek",
      description:
        "Join breathtaking forest treks with an expert local guide for a safe experience.",
      icon: "🥾",
    },
    {
      title: "Network",
      description:
        "Stay connected with strong mobile network access in the heart of the forest.",
      icon: "📶",
    },
  ];

  return (
    <section className="py-16 bg-amber-50 text-center">
      <h2 className="text-4xl font-bold text-amber-900 mb-8">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
        {services.map((service) => (
          <div
            key={service.title}
            className=" rounded-2xl p-6 hover:shadow-xl transition"
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-2xl font-semibold text-amber-800 mb-2">
              {service.title}
            </h3>
            <p className="text-amber-700 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
