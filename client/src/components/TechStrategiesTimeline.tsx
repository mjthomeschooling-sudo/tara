import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Briefcase, Heart } from "lucide-react";

const stories = [
  {
    icon: User,
    category: "Personal",
    title: "Van Door Solution",
    description: "My sliding door on my van was stuck open today. This is the second time it happened. Last time, I spent like 30 minutes messing with it and somehow fixed it. When it happened today, I didn't have 30 minutes just to play around with it. Then I remembered Orlando and Barbara saying 'If you encounter a problem, most likely someone else has already experienced that same problem'. Within 2 minutes of looking online, I found a Reddit thread with my question and the solution.",
    color: "bg-chart-1"
  },
  {
    icon: Briefcase,
    category: "Professional",
    title: "Math Problem Understanding",
    description: "Even though I have the answers to the math problems in my book, I still didn't understand how the answer was reached. I ended up utilizing the thing on the phone where it can search a picture you take and I was able to have Google help me to understand why.",
    color: "bg-chart-3"
  },
  {
    icon: Heart,
    category: "Supporting Others",
    title: "Helping My Dad",
    description: "My dad wasn't feeling well and my brother was debating taking him to the hospital despite my dad not wanting to go. First, I asked the symptoms and tried to do some research. When this didn't help, I remembered that I have a friend who is a nurse and reached out to her. She asked me questions that I didn't even think to look up. She felt that we should take him to the hospital and with her endorsement, it also helped my dad rethink his choice and decide to go as well.",
    color: "bg-chart-4"
  }
];

export default function TechStrategiesTimeline() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Strategies in <span className="text-primary">Real Life</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Applying Technical Knowledge Acquisition Strategies to solve real-world problems.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border" />
          
          <div className="space-y-12">
            {stories.map((story, index) => {
              const Icon = story.icon;
              
              return (
                <div 
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  data-testid={`timeline-story-${index}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <Card className="hover-elevate">
                      <CardHeader>
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`w-10 h-10 rounded-full ${story.color} flex items-center justify-center`}>
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-sm font-medium text-muted-foreground">{story.category}</span>
                        </div>
                        <CardTitle className="text-xl">{story.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed">
                          {story.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -ml-2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
