import { CheckCircle2 } from "lucide-react";
import code2 from "../assets/code2.png";
import code3 from "../assets/code3.png";
import code4 from "../assets/code4.png";
import code5 from "../assets/code5.png";
import recu1 from "../assets/recu1.png";
import recu2 from "../assets/recu2.png";
import { checklistItems } from "../constants";

const Workflow = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Saisissez{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          cette opportunite.
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2">
          <img src={code2} alt="Coding" />
        </div>
        <div className="p-2 w-full lg:w-1/2">
          <img src={recu1} alt="Coding" />
        </div>
        <div className="p-2 w-full lg:w-1/2">
          <img src={recu2} alt="Coding" />
        </div>
        <div className="p-2 w-full lg:w-1/2">
          <img src={code3} alt="Coding" />
        </div>
        <div className="p-2 w-full lg:w-1/2">
          <img src={code4} alt="Coding" />
        </div>
        <div className="p-2 w-full lg:w-1/2">
          <img src={code5} alt="Coding" />
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
