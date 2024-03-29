import React from "react";

const Modal = ({ open, children }) => {
  if (!open) return null;
  return <div>{children}</div>;
};

export default Modal;
