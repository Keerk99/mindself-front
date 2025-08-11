import Link from "next/link";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";

export default function Footer() {
  return (
    <footer className="bg-[#1b4b0e] text-white">
      <div className="flex flex-col my-0 mx-auto py-6 px-40 max-w-[1900px] gap-16">
        <div className="flex justify-around">
          <p>Aca va el otro logo</p>
          <div className="flex gap-32">
            <div className="flex flex-col gap-4 items-center">
              <p className="text-xl font-bold">Contacto</p>
              <div className="flex gap-3 items-center">
                <IoMail className="text-xl" />
                <Link href="mailto:yasser@gmail.com" className="cursor-pointer">
                  yasser@gmail.com
                </Link>
              </div>
              <div className="flex gap-3 items-center">
                <FaPhoneAlt className="text-xl" />
                <Link
                  href="https://wa.me/51973920145"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                  +51 973 920 145
                </Link>
              </div>
              <div className="flex gap-3 items-center">
                <HiMiniBuildingOffice2 className="text-xl" />
                <span>Av. Direccion de la oficina</span>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <p className="text-xl font-bold">Redes sociales</p>
              <div className="flex gap-6">
                <Link href="/" className="text-2xl">
                  <FaFacebook />
                </Link>
                <Link href="/" className="text-2xl">
                  <FaInstagram />
                </Link>
                <Link href="/" className="text-2xl">
                  <FaTiktok />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between text-center">
          <span className="text-xs">
            Copyright 2025 © MINDSELF Todos los derechos reservados
          </span>
          <Link
            href="https://www.linkedin.com/in/keerk99"
            target="_blank"
            className="text-xs"
          >
            Desarrollado por keek99
          </Link>
        </div>
      </div>
    </footer>
  );
}
