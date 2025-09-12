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
      <div className="w-full mt-10">
        <h1
          className="text-white font-lato font-medium text-2xl whitespace-pre"
        >
          {bankCard.cardNumber}
        </h1>
      </div>
      <div className="w-full mt-10 grid grid-cols-3 gap-2 items-end">
        <div>
          <h1
            className="text-white font-lato font-medium text-xs"
          >
            {bankCard.name}
          </h1>
        </div>

        <div className="flex flex-col">
          <h1
            className="text-white font-lato font-medium text-[8px]"
          >
            Expire date
          </h1>
                    <h1
            className="text-white font-lato font-medium text-xs"
          >
            {bankCard.expirationDate}
          </h1>
        </div>
      </div>
    </div>
  )
}

export default BankCard;
