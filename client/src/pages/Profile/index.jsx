import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./style.css";

export default function Profile() {
  const { data } = useSelector((state) => state);
  const params = useParams();
  const profile = data?.find((el) => el.full_name === params.name)
  return (
    <div className="profileContainer">
      <div className="profileCard">
        <div className="imageContainer">
          <img src={require("../../assets/user.png")} className="profileImage" alt="" />
          <div className="imagePin">C</div>
        </div>
        { data.length === 0 ? "Please back to home..." : (
          <>
            <p className="profileTitle">{profile.full_name.toUpperCase()}</p>
            { profile.expert_skills.length === 0 ? undefined : (
              <div>
                <span className="expertSkills">Expert Skills</span>
                <ul>
                  { profile.expert_skills.map((el) => (
                    <li key={el} className="skill">{ el[0].toUpperCase() + el.slice(1) }</li>
                  )) }
                </ul>
              </div>
            ) }
          </>
        ) }
        <p className="lorem">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit est eget nulla rhoncus scelerisque. Curabitur at magna fermentum, ultricies turpis quis, congue est. Duis quis odio aliquet, placerat lorem ac, feugiat tortor. Fusce tincidunt, erat quis porta cursus, dui ex convallis ipsum, ac pellentesque elit lorem ut lorem. Nullam et tellus tortor. Suspendisse ornare, nisi accumsan dapibus elementum, sapien eros convallis ligula, vitae maximus erat nisi mattis leo. Aenean dignissim libero a mi tempus, sit amet tincidunt purus dapibus.
        </p>
      </div>
    </div>
  )
}