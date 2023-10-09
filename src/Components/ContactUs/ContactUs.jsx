import { BsFillChatRightHeartFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ContactUs = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
    toast.success("Thanks for your Interest", { autoClose: 2000 });
  };
  return (
    <div data-aos="zoom-in-down">
      <div className="my-10 p-5 rounded-lg bg-gradient-to-r from-[#141E30] to-[#243B55] w-[95%] md:w-[70%] lg:w-[60%]  mx-auto text-white">
        <p className="text-xl font-semibold flex gap-3 items-center">
          <BsFillChatRightHeartFill className="text-2xl"></BsFillChatRightHeartFill>
          Feel Free to Contact with us
        </p>
        <form
          onSubmit={handleSubmit}
          className="text-[#141F31] flex flex-col gap-6 items-center mt-10"
        >
          <input
            className="focus:outline-none rounded-md w-[95%] lg:w-[70%] mx-auto py-3 px-5"
            placeholder="Enter Your Name"
            type="text"
            name="name"
            required
          />
          <input
            className="focus:outline-none rounded-md w-[95%] lg:w-[70%] mx-auto py-3 px-5"
            placeholder="Enter Your E-mail"
            type="email"
            name="email"
            required
          />
          <textarea
            className="focus:outline-none rounded-md w-[95%] lg:w-[70%] mx-auto py-3 px-5"
            placeholder="Your Comment here...."
            cols="30"
            name="comment"
            rows="10"
            required
          ></textarea>
          <input
            className="bg-[#141E30] text-white font-bold rounded-[20px] text-center py-2 px-6 select-none cursor-pointer mt-5 active:scale-75 duration-500 w-max border"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
