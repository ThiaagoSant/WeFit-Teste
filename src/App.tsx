import { ShoppingCartProvider } from "./contexts/ShoppingCartContext";
import Router from "./routes/index";
import GlobalStyles from "./styles/global";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        <ShoppingCartProvider>
          <Router />
        </ShoppingCartProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
