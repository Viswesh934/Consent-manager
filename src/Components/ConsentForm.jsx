const ConsentForm = ({ nextStep }) => {
  return (
    <>
      <div className="flex items-center justify-center h-screen w-full">
        <div className="  h-[438px] w-1/2">
          <div className="flex justify-center">
            <h1 className="text-2xl font-bold font-inter text-quinary ">
              Enter Consent Details
            </h1>
          </div>
          <div>
            <form className="border-gray-200 border-2 rounded-lg shadow-gray-200 shadow-lg  m-6 ">
              <div className="flex flex-row justify-between m-6  ">
                <div className="flex items-center ">
                  <label className=" font-inter font-medium text-quinary">
                    Customer Id
                  </label>
                </div>
                <input className="w-80 h-9 border-2 font-medium text-quinary border-gray-300 px-3 py-2 rounded-md "></input>
              </div>
              <div className="flex flex-row justify-between m-6  ">
                <div className="flex items-center ">
                  <label className=" font-inter font-medium text-quinary">
                    Redirect URI
                  </label>
                </div>
                <input className="w-80 h-9 border-2 font-medium text-quinary border-gray-300 px-3 py-2 rounded-md "></input>
              </div>
              <div className="flex flex-row justify-between m-6  ">
                <div className="flex items-center ">
                  <label className=" font-inter font-medium text-quinary">
                    Policy Version
                  </label>
                </div>
                <input className="w-80 h-9 border-2 font-medium text-quinary border-gray-300 px-3 py-2 rounded-md "></input>
              </div>
              <div className="flex flex-row justify-between m-6  ">
                <div className="flex items-center ">
                  <label className=" font-inter font-medium text-quinary">
                    Purpose
                  </label>
                </div>
                <input className="w-80 h-9 border-2 font-medium text-quinary border-gray-300 px-3 py-2 rounded-md "></input>
              </div>
              <div className="flex flex-row justify-between m-6  ">
                <div className="flex items-center ">
                  <label className=" font-inter font-medium text-quinary">Scope</label>
                </div>
                <input className="w-80 h-9 border-2 font-medium text-quinary border-gray-300 px-3 py-2 rounded-md "></input>
              </div>
              <div className="flex flex-row justify-between m-6  ">
                <button className="bg-secondary w-[525px] rounded-md h-9 font-inter text-white " >
                  Request Consent
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConsentForm;
