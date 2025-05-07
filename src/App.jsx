
import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import "./App.css";

import Index from "./pages/Index";
import TesteNivel from "./pages/TesteNivel";
import ModalidadesPage from "./pages/ModalidadesPage";
import Contato from "./pages/Contato";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/teste-nivel" element={<TesteNivel />} />
        <Route path="/modalidades" element={<ModalidadesPage />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster position="bottom-right" />
    </BrowserRouter>
  );
}

export default App;
