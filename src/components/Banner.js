import { ReactTyped } from "react-typed";

export const Banner = () => {
  return (
    <div className="bg-[#2699fb]  w-full py-[100px]">
      <div className="max-w-[1240px] my-[100px] mx-auto text-center font-bold">
        <div className=" text-xl md:text-4xl font-bold md:p-[24px]">
          Learn with us
        </div>

        <h2 className="text-white font-bold text-3xl md:text-[80px] text-center md:p-[24px]">
          Grow with us.
        </h2>
        <div className="text-[20px] md:text-[50px] text-white  md:p-[24px]   ">
          Learn{" "}
          <ReactTyped
            strings={[
              "Web Development",
              "Digital Marketing",
              "Ethical-Hacking",
            ]}
            typeSpeed={100}
            backSpeed={50}
            loop={true}
          />
          <br />
        </div>
        <button className="bg-black text-white p-3 rounded">Get Started</button>
      </div>
    </div>
  );
};
