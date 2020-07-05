import React, { Suspense, lazy } from "react";
import "./App.css";
import Loading from "./loading";

const Data = lazy(() => import("./Data"));

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Data />
      </Suspense>
    </>
  );
}

export default App;
