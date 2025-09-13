import { Backdrop, CircularProgress, Typography } from "@mui/material";

type Props = {
	isLoading: boolean;
	title?: string;
};

function BackdropLoader({
  isLoading,
  title
}: Props) {
  return (
		<Backdrop
			open={isLoading}
			sx={{ color: 'white', flexDirection: 'column', zIndex: (theme) => theme.zIndex.drawer + 1 }}
		>
			<CircularProgress
				size={50}
				color="inherit"
			/>
			{title && (
				<Typography
					variant="h5"
					sx={{ mt: '2rem', fontWeight: 600 }}
				>
					{title}
				</Typography>
			)}
		</Backdrop>
  );
};

export default BackdropLoader;

