import { NavLink } from "react-router-dom";
import "./style.css";

export default function Card({ data }) {
  const skills = data.expert_skills.map((el) => {
    return el[0].toUpperCase() + el.slice(1); 
  });
  return (
    <NavLink to={ `/profile/${data.full_name}` } className="cardContainer">
      <p className="cardTitle">{ data.full_name }</p>
      <p>Expert skills:</p>
      <p>{ skills.join(", ") || "-" }</p>
    </NavLink>
  )
}