import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./components/Home.page";
import { Layout } from "./components/Layout";
import { SuperHerosPage } from "./components/SuperHeroes.page";
import { QueryClientProvider, QueryClient} from "react-query";
import { ReactQueryDevtools} from "react-query/devtools";
import { RQSuperHeroPage } from "./components/RQSuperHero.page";
import { RQSuperHerosPage } from "./components/RQSuperHeroes.page";
import { ParallelQueries } from "./components/ParallelQueries.page";
import { DynamicParall } from "./components/DynamicParallel.page";
import { DependentQueriesPage } from "./components/DependentQueries.page";
import { PaginatedQueries } from "./components/PaginatedQueries.page";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Layout />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/super-heros" element={<SuperHerosPage />} />
          <Route path="/rq-super-heroes" element={<RQSuperHerosPage />} />
          <Route path="/rq-super-heros/:heroId" element={<RQSuperHeroPage />} />
          <Route path="/rq-parallel" element={<ParallelQueries />} />
          <Route path="/rq-dynamic-parallel" element={<DynamicParall heroIds={[1,3]} />} />
          <Route path="/rq-dependent-query" element={<DependentQueriesPage email='vvv@example.com' />} />
          <Route path="/rq-paginated-query" element={<PaginatedQueries />} />
          
        </Routes>
      </Router>
      <ReactQueryDevtools  initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  );
}

export default App;
