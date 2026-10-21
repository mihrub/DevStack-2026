import { Suspense, useState } from "react";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Technologies from "./components/Technologies";
import type { Technology } from "./types/technology";

const fetchTechnologies = async (): Promise<Technology[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  // const technologiesPromise = dataFetch();
  const [technologiesPromise] = useState(() => fetchTechnologies());
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense fallback="">
        <Technologies technologiesPromise={technologiesPromise} />
      </Suspense>
    </>
  );
}

export default App;
