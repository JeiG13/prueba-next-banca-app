"use client";
import { useEffect, useMemo } from 'react'
import ControlledAutoComplete from '@/shared/components/inputs/ControlledAutocomplete';
import { ReduxStatus } from '@/shared/enums/reduxStatusEnum';
import { IAccount } from '../../../shared/interfaces/Account';
import { useFormContext } from 'react-hook-form';
import { useAppSelector } from '@/shared/store/hooks';
import AccountAutocompleteInfo from './AccountAutocompleteInfo';
import { TransferFormInfer } from '../validations/transferValidationSchema';

function SelectDestinationAccount() {
  const { accountsMock, accountsMockStatus } = useAppSelector((state) => state.account);
  const { control, watch, setValue } = useFormContext<TransferFormInfer>();

  const selectedOrigin = watch('origin');

  useEffect(() => {
    setValue('destination', null);
  }, [selectedOrigin, setValue]);

  const destinationAccounts = useMemo(
    () => accountsMock.filter((account) => (account.account_number !== selectedOrigin?.account_number)),
    [selectedOrigin, accountsMock],
  );

  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-center">
        <div className="w-full md:w-2/3 lg:w-1/2">
          <ControlledAutoComplete<TransferFormInfer, IAccount>
            disabled={accountsMockStatus === ReduxStatus.pending}
            control={control}
            codeKey="account_number"
            labelKey="account_number"
            name="destination"
            options={destinationAccounts}
            label="Cuenta destino"
            selectFullObject
            renderOption={(props, option) => (
            <li {...props} className="flex flex-row p-2 cursor-pointer" key={option.id}>
              <AccountAutocompleteInfo account={option} key={option.id} />
            </li>
            )}
            renderValue={(value) => (
              <AccountAutocompleteInfo account={value} key={value.id} />
            )}
          />
        </div>
      </div>
    </div>
  )
}

export default SelectDestinationAccount;
