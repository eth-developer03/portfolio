import { Card } from '@/components/ui/card';
import { mockData } from '@/lib/data';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { Badge } from '@/components/ui/badge';

export function WealthSection() {
  const investments = mockData.investments;

  const performanceData = investments.map((inv) => ({
    name: inv.type,
    returns: inv.returns,
  }));

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Investment Performance</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart 
                data={performanceData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="name"
                  interval={0}
                  tick={{ fontSize: 12 }}
                />
                <YAxis
                  width={80}
                  tick={{ fontSize: 12 }}
                  tickFormatter={(value) => `${value.toFixed(2)}%`}
                />
                <Tooltip formatter={(value) => `${Number(value).toFixed(2)}%`} />
                <Line
                  type="monotone"
                  dataKey="returns"
                  stroke="#3b82f6"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>
        {/* Rest of the component remains the same */}
      </div>
    </div>
  );
}