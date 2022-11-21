import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";

const Contacto = () => {
  return (
    <>
      <main className="flex dark:bg-gray-600 dark:text-white m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl justify-center opacity-80">
        <div className="p-5 bg-slate-100 dark:bg-gray-500 rounded-2xl">
          <h1 className="text-2xl">
            <strong>Contacto Principal</strong>
          </h1>
          <p className="mt-8">San Lorenzo 381 Guadalajara - México</p>
          <div className="flex gap-3 items-center mt-8">
            <BsFillTelephoneFill />
            <h1>
              <strong>3334353638</strong>
            </h1>
          </div>
          <h1 className="mt-5">ricet@gmail.com</h1>
        </div>
        <div></div>
      </main>
    </>
  );
};

export default Contacto;
