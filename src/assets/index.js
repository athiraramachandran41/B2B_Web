import "remixicon/fonts/remixicon.css";
export { default as logo } from "./images/logo.svg";
export { default as stocks } from "./images/stocks.svg";
export { default as dollarSquare } from "./images/dollarSquare.svg";
export { default as arrangeSquare } from "./images/arrangeSquare.svg";
export { default as moneySend } from "./images/moneySend.svg";
export { default as searchNormal } from "./images/searchNormal.svg";
export { default as cmpnyImg } from "./images/cmpny-img.svg";
export { default as addSquare } from "./images/add_square.svg";
export { default as minusSquare } from "./images/minus_square.svg";
export { default as dropDownArrow } from "./images/drop_down_arrow.svg";
// animation
export { default as animationTick } from "./animations/Animation-otp.json";
// placeholders
export { default as userPlaceholder } from "./placeholders/pl_user.png";
export { default as empData } from "./placeholders/emp_data.svg";
export { default as upload } from "./images/upload.svg";

export function EyeIcon(props) {
  const { color } = props;
  return (
    <div style={{ color: color }}>
      <i className="ri-eye-line"></i>
    </div>
  );
}

export function EyeOffIcon(props) {
  const { color } = props;
  return (
    <div style={{ color: color }}>
      <i className="ri-eye-off-line"></i>
    </div>
  );
}

export function CircleIcon(props) {
  const { color, size } = props;
  return (
    <div style={{ color: color, fontSize: size }}>
      <i style={{ fontSize: size }} className="ri-circle-fill"></i>
    </div>
  );
}

// dynamic side menu icons
export function SideMenuIcon(props) {
  const { color, size, name } = props;
  return (
    <div style={{ color: color, fontSize: size }}>
      <i style={{ fontSize: size }} className={name}></i>
      {/* <img style={{ fontSize: size }} alt="side-menu" src={name} /> */}
    </div>
  );
}


// dynamic side menu icons
export function CardImage(props) {
  const { color, size, name } = props;
  return (
    <div style={{ color: color, fontSize: size }}>
      <img style={{ fontSize: size }} alt="image" src={name} />
    </div>
  );
}
