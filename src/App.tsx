import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import "./App.css";
import PatientList from "./Views/PatientList/PatientList";
import { AppContainer } from "./App.styles";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContainer>
        <PatientList />
        <Toaster position="top-right" />
      </AppContainer>
    </QueryClientProvider>
  );
}

export default App;
