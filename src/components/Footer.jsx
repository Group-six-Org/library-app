import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="bg-teal-700 text-white">
        <div className=" flex flex-col md:flex-row justify-between gap-5 p-10 mt-20"> 
            <div>
                <Link to="/" className="text-4xl font-extrabold tracking-wide text-white">
                          <span className="text-yellow-300">Read</span>Wide
                        </Link>
               
            </div>

            <div>
              <h2 className="font-bold mb-10">Address</h2>
            <div className="space-y-5">
               <p>Plot Number 7, legon street-osu</p>
                <p>Telephone- 0503555666</p>
                <p>email</p>
                <a href="library@readwide.com">library@readwide.com</a>
            </div>

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
                <div className="space-y-5">
                  <p>Mon-Friday- 8:30-22:00</p>
                  <p>Saturday-9:00-16:00</p>
                  <p>Sunday/ Holidays-Closed</p>
                </div>
              </div>
        </div> 
        <p className="mt-2 text-center">copyright@ Readwide Library 2025 all Rights Reserved </p>
    </div>
    
  )

};

export default Footer;
