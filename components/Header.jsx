import React from "react";

const Header = () => {
  return (
    <div className="h-16 flex justify-between items-center p-4 sticky top-0 left-0 z-[50]">
      <div>Logo</div>
      <div>Menu</div>
      <div>Profile</div>
    </div>
  );
};

export default Header;
