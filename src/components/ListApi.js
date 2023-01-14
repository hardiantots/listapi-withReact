import CardApi from "./CardApi"

const ListApi = ({ response, loading }) => {

  if(loading) {
    return (
      <div className="mt-2 sm:mt-5 grid sm:grid-cols-1 md:grid-cols-2 gap-4 animate-pulse">
        {[...Array(12).keys()].map(num => (
          <div key={num} className="h-28 w-full sm:h-52 bg-gray-300 m-1 rounded-sm"></div>
        ))}
      </div>
    );
  }

  if(!response.entries) {
    return <p className="text-center text-gray-500 text-2xl mt-20">Something went wrong 😢</p>
  }

  return (
    <div className="mx-1 mb-10">
      <h3 className="font-semibold text-xl text-slate-600 sm:mt-5 mb-5">List API :</h3>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
        {response.entries && response.entries.map((api, index) => <CardApi api={api} key={index} />)}
      </div>
    </div>
  )
}

export default ListApi