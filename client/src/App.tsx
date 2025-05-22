import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import About from "@/pages/About";
import Team from "@/pages/Team";
import Gallery from "@/pages/Gallery";
import Contact from "@/pages/Contact";
import Appointment from "@/pages/Appointment";
import NotFound from "@/pages/not-found";
import { useState, useEffect } from "react";
import Preloader from "@/components/Preloader";
import ScrollToTop from "@/components/ScrollToTop";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <TooltipProvider>
      <Toaster />
      <Layout>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/about" component={About} />
          <Route path="/team" component={Team} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/contact" component={Contact} />
          <Route path="/appointment" component={Appointment} />
          <Route component={NotFound} />
        </Switch>
        <ScrollToTop />
      </Layout>
    </TooltipProvider>
  );
}

export default App;
