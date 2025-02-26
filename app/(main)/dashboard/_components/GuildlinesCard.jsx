// components/GuidelinesCard.jsx
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"; // Assuming you are using Shadcn ui
import { TrafficCone, ListBullet } from "lucide-react"; // Assuming you are using Lucide icons - Added TrafficCone icon

const TrafficGuidelinesCard = () => {
  const trafficGuidelines = [
    "Monitor Traffic Flow: Observe real-time traffic conditions and identify congestion points.",
    "Analyze Traffic Patterns: Study historical data to understand peak hours and recurring traffic patterns.",
    "Manage Traffic Signals: Optimize traffic signal timings based on current and predicted traffic density.",
    "Detect Incidents: Utilize the system to detect and respond to traffic incidents like accidents or road closures.",
    "View Route Optimization: Explore suggested route changes to improve traffic flow.",
    "Access Traffic Reports: Generate and review detailed traffic reports for analysis and planning.",
    "Configure Alerts: Set up alerts for unusual traffic conditions or specific events.",
    "Manage Road Closures: Easily input and manage any planned or unplanned road closures.",
    "Emergency Protocol Access: Have the quick access to emergency protocol in case of a major traffic incident",
    "Evaluate performance: Review Key Performance indicators of traffic flow"
  ];

  return (
    <Card className="w-full shadow-md">
      <CardHeader>
        <CardTitle className="flex gap-2 items-center">
          <TrafficCone className="h-4 w-4 text-amber-500" /> {/* Changed to TrafficCone and added color */}
          Traffic Guidelines
        </CardTitle>
        <CardDescription>
          Follow these guidelines to effectively manage traffic.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="list-disc list-inside space-y-2">
          {trafficGuidelines.map((guideline, index) => (
            <li key={index} className='text-sm'>
              {guideline}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default TrafficGuidelinesCard;

