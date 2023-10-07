import Marquee from "react-fast-marquee";
import t1 from "/t1.jpg";
import t10 from "/t10.jpg";
import t2 from "/t2.jpg";
import t3 from "/t3.jpg";
import t4 from "/t4.jpg";
import t5 from "/t5.jpg";
import t6 from "/t6.jpg";
import t7 from "/t7.jpg";
import t8 from "/t8.jpg";
import t9 from "/t9.jpg";

const Team = () => {
  return (
    <div className="mt-16">
      <p className="text-center text-5xl font-semibold">Our Team</p>
      <Marquee pauseOnHover={true} gradient={true} className="my-10 flex">
        <div className="mr-8">
          <img className="w-40 h-32 rounded-lg" src={t1} alt="" />
          <p className="font-semibold text-center mt-3">CEO</p>
          <p className="font-semibold text-center">Akib Rahman</p>
        </div>
        <div className="mr-8">
          <img className="w-40 h-32 rounded-lg" src={t2} alt="" />
          <p className="font-semibold text-center mt-3">Producer</p>
          <p className="font-semibold text-center">Akib Rahman</p>
        </div>
        <div className="mr-8">
          <img className="w-40 h-32 rounded-lg" src={t3} alt="" />
          <p className="font-semibold text-center mt-3">Relations Manager</p>
          <p className="font-semibold text-center">Akib Rahman</p>
        </div>
        <div className="mr-8">
          <img className="w-40 h-32 rounded-lg" src={t4} alt="" />
          <p className="font-semibold text-center mt-3">Creative Director</p>
          <p className="font-semibold text-center">Akib Rahman</p>
        </div>
        <div className="mr-8">
          <img className="w-40 h-32 rounded-lg" src={t5} alt="" />
          <p className="font-semibold text-center mt-3">Production Manager</p>
          <p className="font-semibold text-center">Akib Rahman</p>
        </div>
        <div className="mr-8">
          <img className="w-40 h-32 rounded-lg" src={t6} alt="" />
          <p className="font-semibold text-center mt-3">
            Logistics Coordinator
          </p>
          <p className="font-semibold text-center">Akib Rahman</p>
        </div>
        <div className="mr-8">
          <img className="w-40 h-32 rounded-lg" src={t7} alt="" />
          <p className="font-semibold text-center mt-3">Technical Support</p>
          <p className="font-semibold text-center">Akib Rahman</p>
        </div>
        <div className="mr-8">
          <img className="w-40 h-32 rounded-lg" src={t8} alt="" />
          <p className="font-semibold text-center mt-3">Resources Manager</p>
          <p className="font-semibold text-center">Akib Rahman</p>
        </div>
        <div className="mr-8">
          <img className="w-40 h-32 rounded-lg" src={t9} alt="" />
          <p className="font-semibold text-center mt-3">Sales Coordinator</p>
          <p className="font-semibold text-center">Akib Rahman</p>
        </div>
        <div className="mr-8">
          <img className="w-40 h-32 rounded-lg" src={t10} alt="" />
          <p className="font-semibold text-center mt-3">Event Planner</p>
          <p className="font-semibold text-center">Akib Rahman</p>
        </div>
      </Marquee>
    </div>
  );
};

export default Team;
