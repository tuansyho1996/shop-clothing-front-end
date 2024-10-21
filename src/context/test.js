import { useState } from "react";

const MenDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative flex justify-center"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className=" font-semibold">Men</button>

      {isOpen && (
        <div className="absolute top-full mt-2 w-48 bg-white shadow-lg rounded-md text-center z-10">
          <ul>
            <li className="hover:bg-gray-100 px-4 py-2">
              <a href="#">T-shirt</a>
            </li>
            <li className="hover:bg-gray-100 px-4 py-2">
              <a href="#">Pant</a>
            </li>
            <li className="hover:bg-gray-100 px-4 py-2">
              <a href="#">Shirt</a>
            </li>
            <li className="hover:bg-gray-100 px-4 py-2">
              <a href="#">Hoodie</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MenDropdown;
