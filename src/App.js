import React, { Suspense, lazy } from "react";
import "./App.css";

const Data = lazy(() => import("./Data"));

function App() {
  return (
    <div>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Data />
      </Suspense>
    </div>
  );
}

export default App;
