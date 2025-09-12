import { IconButton } from '@mui/material';
import numbro from 'numbro';
import { FiCopy } from 'react-icons/fi';

import SectionTitle from '@/shared/components/SectionTitle';
import { IAccount } from '@/shared/interfaces/Account';
import { getCurrencyByCode } from '@/shared/helpers/getCurrencyByCode';
import copyToClipboard from '@/shared/helpers/copyToClipboard';
import { toast } from 'react-toastify';
import Image from 'next/image';
import { getFlagByCountry } from '../helpers/getFlagByCountry';

type AccountCardProps = {
  account: IAccount;
}

function AccountCard({ account }: AccountCardProps) {
  const copyAccountNumber = async () => {
    await copyToClipboard(String(account.account_number));
    toast.success('Número de cuenta copiado en el portapapeles');
  };

  return (
    <div className="w-full bg-white rounded-sm shadow-md p-4">
      <div className="flex justify-between items-start mb-9">
        <div>
          <SectionTitle
            title={`${account.currency} Cuenta`}
          />

          <div className="flex flex-row items-center">
            <div className="px-2 py-1 bg-[#EDF5F2] mt-2 rounded-sm mr-3">
              <h4 className="text-[#3B8668] font-medium text-sm">
                {account.account_number}
              </h4>
            </div>

            <div>
              <IconButton
                onClick={copyAccountNumber}
              >
                <FiCopy
                  size={20}
                  color="#3B8668"
                />
              </IconButton>
            </div>
          </div>
        </div>

        <div>
          <Image
            src={getFlagByCountry(account?.country_code ?? '')}
            alt="Flag icon"
            height={40}
            width={40}
          />
        </div>
      </div>
      <SectionTitle
        title={`${getCurrencyByCode(account.currency)?.symbol ?? ''} 
        ${numbro(account.balance).format({ thousandSeparated: true })}`}
      />
    </div>
  )
}

export default AccountCard;
