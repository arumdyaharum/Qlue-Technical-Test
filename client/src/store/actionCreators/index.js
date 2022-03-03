import { FETCH_DATA } from "../actionTypes";

export const dispatchData = (payload) => {
  return {
    type: FETCH_DATA,
    payload
  };
};

export const fetchData = () => {
  return (dispatch, getState) => {
    const { baseURL } = getState();
    fetch(`${baseURL}/data`)
      .then((response) => {
        if(!response.ok) return response.json().then((err) => { throw(err); });
        return response.json();
      })
      .then((res) => {
        const data = res.map(arr => {
          let skills = [];
          for(let skill in arr.skills) {
            skills = arr.skills[skill] === "expert" ? [...skills, skill] : skills;
          }
          let temp = {
            id: arr.id,
            full_name: `${arr.first_name} ${arr.last_name}`,
            expert_skills: skills,
          };
          return temp;
        });
        dispatch(dispatchData(data));
      })
      .catch((err) => {
        console.log(err);
      });
  }
}