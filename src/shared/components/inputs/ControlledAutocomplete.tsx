import { Autocomplete, InputAdornment, ListItem, ListItemText, SxProps, TextField, Theme } from '@mui/material';
import { HTMLAttributes, ReactNode } from 'react';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';

type Props<TForm extends FieldValues, TOptions> = {
	name: Path<TForm>;
	label: string;
	control: Control<TForm>;
	disabled?: boolean;
	options: TOptions[];
	codeKey: keyof TOptions;
	labelKey: keyof TOptions;
	noOptionsLabel?: string;
	sx?: SxProps<Theme>;
	renderOption?: (props: HTMLAttributes<HTMLLIElement>, option: TOptions) => ReactNode;
};

function ControlledAutoComplete<T extends FieldValues, TOption>({
	name,
	control,
	label,
	disabled = false,
	options,
	noOptionsLabel = 'No hay opciones',
	codeKey,
	labelKey,
	sx = {},
	renderOption,
}: Props<T, TOption>) {
	return (
		<Controller
			name={name}
			control={control}
			render={({ field: { onChange, value }, fieldState: { error } }) => {
				const currentOption = options?.find((option) => option[codeKey] === value) || value || null;
				return (
					<Autocomplete
						key={name}
						disablePortal
						multiple={false}
						noOptionsText={noOptionsLabel}
						loadingText="Cargando..."
						onChange={(_, value, reason) => {
							if (reason === 'clear') {
								onChange(null);
								return;
							}

              onChange(typeof value === 'string' ? value : value?.[codeKey]);
						}}
						value={currentOption as TOption}
						id={`autocomplete-${name}`}
						getOptionLabel={(option: TOption) => (option?.[labelKey] ? String(option?.[labelKey]) : '')}
						getOptionKey={(option: TOption) => String(option[codeKey])}
						isOptionEqualToValue={(option: TOption, value: TOption) => option[codeKey] === value[codeKey]}
						disabled={disabled}
						size="small"
						options={options}
						sx={sx}
						fullWidth
						filterOptions={(options, { inputValue }) =>
							options.filter(
								(option) =>
									String(option?.[codeKey])?.toLocaleLowerCase().includes(inputValue.toLowerCase()) ||
									String(option?.[labelKey])?.toLocaleLowerCase().includes(inputValue.toLowerCase())
							)
						}
						renderOption={({key: renderKey, ...props}, option) =>
							renderOption ? (
								renderOption(props, option)
							) : (
								<ListItem key={renderKey} {...props}>
									<ListItemText
										primary={String(option?.[labelKey])}
									/>
								</ListItem>
							)
						}
						renderInput={(params) => (
							<TextField
								{...params}
                spellCheck={false}
								helperText={error ? error.message : null}
								error={!!error}
								label={label}
								variant="outlined"
								fullWidth
							/>
						)}
					/>
				);
			}}
		/>
	);
}

export default ControlledAutoComplete;
