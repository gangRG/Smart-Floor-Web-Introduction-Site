import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { ArchitectureSection } from './components/ArchitectureSection';
import { TwoStageSection } from './components/TwoStageSection';
import { PerformanceSection } from './components/PerformanceSection';
import { ServicesSection } from './components/ServicesSection';
import { CNNSection } from './components/CNNSection';
import { TeamSection } from './components/TeamSection';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <ArchitectureSection />
      <TwoStageSection />
      <PerformanceSection />
      <ServicesSection />
      <CNNSection />
      <TeamSection />
    </div>
  );
}
