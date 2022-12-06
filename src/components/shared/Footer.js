import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="bg-slate-300">
      <div className="flex-col flex items-center justify-between m-1 p-3">
        <Link>About</Link>
        <Link>Support/Help</Link>
        <Link>Gift Cards</Link>
        <Link>Contact</Link>
        <Link>BookShop For Authors</Link>
      </div>
    </div>
  );
};

export default Footer;
