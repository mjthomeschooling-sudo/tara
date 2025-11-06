import { Card, CardContent } from "@/components/ui/card";

interface Activity {
  title: string;
  description: string;
  image: string;
  keyTakeaway: string;
}

interface ReinforcementSectionProps {
  activities: Activity[];
}

export default function ReinforcementSection({ activities }: ReinforcementSectionProps) {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Learning Through <span className="text-primary">Action</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hands-on activities that reinforced critical concepts and built lasting understanding.
          </p>
        </div>

        <div className="space-y-12">
          {activities.map((activity, index) => (
            <Card 
              key={index}
              className="overflow-hidden hover-elevate"
              data-testid={`card-activity-${index}`}
            >
              <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                  <img 
                    src={activity.image} 
                    alt={activity.title}
                    className="w-full h-full object-cover min-h-[300px]"
                  />
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4">{activity.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {activity.description}
                  </p>
                  <div className="bg-accent/50 border-l-4 border-primary pl-4 py-3 rounded-r">
                    <p className="text-sm font-medium">
                      <span className="text-primary">Key Takeaway:</span> {activity.keyTakeaway}
                    </p>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
