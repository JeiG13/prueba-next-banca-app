import { getCurrencyByCode } from "@/shared/helpers/getCurrencyByCode";
import { IAccount } from "@/shared/interfaces/Account"
import numbro from "numbro";

type AccountAutocompleteInfoProps = {
  account: IAccount;
}
function AccountAutocompleteInfo({ account }: AccountAutocompleteInfoProps) {
  return (
    <div key={account.id} className="flex flex-row w-full justify-between items-center">
      <div className="flex flex-row">
        <h1 className="ml-2 text-[14px] font-medium text-[#3B8668] mr-6">
          {account.currency} Cuenta
        </h1>
        <h1 className="text-[14px] font-medium text-[#8D918D] mr-6">
          {account.account_number}
        </h1>
      </div>
      <div>
        <h1 className="text-[14px] font-medium text-[#272727]">
          {getCurrencyByCode(account.currency)?.symbol}
          {' '}
          {numbro(account.balance).format({ thousandSeparated: true })}
        </h1>
      </div>
    </div>
  )
}

export default AccountAutocompleteInfo;
