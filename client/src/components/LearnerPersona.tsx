import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface LearnerPersonaProps {
  personaImage: string;
}

export default function LearnerPersona({ personaImage }: LearnerPersonaProps) {
  return (
    <section className="py-12 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold mb-2">
            My <span className="text-primary">Learner Persona</span>
          </h3>
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="relative inline-block">
            {/* Thick colorful gradient border effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary via-chart-2 via-chart-4 to-chart-1 rounded-2xl blur opacity-80 animate-pulse" />
            <div className="absolute -inset-3 bg-gradient-to-br from-chart-1 via-primary via-chart-2 to-chart-4 rounded-2xl" />
            
            {/* Image container */}
            <div className="relative bg-white dark:bg-card p-2 rounded-lg">
              <img 
                src={personaImage}
                alt="Learner Persona - Handwritten self-reflection showing superpowers, interests in baking and cake decorating"
                className="rounded-md max-w-40 h-auto"
                data-testid="img-learner-persona"
              />
            </div>
          </div>

          <p className="text-sm text-center text-muted-foreground leading-relaxed max-w-md">
            A quick learner who excels at seeing situations from multiple perspectives, with a genuine talent for teaching and sharing knowledge with others.
          </p>
        </div>
      </div>
    </section>
  );
}
