import ControlledTextfield from '@/shared/components/inputs/ControlledTextfield';
import { useFormContext } from 'react-hook-form';
import { TransferFormInfer } from '../validations/transferValidationSchema';
import { Button } from '@mui/material';

type Props = {
  handleNext: () => void;
  handleBack: () => void;
}

function InputTransferAmount({
  handleBack,
  handleNext,
}: Props) {
  const { control, getValues, setError, clearErrors } = useFormContext<TransferFormInfer>();

  const handleNextStep = () => {
    const data = getValues();

    if (!data.amount) {
      setError('amount', { message: 'El monto es obligatorio' })
      return;
    }

    if (data.amount > (data.origin?.balance ?? 0)) {
      setError('amount', { message: 'Su saldo es insuficiente para realizar esta transacción' })
      return;
    }

    if (Number.isNaN(Number(data.amount))) {
      setError('amount', { message: 'El monto debe ser un número' })
      return;
    }

    clearErrors('amount');
    handleNext();
  }

  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-center">
        <div className="w-1/2">
          <ControlledTextfield<TransferFormInfer>
            name="amount"
            control={control}
            label="Monto a transferir"
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

export default InputTransferAmount;
