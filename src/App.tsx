import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./Redux/feautures/CounterSlice";

function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex  border border-gray-500 bg-slate-200 p-20">
        <button
          onClick={() => dispatch(increment())}
          className="px-3 py-1 bg-green-500 rounded-md"
        >
          increment
        </button>
        <h1 className="m-4 text-xl">{count}</h1>
        <button
          onClick={() => dispatch(decrement())}
          className="px-3 py-1 bg-red-500 rounded-md"
        >
          decrement
        </button>
      </div>
    </div>
  );
}

export default App;
