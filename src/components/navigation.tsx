import { Button } from '@/components/ui/button';
import { Wallet, LineChart, PiggyBank, Calculator, Lightbulb } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const navItems = [
  { icon: Wallet, label: 'Income', color: 'text-green-500' },
  { icon: LineChart, label: 'Expenditure', color: 'text-red-500' },
  { icon: PiggyBank, label: 'Wealth Management', color: 'text-blue-500' },
  { icon: Calculator, label: 'Tax & Insurance', color: 'text-purple-500' },
  { icon: Lightbulb, label: 'Learn', color: 'text-yellow-500' },
];

export function Navigation() {
  const [active, setActive] = useState(0);

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4">
        <div className="mr-4 hidden md:flex">
          <h1 className="text-xl font-bold">GenZ Finance</h1>
        </div>
        <div className="flex items-center space-x-4 lg:space-x-6">
          {navItems.map((item, index) => (
            <Button
              key={item.label}
              variant="ghost"
              className={cn(
                'flex items-center space-x-2',
                active === index && 'bg-accent'
              )}
              onClick={() => setActive(index)}
            >
              <item.icon className={cn('h-4 w-4', item.color)} />
              <span>{item.label}</span>
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
}