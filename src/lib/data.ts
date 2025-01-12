import { faker } from '@faker-js/faker';

// Income Data
export const generateJobData = () => ({
  title: faker.person.jobTitle(),
  company: faker.company.name(),
  salary: faker.number.int({ min: 30000, max: 150000 }),
  skills: Array.from({ length: 3 }, () => faker.person.jobArea()),
  growthPotential: faker.number.int({ min: 1, max: 100 }),
});

// Expenditure Data
export const generateExpenseData = () => ({
  category: faker.helpers.arrayElement([
    'Housing',
    'Food',
    'Transportation',
    'Entertainment',
    'Shopping',
    'Healthcare',
  ]),
  amount: faker.number.int({ min: 10, max: 3000 }),
  date: faker.date.recent(),
  merchant: faker.company.name(),
});

// Investment Data
export const generateInvestmentData = () => ({
  type: faker.helpers.arrayElement([
    'Stocks',
    'Crypto',
    'Mutual Funds',
    'Gold',
    'Fixed Deposit',
  ]),
  amount: faker.number.int({ min: 100, max: 10000 }),
  returns: faker.number.float({ min: -15, max: 30, precision: 0.01 }),
  risk: faker.number.int({ min: 1, max: 5 }),
});

// Insurance Data
export const generateInsuranceData = () => ({
  type: faker.helpers.arrayElement(['Health', 'Life', 'Vehicle', 'Property']),
  provider: faker.company.name(),
  premium: faker.number.int({ min: 50, max: 500 }),
  coverage: faker.number.int({ min: 10000, max: 1000000 }),
});

// Learning Scenarios
export const scenarios = [
  {
    title: 'Debt Management',
    description: 'Learn how to manage and eliminate debt effectively',
    difficulty: 'Medium',
    rewards: 100,
  },
  {
    title: 'Emergency Fund',
    description: 'Build a safety net for unexpected expenses',
    difficulty: 'Easy',
    rewards: 50,
  },
  {
    title: 'Investment Basics',
    description: 'Understanding different investment vehicles',
    difficulty: 'Hard',
    rewards: 150,
  },
  {
    title: 'Budgeting 101',
    description: 'Create and maintain a successful budget',
    difficulty: 'Easy',
    rewards: 50,
  },
  {
    title: 'Tax Planning',
    description: 'Optimize your tax strategy legally',
    difficulty: 'Hard',
    rewards: 150,
  },
];

// Generate mock data sets
export const mockData = {
  jobs: Array.from({ length: 10 }, generateJobData),
  expenses: Array.from({ length: 20 }, generateExpenseData),
  investments: Array.from({ length: 15 }, generateInvestmentData),
  insurance: Array.from({ length: 8 }, generateInsuranceData),
};