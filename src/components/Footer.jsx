import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="bg-teal-700 text-white mt-20 p-10">
      <div className=" flex flex-row justify-between gap-5">
        <div>
          <h2 className="font-bold mb-10">ReadWide Library</h2>
          <p>Plot Number 7, legon street-osu</p>
          <p>Telephone- 0503555666</p>
          <p>email</p>
          <a href="library@readwide.com">library@readwide.com</a>
        </div>

        <div>
          <h2 className="font-bold mb-10">Useful Links</h2>
          <div className="flex flex-col justify-between space-y-5">
            <span>Catalog</span>
            <span>E-Book</span>
            <span>Borrowing Materials</span>
            <span>Journals</span>
          </div>
        </div>

        <div>
          <h2 className="font-bold mb-10">Library Hours</h2>
          <p>Mon-Friday- 8:30-22:00</p>
          <p>Saturday-9:00-16:00</p>
          <p>Sunday/ Holidays-Closed</p>
        </div>
      </div>
      <p className="mb-2">
        copyright@ Readwide Library 2025 all Rights Reserved{" "}
      </p>
    </div>
  );
};

export default Footer;
