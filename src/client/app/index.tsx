import * as React from "react";

const RemoteButton = React.lazy(() => import("appOne/Box"));

const App = () => (
  <div>
    <h1>Typescript</h1>
    <h2>AppTwo Import MF</h2>
    <React.Suspense fallback="Loading Button">
      <RemoteButton />
    </React.Suspense>
  </div>
);

export default App;
