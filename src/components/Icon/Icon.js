import { FiX } from "react-icons/fi";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
export const Icon = ({
  size = 18,
  option,
  color = "white",
  className,
  onClick,
}) => {
  const extraProps = {
    size,
    color,
    className,
    onClick,
  };
  switch (option) {
    case "CANCEL":
      return <FiX {...extraProps} />;
    case "FACEBOOK":
      return <FaFacebookF {...extraProps} />;
    case "TWITTER":
      return <FaTwitter {...extraProps} />;
    default:
      return null;
  }
};
