import React from 'react';
import Headline2 from '@/shared/components/titles/Headline2';
import MyTransactionTabs from '@/features/my-transactions/templates/MyTransactionTabs';

function page() {
  return (
    <div>
      <Headline2 title="Mis transacciones" />
      <MyTransactionTabs />
    </div>
  )
}

export default page;
