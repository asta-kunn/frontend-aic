import React, { useState } from "react";
import "./ScrollButtonStyle.css";

interface ScrollButtonProps {
  buttonText: string;
}

const ScrollButton: React.FC<ScrollButtonProps> = ({ buttonText }) => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 10) {
      setVisible(true);
    } else if (scrolled <= 10) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
             in place of 'smooth' */
    });
  };

  const iconToTop = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.23017 15.7906C4.93159 15.5035 4.92228 15.0287 5.20938 14.7302L9.45938 10.2302C9.60078 10.0831 9.79599 10 10 10C10.204 10 10.3992 10.0831 10.5406 10.2302L14.7906 14.7302C15.0777 15.0287 15.0684 15.5035 14.7698 15.7906C14.4713 16.0777 13.9965 16.0684 13.7094 15.7698L10 11.8321L6.29063 15.7698C6.00353 16.0684 5.52875 16.0777 5.23017 15.7906ZM5.23017 9.79062C4.93159 9.50353 4.92228 9.02875 5.20938 8.73017L9.45938 4.23017C9.60078 4.08311 9.79599 4 10 4C10.204 4 10.3992 4.08311 10.5406 4.23017L14.7906 8.73017C15.0777 9.02875 15.0684 9.50353 14.7698 9.79062C14.4713 10.0777 13.9965 10.0684 13.7094 9.76983L10 5.83208L6.29063 9.76983C6.00353 10.0684 5.52875 10.0777 5.23017 9.79062Z"
        fill="white"
      />
    </svg>
  );

  window.addEventListener("scroll", toggleVisible);
  return (
    <>
      {visible === true && (
        <div className="button-scroll" onClick={scrollToTop}>
          {iconToTop}
          <div className="body-p7 button-scroll-text">{buttonText}</div>
        </div>
      )}
    </>
  );
};
export default ScrollButton;