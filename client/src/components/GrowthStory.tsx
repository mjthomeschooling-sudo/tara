import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

export default function GrowthStory() {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <Card className="border-2">
          <CardContent className="p-8 md:p-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">My Growth Journey</h3>
                <p className="text-muted-foreground">From basic knowledge to confident implementation</p>
              </div>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I had some basic technology knowledge. Most of that knowledge pertained to older applications though. Through this program, I have been introduced to some other programs I was unaware of, or different ways to utilize programs I already knew.
              </p>
              <p>
                It has also brought things I knew but didn't actually utilize back to the forefront. The class has helped me realize that it is not as overwhelming as it seems, and that if you utilize simple techniques, like the Technical Knowledge Acquisition Strategies, then there are ways to find out how to use those programs more simply.
              </p>
              <p className="font-medium text-foreground">
                I have grown more confident and am even implementing some of the tools and strategies we learned about in my own teaching practice.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
