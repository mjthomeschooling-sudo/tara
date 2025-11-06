import { Shield, Blocks, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

const superpowers = [
  {
    icon: Shield,
    title: "Cybersecurity Awareness",
    summary: "Expanded threat knowledge and safe browsing practices",
    description: "I was especially surprised to find out that when a pop up occurs, it is possible to get a virus by clicking the 'x' meant to close it. Learning the alternative ways to close it was helpful as well! My awareness was heightened in knowledge of how easily an insider threat can cause harm.",
    color: "text-chart-1"
  },
  {
    icon: Blocks,
    title: "Tinkercad Integration",
    summary: "Confidence to bring 3D design into the classroom",
    description: "I had heard of Tinkercad before, and even checked it out, but I felt overwhelmed. Because of this class and another that I took with the same instructor 'Orlando', my students will be utilizing Tinkercad shortly for an architecture program.",
    color: "text-chart-2"
  },
  {
    icon: Zap,
    title: "Tech Confidence",
    summary: "Overcoming apprehension of new technology products",
    description: "I am currently teaching coding and seeing your code do different things on the computer screen is exciting. The idea of coding a robot seemed too difficult. This product seems like a much less scary approach to 'off screen' coding and bridging that gap.",
    color: "text-chart-4"
  }
];

export default function SuperpowersSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="superpowers" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            3 New <span className="text-primary">Superpowers</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Through dedicated learning and hands-on experience, I've gained powerful new capabilities that transform my teaching practice.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {superpowers.map((power, index) => {
            const Icon = power.icon;
            const isExpanded = expandedIndex === index;
            
            return (
              <Card 
                key={index}
                className="hover-elevate cursor-pointer transition-all min-h-[280px] flex flex-col"
                onClick={() => setExpandedIndex(isExpanded ? null : index)}
                data-testid={`card-superpower-${index}`}
              >
                <CardHeader className="flex-none">
                  <div className={`w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4 ${power.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl">{power.title}</CardTitle>
                  <CardDescription>{power.summary}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  {isExpanded && (
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {power.description}
                    </p>
                  )}
                  {!isExpanded && (
                    <p className="text-sm text-primary font-medium">
                      Click to learn more →
                    </p>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
