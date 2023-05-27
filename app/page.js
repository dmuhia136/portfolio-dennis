import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Form from "../components/Form"


export default function Home() {
  return (
    <main className="h-full w-full pl-10 pr-10 bg-gray-800 text-white">
      {/* hero section done*/}
      <Hero />
      {/* Projects done */}
      <Projects />
      {/* Links to portfolio done*/}
      <Form/>
    </main>
  );
}
