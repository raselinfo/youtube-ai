"use client";

import Button from "@components/button/button";
import TimeLine from "@components/resultBox/TimeLine";

const data = [
  {
    id: 1,
    time: "0.1.0 - 0.2.0",
    text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    id: 2,
    time: "0.2.0 - 0.3.0",
    text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    id: 3,
    time: "0.3.0 - 0.4.0",
    text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    id: 4,
    time: "0.4.0 - 0.5.0",
    text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    id: 5,
    time: "0.5.0 - 0.6.0",
    text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    id: 6,
    time: "0.6.0 - 0.7.0",
    text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    id: 7,
    time: "0.7.0 - 0.8.0",
    text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    id: 8,
    time: "0.8.0 - 0.9.0",
    text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
];

const ResultBox = () => {
  console.log(data);

  return (
    <section>
      {/*  Result box button*/}
      <div className="w-full pt-10 pb-5 flex-start flex-wrap gap-10">
        <Button text="Transcription" className="w-[143px] h-[35px]" />
        <Button text="Summary" className="w-[120px] h-[35px]" />
      </div>
      {/*  Result box*/}
      <TimeLine>
        <div className="w-full min-h-fit max-h-[70vh] h-auto bg-[#FFFFFF] rounded-[5px] shadow-md shadow-gray-200 overflow-y-auto">
          {data.map((item) => (
            <div className="w-full mx-auto px-5 py-3">
              <p className="text-[#000000] bg-[#F5F5F5] text-[18px] font-[Poppins] rounded-xl font-medium leading-[27px] px-10 py-5">
                <span className="font-bold">Timeline: {item.time + " "}:</span>
                {" " + item.text}
              </p>
            </div>
          ))}
        </div>
      </TimeLine>
    </section>
  );
};

export default ResultBox;
