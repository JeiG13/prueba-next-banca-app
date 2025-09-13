import { styled } from '@mui/material';
import { MdCheckCircle, MdCircle } from 'react-icons/md';

const StyledStepIcon = styled("div")<{ $active: boolean }>(({ theme, $active }) => ({
  color: $active ? "#3B8668" : "#eaeaf0",
  display: "flex",
  height: 22,
  alignItems: "center",
  "& .QontoStepIcon-completedIcon": {
    color: "#3B8668",
    zIndex: 1,
    fontSize: 18,
  },
  "& .QontoStepIcon-circle": {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
  ...theme.applyStyles?.("dark", {
    color: "black",
  }),
}));

type Props = {
  active: boolean;
  completed: boolean
}

function CustomStepIcon({ active, completed }: Props) {
  return (
    <StyledStepIcon $active={active}>
      {completed ? (
        <MdCheckCircle size={24} color="#3B8668" />
      ) : (
        <MdCircle size={12} color="#3B8668" />
      )}
    </StyledStepIcon>
  )
}

export default CustomStepIcon;
