import { RootRouter } from "./route/RootRouter.tsx";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css"

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RootRouter />
    </QueryClientProvider>
  );
}

export default App;
