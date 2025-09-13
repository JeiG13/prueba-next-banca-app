import { Grid, Paper, Skeleton } from '@mui/material';
import React from 'react'

function InfoSkeletonCard() {
  return (
    <Paper
      sx={{
        backgroundColor: 'white',
        p: '1rem 2rem',
        mb: 2,
        borderRadius: '0.6rem',
        boxShadow:
          'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
      }}
    >
      <Grid container size={12} spacing={2} direction="column" justifyContent="center">
        <Grid>
          <Grid container size={12}>
            <Skeleton variant="text" width={120} />
          </Grid>
        </Grid>

        <Grid>
          <Grid container size={12} justifyContent="flex-end">
            <Skeleton variant="text" width={120} />
          </Grid>
        </Grid>
        <Grid>
          <Grid container size={12} justifyContent="center">
            <Skeleton variant="rectangular" width="100%" height={16} />
          </Grid>
        </Grid>


        <Grid>
          <Grid container size={12} justifyContent="center">
            <Skeleton variant="rectangular" width="100%" height={16} />
          </Grid>
        </Grid>

        <Grid>
          <Grid container size={12} justifyContent="center">
            <Skeleton variant="rectangular" width="100%" height={16} />
          </Grid>
        </Grid>


        <Grid>
          <Grid container size={12} justifyContent="start">
            <Skeleton variant="text" width="50%" />
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default InfoSkeletonCard;

