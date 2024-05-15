import { FiMapPin, FiPhone, FiClock } from "react-icons/fi";

export function Footer() {
  return (
    <section className=" bg-gray-700 text-white font-medium">
      <footer className="grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-3 min-h-99 drop-shadow mt-10 p-16 px-20">
        <div className="flex w-full justify-between items-center border-2 gap-10">
          <div className="flex justify-center items-center cursor-pointer ms-10 mt-10 mb-10">
            <FiMapPin size={60} color="#FFF" />
          </div>
          <div className="flex w-full justify-start items-start flex-col gap-3">
            <p>ENDEREÇO</p>
            <p>Rua tal, 000</p>
            <p>Assis/SP</p>
          </div>
        </div>
        <div className="flex w-full justify-between items-center border-2 gap-10">
          <div className="flex justify-center items-center cursor-pointer ms-10 mt-10 mb-10">
            <FiPhone size={60} color="#FFF" />
          </div>
          <div className="flex w-full justify-start items-start flex-col gap-3">
            <p>TELEFONE</p>
            <p>00 0000-0000</p>
          </div>
        </div>
        <div className="flex w-full justify-between items-center border-2 gap-10">
          <div className="flex justify-center items-center cursor-pointer ms-10 mt-10 mb-10">
            <FiClock size={60} color="#FFF" />
          </div>
          <div className="flex w-full justify-start items-start flex-col gap-3">
            <p>ATENDIMENTO</p>
            <p>Seg à Sex 08h às 18h</p>
            <p>Sáb 08h às 12h</p>
          </div>
        </div>
      </footer>
      <div className="flex w-full justify-center items-center gap-5 p-5">
        <p>
          ©2024 - Fundações - Todos direitos reservados - Desenvolvido por
          <a href="https://scali.dev"> Scali.Dev</a>
        </p>
      </div>
    </section>
  );
}
