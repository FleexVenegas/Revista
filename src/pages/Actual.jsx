import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Header } from "../components";
import svg from "../data/svg02.svg";
//import { useStateContext } from "../contexts/ContextProvider";
import { ultimoNumero, DescriptionUltimoNumero } from "../data/dummy";

const Actual = () => {
  return (
    <>
      <div className="flex justify-center m-2 md:m-1 p-2 md:p-5">
        <div className="mt-10">
          <img src={svg} alt="Banner" className="w-80 md:w-800" />
        </div>
      </div>
      <div className="dark:bg-gray-600 dark:text-white m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
        <Header category="Último Número" />
        <div className="p-5 bg-slate-100 dark:bg-gray-500 rounded-2xl opacity-90">
          {ultimoNumero.map((item) => (
            <div key={item.clave}>
              <h3 className="text-justify">{item.title}</h3>
              <div className="md:flex ms:gap-5 mt-5">
                <div className="flex justify-center">
                  <div className="">
                    <NavLink
                      to="/NumeroActual"
                    >
                      <img
                        src={item.image}
                        alt={item.alt}
                        className="w-80 md:w-96"
                      />
                    </NavLink>
                  </div>
                </div>

                <div className="md:pl-20 md:pr-10 md:flex md:flex-col md: justify-center md:w-800 ">
                  <h1 className="text-lg md:pb-8">
                    <strong>Publicado:</strong> {item.publicado}
                  </h1>
                  <h1 className="text-lg md:pb-3">
                    <strong>{item.titleDescription}</strong>
                  </h1>
                  <DescriptionUltimoNumero />
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link
          to="/instrucciones"
          className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
        >
          <span>Enviar un Articulo</span>
        </Link>
      </div>
    </>
  );
};

export default Actual;
