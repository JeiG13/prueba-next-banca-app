import { DatePicker } from '@mui/x-date-pickers';

import { Control, Controller, FieldValues, Path } from 'react-hook-form';

type Props<TForm extends FieldValues> = {
	name: Path<TForm>;
	label: string;
	control: Control<TForm>;
	disabled?: boolean;
	className?: string;
};

function ControlledDatePicker<T extends FieldValues>({
  name,
  control,
  label,
  disabled = false,
  className = '' }: Props<T>) {
	return (
		<Controller
			name={name}
			control={control}
			render={({ field: { onChange, value }, fieldState: { error } }) => {
				return (
					<DatePicker
						label={label}
						onChange={onChange}
						value={value}
						format="dd/MM/yyyy"
						disabled={disabled}
						slotProps={{
							textField: {
                className,
								fullWidth: true,
								size: 'small',
								helperText: error ? error.message : null,
								error: !!error,
							}
						}}
					/>
				);
			}}
		/>
	);
}

export default ControlledDatePicker;
