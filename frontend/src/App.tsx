import "./index.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { PrimeReactProvider } from "primereact/api";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { RecipesPage } from "./Recipes/RecipePage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PrimeReactProvider>
        <RecipesPage />
      </PrimeReactProvider>
    </QueryClientProvider>
  );
}

export default App;
