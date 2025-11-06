import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  heroImage: string;
}

export default function HeroSection({ heroImage }: HeroSectionProps) {
  const handleScrollToJourney = () => {
    const superpowersSection = document.getElementById('superpowers');
    superpowersSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-6">
          <Sparkles className="w-4 h-4 text-primary-foreground" />
          <span className="text-sm font-medium text-primary-foreground">Transformational Learning Journey</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          From Apprehension to<br />
          <span className="text-primary">Empowerment</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          A journey of growth, discovery, and transformation through technology education—building confidence, expanding knowledge, and empowering others.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20"
            onClick={handleScrollToJourney}
            data-testid="button-explore-journey"
          >
            Explore the Journey
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">3</div>
            <div className="text-sm text-white/80">New Superpowers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">3</div>
            <div className="text-sm text-white/80">Key Activities</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">∞</div>
            <div className="text-sm text-white/80">Growth Opportunities</div>
          </div>
        </div>
      </div>
    </section>
  );
}
