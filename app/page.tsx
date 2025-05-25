import { Career } from "../components/Career";
import { Hero } from "../components/Hero";
import { SkillChart } from "../components/SkillChart";
import { Lasttext } from "../components/Lasttext";
import ParticlesBackground from "../components/ParticlesBackground";

export default function Home() {
  return (
    <>
      <ParticlesBackground />
      <main className=" text-textPrimary font-serif">
        <div className="min-h-screen flex items-start">
          <Hero />
        </div>
        <div className="min-h-screen flex items-center" id="career">
          <Career />
        </div>
        <div className="min-h-screen flex items-center" id="skill">
            <SkillChart />
        </div>
        <div className="min-h-screen flex items-center" id="skill">
            <Lasttext />
        </div>
      </main>
  </>
  );
}