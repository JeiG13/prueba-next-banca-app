
"use cliente";
import ControlledAutoComplete from '@/shared/components/inputs/ControlledAutocomplete';
import { IAccount } from '@/shared/interfaces/Account';
import { useAppSelector } from '@/shared/store/hooks';
import { ReduxStatus } from '@/shared/enums/reduxStatusEnum';
import { useFormContext } from 'react-hook-form';
import AccountAutocompleteInfo from './AccountAutocompleteInfo';
import { TransferFormInfer } from '../validations/transferValidationSchema';

function SelectOriginAccount() {
  const { accountsMock, accountsMockStatus } = useAppSelector((state) => state.account);
  const { control } = useFormContext<TransferFormInfer>();

  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-center">
        <div className="w-full md:w-2/3 lg:w-1/2">
          <ControlledAutoComplete<TransferFormInfer, IAccount>
            disabled={accountsMockStatus === ReduxStatus.pending}
            control={control}
            codeKey="account_number"
            labelKey="account_number"
            name="origin"
            options={accountsMock}
            label="Cuenta origen"
            renderOption={(props, option) => (
              <li {...props} className="flex flex-row p-2 cursor-pointer" key={option.id}>
                <AccountAutocompleteInfo account={option} key={option.id} />
              </li>
            )}
            renderValue={(value) => (
              <AccountAutocompleteInfo account={value} key={value.id} />
            )}
            selectFullObject
          />
        </div>
      </div>
    </div>
  )
}

export default SelectOriginAccount;
