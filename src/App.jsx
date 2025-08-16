import { useEffect, useRef, useState } from "react";
import "./index.css";
import Menu from "./components/Menu";
import Realtor from "./components/Realtor";
import Gallery from "./components/Gallery";
import Services from "./components/Services";
import Img1 from "./assets/img1.jpeg";
import Img2 from "./assets/img2.jpeg";
import Img3 from "./assets/img3.jpeg";
import Img4 from "./assets/img4.jpeg";
import Logo1 from "./assets/logo1.png";
import Logo2 from "./assets/logo2.png";
import Logo3 from "./assets/logo3.jpeg";
import Logo4 from "./assets/logo4.jpeg";

function App() {
  const refs = useRef([]);
  const [inView, setInView] = useState([]);

  const addToRefs = (el) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = refs.current.indexOf(entry.target);
          if (index !== -1) {
            setInView((prev) => {
              const updated = [...prev];
              updated[index] = entry.isIntersecting;
              return updated;
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    refs.current.forEach((el) => observer.observe(el));
    return () => refs.current.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div className="relative h-screen">
      <section id="home">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.3)),url('./assets/bg-image.jpeg')] bg-cover bg-center sm:bg-fixed bg-center z-0" />
        <div className="relative z-10 h-[100vh] flex flex-col">
          <div className="flex justify-between items-center p-7 md:p-12">
            <Menu />
          </div>
          <div className="flex flex-1 flex-col justify-center items-center text-white">
            <div className="flex justify-center items-center text-[2rem] sm:text-[3rem] lg:text-[5rem]">
              <h1>Pahrump Realtor</h1>
            </div>
            <div className="flex justify-center items-center mt-1">
              <h1 className="text-center text-[1rem] w-[240px] sm:w-full sm:text-[1rem] lg:text-[1.5rem]">
                MARCI METZGER - THE RIDGE REALTY GROUP
              </h1>
            </div>
            <div className="flex justify-center text-[25px] mt-10 md:mt-20">
              <a href="tel:206-919-6886">
                <button className="flex btn-call text-[1rem] text-black hover:text-copper active:scale-90 gap-1 md:text-[1.2rem] lg:text-[1.4rem]">
                  <svg
                    className="h-auto w-3 lg:w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
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
                  </svg>
                  Call Now
                </button>
              </a>
            </div>
          </div>
        </div>

        <Realtor />

        <div className="mt-10 mb-10 lg:mt-30 lg:mb-40 overflow-x-hidden">
          <div className="flex justify-center items-center text-center">
            <h2 className="title">GET IT SOLD</h2>
          </div>

          <div className="flex flex-col-reverse md:flex-row mt-5 md:mt-10 w-full">
            <div className="flex-[1.5] lg:flex-[1.1] flex flex-col justify-center items-center text-center overflow-hidden">
              <div
                className={`w-11/12 lg:w-[700px] space-y-2 lg:space-y-10 transform transition-all duration-1800 ease-out
            ${
              inView[1]
                ? "translate-y-0 opacity-100"
                : "translate-y-16 lg:translate-y-32 opacity-0"
            }`}
                ref={addToRefs}
              >
                <h2 className="text-[13px] sm:text-[20px] lg:text-[2rem]">
                  Top Residential Sales Last 5 Years
                </h2>
                <h1 className="text-[10px] mb-5 sm:text-[15px] lg:text-[20px]">
                  We helped nearly 90 clients in 2021, and closed 28.5 million
                  in sales! Our team works hard everyday to grow and learn, so
                  that we may continue to excel in our market. Our clients
                  deserve our best, and we want to make sure our best is better
                  every year.
                </h1>
              </div>
            </div>
            <div className="flex-[1] lg:flex-[1] justify-center items-center">
              <img
                className={`max-w-full h-auto transform transition-all duration-1800 ease-out
            ${
              inView[1]
                ? "translate-x-0 opacity-100"
                : "translate-x-16 lg:translate-x-32 opacity-0"
            }`}
                src={Img1}
                ref={addToRefs}
                alt="Top Sales"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row mt-5 lg:mt-20 w-full overflow-hidden">
            <div className="flex-[1] justify-center items-center">
              <img
                className={`max-w-full h-auto  transform transition-all duration-1800 ease-out
            ${
              inView[2]
                ? "translate-y-0 opacity-100"
                : "translate-y-16 lg:translate-y-32 opacity-10"
            }`}
                src={Img2}
                ref={addToRefs}
                alt="Top Sales"
              />
            </div>
            <div className="flex-[1.1] flex flex-col justify-center items-center text-center">
              <div
                className={`w-11/12 lg:w-[700px]  space-y-2 lg:w-[700px] transform transition-all duration-1800 ease-out
            ${
              inView[2]
                ? "translate-x-0 opacity-100"
                : "translate-x-32 opacity-0"
            }`}
                ref={addToRefs}
              >
                <h2 className="text-[13px] sm:text-[20px] lg:text-[2rem]">
                  Don't Just List it...
                </h2>
                <h1 className="text-[10px] mb-5 sm:text-[15px] lg:text-[20px]">
                  Get it SOLD! We exhaust every avenue to ensure our listings
                  are at the fingertips of every possible buyer, getting you top
                  dollar for your home.
                </h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-row mt-5 md:mt-10 w-full">
            <div className="flex-[1.5] lg:flex-[1.1] flex flex-col justify-center items-center text-center overflow-hidden">
              <div
                className={`w-11/12 lg:w-[700px] space-y-2 lg:space-y-10 transform transition-all duration-1800 ease-out
            ${
              inView[4]
                ? "translate-y-0 opacity-100"
                : "translate-y-16 lg:translate-y-32 opacity-0"
            }`}
                ref={addToRefs}
              >
                <h2 className="text-[13px] sm:text-[20px] lg:text-[2rem]">
                  Guide to Buyers
                </h2>
                <h1 className="text-[10px] mb-5 sm:text-[15px] lg:text-[20px]">
                  Nobody knows the market like we do. Enjoy having a pro at your
                  service. Market analysis, upgrades lists, contractors on speed
                  dial, & more!
                </h1>
              </div>
            </div>
            <div className="flex-[1] lg:flex-[1] justify-center items-center">
              <img
                className={`max-w-full h-auto transform transition-all duration-1800 ease-out
            ${
              inView[4]
                ? "translate-x-0 opacity-100"
                : "translate-x-16 lg:translate-x-32 opacity-0"
            }`}
                src={Img3}
                ref={addToRefs}
                alt="Top Sales"
              />
            </div>
          </div>
        </div>

        <div
          className="h-full md:h-[100vh] bg-cover bg-fixed bg-center "
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.3)), url(${Img4})`,
          }}
        >
          <div className="flex flex-col-reverse md:flex-row justify-center items-center text-center lg:gap-10 h-full">
            <div className="flex-1 md:flex-2 lg:flex-1 w-full h-[400px] bg-cultured text-copper md:rounded-tr-[80px] md:rounded-br-[80px] shadow-lg p-6">
              <h1 className="lg:text-3xl text-2xl font-serif text-[#8f6e6e] mb-6">
                Search Listings
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 text-left">
                    Location
                  </label>
                  <select className="w-full border border-gray-300 rounded-md px-3 py-2 h-11 focus:ring-1 focus:ring-copper focus:outline-none">
                    <option>Choose location</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 text-left">
                    Type
                  </label>
                  <select className="w-full border border-gray-300 rounded-md px-3 py-2 h-11 focus:ring-1 focus:ring-copper focus:outline-none">
                    <option>Choose type</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 text-left">
                    Sort By
                  </label>
                  <select className="w-full border border-gray-300 rounded-md px-3 py-2 h-11 focus:ring-1 focus:ring-copper focus:outline-none">
                    <option>Newest</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 text-left">
                    Bedrooms
                  </label>
                  <select className="w-full border border-gray-300 rounded-md px-3 py-2 h-11 focus:ring-1 focus:ring-copper focus:outline-none">
                    <option>Any Number</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 text-left">
                    Baths
                  </label>
                  <select className="w-full border border-gray-300 rounded-md px-3 py-2 h-11 focus:ring-1 focus:ring-copper focus:outline-none">
                    <option>Any Number</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 text-left">
                    Min Price
                  </label>
                  <input
                    type="number"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 h-11 focus:ring-1 focus:ring-copper focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 text-left">
                    Max Price
                  </label>
                  <input
                    type="number"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 h-11 focus:ring-1 focus:ring-copper focus:outline-none"
                  />
                </div>
              </div>
              <div className="flex justify-center mt-10">
                <button className="flex justify-center items-center text-center px-13 bg-gray-200 text-gray-500 font-semibold rounded-full px-6 py-3 hover:bg-copper hover:text-white transition-colors h-11">
                  Search Now
                </button>
              </div>
            </div>

            <div class="h-[100px] md:flex-1 md:h-full">
              <div class="flex justify-end">
                <div class="md:bg-copper text-white md:text-[15px] lg:text-[20px] px-6 lg:px-10 py-5 rounded-bl-4xl text-culutred">
                  <h1>FIND YOUR DREAM HOME</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex w-full h-[180px] lg:h-[300px] items-center">
          <img src={Logo1} class="flex-1 logo" />
          <img src={Logo2} class="flex-1 logo" />
          <img src={Logo3} class="flex-1 logo" />
          <img src={Logo4} class="flex-1 logo" />
        </div>

        <Gallery />
        <Services />

        <div className="mt-20 px-6 lg:px-20">
          <h1 className="title">CALL OR VISIT</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white rounded-3xl md:p-10">
            <div className="flex-1 bg-white rounded-2xl shadow-md text-left">
              <div className="w-full h-90 overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d402.5332175511392!2d-115.95563690542647!3d36.184418491088685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c639760f7b12f3%3A0xa05207dd285dc73c!2sTHE%20RIDGE%20REALTY%20GROUP!5e0!3m2!1sen!2sph!4v1755321953130!5m2!1sen!2sph"
                  width="100%"
                  height="200"
                  allowFullScreen=""
                  loading="lazy"
                  className="w-full h-full border-0"
                ></iframe>
              </div>
              <div className="p-5 md:p-8">
                <p className="text-center text-[1.2rem] font-montserrat text-gray-600 mb-4">
                  Marci Metzger -{" "}
                  <span className="font-medium">THE RIDGE REALTY GROUP</span>
                </p>
                <h3 className="text-xl font-semibold text-copper mb-2">
                  Office Hours
                </h3>
                <p className="text-gray-700">
                  <span className="text-green-700">Open today: </span>
                  <span className="font-medium">08:00 am – 07:00 pm</span>
                </p>
                <p className="text-gray-700 mb-4">
                  Open daily{" "}
                  <span className="font-medium">8:00 am – 7:00 pm</span>
                </p>
                <div className="flex gap-2 mb-4">
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
                    <circle
                      cx="24"
                      cy="24"
                      r="22"
                      fill="#000000"
                      stroke="#000000"
                    />
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
                  <p className="text-lg font-semibold text-gray-800">
                    (206) 919-6886
                  </p>
                </div>
                <p className="text-gray-600 italic">
                  Appointments outside office hours available upon request. Just
                  call!
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-center text-[20px] md:text-[40px] font-semibold text-copper font-montserrat mb-6">
                Send us a message
              </h2>

              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 h-11 focus:ring-1 focus:ring-copper focus:border-copper focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 h-11 focus:ring-1 focus:ring-copper focus:border-copper focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Write your message..."
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-1 focus:ring-copper focus:border-copper focus:outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-copper text-white font-semibold py-3 rounded-md shadow-md hover:bg-opacity-90 transition"
                >
                  Send Message
                </button>

                <div className="flex items-center justify-center my-4">
                  <span className="border-b border-gray-300 w-1/4"></span>
                  <span className="mx-2 text-gray-500 font-medium">or</span>
                  <span className="border-b border-gray-300 w-1/4"></span>
                </div>

                <div className="flex items-center justify-center ">
                  <a
                    href="https://wa.me/14259412560"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-70 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-4xl shadow-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="28"
                      height="28"
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="#fff"
                        d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"
                      ></path>
                      <path
                        fill="#fff"
                        d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"
                      ></path>
                      <path
                        fill="#cfd8dc"
                        d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"
                      ></path>
                      <path
                        fill="#40c351"
                        d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"
                      ></path>
                      <path
                        fill="#fff"
                        fill-rule="evenodd"
                        d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Message us on WhatsApp
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>

        <footer className="bg-black text-gray-200 mt-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-20 py-15 flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 text-center lg:text-left">
              <a href="/" className="hover:text-copper transition">
                Home
              </a>
              <a href="/listing" className="hover:text-copper transition">
                Listing
              </a>
              <a href="/lets-move" className="hover:text-copper transition">
                Let's Move
              </a>
              <a href="/about-us" className="hover:text-copper transition">
                About Us
              </a>
            </div>

            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/MarciHomes/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-copper transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="40px"
                  height="40px"
                  data-ux="IconSocial"
                  class="x-el x-el-svg c1-1 c1-2 c1-hd c1-1v c1-2h c1-1x c1-1y c1-1z c1-20 c1-21 c1-22 c1-b c1-c c1-d c1-e c1-f c1-g"
                >
                  <path d="M20 12.047C20 7.603 16.418 4 12 4s-8 3.603-8 8.047c0 4.017 2.925 7.346 6.75 7.95v-5.624H8.719v-2.326h2.031v-1.773c0-2.017 1.194-3.13 3.022-3.13.875 0 1.79.157 1.79.157v1.98h-1.008c-.994 0-1.304.62-1.304 1.257v1.51h2.219l-.355 2.325H13.25v5.624c3.825-.604 6.75-3.933 6.75-7.95z"></path>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/marciandlauren_nvrealtors/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-copper transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="40px"
                  height="40px"
                  data-ux="IconSocial"
                  class="x-el x-el-svg c1-1 c1-2 c1-hd c1-1v c1-2h c1-1x c1-1y c1-1z c1-20 c1-21 c1-22 c1-b c1-c c1-d c1-e c1-f c1-g"
                >
                  <path d="M14.667 12a2.57 2.57 0 0 0-.782-1.885A2.57 2.57 0 0 0 12 9.333a2.57 2.57 0 0 0-1.885.782A2.57 2.57 0 0 0 9.333 12c0 .736.26 1.365.782 1.885.52.521 1.149.782 1.885.782a2.57 2.57 0 0 0 1.885-.782c.521-.52.782-1.149.782-1.885zm1.437 0c0 1.139-.4 2.108-1.198 2.906-.798.799-1.767 1.198-2.906 1.198-1.139 0-2.108-.4-2.906-1.198-.799-.798-1.198-1.767-1.198-2.906 0-1.139.4-2.108 1.198-2.906.798-.799 1.767-1.198 2.906-1.198 1.139 0 2.108.4 2.906 1.198.799.798 1.198 1.767 1.198 2.906zm1.125-4.27c0 .263-.094.489-.281.676a.923.923 0 0 1-.677.282.923.923 0 0 1-.677-.282.923.923 0 0 1-.281-.677c0-.264.093-.49.28-.677a.923.923 0 0 1 .678-.281c.264 0 .49.094.677.281a.923.923 0 0 1 .281.677zM12 5.437l-.797-.006a56.514 56.514 0 0 0-1.099 0c-.25.004-.585.014-1.005.032-.42.017-.778.052-1.073.104a4.177 4.177 0 0 0-.745.192c-.347.14-.653.34-.916.605-.264.263-.466.569-.605.916-.076.202-.14.45-.192.745a8.255 8.255 0 0 0-.104 1.073c-.018.42-.028.755-.032 1.005-.003.25-.003.616 0 1.1l.006.796-.006.797c-.003.483-.003.849 0 1.099.004.25.014.585.032 1.005.017.42.052.778.104 1.073.052.295.116.543.192.745.14.347.34.653.605.916.263.264.569.466.916.605.202.076.45.14.745.192.295.052.653.087 1.073.104.42.018.755.028 1.005.032.25.003.616.003 1.1 0l.796-.005.797.005c.483.003.849.003 1.099 0 .25-.004.585-.014 1.005-.032.42-.017.778-.052 1.073-.104.295-.052.543-.116.745-.192.347-.14.653-.34.916-.605.264-.263.466-.569.605-.916.076-.202.14-.45.192-.745.052-.295.087-.653.104-1.073.018-.42.028-.755.032-1.005.003-.25.003-.616 0-1.1L18.562 12l.006-.797c.003-.483.003-.849 0-1.099a38.59 38.59 0 0 0-.032-1.005 8.255 8.255 0 0 0-.104-1.073 4.177 4.177 0 0 0-.192-.745 2.703 2.703 0 0 0-.605-.916 2.703 2.703 0 0 0-.916-.605 4.177 4.177 0 0 0-.745-.192 8.255 8.255 0 0 0-1.073-.104c-.42-.018-.755-.028-1.005-.032-.25-.003-.616-.003-1.1 0L12 5.438zM20 12c0 1.59-.017 2.691-.052 3.302-.07 1.445-.5 2.563-1.292 3.354-.791.792-1.91 1.222-3.354 1.292-.611.035-1.712.052-3.302.052s-2.691-.017-3.302-.052c-1.445-.07-2.563-.5-3.354-1.292-.792-.791-1.222-1.91-1.292-3.354C4.017 14.691 4 13.59 4 12s.017-2.691.052-3.302c.07-1.445.5-2.563 1.292-3.354.791-.792 1.91-1.222 3.354-1.292C9.309 4.017 10.41 4 12 4s2.691.017 3.302.052c1.445.07 2.563.5 3.354 1.292.792.791 1.222 1.91 1.292 3.354.035.611.052 1.712.052 3.302z"></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/marci-metzger-30642496/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-copper transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="40"
                  height="40"
                  data-ux="IconSocial"
                  class="x-el x-el-svg c1-1 c1-2 c1-99 c1-1v c1-2h c1-ek c1-el c1-em c1-b c1-c c1-en c1-eo c1-d c1-ep c1-eq c1-er c1-es c1-et c1-eu c1-ev c1-ew c1-e c1-f c1-g"
                >
                  <path d="M5.181 4h13.634C19.468 4 20 4.518 20 5.153v13.692c0 .638-.532 1.155-1.184 1.155H5.181C4.53 20 4 19.483 4 18.845V5.153c0-.636.53-1.152 1.181-1.152zm3.754 3.574a1.376 1.376 0 00-2.752 0A1.38 1.38 0 007.56 8.95c.758 0 1.375-.618 1.375-1.376zM8.75 9.998H6.372v7.635H8.75V9.999zm1.485 0h.003v7.633h2.371v-3.777c0-.995.19-1.96 1.425-1.96 1.217 0 1.233 1.14 1.233 2.025v3.714h2.372v-4.188c0-2.056-.444-3.637-2.847-3.637-1.159 0-1.933.633-2.25 1.233h-.031V9.999h-2.273v-.002l-.003.002z"></path>
                </svg>
              </a>
              <a
                href="https://www.yelp.com/biz/xr3yQN_m2SgO0R_7S6p62w"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-copper transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="40"
                  height="40"
                  data-ux="IconSocial"
                  class="x-el x-el-svg c1-1 c1-2 c1-99 c1-1v c1-2h c1-ek c1-el c1-em c1-b c1-c c1-en c1-eo c1-d c1-ep c1-eq c1-er c1-es c1-et c1-eu c1-ev c1-ew c1-e c1-f c1-g"
                >
                  <path d="M9.988 14.158c-.037.01-3.983 1.134-4.224 1.134-.554-.029-.674-.515-.726-.99a6.35 6.35 0 0 1 .011-1.487c.07-.596.201-1.431.883-1.396.175 0 2.447.822 4.11 1.41.624.215.679 1.136-.054 1.33zm2.112-3.616c.065 1.213-.93 1.54-1.722.454L6.501 5.663c-.055-.21.011-.394.193-.553.57-.523 3.626-1.263 4.432-1.082.273.06.441.194.503.4.048.263.42 5.314.47 6.114zm-.051 5.232c0 .146.007 3.696-.062 3.857-.084.19-.256.308-.522.356-.368.054-.988-.06-1.86-.34-.803-.257-2.068-.682-1.798-1.349.102-.219 1.874-1.994 2.82-2.971.437-.483 1.45-.175 1.422.447zm6.572-3.74c-.204.118-4.041.896-4.307.972l.01-.02c-.66.15-1.29-.586-.85-1.098.136-.117 2.404-2.933 2.656-3.08.19-.113.412-.12.667-.018.671.28 2.01 2.003 2.094 2.686-.004.092.044.371-.27.558zm.368 4.15c-.098.654-1.623 2.33-2.327 2.571-.251.083-.47.064-.645-.063-.183-.111-2.254-3.083-2.367-3.248-.398-.514.248-1.263.933-1.054 0 0 4.03 1.133 4.184 1.25.19.131.262.312.222.544z"></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-6"></div>

          <div className="text-center text-gray-500 py-9 text-sm">
            © 2023 Marci METZGER Homes - All Rights Reserved
          </div>
        </footer>
      </section>
    </div>
  );
}

export default App;
