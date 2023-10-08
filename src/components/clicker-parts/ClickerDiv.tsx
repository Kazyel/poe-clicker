import React from "react";
import Image from "next/image";

interface IProps {
  chaos: number;
  qntd: number,
  setChaos: (val: number) => void;
}

const ClickerDiv: React.FC<IProps> = ({ setChaos, chaos, qntd }) => {
  return (
    <div className="col-span-3 flex min-h-screen flex-col items-center justify-center bg-[url('/bg-poe.png')] bg-cover bg-center bg-no-repeat ">
      <Image
        className="cursor-pointer drop-shadow-[0_5px_25px_rgba(0,0,0,1)]"
        src="/chaos-orb.png"
        width={224}
        height={0}
        alt="Chaos Orb"
        onClick={() => {
          setChaos(chaos + qntd);
        }}
      />

      <p className="text-[4rem] font-bold text-white drop-shadow-[0_5px_5px_rgba(0,0,0,1)]">
        {chaos} Chaos Orb
      </p>
    </div>
  );
};

export default ClickerDiv;
