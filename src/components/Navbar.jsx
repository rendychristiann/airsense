import { useState, useEffect } from "react";

// assets
// import logo from "../assets/om-logo.png";
// import sun from "../assets/sun.svg";
// import moon from "../assets/moon.svg";

const Navbar = () => {
  // use theme from local storage if available or set light theme
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

  return (
    <div className="navbar bg-base-100 shadow-lg px-4 sm:px-8">
      <div className="flex-1">
        <h1 className="text-lg font-bold mx-4">Your Website</h1>
      </div>
      <div className="flex-none">
      
        <button className="btn btn-square btn-ghost">
          <label className="swap swap-rotate w-12 h-12">
            <input
              type="checkbox"
              onChange={handleToggle}
              // show toggle image based on localstorage theme
              checked={theme === "light" ? false : true}
            />
            <p className="w-8 h-8 swap-on" alt="light">Light</p>
            <p className="w-8 h-8 swap-off" alt="dark">Dark</p>
          </label>
        </button>
      </div>
    </div>
  );
};
export default Navbar;