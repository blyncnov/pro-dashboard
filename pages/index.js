import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Blyncnov | pro dashboard</title>
        <meta
          name="Next js dashboard made with love by blyncnov"
          content="Blyncnov | pro dashboard"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Pro <a href="https://nextjs.org">dashboard</a>
        </h1>
      </main>
    </div>
  );
}
