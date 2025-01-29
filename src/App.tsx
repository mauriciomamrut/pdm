import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import "./App.css";
import PatientList from "./Views/PatientList/PatientList";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <PatientList />
        <Toaster position="top-right" />
      </div>
    </QueryClientProvider>
  );
}

export default App;
