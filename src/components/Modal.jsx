import cx from "classnames";
import PropTypes from "prop-types";

export const Modal = ({ children, className, isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  const handleOnClose = (e) => {
    if (e.target.id === "wrapper") {
      onClose();
    }
  };

  return (
    <div
      className={cx(
        "fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center",
        className
      )}
      id="wrapper"
      onClick={handleOnClose}
    >
      <div className="md:w-[600px] w-[90%] mx-auto flex flex-col bg-white p-4 rounded">
        <button className="text-black text-xl place-self-end" onClick={onClose}>
          X
        </button>
        <div className="">{children}</div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

Modal.defaultProps = {
  children: null,
  className: "",
  isOpen: null,
  onClose: () => {},
};
