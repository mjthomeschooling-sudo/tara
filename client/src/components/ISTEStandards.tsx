import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users } from "lucide-react";

export default function ISTEStandards() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            ISTE <span className="text-primary">Standards</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Committed to professional collaboration and educational excellence
          </p>
        </div>

        <Card className="border-2 hover-elevate" data-testid="card-iste-standard">
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-3 py-1 mb-3">
                  <span className="text-xs font-bold text-primary">ISTE 2.4</span>
                </div>
                <CardTitle className="text-3xl mb-2">Collaborator</CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed text-base">
              In the past and even now whenever an opportunity arises that I am able to learn a new skill or work with other educators to discuss ways to enhance different aspects of our educational system, I always volunteer to be in those groups to put forth my ideas and work with others on their ideas.
            </p>
            
            <div className="mt-6 pt-6 border-t">
              <p className="text-sm font-medium text-foreground mb-2">Active Collaboration Mindset:</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span>Eagerly seeking opportunities for professional development</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span>Contributing ideas to enhance educational practices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span>Actively engaging with fellow educators to share knowledge</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
