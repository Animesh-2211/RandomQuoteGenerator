import React from 'react';

function Navbar() {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto">
        <ul className="flex justify-between items-center">
          <li>
            <span className="text-white font-bold">Random Activity Generator</span>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
