import GradientBackground from "./components/GradientBackground";
import CursorGlow from "./components/CursorGlow";
import Hero from "./components/Hero";
import BlogList from "./components/BlogList";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#0a0a0a]">
      <GradientBackground />
      <CursorGlow />
      <main className="relative z-10 flex-1">
        <Hero />
        <BlogList />
      </main>
      <Footer />
    </div>
  );
}
