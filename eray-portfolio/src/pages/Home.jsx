import Hero from "../sections/Hero";
import Stats from "../sections/Stats";

function Home() {
  return(
    <main className="flex-1 space-y-20">
      <Hero />
      <Stats />
    </main>
  );

}

export default Home;