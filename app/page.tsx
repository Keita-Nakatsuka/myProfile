import { Hero } from "../components/Hero";
import { SkillChart } from "../components/SkillChart";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-textPrimary font-serif">
      <Hero />
      <SkillChart />
    </main>
  );
}