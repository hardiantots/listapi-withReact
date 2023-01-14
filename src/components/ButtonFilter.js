import { useEffect } from "react";
import useAxios from "../hooks/useAxios"

const ButtonFilter = ({ fetchData: fetchAPi }) => {
  const { fetchData, response: { categories }, loading } = useAxios('categories');

  useEffect(() => {
    fetchData();
  }, []);

  if(loading) {
    return (
      <div className="animate-pulse my-5 inline-block text-center sm:grid sm:grid-cols-2">
        {[...Array(35).keys()].map(num => (
          <div key={num} className="h-7 w-20 bg-gray-300 m-1 rounded-sm inline-block"></div>
        ))}
      </div>
    )
  }

  const clickFilterButton = e => {
    fetchAPi({ params: { category: e.target.value } });
  }

  return (
    <div className="my-5">
      <div className="mx-2 mb-4">
        <h3 className="font-semibold text-xl text-slate-600">List Categories :</h3>
      </div>
      <div className="grid grid-cols-2">
        {categories && categories.map(button => (
          <button
            key={button}
            className="bg-gradient-to-l bg-cyan-700 text-white m-1 py-1 px-2 rounded-lg h-16 transition-all sm:text-xs hover:bg-cyan-500"
            onClick={clickFilterButton}
            value={button}
          >{button}</button>
        ))}
      </div>
    </div>
  )
}

export default ButtonFilter