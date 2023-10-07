import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const Team = () => {
  const [team, setTeam] = useState([]);
  useEffect(() => {
    fetch("/team.json")
      .then((res) => res.json())
      .then((data) => setTeam(data));
  }, []);
  return (
    <div className="mt-16">
      <p className="text-center text-5xl font-semibold">Our Team</p>
      <Marquee pauseOnHover={true} gradient={true} className="my-10 flex">
        {team.map((t) => (
          <div key={t.id} className="mr-8">
            <img className="w-40 h-32 rounded-lg" src={t.image} alt="" />
            <p className="font-semibold text-center mt-3">{t.designation}</p>
            <p className="font-semibold text-center">{t.name}</p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Team;
