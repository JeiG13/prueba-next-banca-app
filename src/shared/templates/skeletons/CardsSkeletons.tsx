import InfoSkeletonCard from '@/shared/components/skeletons/InfoSkeletonCard';
import { Grid } from '@mui/material';
import React from 'react'

function CardsSkeletons() {
  const sizeArray: number[] = new Array<number>(3).fill(3);

  return (
    <Grid
      container
      spacing={3}
      direction="row"
      justifyContent="flex-start"
      style={{ marginTop: '1rem' }}
    >
      {sizeArray.map((card, index) => (
        <Grid
          size={{ xs: 12, sm: 6, md: 4 }}
          key={`${card} ${index}`}
        >
          <InfoSkeletonCard />
        </Grid>
      ))}
    </Grid>
  );
}

export default CardsSkeletons;
