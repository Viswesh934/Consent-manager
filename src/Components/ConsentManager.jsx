import { images } from "../constants/constants";
import { useState } from "react";
import ConsentForm from "./ConsentForm";
import ConsentToken from "./ConsentToken";
import ConsentPostToken from "./ConsentPostToken";
import ConsentPermission from "./ConsentPermission";

const Main = ({ text }) => {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <h1 className="text-2xl font-bold">{text}</h1>
    </div>
  );
};

const ConsentManager = () => {
  const mapings = {
    0: <ConsentForm />,
    1: <ConsentPermission />,
    2: <ConsentToken />,
    3: <ConsentPostToken />,
  };
  const [activeOption, setActiveOption] = useState("demo");
  const [step, setNextstep] = useState(0);
  const nextStep = () => {
    setNextstep((prevStep) => (prevStep + 1) % Object.keys(mapings).length);
  };

  return (
    <>
      <div className="flex w-full">
        <div className=" flex-col font-inter bg-[#FAFAFA] border-r-2 border-quardinary w-[216px]  md:block">
          <h1 className="text-primary text-2xl  font-medium my-5 ml-1 mr-3 ">
            Consent Manager
          </h1>
          <div className="space-y-1">
            <div
              className={`flex justify-normal mx-2 p-2 ${
                activeOption === "demo"
                  ? "font-semibold text-secondary bg-terinary rounded-lg border-quardinary border-2"
                  : " "
              }`}
              onClick={() => setActiveOption("demo")}
            >
              <img src={images.Demo} alt="demo" className="mx-1" />
              <h1>Demo</h1>
            </div>

            <div
              className={`flex justify-normal mx-2 p-2 ${
                activeOption === "configurations"
                  ? "font-semibold text-secondary bg-terinary rounded-lg border-quardinary border-2"
                  : " "
              }`}
              onClick={() => setActiveOption("configurations")}
            >
              <img
                src={images.Configuration}
                alt="configurations"
                className="mx-1"
              />
              <h1>Configurations</h1>
            </div>

            <div
              className={`flex justify-normal mx-2 p-2 ${
                activeOption === "search"
                  ? "font-semibold text-secondary bg-terinary rounded-lg border-quardinary border-2"
                  : " "
              }`}
              onClick={() => setActiveOption("search")}
            >
              <img src={images.Search} alt="search" className="mx-1" />
              <h1>Search</h1>
            </div>
            <div
              className={
                "flex justify-center  mx-5 p-4 items-center font-semibold bg-secondary text-white  h-9 rounded-lg border-quardinary border-2"
              }
              onClick={nextStep}
            >
              <h1>Next</h1>
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center bg-white ">
          {activeOption === "demo" && <>{mapings[step]}</>}
          {activeOption === "configurations" && (
            <Main text={"Configurations"} />
          )}
          {activeOption === "search" && <Main text={"Search"} />}
        </div>
      </div>
    </>
  );
};

export default ConsentManager;
