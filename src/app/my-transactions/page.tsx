import React from 'react';
import SectionTitle from '@/shared/components/titles/SectionTitle';
import MyTransactionTabs from '@/features/my-transactions/templates/MyTransactionTabs';

function page() {
  return (
    <div>
      <SectionTitle title="Mis transacciones" />
      <MyTransactionTabs />
    </div>
  )
}

export default page;
