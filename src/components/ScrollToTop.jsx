import React, { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-10 right-10 z-50 max-xl:hidden">
      {isVisible && (
        <button
          type="button"
          onClick={scrollToTop}
          className="bg-coral-red text-white rounded-full p-3  shadow-3xl hover:bg-red-500"
        >
          <i className="fa-solid fa-angle-up"></i>
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
