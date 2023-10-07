import "swiper/css";
// import "swiper/css/effect-coverflow";
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
import "./Sliders.css";
// import user from "/user.jpg";

import s1 from "/1.jpg";
import s2 from "/2.jpg";
import s3 from "/3.jpg";

const Sliders = () => {
  return (
    <div className="-z-10">
      <Swiper
        className="h-[100vh]"
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
          disableOnInteraction: false,
        }}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true, dynamicBullets: true }}
        scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className="">
            <img className="w-full relative" src={s1} alt="" />
            <div className="bg-[rgba(0,0,0,0.4)] p-10 rounded-lg w-1/2 absolute top-1/2 -translate-y-1/2 left-32 text-white text-6xl font-logo flex items-start flex-col gap-5">
              <p>Rhythm & Resonance Events</p>
              <p className="text-lg">
                At Rhythm & Resonance Events, we understand that every note,
                every beat, and every melody has the potential to touch hearts
                and inspire souls. Our team of dedicated professionals combines
                their expertise in event planning with their love for music to
                craft exceptional experiences that resonate with audiences of
                all backgrounds and tastes.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <img className="w-full relative" src={s2} alt="" />
            <div className="bg-[rgba(0,0,0,0.4)] p-10 rounded-lg w-1/2 absolute top-1/2 -translate-y-1/2 left-32 text-white text-6xl font-logo flex items-start flex-col gap-5">
              <p>Pulse of the Stage Events</p>
              <p className="text-lg">
                At Pulse of the Stage Events, we believe that each event is a
                unique composition waiting to be conducted to perfection. Our
                team of experienced professionals combines their creative
                prowess with meticulous planning and precise execution to ensure
                that every event we manage pulsates with energy, excitement, and
                sheer brilliance.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <img className="w-full relative" src={s3} alt="" />
            <div className="bg-[rgba(0,0,0,0.4)] p-10 rounded-lg w-1/2 absolute top-1/2 -translate-y-1/2 left-32 text-white text-6xl font-logo flex items-start flex-col gap-5">
              <p>RockStar Event Makers</p>
              <p className="text-lg">
                Our commitment to excellence extends beyond the spotlight. We
                pride ourselves on working collaboratively with artists, venues,
                and production teams to ensure seamless execution. From securing
                the perfect venue to managing every technical detail, we leave
                no stone unturned in delivering a concert that exceeds
                expectations.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Sliders;
