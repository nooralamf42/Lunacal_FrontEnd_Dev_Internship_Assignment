import React from "react";
import { Gallery, Info } from "./components";

function App() {
  return (
    <section className="grid h-screen justify-end items-center content-center px-14 bg-[#202328] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:35px_35px]">
      {/* info component */}
      <Info />

      {/* gallery component */}
      <Gallery />
    </section>
  );
}

export default App;
