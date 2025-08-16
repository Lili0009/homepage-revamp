import RealtorImg from "../assets/realtor.jpeg";

function Realtor() {
  return (
    <div className="flex justify-center items-center p-9 lg:p-10 shadow-black">
      <div className="flex flex-col shadow-lg gap-5 md:flex-row items-center lg:gap-10">
        <div className="left-0">
          <img src={RealtorImg} className="h-auto w-60 lg:w-120" />
        </div>
        <div className="flex flex-col item-center text-center p-5 lg:w-150 lg:gap-y-5">
          <h2 className="text-[13px] md:text-[1rem] lg:text-[1.3rem]">
            REALTOR FOR NEARLY 3 DECADES!
          </h2>
          <h1 className="text-[15px] mt-2 md:text-[1.5rem] lg:text-[3rem]">
            MARCI METZGER
          </h1>
          <div className="flex justify-center items-center text-center gap-2">
            <svg
              className="w-4 lg:w-5 h-auto"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              fill="none"
              stroke="#FFFFFF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="24" cy="24" r="22" fill="#000000" stroke="#000000" />
              <g transform="translate(9,9) scale(1.2)">
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 
                                19.79 19.79 0 0 1-8.63-3.07 
                                19.5 19.5 0 0 1-6-6 
                                19.79 19.79 0 0 1-3.07-8.63 
                                A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 
                                c.12.81.37 1.6.72 2.33 
                                a2 2 0 0 1-.45 2.18l-1.27 1.27 
                                a16 16 0 0 0 6 6l1.27-1.27 
                                a2 2 0 0 1 2.18-.45 
                                c.73.35 1.52.6 2.33.72 
                                a2 2 0 0 1 1.72 2z"
                />
              </g>
            </svg>
            <h2 className="text-[13px] lg:text-[1rem]">206-919-6886</h2>
          </div>
          <h2 className="mt-5 text-[13px] lg:mt-15 lg:text-[1.2rem] italic">
            "Working or retired, fast-paced or looking to relax..."
          </h2>
          <div className="flex justify-center items-center text-center">
            <button className="flex text-[13px] gap-2 btn-readMore">
              Read More
              <svg
                className="w-[6px] lg:w-2 h-auto"
                xmlns="http://www.w3.org/2000/svg"
                shape-rendering="geometricPrecision"
                text-rendering="geometricPrecision"
                image-rendering="optimizeQuality"
                fill-rule="evenodd"
                clip-rule="evenodd"
                viewBox="0 0 299 511.517"
              >
                <path
                  fill="#fff"
                  d="M12.579 436.254c-36.893 64.703 15.581 96.095 51.926 60.146L273.92 295.723c33.44-33.439 33.44-46.49 0-79.93L64.505 15.117C28.16-20.832-24.314 10.56 12.579 75.262l97.261 180.496-97.261 180.496z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Realtor;
