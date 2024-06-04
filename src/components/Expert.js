import tutor from "../assets/image/tutor.jpg";
export const Expert = () => {
  return (
    <div className="max-w-[1240px] p-2 mx-auto my-10 md:grid grid-cols-2  ">
      <div className="  md:w-[80%] text-center col-span-1">
        <img src={tutor} alt="" className="inline" />
      </div>
      <div className=" col-span-1 flex flex-col justify-center">
        <h1 className="text-[#00df9a] font-bold t-2 my-2">
          LEARN FROM EXPERTS
        </h1>
        <p className="my-2 text-justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <button className=" w-[30%] bg-black text-white p-3 rounded">
          Get Started
        </button>
      </div>
    </div>
  );
};
