import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import PatientList from "./Views/PatientList";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <PatientList />
      </div>
    </QueryClientProvider>
  );
}

export default App;
