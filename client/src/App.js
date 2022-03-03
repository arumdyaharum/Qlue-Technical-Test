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
      { data.length === 0 ? "loading..."
      : data.map((arr) => (
        <div key={arr.id}>
          <p>{ arr.full_name }</p>
          <p>{ arr.expert_skills.join(", ") || "-" }</p>
          <br/>
        </div>
      ))
      }
    </div>
  );
}

export default App;
