import logo from "/logo.png";

const AboutUs = () => {
  return (
    <div className="mt-16">
      <p className="text-center text-3xl md:text-4xl lg:text-5xl font-semibold">
        About Us
      </p>
      <div className="flex flex-col items-center lg:flex-row mt-10 gap-4 md:gap-0">
        <img className="md:w-1/2" src={logo} alt="" />
        <div className="text-center md:text-left w-[95%] lg:w-full">
          <p className="text-4xl font-semibold font-logo mb-2">
            Infinite Amusements
          </p>
          <p className="text-xl font-semibold mb-4">
            Crafting Unforgettable Experiences in Entertainment Event Management
          </p>
          <p className="text-justify md:text-left">
            In a world where entertainment is a crucial aspect of modern life,
            event management companies play a pivotal role in shaping our
            experiences. Among the many,{" "}
            <span className="font-semibold">Infinite Amusements</span> stands
            out as a company that not only understands the importance of
            entertainment but also excels in creating unforgettable moments. Let
            us delve into the world of Infinite Amusements and discover what
            sets them apart in the realm of event management. A Journey into
            Infinite Amusements:{" "}
            <span className="font-semibold">Infinite Amusements</span> is not
            your run-of-the-mill entertainment events management company; it is
            an oasis of creativity and innovation. Founded on the belief that
            every event should be a unique and enchanting experience, this
            company has quickly risen to prominence, earning a reputation for
            excellence in the industry. A Passion for Entertainment: What
            distinguishes Infinite Amusements from the rest is their unwavering
            passion for entertainment. They understand that entertainment is not
            just about performers on a stage; it is about storytelling,
            emotions, and the magic that happens when people come together. This
            passion fuels their commitment to creating events that leave a
            lasting impact.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
