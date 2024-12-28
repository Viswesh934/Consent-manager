import { useEffect, useState } from "react";
import { images } from "./constants/constants";
import ConsentManager from "./Components/ConsentManager";

const Main = ({ text }) => {
  return (
    <div className="flex-1 flex items-center justify-center h-screen w-full">
      <h1 className="text-2xl font-bold">{text}</h1>
    </div>
  );
};

const App = () => {
  const [activeTab, setActiveTab] = useState("consentmanager");

  return (
    <>
      <div className="flex flex-row  min-h-screen">
        <div className="bg-primary text-white w-[68px] font-inter space-y-2  text-[10px] ">
          <img src={images.HVA} alt="HVA" className="m-4 mx-5" />
          <div className="flex flex-col" onClick={() => setActiveTab("home")}>
            <img
              src={images.Home}
              alt="Home"
              className={`w-7 mx-5 my-2 ${
                activeTab === "home" ? "bg-gray-700 rounded-md" : ""
              }`}
            />
            <p className="mx-5">Home</p>
          </div>
          <div
            className="flex flex-col"
            onClick={() => setActiveTab("application")}
          >
            <img
              src={images.Application}
              alt="application"
              className={`w-7 mx-5 my-2 ${
                activeTab === "application" ? "bg-gray-700 rounded-md" : ""
              }`}
            />
            <p className="mx-1">Applications</p>
          </div>
          <div
            className="flex flex-col"
            onClick={() => setActiveTab("analytics")}
          >
            <img
              src={images.Analytics}
              alt="analytics"
              className={`w-7 mx-5 my-2 ${
                activeTab === "analytics" ? "bg-gray-700 rounded-md" : ""
              }`}
            />
            <p className="mx-3">Analytics</p>
          </div>
          <div
            className="flex flex-col"
            onClick={() => setActiveTab("workflows")}
          >
            <img
              src={images.Workflow}
              alt="workflows"
              className={`w-7 mx-5 my-2 ${
                activeTab === "workflows" ? "bg-gray-700 rounded-md" : ""
              }`}
            />
            <p className="mx-2">Workflows</p>
          </div>
          <div className="flex flex-col" onClick={() => setActiveTab("devhub")}>
            <img
              src={images.DevHub}
              alt="devhub"
              className={`w-7 mx-5 my-2 ${
                activeTab === "devhub" ? "bg-gray-700 rounded-md" : ""
              }`}
            />
            <p className="mx-3">Dev Hub</p>
          </div>
          <div
            className="flex flex-col"
            onClick={() => setActiveTab("account")}
          >
            <img
              src={images.Account}
              alt="account"
              className={`w-7 mx-5 my-2 ${
                activeTab === "account" ? "bg-gray-700 rounded-md" : ""
              }`}
            />
            <p className="mx-3">Account</p>
          </div>
          <div
            className="flex flex-col"
            onClick={() => setActiveTab("consentmanager")}
          >
            <img
              src={images.ConsentManager}
              alt="Home"
              className={`w-7 mx-5 my-2 ${
                activeTab === "consentmanager" ? "bg-gray-700 rounded-md" : ""
              }`}
            />
            <p className="mx-3">Consent Manager</p>
          </div>
        </div>
        <div className="flex flex-1  items-center justify-center  bg-white">
          {activeTab === "home" && <Main text={"Home"} />}
          {activeTab === "application" && <Main text={"Applications"} />}
          {activeTab === "analytics" && <Main text={"Analytics"} />}
          {activeTab === "workflows" && <Main text={"Workflows"} />}
          {activeTab === "devhub" && <Main text={"Dev Hub"} />}
          {activeTab === "account" && <Main text={"Account"} />}
          {activeTab === "consentmanager" && <ConsentManager />}
        </div>
      </div>
    </>
  );
};

export default App;
