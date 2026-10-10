import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch, Router as BaseRouter } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import { ChatPage, EnterpriseReadinessPage, HowItWorksPage, IntegrationsPage, PredictPage, ProductOverview } from "./pages/ProductPages";
import { DemoPage, LoginPage, NotFoundPage, OutcomesPage, SolutionPage } from "./pages/SolutionPages";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/product" component={ProductOverview} />
      <Route path="/product/chat" component={ChatPage} />
      <Route path="/product/predict" component={PredictPage} />
      <Route path="/product/how-it-works" component={HowItWorksPage} />
      <Route path="/product/integrations" component={IntegrationsPage} />
      <Route path="/product/enterprise-readiness" component={EnterpriseReadinessPage} />
      <Route path="/solutions/customer-churn">{() => <SolutionPage mission="churn" />}</Route>
      <Route path="/solutions/customer-lifetime-value">{() => <SolutionPage mission="clv" />}</Route>
      <Route path="/solutions/customer-segmentation">{() => <SolutionPage mission="segmentation" />}</Route>
      <Route path="/outcomes" component={OutcomesPage} />
      <Route path="/book-demo" component={DemoPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/404" component={NotFoundPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <BaseRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}><Router /></BaseRouter>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
