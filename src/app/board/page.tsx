import React from 'react';
import SectionTitle from '@/shared/components/titles/SectionTitle';
import BankCardsList from '@/features/board/templates/BankCardsList';
import AccountsList from '@/features/board/templates/AccountsList';
import RecentTransactionsTable from '@/features/board/templates/RecentTransactionsTable';
import AllTransactionsButton from '@/features/board/components/AllTransactionsButton';

function page() {
  return (
    <div className="w-full">
      <SectionTitle title="Mis tarjetas" />
      <BankCardsList />
      <SectionTitle title="Cuentas" />
      <AccountsList />
      <SectionTitle
        title="Transacciones recientes"
        Action={<AllTransactionsButton />}
      />
      <RecentTransactionsTable />
    </div>
  )
}

export default page