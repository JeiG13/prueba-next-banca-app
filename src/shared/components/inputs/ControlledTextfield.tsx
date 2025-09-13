import { HTMLInputTypeAttribute } from 'react';

import { InputAdornment, TextField } from '@mui/material';

import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import { IconType } from 'react-icons';

type Props<TForm extends FieldValues> = {
	name: Path<TForm>;
	label: string;
	control: Control<TForm>;
	disabled?: boolean;
	type?: HTMLInputTypeAttribute;
	className?: string;
	multiline?: boolean;
	rows?: number;
	placeholder?: string;
  StartIcon?: IconType;
};

function ControlledTextfield<T extends FieldValues>({
	name,
	control,
	label,
	disabled = false,
	type = 'text',
	className = '',
	placeholder,
	multiline = false,
	rows = 1,
  StartIcon,
}: Props<T>) {
	return (
		<Controller
			name={name}
			control={control}
			render={({ field: { onChange, value }, fieldState: { error } }) => (
				<TextField
					spellCheck={false}
					multiline={multiline}
					rows={rows}
					placeholder={placeholder}
					helperText={error ? error.message : null}
					error={!!error}
					type={type}
					size="small"
					disabled={disabled}
					onChange={onChange}
					value={value}
					label={label}
					variant="outlined"
					className={className}
          slotProps={{
						input: {
							startAdornment: (
								<InputAdornment position="start">
									{StartIcon ? <StartIcon size={24} color="#8D918D" /> : <span style={{ width: 24, display: 'inline-block' }} />}
								</InputAdornment>
							)
						}
					}}
					fullWidth
				/>
			)}
		/>
	);
}

export default ControlledTextfield;
