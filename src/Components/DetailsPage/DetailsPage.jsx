import { BsBoxArrowInRight } from "react-icons/bs";
import { useLoaderData, useParams } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  A11y,
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const DetailsPage = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const target = data.find((d) => parseInt(d.id) === parseInt(id));
  return (
    <div className="font-poppins">
      <div className="-z-10 select-none">
        <Swiper
          className="h-[100%] lg:h-[80vh]"
          // install Swiper modules
          // effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          // coverflowEffect={{
          //   rotate: 0,
          //   stretch: 0,
          //   depth: 100,
          //   modifier: 2.5,
          // }}
          modules={[
            Navigation,
            Pagination,
            Scrollbar,
            A11y,
            EffectFade,
            Autoplay,
          ]}
          effect="fade"
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true, dynamicBullets: true }}
          scrollbar={{ draggable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
        >
          {target.images.map((i) => (
            <SwiperSlide key={target.images.indexOf(i)}>
              <div className="">
                <img className="w-full relative" src={i} alt="" />
                <div className="bbg-[rgba(0,0,0,0.5)] w-full h-full absolute top-0 left-0"></div>
              </div>
            </SwiperSlide>
          ))}
          <SwiperSlide>
            <div className="">
              <img className="w-full relative" src={target.image} alt="" />
              <div className="bg-[rgba(0,0,0,0.2)] w-full h-full absolute top-0 left-0"></div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="w-[90%] mx-auto">
          <p className="font-logo text-2xl text-center md:text-left md:text-3xl lg:text-4xl my-6">
            {target.name}
          </p>
          <p
            data-aos="zoom-out-up"
            className="border-l-4 rounded-l-lg border-green-400 pl-4 "
          >
            {target.description}
          </p>
          <div data-aos="fade-right" className="my-14 flex items-center gap-10">
            <p className="text-xl">
              <span className="font-bold">Price</span> -{" "}
              <span className="border-green-400 border-2 px-3 py-1 rounded-lg font-semibold ">
                ${target.price}
              </span>
            </p>
            <button className="bg-green-500 text-xl px-6 py-2 rounded-lg font-medium flex items-center gap-3 active:scale-75 duration-500">
              Book Now <BsBoxArrowInRight></BsBoxArrowInRight>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
