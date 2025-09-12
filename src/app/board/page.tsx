import React from 'react';
import SectionTitle from '@/shared/components/SectionTitle';
import BankCardsList from '@/features/board/templates/BankCardsList';
import AccountsList from '@/features/board/templates/AccountsList';
import RecentTransactionsTable from '@/features/board/templates/RecentTransactionsTable';

function page() {
  return (
    <div className="w-full px-4 py-2">
      <SectionTitle title="Mis tarjetas" />
      <BankCardsList />
      <SectionTitle title="Cuentas" />
      <AccountsList />
      <SectionTitle title="Transacciones recientes" />
      <RecentTransactionsTable />
    </div>
  )
}

export default page