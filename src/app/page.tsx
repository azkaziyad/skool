export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center min-h-screen bg-gradient-to-r from-blue-700 to-indigo-800 text-white px-6">
        <h1 className="text-5xl font-bold mb-4">Azka's community</h1>
        <p className="text-lg mb-6 max-w-2xl">
          You've wasted enough time following programs that overpromised and underdelivered.

  You're still stuck, but that ends today.

My elite health and self improvement ecosystem guarantees transformation in 2 weeks and builds lifelong habits for passive, effortless results.
No more overwhelm. No more confusion.

You'll enter my proven 4-phase progression system and unlock exactly what you need, when you need it.

        </p>
        <a
          href="#features"
          className="bg-white text-blue-700 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-200 transition"
        >
          Get Started
        </a>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">What we provide</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Access to like minded people</h3>
              <p>We don't just serve guide but, we also built the best community.</p>
            </div>
            <div className="p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-2">50+ FULL guides</h3>
              <p>Step by step progressively guide</p>
            </div>
            <div className="p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-2">1-on-1 DM Access to me</h3>
              <p>full personalisation</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-100 text-gray-800">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">About Us</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
           This isn't another course. It's a complete transformation system.
          </p>
        </div>
      </section>

      {/* Call To Action */}
      <section id="cta" className="py-20 bg-indigo-700 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to be the best version of yourself?</h2>
        <p className="mb-6 text-lg">
          elevate your looks and every single aspect on your life with us.
        </p>
        <a
  href="/contact"
  className="bg-white text-indigo-700 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-200 transition"
>
  Join Now
</a>

      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-6 text-center">
        <p>© {new Date().getFullYear()} Azka Ziyad Page. All rights reserved.</p>
      </footer>
    </main>
  );
}
