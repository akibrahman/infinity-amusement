import { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";

const Services = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);
  return (
    <div className="mt-16">
      <p className="text-center text-5xl font-semibold">Services</p>
      <div className="w-[90%] mx-auto grid grid-cols-3 gap-6 mt-8">
        {events.map((event) => (
          <div key={event.id} className="p-5 rounded-lg shadow-lg">
            <img className="rounded-lg h-52 w-full" src={event.image} alt="" />
            <p className="text-2xl text-center font-medium mt-3">
              {event.name}
            </p>
            <p className="leading-5 mt-3 border-l-4 pl-3">
              {event.description}
            </p>
            <div className="mt-8 flex items-center justify-between">
              <p className="font-bold text-lg bg-green-400 w-max px-3 py-1 rounded-lg text-white">
                ${event.price}
              </p>
              <button className="font-semibold px-3 py-1 rounded-lg active:scale-75 duration-300 cursor-pointer">
                <BsArrowRight className="font-black text-green-400 text-3xl"></BsArrowRight>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
