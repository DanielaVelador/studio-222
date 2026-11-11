export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-deep-purple px-6 text-center text-lavender">
      <h1 className="text-5xl font-bold tracking-tight text-green md:text-7xl">
        Studio 222
      </h1>
      <p className="mt-6 max-w-xl text-lg text-lavender md:text-xl">
        Estamos trabajando en algo nuevo. Espéranos el{" "}
        <strong className="text-mint">22 de noviembre</strong>.
      </p>
      <a
        href="mailto:info@studio222oficial.com"
        className="mt-10 rounded-full border border-green px-6 py-3 text-green transition hover:bg-green hover:text-deep-purple"
      >
        Escríbenos
      </a>
    </main>
  );
}