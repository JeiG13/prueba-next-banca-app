import TransferStepper from '@/features/transfer/templates/TransferStepper';
import Headline2 from '@/shared/components/titles/Headline2';
import React from 'react'

function page() {
  return (
    <div>
      <Headline2 title="Transferir" />
      <TransferStepper />
    </div>
  )
}

export default page;
