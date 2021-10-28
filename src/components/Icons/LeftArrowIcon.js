import React from "react";

function LeftArrowIcon({ fill, hover }) {
  return (
    <div>
      <svg
        width="23"
        height="16"
        viewBox="0 0 23 16"
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M21.2852 9C21.8374 9 22.2852 8.55228 22.2852 8C22.2852 7.44772 21.8374 7 21.2852 7L21.2852 9ZM0.449017 7.29289C0.0584927 7.68342 0.0584926 8.31658 0.449017 8.7071L6.81298 15.0711C7.2035 15.4616 7.83667 15.4616 8.22719 15.0711C8.61772 14.6805 8.61772 14.0474 8.22719 13.6569L2.57034 8L8.22719 2.34314C8.61772 1.95262 8.61772 1.31946 8.22719 0.928931C7.83667 0.538407 7.2035 0.538407 6.81298 0.928931L0.449017 7.29289ZM21.2852 7L1.15612 7L1.15612 9L21.2852 9L21.2852 7Z" />
      </svg>
    </div>
  );
}

export default LeftArrowIcon;