import Link from "next/link";

export default function HeroSection() {

  return (
    <section className="h-11/12 flex flex-col items-baseline text-left px-6 bg-neutral-950">
      <h1 className="mt-40 text-6xl max-w-[14ch] sm:text-7xl md:text-8xl lg:text-9xl font-bold text-neutral-50 mb-4">
        Your day, organized now.
      </h1>
      <p className="text-lg text-neutral-500 pl-2 mb-6">
        Organize your tasks efficiently and stay productive.
      </p>
      <Link
        href="/dashboard"
        className="px-6 py-3 bg-blue-600 text-white font-semibold text-lg rounded-md hover:bg-blue-700 transition-all"
      >
        Go to Dashboard
      </Link>
    </section>
  );
}
