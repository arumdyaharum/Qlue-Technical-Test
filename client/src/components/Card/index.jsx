import { NavLink } from "react-router-dom";
import "./style.css";

export default function Card({ data }) {
  return (
    <NavLink to={ `/${data.full_name}` } className="cardContainer">
      <p className="cardTitle">{ data.full_name }</p>
      <p>Expert skills:</p>
      <p>{ data.expert_skills.join(", ") || "-" }</p>
    </NavLink>
  )
}