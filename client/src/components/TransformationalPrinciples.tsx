import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface Principle {
  title: string;
  description: string;
  image: string;
  asStudent: string;
  asEducator: string;
}

interface TransformationalPrinciplesProps {
  principles: Principle[];
}

export default function TransformationalPrinciples({ principles }: TransformationalPrinciplesProps) {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Transformational <span className="text-primary">Learner</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three core principles that create meaningful, lasting educational transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {principles.map((principle, index) => (
            <Card 
              key={index}
              className="hover-elevate"
              data-testid={`card-principle-${index}`}
            >
              <CardHeader>
                <div className="w-full aspect-square rounded-xl overflow-hidden mb-4 bg-accent/50 flex items-center justify-center">
                  <img 
                    src={principle.image} 
                    alt={principle.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-2xl">{principle.title}</CardTitle>
                <CardDescription className="text-base">{principle.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="student" className="border-none">
                    <AccordionTrigger className="text-sm font-medium hover:no-underline py-3">
                      As a Student
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                      {principle.asStudent}
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="educator" className="border-none">
                    <AccordionTrigger className="text-sm font-medium hover:no-underline py-3">
                      As an Educator
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                      {principle.asEducator}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
