
import React from "react";
import ReactDOM from "react-dom/client";

const products = [
  {
    id: 1,
    title: "Snacksmosphere Sweatshirt",
    image: "images/snacksmosphere.jpg",
    description:
      "(noun) Blend: snack + atmosphere — The cozy, joyful vibe created when food and company are just right.",
    link: "https://www.etsy.com/listing/4392663848/snacksmosphere-definition-t-shirt-cozy",
  },
  // You can add more shirts below by copying this block ↓
  // {
  //   id: 2,
  //   title: "If You’re Going to Hog It, Hit It! Tee",
  //   image: "images/hogit.jpg",
  //   description: "A funny reminder for pickleball partners who like to steal every shot.",
  //   link: "https://www.etsy.com/listing/xxxx",
  // },
];

function App() {
  return (
    <main className="min-h-screen bg-orange-50 py-10">
      <h1 className="text-center text-4xl font-headline text-orange-600 mb-10">
        PicklePuns Apparel
      </h1>

      <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {products.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={p.image}
              alt={p.title}
              className="rounded-xl mb-4 w-full object-cover"
            />
            <h2 className="text-xl font-headline text-gray-800 mb-2">
              {p.title}
            </h2>
            <p className="text-gray-600 mb-4 text-sm">{p.description}</p>
            <a
              href={p.link}
              target="_blank"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
            >
              Buy on Etsy
            </a>
          </div>
        ))}
      </section>

      <footer className="text-center text-sm text-gray-500 mt-10">
        © {new Date().getFullYear()} PicklePuns Apparel — All Rights Reserved
      </footer>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);

