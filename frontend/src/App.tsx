import { Button } from "primereact/button";
import "./index.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { PrimeReactProvider } from "primereact/api";

import { Sidebar } from "primereact/sidebar";

import {
  QueryClientProvider,
  QueryClient,
  useQuery,
} from "@tanstack/react-query";
import { useState } from "react";

const useFetchRecipes = () => {
  return useQuery({
    queryKey: ["recipes"],
    queryFn: async () => {
      const response = await fetch("http://localhost:3000/recipes");
      return response.json();
    },
  });
};

const queryClient = new QueryClient();

const TestComponent = () => {
  const { isPending, data } = useFetchRecipes();
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Sidebar visible={visible} onHide={() => setVisible(false)}>
        <h2>Sidebar</h2>
      </Sidebar>
      <Button onClick={() => setVisible(true)}>Show sidebar</Button>
      {isPending
        ? "Loading..."
        : data?.map((recipe: unknown, index: number) => (
            <div key={index.toString()}>{JSON.stringify(recipe)}</div>
          ))}
    </>
  );
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PrimeReactProvider>
        <TestComponent />
      </PrimeReactProvider>
    </QueryClientProvider>
  );
}

export default App;
