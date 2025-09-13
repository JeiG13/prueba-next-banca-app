"use client";
import { useEffect, useState } from 'react';
import CustomStepper, { StepType } from '@/shared/templates/CustomStepper';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAppDispatch, useAppSelector } from '@/shared/store/hooks';
import { resetAccountSlice } from '@/shared/store/slices/accountSlice';
import { getAccountsMock } from '@/shared/store/thunks/accountThunk';
import MountedTabPanel from '@/shared/components/tabs/MountedTabPanel';
import { FormProvider, useForm } from 'react-hook-form';
import SelectOriginAccount from '../components/SelectOriginAccount';
import SelectDestinationAccount from '../components/SelectDestinationAccount';
import InputTransferAmount from '../components/InputTransferAmount';
import transferValidationSchema, { TransferFormInfer } from '../validations/transferValidationSchema';
import AdditionalInfoForm from '../components/AdditionalInfoForm';
import BackdropLoader from '@/shared/components/backdrops/BackdropLoader';
import { ReduxStatus } from '@/shared/enums/reduxStatusEnum';

const steps: StepType[] = [
  { title: 'Paso 1', subtitle: 'Cuenta origen' },
  { title: 'Paso 2', subtitle: 'Cuenta destino' },
  { title: 'Paso 3', subtitle: 'Monto a transferir' },
  { title: 'Paso 4', subtitle: 'Datos adicionales' },
];

const initialValues: TransferFormInfer = {
  origin: null,
  destination: null,
  amount: '',
  creditConcept: '',
  transactionType: null,
  debitConcept: '',
  confirmation: '',
  reference: '',
}

function TransferStepper() {
  const dispatch = useAppDispatch();
  const { postTransactionStatus } = useAppSelector((state) => state.transaction);

  const [activeStep, setActiveStep] = useState(0);

  const methods = useForm<TransferFormInfer>({
    defaultValues: initialValues,
    resolver: zodResolver(transferValidationSchema),
    reValidateMode: 'onChange',
    criteriaMode: 'firstError',
  });

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  useEffect(() => {
    dispatch(getAccountsMock(1));
  
    return () => {
      dispatch(resetAccountSlice());
    }
  }, [dispatch]);

  return (
    <FormProvider {...methods}>
      <div className="w-full mt-4">
        <BackdropLoader
          title="Realizando transacción"
          isLoading={postTransactionStatus === ReduxStatus.pending}
        />
        <CustomStepper
          activeStep={activeStep}
          steps={steps}
        >
          <MountedTabPanel value={activeStep} index={0}>
            <div className="w-full px-8 py-10">
              <SelectOriginAccount handleNext={handleNext} />
            </div>
          </MountedTabPanel>
          <MountedTabPanel value={activeStep} index={1}>
            <div className="w-full px-8 py-10">
              <SelectDestinationAccount
                handleNext={handleNext}
                handleBack={handleBack}
              />
            </div>
          </MountedTabPanel>
          <MountedTabPanel value={activeStep} index={2}>
            <div className="w-full px-8 py-10">
              <InputTransferAmount
                handleBack={handleBack}
                handleNext={handleNext}
              />
            </div>
          </MountedTabPanel>
          <MountedTabPanel value={activeStep} index={3}>
            <AdditionalInfoForm handleBack={handleBack} />
          </MountedTabPanel>
        </CustomStepper>
      </div>
    </FormProvider>
  )
}

export default TransferStepper;
