import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./store/actionCreators";

function App() {
  const { data } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch]);
  return (
    <div className="App">
      { data.length > 0 ? JSON.stringify(data) : "loading..." }
    </div>
  );
}

export default App;
