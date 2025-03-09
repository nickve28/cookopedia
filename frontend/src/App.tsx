import { Button } from "primereact/button";
import "./index.css";
import { PrimeReactProvider } from "primereact/api";
import {
  QueryClientProvider,
  QueryClient,
  useQuery,
} from "@tanstack/react-query";

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
  return (
    <>
      <Button label="Click" />
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
