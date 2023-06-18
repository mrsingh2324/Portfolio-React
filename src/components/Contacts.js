import React from "react";
import { CgProfile } from "react-icons/cg";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
const Contacts = () => {
  return (
    <div className="w-[100%] flex items-center h-screen justify-center py-10 ">
      <div className=" text-white w-[90%] h-[100%] border rounded-3xl bg-gray-800 flex flex-col">
        {/* mini header */}
        <div className="h-[5%] items-center flex justify-center text-sm border-b">
          <p>
            Lorem, cupiditate non illum, accusantium autem deserunt repellendus
            ipsam mollitia quasi aut vitae dignissimos adipisci quis possimus!
            Exercitationem.
          </p>
        </div>
        {/* main header */}
        <div className="h-[10%] border-b flex items-center justify-between px-10 py-5">
          <div className="bg- text-gray-400">
            <p className="fonnt-bold p-2">Contact Me</p>
          </div>
          <div className="flex justify-around">
            <ul className="flex gap-8 justify-around font-semibold">
              <li>Shop</li>
              <li>Design</li>
              <li>New Arrivals</li>
              <li>Tops</li>
              <li>Bottoms</li>
            </ul>
          </div>
          <div className="flex items-center text-end justify-end gap-5">
            <AiOutlineWhatsApp className="text-2xl" />
            <BiPhoneCall className="text-2xl" />
            <AiOutlineShoppingCart className="text-2xl" />
          </div>
        </div>
        {/* photo */}
        <div className="h-[45%] w-full">
          <img src="affs" alt="image" />
        </div>
        {/* footer  */}
        <div className="flex justify-around min-gap-10 border-t">
          <div className="flex flex-col text-start gap-4 p-2 justify-around max-w-[30%] items-start">
            <p>Contact Me</p>
            <p>
              Need help with your order? Have questions about sizing ? Feels
              Free to get in touch with me with any questions you may have
            </p>
            <p>Email : satyam.12011172@gmail.com</p>
            <p>Phone : 9876543210</p>
          </div>
          <div className="text-start flex flex-col justify-around">
              <p>Visit Me</p>
            <div>
              <p>Mon-Thu 10:00 am - 8:00pm</p>
              <p>Fri 10:00 am - 8:00 pm</p>
              <p>*0 W Main Stree Someville, Nu 06676</p>
            </div>
            <div>
              <p>awefq3wwrf</p>
            </div>
            <div>
              <p>awefq3wwrf</p>
            </div>
          </div>
          <div className="m-2 bg-gray-900 rounded-3xl">
            <form action="" className="p-3 py-7 flex flex-col gap-5">
              <div className="gap-5 flex flex-wrap">
                <input
                  type="text"
                  className="bg-transparent border-b px-1 text-sm outline-none"
                  placeholder="First Name"
                />
                <input
                  type="text"
                  className="bg-transparent border-b px-1 text-sm outline-none"
                  placeholder="Last Name"
                />
              </div>
              <div className="flex flex-wrap gap-5">
                <input
                  type="email"
                  className="bg-transparent border-b px-1 text-sm outline-none"
                  placeholder="Email"
                />
                <input
                  type="text"
                  className="bg-transparent border-b px-1 text-sm outline-none"
                  placeholder="Phone"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="flex items-center justify-center w-full text-start bg-transparent border-b px-1 text-sm outline-none"
                  placeholder="Type Your Message"
                />
              </div>
              <button className="bg- text-green-500">
                <p>Submit</p>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
