import { Card } from '@/components/ui/card';
import { mockData } from '@/lib/data';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calculator } from 'lucide-react';

export function TaxSection() {
  const insurance = mockData.insurance;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Tax Optimization</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Strategy</TableHead>
                <TableHead>Potential Savings</TableHead>
                <TableHead>Complexity</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>401(k) Contributions</TableCell>
                <TableCell>$2,000 - $6,000</TableCell>
                <TableCell>
                  <Badge variant="secondary">Easy</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>HSA Contributions</TableCell>
                <TableCell>$1,000 - $3,000</TableCell>
                <TableCell>
                  <Badge variant="secondary">Medium</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Tax-Loss Harvesting</TableCell>
                <TableCell>$1,500 - $4,500</TableCell>
                <TableCell>
                  <Badge variant="secondary">Complex</Badge>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Button className="w-full mt-4">
            <Calculator className="mr-2 h-4 w-4" />
            Calculate Tax Savings
          </Button>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Insurance Recommendations</h3>
          <div className="space-y-4">
            {insurance.slice(0, 4).map((policy, index) => (
              <div
                key={index}
                className="p-4 border rounded-lg hover:bg-accent transition-colors"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-medium">{policy.type} Insurance</h4>
                    <p className="text-sm text-muted-foreground">
                      {policy.provider}
                    </p>
                  </div>
                  <Badge variant="outline">
                    ${policy.premium}/month
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Coverage: ${policy.coverage.toLocaleString()}
                </p>
                <Button variant="outline" className="w-full mt-3">
                  Compare Rates
                </Button>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}