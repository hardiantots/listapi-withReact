import { useEffect } from "react";
import ButtonFilter from "./components/ButtonFilter";
import Header from "./components/Header";
import ListApi from "./components/ListApi";
import useAxios from "./hooks/useAxios";

function App() {
  const { fetchData, response, loading } = useAxios('entries');

  useEffect(() => {
    fetchData({ params: { category: 'Animals' } });
  }, []);

  return (
    <div>
      <Header fetchData={fetchData} />
      <div className="container mx-auto px-2 sm:px-0 sm:grid sm:grid-cols-[30%_minmax(0,2fr)] sm:max-w-6xl sm:gap-6">
        <ButtonFilter fetchData={fetchData}/>
        <ListApi response={response} loading={loading}/>
      </div>
    </div>
  );
}

export default App;
