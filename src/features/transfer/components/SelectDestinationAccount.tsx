"use client";
import ControlledAutoComplete from '@/shared/components/inputs/ControlledAutocomplete';
import { ReduxStatus } from '@/shared/enums/reduxStatusEnum';
import React, { useEffect, useMemo } from 'react'
import { IAccount } from '../../../shared/interfaces/Account';
import { useFormContext } from 'react-hook-form';
import { useAppSelector } from '@/shared/store/hooks';
import AccountAutocompleteInfo from './AccountAutocompleteInfo';
import { TransferFormInfer } from '../validations/transferValidationSchema';
import { Button } from '@mui/material';

type Props = {
  handleNext: () => void;
  handleBack: () => void;
}

function SelectDestinationAccount({
  handleBack, handleNext,
}: Props) {
  const { accountsMock, accountsMockStatus } = useAppSelector((state) => state.account);
  const { control, watch, setValue, setError, getValues, clearErrors } = useFormContext<TransferFormInfer>();

  const selectedOrigin = watch('origin');

  useEffect(() => {
    setValue('destination', null);
  }, [selectedOrigin, setValue]);

  const destinationAccounts = useMemo(
    () => accountsMock.filter((account) => (account.account_number !== selectedOrigin?.account_number)),
    [selectedOrigin, accountsMock],
  );

  const handleNextStep = () => {
    const data = getValues();

    if (!data.destination?.id) {
      setError('destination', { message: 'La cuenta de destino es obligatoria' })
      return;
    }

    clearErrors('destination');
    handleNext();
  }

  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-center">
        <div className="w-full md:w-1/2">
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
      <div className="w-full">
        <div className="w-full mt-40 mb-10 flex flex-row justify-center items-center">
          <Button
            variant="outlined"
            sx={{
              mr: '32px',
              textTransform: 'none',
              fontSize: '14px',
              px: '24px',
              py: '8px',
              color: '#00593B',
              borderColor: '#00593B',
            }}
            onClick={handleBack}
          >
            Atrás
          </Button>
          <Button
            variant="contained"
            sx={{
              textTransform: 'none',
              fontSize: '14px',
              px: '24px' ,
              py: '8px',
              bgcolor: '#00593B',
            }}
            onClick={handleNextStep}
          >
            Continuar
          </Button>
        </div>
      </div>
    </div>
  )
}

export default SelectDestinationAccount;
