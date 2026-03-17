import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CustomCursor from "./components/CustomCursor"; // ✅ TAMBAHAN

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  // 🔥 LOADING STATE
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 detik

    return () => clearTimeout(timer);
  }, []);

  // 🔥 LOADING SCREEN
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-black text-white">
        <h1 className="text-3xl animate-pulse font-bold">
          Loading...
        </h1>
      </div>
    );
  }

  // 🔥 MAIN APP
  return (
    <QueryClientProvider client={queryClient}>
      <CustomCursor /> {/* ✅ TAMBAHAN */}

      <TooltipProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />

            {/* Tambahan kalau mau nanti */}
            {/* <Route path="/about" element={<About />} /> */}

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;