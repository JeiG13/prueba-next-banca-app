import { Button, Step, StepLabel, Stepper } from "@mui/material";
import { StyledConnector } from "../components/connectors/StyledConnector";
import Caption2 from "../components/titles/Caption2";
import CustomStepIcon from "../components/icons/CustomStepIcon";
import Caption1 from "../components/titles/Caption1";
import { ReactNode } from "react";

export type StepType = {
  title: string;
  subtitle: string;
}

type CustomStepperProps = {
  children: ReactNode;
  activeStep: number;
  steps: StepType[];
  handleNext: () => void;
  handleBack: () => void;
  backButtonLabel?: string,
  nextButtonLabel?: string,
}

function CustomStepper({
  children,
  activeStep,
  steps,
  handleBack, 
  handleNext,
  backButtonLabel = 'Atrás',
  nextButtonLabel = 'Continuar',
}: CustomStepperProps) {
  return (
      <div className="w-full">
        <div className="w-full bg-white py-6 border border-[#DFE1DF] rounded-sm">
          <Stepper
            alternativeLabel
            activeStep={activeStep}
            connector={<StyledConnector />}
          >
            {steps.map((step) => (
              <Step key={step.title}>
                <StepLabel slots={{ stepIcon: CustomStepIcon }}>
                  <div className="flex flex-col justify-center">
                    <div className="flex justify-center">
                      <Caption2 title={step.title} className="justify-center" />
                    </div>
                    <div className="flex justify-center">
                      <Caption1 title={step.subtitle} className="justify-center" />
                    </div>
                  </div>
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </div>
        <div className="w-full flex flex-col bg-white border border-[#DFE1DF] rounded-sm">
          <div className="w-full flex justify-center">
            {children}
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
                disabled={activeStep === 0}
              >
                {backButtonLabel}
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
                onClick={handleNext}
              >
                {nextButtonLabel}
              </Button>
            </div>
          </div>
      </div>
  )
}

export default CustomStepper;
