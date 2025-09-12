import BankCard from "../components/BankCard";
import { bankCards } from "../constants/bankCards";

function BankCardsList() {
  return (
    <div className="my-6 w-full mt-6 grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {
        bankCards.map((bankCard) => (
          <BankCard key={bankCard.id} bankCard={bankCard} />
        ))
      }
    </div>
  )
}

export default BankCardsList;
