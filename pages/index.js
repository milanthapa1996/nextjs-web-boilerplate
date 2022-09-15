import Head from "next/head";
import Slider from "../components/Slider";
import Hero from "../components/Hero";
import Directors from "../components/Directors";
import Teams from "../components/Teams";
import Testimonials from "../components/Testimonials";
import NewsTicker from "../components/NewsTicker";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-4 space-y-2">
        <NewsTicker/>
        <Slider />
        <Hero />
        <Directors />
        <Teams />
        <Testimonials />
      </main>
    </div>
  );
}
