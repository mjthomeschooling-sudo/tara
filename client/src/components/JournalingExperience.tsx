import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Pencil, Lightbulb } from "lucide-react";

export default function JournalingExperience() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-primary/5 via-background to-chart-2/5">
      <div className="max-w-5xl mx-auto">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-chart-2/20 rounded-2xl blur-xl" />
          
          <Card className="relative border-2 border-primary/20 shadow-xl">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-chart-2 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-2">
                    The Power of <span className="text-primary">Handwritten Journaling</span>
                  </h2>
                  <p className="text-muted-foreground text-lg">My AT&T DigNav Experience</p>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  All-together, I found that utilizing a hard copy journal was a great tool to have throughout my AT&T DigNav experience. I enjoy pen and paper and even remember stuff better when handwriting it on paper. Being able to reference back to it was extremely useful as well.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="flex flex-col items-center text-center p-6 bg-accent/30 rounded-xl border border-primary/10">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Pencil className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold mb-2">Tactile Learning</h3>
                    <p className="text-sm text-muted-foreground">
                      The physical act of writing enhances memory retention and understanding
                    </p>
                  </div>

                  <div className="flex flex-col items-center text-center p-6 bg-accent/30 rounded-xl border border-primary/10">
                    <div className="w-12 h-12 rounded-full bg-chart-2/10 flex items-center justify-center mb-4">
                      <Lightbulb className="w-6 h-6 text-chart-2" />
                    </div>
                    <h3 className="font-bold mb-2">Better Recall</h3>
                    <p className="text-sm text-muted-foreground">
                      Handwriting creates stronger neural connections for improved memory
                    </p>
                  </div>

                  <div className="flex flex-col items-center text-center p-6 bg-accent/30 rounded-xl border border-primary/10">
                    <div className="w-12 h-12 rounded-full bg-chart-4/10 flex items-center justify-center mb-4">
                      <BookOpen className="w-6 h-6 text-chart-4" />
                    </div>
                    <h3 className="font-bold mb-2">Easy Reference</h3>
                    <p className="text-sm text-muted-foreground">
                      Quick access to past insights and learning moments whenever needed
                    </p>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-primary/5 border-l-4 border-primary rounded-r-xl">
                  <p className="font-medium text-foreground">
                    Key Insight: Combining traditional journaling methods with modern digital learning creates a powerful, personalized learning experience that honors individual learning preferences.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
