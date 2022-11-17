import styled from "./TeamList.module.scss";
// import Image from "next/image";

// const teams = [
//   {
//     id: 1,
//     text: "“Я восемь лет кооординатор и каждая свадьба вызывает у меня слезы от счастья, я поистине люблю свою работу”",
//     photo: "/team1.jpg",
//   },
//   {
//     id: 2,
//     text: "“Каждая пара уникальная, как и свадьба. Это не просто девис,я действительно в это верю”",
//     photo: "/team2.jpg",
//   },
//   {
//     id: 3,
//     text: "“Я обожаю сложные грандиозные свадьбы, я словно каждый раз покоряю Эверест”",
//     photo: "/team3.jpg",
//   },
// ];

const TeamList = () => {
  return (
    <div>
      <ul className={styled.teams_list}>
        <li className={styled.team_item}>
          <div className={styled.team_text_conteiner}>
            <p className={styled.team_text}>
              “Я восемь лет кооординатор и каждая свадьба вызывает у меня слезы
              от счастья, я поистине люблю свою работу”
            </p>
          </div>

          <div className={styled.first_person}></div>
        </li>
        <li className={styled.team_item}>
          <div className={styled.team_text_conteiner}>
            <p className={styled.team_text}>
              “Каждая пара уникальная, как и свадьба. Это не просто девис,я
              действительно в это верю”
            </p>
          </div>

          <div className={styled.second_person}></div>
        </li>
        <li className={styled.team_item}>
          <div className={styled.team_text_conteiner}>
            <p className={styled.team_text}>
              “Я обожаю сложные грандиозные свадьбы, я словно каждый раз покоряю
              Эверест”
            </p>
          </div>
          <div className={styled.third_person}></div>
        </li>
      </ul>
      {/* <ul className={styled.teams_list}>
        {teams.map(({ id, photo, text }) => {
          return (
            <>
              <li key={id} className={styled.team_item}>
                <div className={styled.team_text_conteiner}>
                  <p className={styled.team_text}>{text}</p>
                </div>

                <div className="">
                  <Image
                    src={photo}
                    width={120}
                    height={115}
                    sizes="(max-width:767px) 100vh,"
                    alt="teams-person"
                  />
                </div>
              </li>
            </>
          );
        })}
      </ul> */}
    </div>
  );
};

export default TeamList;
