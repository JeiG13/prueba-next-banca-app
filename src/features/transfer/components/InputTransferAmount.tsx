import ControlledTextfield from '@/shared/components/inputs/ControlledTextfield';
import { useFormContext } from 'react-hook-form';
import { TransferFormInfer } from '../validations/transferValidationSchema';
import { useEffect } from 'react';

function InputTransferAmount() {
  const { control, watch, setValue } = useFormContext<TransferFormInfer>();

  const selectedOrigin = watch('origin');

  useEffect(() => {
    setValue('amount', '');
  }, [selectedOrigin, setValue]);

  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-center">
        <div className="w-full md:w-2/3 lg:w-1/2">
          <ControlledTextfield<TransferFormInfer>
            name="amount"
            control={control}
            label="Monto a transferir"
          />
        </div>
      </div>
    </div>
  )
}

export default InputTransferAmount;
