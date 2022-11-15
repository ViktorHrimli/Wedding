import styled from "./Team.module.scss";
import TeamList from "../TeamList/TeamList";

const Team = () => {
  return (
    <div className={styled.conteiner}>
      <div>
        <h1 className={styled.team_title}>
          Наши Координаторы <span></span>
        </h1>
        <p className={styled.team_text}>волшебники</p>
      </div>
      <TeamList />
    </div>
  );
};

export default Team;
