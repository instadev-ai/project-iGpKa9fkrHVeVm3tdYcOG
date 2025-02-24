import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Plus } from "lucide-react";
import { useState } from "react";
import GoalCreationDialog from "@/components/goals/GoalCreationDialog";
import GoalList from "@/components/goals/GoalList";

const Index = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [goals, setGoals] = useState([
    {
      id: "1",
      title: "Learn React",
      category: "Career",
      progress: 65,
      dueDate: "2024-06-30",
      milestones: [
        { id: "m1", title: "Complete Basics", completed: true },
        { id: "m2", title: "Build Projects", completed: false },
      ],
    },
    {
      id: "2",
      title: "Exercise Regularly",
      category: "Health",
      progress: 30,
      dueDate: "2024-12-31",
      milestones: [
        { id: "m3", title: "Join Gym", completed: true },
        { id: "m4", title: "Weekly Routine", completed: false },
      ],
    },
  ]);

  const addGoal = (newGoal) => {
    setGoals([...goals, { ...newGoal, id: Date.now().toString() }]);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="mx-auto max-w-4xl">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">GoalTracker</h1>
          <p className="mt-2 text-gray-600">Track your progress, achieve your dreams</p>
        </div>

        {/* Overview Card */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-500">Active Goals</p>
                <p className="text-2xl font-bold">{goals.length}</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-500">Overall Progress</p>
                <Progress value={45} className="h-2" />
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-500">Completed Goals</p>
                <p className="text-2xl font-bold">2</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Goals Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">Your Goals</h2>
            <Button onClick={() => setIsDialogOpen(true)} size="sm">
              <Plus className="mr-2 h-4 w-4" />
              Add Goal
            </Button>
          </div>

          <GoalList goals={goals} />
        </div>

        <GoalCreationDialog
          open={isDialogOpen}
          onOpenChange={setIsDialogOpen}
          onGoalCreate={addGoal}
        />
      </div>
    </div>
  );
};

export default Index;