import { forwardRef } from "react";
import PropTypes from "prop-types";
// import { motion } from "framer-motion";

const Button = forwardRef(
  ({ value, type = null, className = "", onClick }, ref) => {
    return (
      <>
        <button
          ref={ref}
          type={type || "submit"}
          onClick={onClick}
          className={`${className} bg-whiteTheme-primaryColor text-whiteTheme-secondColor w-fit flex items-center rounded-md px-14 max-md:px-8 py-3 max-md:py-2 font-medium hover:bg-yellow-600 `}
        >
          {value}
        </button>
      </>
    );
  }
);
Button.displayName = "Button";

Button.propTypes = {
  value: PropTypes.any,
  type: PropTypes.string,
  className: PropTypes.string,
  route: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
