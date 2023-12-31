import { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Services = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);
  return (
    <div className="mt-16">
      <p className="text-center text-3xl md:text-4xl lg:text-5xl font-semibold">
        Services
      </p>
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {events.map((event) => (
          <div
            data-aos="flip-left"
            key={event.id}
            className="p-5 rounded-lg shadow-lg"
          >
            <img className="rounded-lg h-52 w-full" src={event.image} alt="" />
            <p className="text-2xl text-center font-medium mt-3">
              {event.name}
            </p>
            <p className="leading-5 mt-3 border-l-4 pl-3">
              {event.description}
            </p>
            <div className="mt-8 flex items-center justify-between">
              <p className="font-bold text-lg bg-[#141E30] w-max px-3 py-1 rounded-lg text-white">
                ${event.price}
              </p>
              <Link to={`/service/details/${event.id}`}>
                <button className="font-semibold px-3 py-1 rounded-lg active:scale-75 duration-300 cursor-pointer">
                  <BsArrowRight className="active:scale-75 duration-500 font-black text-[#141E30] text-3xl"></BsArrowRight>
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
