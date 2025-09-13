import Image from "next/image";
import { IBankCard } from "../interfaces/BankCard";
import LogoLafiseBlanco from "@/shared/assets/logos/LogoLafiseBlanco.png";
import LafiseCardBackground from "@/shared/assets/logos/BankCardBackground.svg"

type BankCardProp = {
  bankCard: IBankCard;
}

function BankCard({ bankCard }: BankCardProp) {
  return (
    <div
      className={`
        flex flex-col w-full p-4 rounded-xl shadow-md relative
      `}
      style={{
        background: `
          linear-gradient(to right, ${bankCard.startColor}, ${bankCard.endColor})
        `
      }}
    >
      <div className="absolute pointer-events-none top-0 right-0">
        <Image
          src={LafiseCardBackground}
          alt="LafiseCardBackground"
          style={{ height: '100%', width: 'auto' }}
        />
      </div>
      <div className="w-full relative">
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
    </div>
  )
}

export default BankCard;
