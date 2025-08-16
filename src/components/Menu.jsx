import { useState, useEffect, useRef } from "react";
import "../index.css";
import Logo from "../assets/logo.png";
function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const sidebarRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="overflow-hidden">
      <div className="fixed left-0 right-0 top-0">
        <nav
          className={`flex justify-between items-center w-full transition-all duration-950  ${
            scrolled
              ? "bg-cultured shadow-lg w-full px-3 py-4 md:py-2"
              : "h-[160px] p-7 "
          }`}
        >
          <a href="/home">
            <img
              src={Logo}
              alt="Logo"
              className="w-auto h-10 md:h-15 lg:h-20 lg:pl-10"
            />
          </a>
          <button
            className="transition-transform duration-100 active:scale-70 lg:pr-10"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-auto h-[25px] md:h-[40px] lg:h-[40px]"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 18H15"
                stroke="#000000"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M4 12L18 12"
                stroke="#000000"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M4 6L25 6"
                stroke="#000000"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          </button>
        </nav>
      </div>

      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-full w-full md:w-85 bg-cultured transform transition-transform duration-900 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-[150%]"
        }`}
      >
        <div className="p-4 text-copper font-Montserrat font-[450]">
          <button
            className="mt-10 ml-5 focus:text-white text-2xl font-medium"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
            }}
          >
            x
          </button>
          <ul className="space-y-4 mt-10 ml-10">
            {["HOME", "LISTINGS", "LET'S MOVE", "ABOUT US"].map((item) => {
              const id = item.toLowerCase().replace(/\s+/g, "-"); // e.g. "let's move" -> "let's-move"
              const activeClass =
                isActive === id
                  ? "font-semibold text-copper"
                  : "hover:font-semibold hover:text-gray-700";

              return (
                <li key={item}>
                  <a
                    href={`#${id}`}
                    className={`block px-2 py-2 rounded transition-colors ${activeClass}`}
                    onClick={() => {
                      setActive(id);
                      setIsOpen(false);
                    }}
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Menu;
