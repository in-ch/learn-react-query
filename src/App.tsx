import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./components/Home.page";
import { Layout } from "./components/Layout";
import { RQSuperHerosPage } from "./components/RQSuperHeroes.page";
import { SuperHerosPage } from "./components/SuperHeroes.page";
import { QueryClientProvider, QueryClient} from "react-query";
import { ReactQueryDevtools} from "react-query/devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Layout />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rq-super-heroes" element={<RQSuperHerosPage />} />
          <Route path="/super-heros" element={<SuperHerosPage />} />
        </Routes>
      </Router>
      <ReactQueryDevtools  initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  );
}

export default App;
