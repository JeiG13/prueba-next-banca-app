import { styled } from "@mui/material/styles";
import StepConnector, { stepConnectorClasses } from "@mui/material/StepConnector";

const ACTIVE_COLOR = "#3B8668";
const DEFAULT_COLOR = "#eaeaf0";

export const StyledConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  [`&.${stepConnectorClasses.active}, &.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: ACTIVE_COLOR,
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: DEFAULT_COLOR,
    borderTopWidth: 3,
    borderRadius: 1,
    ...theme.applyStyles?.('dark', {
      borderColor: 'black',
    }),
  },
}));
