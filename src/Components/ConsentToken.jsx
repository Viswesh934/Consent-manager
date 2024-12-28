const ConsentToken = () => {
    return (
      <>
        <div className="flex  justify-center h-screen w-full">
            <div>
              <form className="border-gray-200 border-2 rounded-lg shadow-gray-200 shadow-lg  m-6 ">
                <div className="flex flex-row justify-between m-6  ">
                  <div className="flex items-center ">
                    <label className=" font-inter font-medium text-quinary">Token</label>
                  </div>
                  <input className="w-80 h-9 border-2 font-medium text-quinary border-gray-300 px-3 py-2 rounded-md "></input>
                </div>
                <div className="flex flex-row justify-between m-6  ">
                  <button className="bg-secondary w-[525px] rounded-md h-9 font-inter text-white ">
                    Validate Token
                  </button>
                </div>
              </form>
            </div>
          </div>
      </>
    );
  };
  
  export default ConsentToken;  