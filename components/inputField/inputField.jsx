import Input from "@components/input/input";
import Button from "@components/button/button";

const InputField = () => {
  return (
    <section className="w-full flex flex-row flex-wrap md:justify-center items-center pt-10 gap-5">
      {/*Input field for API key*/}
      <div className="flex flex-row items-center self-start gap-5">
        <Input
          type="text"
          placeholder="Enter Your OpenAI API Key"
          classname="bg-#ffff] border-2 border-[#CED4DA] w-[280px] placeholder:text-center placeholder:text-gray-500 outline-0 focus: h-[45px] rounded-[1rem] px-[20px] py-[10px]"
        />
        <Button text="Submit" className="w-[96px] h-[34px]" />
      </div>
      {/*Input field for YouTube video URL*/}
      <div className="flex flex-row items-center gap-5 mx-auto">
        <Input
          type="text"
          placeholder="Enter Your YouTube Video URL"
          classname="bg-#ffff] border-2 border-[#CED4DA] w-[500px] placeholder:text-center placeholder:text-gray-500 outline-0 focus: h-[45px] rounded-[1rem] px-[20px] py-[10px]"
        />
        <Button text="Summarize" className="w-[112px] h-[34px]" />
      </div>
    </section>
  );
};
export default InputField;
