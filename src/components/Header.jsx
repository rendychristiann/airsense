import { useState, useEffect } from "react";
const Header = () => {
  const [isHamburgerActive, setHamburgerActive] = useState(false);
  //   const [isDarkMode, setDarkMode] = useState(false);

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  // update state on toggle
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("night");
    } else {
      setTheme("light");
    }
  };
  // set theme state in localstorage on mount & also update localstorage on state change
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    // add custom data-theme attribute to html tag required to update theme using DaisyUI
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleScroll = () => {
    const header = document.querySelector("header");
    const fixedNav = header.offsetTop;

    if (window.scrollY > fixedNav) {
      header.classList.add("navbar-fixed");
    } else {
      header.classList.remove("navbar-fixed");
    }
  };

  const handleHamburgerClick = () => {
    setHamburgerActive((prev) => !prev);
    console.log(isHamburgerActive);
  };

  const handleOutsideClick = (e) => {
    const hamburgerButton = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");

    if (
      hamburgerButton &&
      navMenu &&
      !hamburgerButton.contains(e.target) &&
      !navMenu.contains(e.target)
    ) {
      setHamburgerActive(false);
    }
  };
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("click", handleOutsideClick);

  return (
    <>
      <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
        <div className="container">
          <div className="flex items-center justify-between relative">
            <div className="px-4 flex ">
              <a href="#home" className="block py-6 px-4">
                <img
                  src="/assets/logo-no-background.png"
                  alt="Logo"
                  className="moving img w-24"
                />
              </a>
            </div>
            <div className="flex items-center justify-center px-4">
              <button
                id="hamburger"
                name="hamburger"
                type="button"
                className={`block absolute right-4 lg:hidden ${
                  isHamburgerActive ? "hamburger-active" : ""
                }`}
                onClick={handleHamburgerClick}
              >
                <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
                <span className="hamburger-line transition duration-300 ease-in-out"></span>
                <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left "></span>
              </button>
              <nav
                id="nav-menu"
                className={`absolute py-5 shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none ${
                  isHamburgerActive ? "" : "hidden"
                } ${
                  theme === "night" ? "bg-night bg-opacity-100" : "bg-light"
                }`}
              >
                <ul className="block lg:flex">
                  <li className="group">
                    <a
                      href="#home"
                      className="text-base py-2 mx-8 flex group-hover:text-primary"
                    >
                      Home
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#feature"
                      className="text-base py-2 mx-8 flex group-hover:text-primary"
                    >
                      Feature
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#dashboard"
                      className="text-base py-2 mx-8 flex group-hover:text-primary"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li className="flex items-center pl-5 lg:pl-0 lg:pr-5">
                    <div className="flex">
                      <button className="mt-0">
                        <label className="swap swap-rotate w-12 h-12">
                          <input
                            type="checkbox"
                            onChange={handleToggle}
                          
                          />
                          
                            <img
                              src="/assets/light-mode.png"
                              className="w-7 h-7 mx-auto swap-on"
                              alt="light"
                            />

                            <img
                              src="/assets/dark-mode.png"
                              className="w-7 h-7 mx-auto swap-off"
                              alt="dark"
                            />
                
                        </label>
                      </button>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
