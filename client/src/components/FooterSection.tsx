import { Award } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="py-12 px-6 bg-card border-t">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Learner Growth Journey</h3>
            <p className="text-sm text-muted-foreground">
              A showcase of transformational learning and professional development
            </p>
          </div>

          <div className="flex items-center gap-3 bg-muted/50 px-6 py-4 rounded-xl">
            <Award className="w-8 h-8 text-primary" />
            <div>
              <p className="text-sm font-medium">ISTE Standard</p>
              <p className="text-xs text-muted-foreground">2.4 Collaborator</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
          <p>Continuously learning, growing, and empowering others through technology education</p>
        </div>
      </div>
    </footer>
  );
}
