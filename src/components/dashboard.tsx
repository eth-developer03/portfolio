import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { IncomeSection } from '@/components/sections/income';
import { ExpenditureSection } from '@/components/sections/expenditure';
import { WealthSection } from '@/components/sections/wealth';
import { TaxSection } from '@/components/sections/tax';
import { LearnSection } from '@/components/sections/learn';

export function Dashboard() {
  const [activeTab, setActiveTab] = useState('income');

  return (
    <div className="space-y-8">
      <Card className="p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="income">Income</TabsTrigger>
            <TabsTrigger value="expenditure">Expenditure</TabsTrigger>
            <TabsTrigger value="wealth">Wealth</TabsTrigger>
            <TabsTrigger value="tax">Tax & Insurance</TabsTrigger>
            <TabsTrigger value="learn">Learn</TabsTrigger>
          </TabsList>
          <TabsContent value="income">
            <IncomeSection />
          </TabsContent>
          <TabsContent value="expenditure">
            <ExpenditureSection />
          </TabsContent>
          <TabsContent value="wealth">
            <WealthSection />
          </TabsContent>
          <TabsContent value="tax">
            <TaxSection />
          </TabsContent>
          <TabsContent value="learn">
            <LearnSection />
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
}