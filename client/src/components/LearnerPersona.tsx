import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface LearnerPersonaProps {
  personaImage: string;
}

export default function LearnerPersona({ personaImage }: LearnerPersonaProps) {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-primary">Learner Persona</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A visual representation of my strengths, passions, and growth mindset
          </p>
        </div>

        <Card className="overflow-hidden hover-elevate">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl">Personal Reflection & Identity</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center p-8">
            <div className="relative inline-block">
              {/* Animated gradient border effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-primary via-chart-2 to-chart-4 rounded-2xl blur opacity-75 animate-pulse" />
              <div className="absolute -inset-1 bg-gradient-to-br from-chart-1 via-primary to-chart-3 rounded-2xl" />
              
              {/* Image container */}
              <div className="relative bg-white dark:bg-card p-4 rounded-xl shadow-2xl">
                <img 
                  src={personaImage}
                  alt="Learner Persona - Handwritten self-reflection showing superpowers, interests in baking and cake decorating"
                  className="rounded-lg max-w-full h-auto"
                  data-testid="img-learner-persona"
                />
                
                {/* Corner accents */}
                <div className="absolute -top-2 -left-2 w-6 h-6 border-t-4 border-l-4 border-primary rounded-tl-lg" />
                <div className="absolute -top-2 -right-2 w-6 h-6 border-t-4 border-r-4 border-chart-2 rounded-tr-lg" />
                <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-4 border-l-4 border-chart-3 rounded-bl-lg" />
                <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-4 border-r-4 border-chart-4 rounded-br-lg" />
              </div>
            </div>
          </CardContent>
          
          <CardContent className="pt-0 pb-8">
            <div className="bg-accent/50 rounded-xl p-6 max-w-2xl mx-auto">
              <p className="text-sm text-center text-muted-foreground leading-relaxed">
                This handwritten persona captures my authentic self: a quick learner who excels at seeing situations from multiple perspectives, values rest, and while not great at many things, has a genuine talent for teaching and sharing knowledge with others. My passions for baking and cake decorating add creative balance to my educational journey.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
