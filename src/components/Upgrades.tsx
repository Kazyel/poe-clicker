import React, { useState } from "react";

interface IProps {
  chaos: number;
  qntd: number;
  setQntd: (val: number) => void;
}

const Upgrades: React.FC<IProps> = ({ chaos, setQntd, qntd }) => {
  const [upgradeCost, setUpgradeCost] = useState<number>(15);

  return (
    <div className="col-span-1 flex min-h-screen bg-[#30303d]">
      <div className="flex w-full justify-center px-4 py-2 text-[1.75rem] text-white">
        <p
          className="cursor-pointer"
          onClick={() => {
            if (chaos >= upgradeCost) {
              setQntd(qntd + 1);
              setUpgradeCost(upgradeCost + upgradeCost/2)
            }
          }}
        >
          Tier 16 Farming - Cost: {upgradeCost}
        </p>
      </div>
    </div>
  );
};

export default Upgrades;
