import { useLoaderData } from "react-router-dom";

const Events = () => {
  const data = useLoaderData();
  return (
    <div>
      <div className="w-[90%] mx-auto shadow-2xl p-10 my-10 flex items-center flex-col gap-5">
        <p className="font-semibold text-4xl mb-10 text-[#243B55]">
          Our Upcoming Events
        </p>
        {data.map((event) => (
          <div
            key={event.id}
            className="flex items-center gap-6 bg-[#1F3149] p-8 rounded-lg text-white "
          >
            <p className="font-semibold text-lg">{event.id}.</p>
            <img className="w-40 rounded-md" src={event.image} alt="" />
            <p className="text-xl font-medium border-2 rounded-lg px-3 py-1 w-[300px] text-center">
              {event.name}
            </p>
            <div className="w-[300px] text-center">
              <p>
                <span className="font-semibold">Location:</span> {event.place}
              </p>
              <p>
                <span className="font-semibold">Date:</span> {event.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
