const ConsentPostToken = () => {
  return (
    <>
      <div className="flex  justify-center h-screen w-full">
        <div>
          <form className="border-gray-200 border-2 rounded-lg shadow-gray-200 shadow-lg  m-6  border-quardinary border-b-2">
            <div className="flex flex-row justify-between m-6  ">
              <div className="flex items-center ">
                <label className=" font-inter font-medium text-quinary">
                  Token
                </label>
              </div>
              <input className="w-80 h-9 border-2 font-medium text-quinary border-gray-300  px-3 py-2 rounded-md "></input>
            </div>
            <div className="flex flex-row justify-between m-6  ">
              <button className="bg-secondary w-[525px] rounded-md h-9 font-inter text-white ">
                Validate Token
              </button>
            </div>
            <div className="border-gray-200 border-t-2 ">
              <div
                className="flex flex-col m-6 overflow-y-auto space-y-5"
                style={{ maxHeight: "500px" }} // Adjust the height as needed
              >
                <div className="flex flex-row justify-between mb-4">
                  <div className="flex items-center ">
                    <p className="font-inter font-medium text-quinary">
                      Consent Status
                    </p>
                  </div>
                  <p className="w-80 h-9  font-medium text-quinary  px-3 py-2 ">
                    Hello
                  </p>
                </div>
                <div className="flex flex-row justify-between mb-4">
                  <div className="flex items-center ">
                    <p className="font-inter font-medium text-quinary">
                      Consent Details
                    </p>
                  </div>
                </div>
                <div className="flex flex-row justify-between mb-4">
                  <div className="flex items-center ">
                    <p className="font-inter font-medium text-gray-400">
                      Device ID
                    </p>
                  </div>
                  <p className="w-80 h-9  font-medium text-quinary  px-3 py-2 ">
                    b9f8e2d4-9c3a-4571- ae84-3c9df20297a1
                  </p>
                </div>
                <div className="flex flex-row justify-between mb-4">
                  <div className="flex items-center ">
                    <p className="font-inter font-medium text-gray-400">
                      hashedUserID
                    </p>
                  </div>
                  <p className="w-80 h-9  font-medium text-quinary  px-3 py-2 ">
                    e3b0c44298fc1c149afbf4c8996fb92
                    427ae41e4649b934ca495991b7852 b855
                  </p>
                </div>
                <div className="flex flex-row justify-between mb-4">
                  <div className="flex items-center ">
                    <p className="font-inter font-medium text-gray-400">
                      timestamp
                    </p>
                  </div>
                  <p className="w-80 h-9  font-medium text-quinary  px-3 py-2 ">
                    2024-06-12T14:35:22Z
                  </p>
                </div>
                <div className="flex flex-row justify-between mb-4">
                  <div className="flex items-center ">
                    <p className="font-inter font-medium text-gray-400">
                      ipAdress
                    </p>
                  </div>
                  <p className="w-80 h-9  font-medium text-quinary  px-3 py-2 ">
                    192.168.1.15
                  </p>
                </div>
                <div className="flex flex-row justify-between mb-4">
                  <div className="flex items-center ">
                    <p className="font-inter font-medium text-gray-400">
                      Scope
                    </p>
                  </div>
                  <p className="w-80 h-9  font-medium text-quinary  px-3 py-2 ">
                    facial scan, Location Access
                  </p>
                </div>
                <div className="flex flex-row justify-between mb-4">
                  <div className="flex items-center ">
                    <p className="font-inter font-medium text-gray-400">
                      Purpose
                    </p>
                  </div>
                  <p className="w-80 h-9  font-medium text-quinary  px-3 py-2 ">
                    User onboarding and identity verification 
                    <br></br>
                    Fraud prevention and compliance checks
                  </p>
                </div>
                <br></br>
                <br></br>

                <div className="flex flex-row justify-between  mb-4">
                  <div className="flex items-center ">
                    <p className="font-inter font-medium text-quinary">
                      Consent Status
                    </p>
                  </div>
                  <p className="w-80 h-9  font-medium text-quinary  px-3 py-2 ">
                    Hello
                  </p>
                </div>
                <div className="flex flex-row justify-between  mb-4">
                  <div className="flex items-center ">
                    <p className="font-inter font-medium text-quinary">
                      Consent Details
                    </p>
                  </div>
                </div>
                <div className="flex flex-row justify-between mb-4">
                  <div className="flex items-center ">
                    <p className="font-inter font-medium text-gray-400">
                      Device ID
                    </p>
                  </div>
                  <p className="w-80 h-9  font-medium text-quinary  px-3 py-2 ">
                    b9f8e2d4-9c3a-4571- ae84-3c9df20297a1
                  </p>
                </div>
                <div className="flex flex-row justify-between mb-4">
                  <div className="flex items-center ">
                    <p className="font-inter font-medium text-gray-400">
                      hashedUserID
                    </p>
                  </div>
                  <p className="w-80 h-9  font-medium text-quinary  px-3 py-2 ">
                    e3b0c44298fc1c149afbf4c8996fb92
                    427ae41e4649b934ca495991b7852 b855
                  </p>
                </div>
                <div className="flex flex-row justify-between mb-4">
                  <div className="flex items-center ">
                    <p className="font-inter font-medium text-gray-400">
                      timestamp
                    </p>
                  </div>
                  <p className="w-80 h-9  font-medium text-quinary  px-3 py-2 ">
                    2024-06-12T14:35:22Z
                  </p>
                </div>
                <div className="flex flex-row justify-between mb-4">
                  <div className="flex items-center ">
                    <p className="font-inter font-medium text-gray-400">
                      ipAdress
                    </p>
                  </div>
                  <p className="w-80 h-9  font-medium text-quinary  px-3 py-2 ">
                    192.168.1.15
                  </p>
                </div>
                <div className="flex flex-row justify-between mb-4">
                  <div className="flex items-center ">
                    <p className="font-inter font-medium text-gray-400">
                      Scope
                    </p>
                  </div>
                  <p className="w-80 h-9  font-medium text-quinary  px-3 py-2 ">
                    facial scan, Location Access
                  </p>
                </div>
                <div className="flex flex-row justify-between mb-4">
                  <div className="flex items-center ">
                    <p className="font-inter font-medium text-gray-400">
                      Purpose
                    </p>
                  </div>
                  <p className="w-80 h-9  font-medium text-quinary  px-3 py-2 ">
                    User onboarding and identity verification 
                    <br></br>
                    Fraud prevention and compliance checks
                  </p>
                </div>
              </div>
            </div>
            
          </form>
        </div>
      </div>
    </>
  );
};

export default ConsentPostToken;
