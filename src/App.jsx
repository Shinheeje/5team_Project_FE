import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Post from "./pages/Post";
import Modify from "./pages/Modify";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Header from "./pages/Header";

import React, { useEffect, useState } from "react";
import axios from "axios";

const queryClient = new QueryClient();

function App() {
  // const [hello, setHello] = useState("");

  // useEffect(() => {
  //   axios
  //     .get("/api/hello")
  //     .then((response) => setHello(response.data))
  //     .catch((error) => console.log(error));
  // }, []);
  return (
    // <div>백엔드에서 가져온 데이터입니다 : {hello}</div>

    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        {/* 헤더보여주는페이지 */}
        <Routes>
          <Route element={<Header />}>
            <Route path="/" element={<Main />} />
            {/* <Route path="/modify" element={<Modify />} /> */}
            <Route path="/modify/:id" element={<Modify />} />

            <Route path="/post" element={<Post />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
