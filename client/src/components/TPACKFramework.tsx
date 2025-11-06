import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Laptop } from "lucide-react";
import { useState } from "react";

const frameworkElements = [
  {
    icon: BookOpen,
    title: "Content Knowledge",
    abbreviation: "CK",
    description: "What you teach",
    details: "Deep understanding of the subject matter and concepts being taught.",
    color: "bg-chart-1",
    position: "left"
  },
  {
    icon: Users,
    title: "Pedagogical Knowledge",
    abbreviation: "PK",
    description: "How you teach",
    details: "Understanding of teaching methods, learning theories, and instructional strategies.",
    color: "bg-chart-3",
    position: "right"
  },
  {
    icon: Laptop,
    title: "Technological Knowledge",
    abbreviation: "TK",
    description: "The tools you use",
    details: "Familiarity with various technologies and their educational applications.",
    color: "bg-chart-5",
    position: "bottom"
  }
];

export default function TPACKFramework() {
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            The <span className="text-primary">TPACK</span> Framework
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Integrating technology in ways that enhance learning by combining content, pedagogy, and technology.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {frameworkElements.map((element, index) => {
            const Icon = element.icon;
            const isHovered = hoveredElement === element.abbreviation;
            
            return (
              <Card 
                key={index}
                className="hover-elevate cursor-pointer transition-all"
                onMouseEnter={() => setHoveredElement(element.abbreviation)}
                onMouseLeave={() => setHoveredElement(null)}
                data-testid={`card-tpack-${element.abbreviation}`}
              >
                <CardHeader>
                  <div className={`w-16 h-16 rounded-xl ${element.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="flex items-baseline gap-2">
                    {element.title}
                    <span className="text-sm text-muted-foreground font-normal">({element.abbreviation})</span>
                  </CardTitle>
                  <CardDescription className="text-base">{element.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  {isHovered && (
                    <p className="text-sm text-muted-foreground">
                      {element.details}
                    </p>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Why TPACK Works</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
                  ✓
                </div>
                <div>
                  <p className="font-medium mb-1">Purposeful Integration</p>
                  <p className="text-sm text-muted-foreground">Encourages purposeful tech use aligned with learning goals</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
                  ✓
                </div>
                <div>
                  <p className="font-medium mb-1">Perfect Fit</p>
                  <p className="text-sm text-muted-foreground">Ensures digital tools fit both the subject and teaching method</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
                  ✓
                </div>
                <div>
                  <p className="font-medium mb-1">Teacher Confidence</p>
                  <p className="text-sm text-muted-foreground">Builds teacher confidence in choosing and using technology</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
                  ✓
                </div>
                <div>
                  <p className="font-medium mb-1">Deeper Learning</p>
                  <p className="text-sm text-muted-foreground">Promotes student engagement and deeper understanding</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-background rounded-xl border">
              <p className="font-medium mb-3">Real-World Example:</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A math teacher using a graphing app demonstrates TPACK in action: They possess <span className="font-medium text-foreground">Content Knowledge</span> (algebra concepts), apply <span className="font-medium text-foreground">Pedagogical Knowledge</span> (inquiry-based lessons), and leverage <span className="font-medium text-foreground">Technological Knowledge</span> (graphing app) to visualize equations and foster exploration.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
