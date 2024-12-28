import { images } from "../constants/constants";
const ConsentPermission = () => {
  return (
    <>
      <div className="flex  justify-center h-screen w-full">
        <div>
          <form className="border-gray-200 border-2 rounded-lg shadow-gray-200 shadow-lg  m-6  border-quardinary border-b-2">
            <div className="flex flex-row justify-normal  m-6  ">
              <div className="flex flex-row m-3">
                <img src={images.Account} className="bg-gray-700 w-10 h-10 rounded-full z-20" />
                <img  src={images.Home} className="bg-gray-700 -ml-3 w-10 h-10 rounded-full z-10 " />
              </div>
              <div className="flex flex-col ">
                <p className=" font-inter font-medium text-quinary">
                  Johndoe@gmail.com
                </p>
                <p className=" font-inter font-medium text-gray-300 ">
                  &lt;Policy Version&gt;
                </p>
              </div>
            </div>
            <div className="border-gray-200 border-t-2 border-b-2">
              <div className="flex flex-col m-6 h-[350px]">
                <div className="flex flex-row mb-2 ">
                  <div className="flex flex-col">
                    <p className="font-inter font-medium text-quinary">
                      The following details will be collected from you by
                      &lt;XYZ_name&gt;
                    </p>
                    <div className="flex flex-col mt-2">
                      <div className="flex space-x-2">
                        <label class="flex items-center">
                          <input
                            type="checkbox"
                            class="appearance-none w-4 h-4 border-2 border-blue-500 bg-white checked:bg-blue-500 checked:border-blue-500"
                          />
                        </label>
                        <p className="font-inter text-gray-500">Facial Scan</p>
                      </div>
                      <div className="flex space-x-2">
                        <label class="flex items-center">
                          <input
                            type="checkbox"
                            class="appearance-none w-4 h-4 border-2 border-blue-500 bg-white checked:bg-blue-500 checked:border-blue-500"
                          />
                        </label>
                        <p className="font-inter text-gray-500">
                          Location Scan
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row mt-4">
                  <div className="flex flex-col">
                    <p className="font-inter font-medium text-quinary">
                      Purpose
                    </p>
                    <div className="flex flex-col mt-2">
                      <p className="font-inter text-gray-500">
                        Fraud prevention and compliance checks
                      </p>
                      <p className="font-inter text-gray-500">
                        Fraud prevention and compliance checks
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-row justify-between m-6  ">
              <div className="flex flex-col w-[550px] ">
                <p className=" font-inter text-sm  text-quinary">
                  By clicking Allow, you allow the app to use your information
                  in accordance to their respective
                  <span className="text-secondary ">
                    {" "}
                    terms of serve
                  </span> and{" "}
                  <span className="text-secondary">privacy policies</span>.
                </p>
                <div className="justify-between mt-3 ">
                  <button className="w-[260px] border-2 m-1 rounded-md h-9 font-inter border-gray-200 ">
                    Deny
                  </button>
                  <button className="w-[260px] bg-secondary m-1  rounded-md h-9 font-inter text-white">
                    Allow
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ConsentPermission;
