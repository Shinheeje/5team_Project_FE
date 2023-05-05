import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "react-query";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Post from "./pages/Post";
import Modify from "./pages/Modify"

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/post" element={<Post />} />
          <Route path="/Detail/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
