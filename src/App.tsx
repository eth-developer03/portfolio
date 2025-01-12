import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { StarBackground } from '@/components/star-background';
import { Navigation } from '@/components/navigation';
import { Dashboard } from '@/components/dashboard';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="genz-finance-theme">
      <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
        <StarBackground />
        <div className="relative z-10">
          <Navigation />
          <main className="container mx-auto px-4 py-8">
            <Dashboard />
          </main>
        </div>
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;