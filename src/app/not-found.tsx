import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-[70vh] place-items-center px-5 text-center">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-lavender">Moonlight</p>
        <h1 className="mt-4 font-serif text-4xl text-ink">This page is not here.</h1>
        <Link href="/en" className="mt-6 inline-block text-lavender">
          Return home
        </Link>
      </div>
    </main>
  );
}
