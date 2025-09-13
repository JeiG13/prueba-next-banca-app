"use client";
import { useEffect, useState } from 'react';
import CustomStepper from '@/shared/templates/CustomStepper';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAppDispatch, useAppSelector } from '@/shared/store/hooks';
import { resetAccountSlice } from '@/shared/store/slices/accountSlice';
import { getAccountsMock } from '@/shared/store/thunks/accountThunk';
import MountedTabPanel from '@/shared/components/tabs/MountedTabPanel';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import SelectOriginAccount from '../components/SelectOriginAccount';
import SelectDestinationAccount from '../components/SelectDestinationAccount';
import InputTransferAmount from '../components/InputTransferAmount';
import transferValidationSchema, { TransferFormInfer } from '../validations/transferValidationSchema';
import AdditionalInfoForm from '../components/AdditionalInfoForm';
import BackdropLoader from '@/shared/components/backdrops/BackdropLoader';
import { ReduxStatus } from '@/shared/enums/reduxStatusEnum';
import { resetTransactionSlice } from '@/shared/store/slices/transactionsSlice';
import { IPostTransaction } from '@/shared/interfaces/PostTransaction';
import { postTransaction } from '@/shared/store/thunks/transactionThunks';
import { formSteps } from '../constants/formSteps';

const stepFieldsToValidate: Record<number, (keyof TransferFormInfer)[]> = {
  0: ['origin'],
  1: ['destination'],
  2: ['amount'],
  3: ['transactionType', 'debitConcept', 'creditConcept', 'reference', 'confirmation'],
};

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
  const router = useRouter();
  const { postTransactionStatus } = useAppSelector((state) => state.transaction);

  const [activeStep, setActiveStep] = useState(0);

  const methods = useForm<TransferFormInfer>({
    defaultValues: initialValues,
    resolver: zodResolver(transferValidationSchema),
    reValidateMode: 'onChange',
    criteriaMode: 'firstError',
  });

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

  const handleNext = async () => {
    const fieldsToValidate = stepFieldsToValidate[activeStep];
    const isValid = await methods.trigger(fieldsToValidate);
    
    if (!isValid) return;
    
    if (activeStep === (formSteps.length - 1)) {
      methods.handleSubmit(onSubmit)();
      return;
    }
  
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  useEffect(() => {
    dispatch(getAccountsMock(1));
  
    return () => {
      dispatch(resetAccountSlice());
      dispatch(resetTransactionSlice());
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
          steps={formSteps}
          handleBack={handleBack}
          handleNext={handleNext}
          nextButtonLabel={activeStep === (formSteps.length - 1) ? 'Transferir' : 'Continuar'}
        >
          <MountedTabPanel value={activeStep} index={0}>
            <div className="w-full px-8 py-10">
              <SelectOriginAccount />
            </div>
          </MountedTabPanel>
          <MountedTabPanel value={activeStep} index={1}>
            <div className="w-full px-8 py-10">
              <SelectDestinationAccount />
            </div>
          </MountedTabPanel>
          <MountedTabPanel value={activeStep} index={2}>
            <div className="w-full px-8 py-10">
              <InputTransferAmount />
            </div>
          </MountedTabPanel>
          <MountedTabPanel value={activeStep} index={3}>
            <AdditionalInfoForm />
          </MountedTabPanel>
        </CustomStepper>
      </div>
    </FormProvider>
  )
}

export default TransferStepper;
