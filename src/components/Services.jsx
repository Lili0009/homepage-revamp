import { useEffect, useRef, useState } from "react";
import "../index.css";
import Img1 from "../assets/service1.jpeg";
import Img2 from "../assets/service2.jpeg";
import Img3 from "../assets/service3.jpeg";

function Services() {
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
    <div className="mt-10 md:mt-40 px-6 lg:px-20">
      <h1 className="title">OUR SERVICES</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          className="relative h-[400px] rounded-2xl shadow-lg overflow-hidden group"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url(${Img1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 p-8 flex flex-col justify-end text-white transition-transform duration-300 group-hover:translate-y-[-10px]">
            <h2 className="text-2xl font-semibold mb-4">
              Real Estate Done Right
            </h2>
            <p className="text-sm leading-relaxed">
              Nervous about your property adventure? Don’t be. Whether you're
              buying, selling, or just exploring the market, our team ensures
              the best experience possible.
            </p>
          </div>
        </div>

        <div
          className="relative h-[400px] rounded-2xl shadow-lg overflow-hidden group"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url(${Img2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 p-8 flex flex-col justify-end text-white transition-transform duration-300 group-hover:translate-y-[-10px]">
            <h2 className="text-2xl font-semibold mb-4">
              Commercial & Residential
            </h2>
            <p className="text-sm leading-relaxed">
              From condos to mansions, fixer-uppers to luxury homes—we’ll help
              you find the right fit at the right price. We live, work, and play
              in this community too!
            </p>
          </div>
        </div>

        <div
          className="relative h-[400px] rounded-2xl shadow-lg overflow-hidden group"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url(${Img3})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 p-8 flex flex-col justify-end text-white transition-transform duration-300 group-hover:translate-y-[-10px]">
            <h2 className="text-2xl font-semibold mb-4">Rely on Expertise</h2>
            <p className="text-sm leading-relaxed">
              Questions about affordability, credit, or loan options? We’ll
              connect you with trusted experts so you can feel confident and
              informed at every step.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
