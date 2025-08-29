import Link from "next/link";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black">
      <h1 className="text-3xl font-bold mb-6">Dial in</h1>
      <form className="flex flex-col gap-4 w-80">
        <input
          type="text"
          placeholder="Your Name"
          className="border border-gray-300 rounded-lg p-2"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border border-gray-300 rounded-lg p-2"
        />
        <textarea
          placeholder="Your Message"
          className="border border-gray-300 rounded-lg p-2"
        />
        <button className="bg-blue-500 text-white rounded-lg py-2">
          Send
        </button>
      </form>

      {/* Tombol back ke landing page */}
      <Link href="/" className="mt-6 text-blue-600 underline">
        Back?
      </Link>
    </div>
  );
}
