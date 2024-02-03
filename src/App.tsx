import {
  decrement,
  increment,
  incrementBypayload,
} from "./Redux/feautures/CounterSlice";
import { useAppDispatch, useAppSelector } from "./Redux/hook";

function App() {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex  border border-gray-500 bg-slate-200 p-20">
        <button
          onClick={() => dispatch(increment())}
          className="px-3 py-1 bg-green-500 rounded-md"
        >
          increment
        </button>
        <button
          onClick={() => dispatch(incrementBypayload(5))}
          className="px-3 py-1 bg-green-500 rounded-md"
        >
          incrementBy 5
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
