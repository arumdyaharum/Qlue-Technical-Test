import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postData } from "../../store/actionCreators";
import "./style.css";

export default function Create() {
  const [name, setName] = useState("");
  const [skills, setSkills] = useState([]);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const checklist = (e) => {
    if(e.target.checked) {
      setSkills([...skills, e.target.value]);
    } else {
      setSkills(skills.filter((el) => el !== e.target.value));
    }
  };

  const submit = (e) => {
    e.preventDefault();
    if(!name) {
      setError(true);
    } else {
      dispatch(postData({
        name,
        skills,
      }))
        .then(() => {
          navigate('/');
        })
        .catch((err) => {
          console.log(err);
        })
    }
  };

  return (
    <div className="profileContainer">
      <form onSubmit={submit} className="profileCard">
        <span className="profileTitle">Create Person</span>
        <div className="inputContainer">
          <label htmlFor="name" className="label">Name</label>
          <input type="text" name="name" className="nameInput" onChange={(e) => setName(e.target.value)} id="name" />
          { !error ? undefined : ( <span className="error">Please fill in name above</span> )}
          <span className="label">Expert Skills</span>
          <div>
            <input type="checkbox" name="skills" value="javascript" id="javascript" onChange={checklist} />
            <label htmlFor="javascript">javascript</label>
          </div>
          <div>
            <input type="checkbox" name="skills" value="python" id="python" onChange={checklist} />
            <label htmlFor="python">python</label>
          </div>
          <div>
            <input type="checkbox" name="skills" value="golang" id="golang" onChange={checklist} />
            <label htmlFor="golang">golang</label>
          </div>
          <div>
            <input type="checkbox" name="skills" value="php" id="php" onChange={checklist} />
            <label htmlFor="php">php</label>
          </div>
        </div>
        <button type="submit" className="button">Submit</button>
      </form>
    </div>
  )
}