import Image from "next/image";
import { IBankCard } from "../interfaces/BankCard";
import LogoLafiseBlanco from "@/shared/assets/logos/LogoLafiseBlanco.png";

type BankCardProp = {
  bankCard: IBankCard;
}

function BankCard({ bankCard }: BankCardProp) {
  return (
    <div
      className={`
        flex flex-col w-full p-4 rounded-xl shadow-md
      `}
      style={{
        background: `linear-gradient(to right, ${bankCard.startColor}, ${bankCard.endColor})`,
      }}
    >
      <div className="w-full">
        <Image
          src={LogoLafiseBlanco}
          alt="LogoLafise"
          width={86}
        />
      </div>
      <div className="w-full">
        BankCard
      </div>
    </div>
  )
}

export default BankCard;
