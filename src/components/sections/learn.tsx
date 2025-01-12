import { Card } from '@/components/ui/card';
import { scenarios } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Trophy, Play } from 'lucide-react';

export function LearnSection() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold">Your Progress</h3>
            <div className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-yellow-500" />
              <span className="font-medium">450 Points</span>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Overall Completion</span>
                <span>60%</span>
              </div>
              <Progress value={60} />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Current Module</span>
                <span>40%</span>
              </div>
              <Progress value={40} />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Learning Modules</h3>
          <div className="space-y-4">
            {scenarios.map((scenario, index) => (
              <div
                key={index}
                className="p-4 border rounded-lg hover:bg-accent transition-colors"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-medium">{scenario.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {scenario.description}
                    </p>
                  </div>
                  <Badge variant="secondary">{scenario.rewards} pts</Badge>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <Badge
                    variant="outline"
                    className={
                      scenario.difficulty === 'Easy'
                        ? 'text-green-500'
                        : scenario.difficulty === 'Medium'
                        ? 'text-yellow-500'
                        : 'text-red-500'
                    }
                  >
                    {scenario.difficulty}
                  </Badge>
                  <Button size="sm">
                    <Play className="h-4 w-4 mr-2" />
                    Start
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}