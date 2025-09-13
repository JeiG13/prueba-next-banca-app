"use client";
import { useRouter } from "next/navigation";

import ControlledAutoComplete from '@/shared/components/inputs/ControlledAutocomplete';
import Caption1 from '@/shared/components/titles/Caption1';
import { ITransactionType } from '../interfaces/TransactionType';
import { TransferFormInfer } from '../validations/transferValidationSchema';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import { transactionTypes } from '../constants/transactionTypes';
import { useAppDispatch, useAppSelector } from '@/shared/store/hooks';
import AccountAutocompleteInfo from './AccountAutocompleteInfo';
import { IAccount } from '../../../shared/interfaces/Account';
import ControlledTextfield from '@/shared/components/inputs/ControlledTextfield';
import { Button } from '@mui/material';
import { IPostTransaction } from '@/shared/interfaces/PostTransaction';
import { postTransaction } from '@/shared/store/thunks/transactionThunks';
import { getAccountsMock } from '@/shared/store/thunks/accountThunk';

type Props = {
  handleBack: () => void;
}

function AdditionalInfoForm({
  handleBack,
}: Props) {
  const dispatch = useAppDispatch();
  const { accountsMock } = useAppSelector((state) => state.account);
  const { control, handleSubmit } = useFormContext<TransferFormInfer>();

  const router = useRouter();

  const onSubmit: SubmitHandler<TransferFormInfer> = async (data) => {
    const transaction: IPostTransaction = {
      destination: data.destination?.account_number.toString() ?? '',
      origin: data.origin?.account_number.toString() ?? '',
      amount: {
        value: Number(data.amount) ?? 0,
        currency: data.origin?.currency ?? '',
      },
    };

    const actionResult = await dispatch(postTransaction(transaction));

    if (postTransaction.fulfilled.match(actionResult)) {
      dispatch(getAccountsMock(1));
      router.push('/my-transactions');
    }
  };

  return (
    <div className="w-full p-0">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 py-6 px-10 bg-[#F9FAF9]">
        <div className="flex flex-col">
          <Caption1
            title="Tipo de transacción"
          />
          <ControlledAutoComplete<TransferFormInfer, ITransactionType>
            name="transactionType"
            control={control}
            codeKey="code"
            labelKey="value"
            label=""
            options={transactionTypes}
            sx={{ bgcolor: 'white', mt: 1 }}
          />
        </div>
        <div className="flex flex-col">
          <Caption1
            title="Cuenta"
          />
          <ControlledAutoComplete<TransferFormInfer, IAccount>
            disabled
            control={control}
            codeKey="account_number"
            labelKey="account_number"
            name="origin"
            options={accountsMock}
            label=""
            sx={{ bgcolor: 'white', mt: 1 }}
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
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 py-6 px-10 bg-white">
        <div className="flex">
          <ControlledTextfield<TransferFormInfer>
            name="debitConcept"
            control={control}
            label="Concepto de débito"
          />
        </div>
        <div className="flex">
          <ControlledTextfield<TransferFormInfer>
            name="creditConcept"
            control={control}
            label="Concepto de crébito"
          />
        </div>
        <div className="flex">
          <ControlledTextfield<TransferFormInfer>
            name="reference"
            control={control}
            label="Referencia"
          />
        </div>
        <div className="flex">
          <ControlledTextfield<TransferFormInfer>
            name="confirmation"
            control={control}
            label="Enviar confirmación a:"
          />
        </div>
      </div>
      <div className="w-full">
          <div className="w-full mt-20 mb-10 flex flex-row justify-center items-center">
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
              onClick={handleSubmit(onSubmit)}
            >
              Transferir
            </Button>
          </div>
      </div>
    </div>
  )
}

export default AdditionalInfoForm;
