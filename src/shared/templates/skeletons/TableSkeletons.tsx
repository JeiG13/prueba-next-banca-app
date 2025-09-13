import { Grid, Skeleton } from "@mui/material";

function TableSkeletons() {
  const numberOfColumns: number[] = new Array<number>(6).fill(6);
  return (
		<Grid
			container
      size={12}
			justifyContent="center"
			alignItems="center"
			sx={{ padding: '2rem 2rem', bgcolor: 'white' }}
		>
			<Grid
				container
				size={12}
				spacing={2}
			>
				{numberOfColumns.map((item, index) => (
					<Grid
						key={`${item}${index}`}
						size={2}
					>
						<Skeleton width="70%" />
						<Skeleton />
						<Skeleton />
						<Skeleton />
						<Skeleton />
						<Skeleton />
					</Grid>
				))}
			</Grid>
		</Grid>
  );
};

export default TableSkeletons;
