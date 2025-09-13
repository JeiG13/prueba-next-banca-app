
"use cliente";
import ControlledAutoComplete from '@/shared/components/inputs/ControlledAutocomplete';
import { IAccount } from '@/shared/interfaces/Account';
import { useAppSelector } from '@/shared/store/hooks';
import { ReduxStatus } from '@/shared/enums/reduxStatusEnum';
import { useFormContext } from 'react-hook-form';
import AccountAutocompleteInfo from './AccountAutocompleteInfo';
import { Button } from '@mui/material';
import { TransferFormInfer } from '../validations/transferValidationSchema';

type Props = {
  handleNext: () => void;
}

function SelectOriginAccount({
  handleNext
}: Props) {
  const { accountsMock, accountsMockStatus } = useAppSelector((state) => state.account);
  const { control, getValues, setError, clearErrors } = useFormContext<TransferFormInfer>();

  const handleNextStep = () => {
    const data = getValues();

    if (!data.origin?.id) {
      setError('origin', { message: 'La cuenta de origen es obligatoria' })
      return;
    }

    clearErrors('origin');
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
              disabled
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

export default SelectOriginAccount;
