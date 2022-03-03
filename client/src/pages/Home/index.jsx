import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card";
import { fetchData } from "../../store/actionCreators";
import "./style.css";

export default function Home() {
  const { data } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch]);
  return (
    <div className="homeContainer">
      { data.length === 0 ? "loading..."
      : data.map((arr) => ( <Card key={arr.id} data={arr} /> ))
      }
    </div>
  );
}
