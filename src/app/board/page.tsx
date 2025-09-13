import React from 'react';
import Headline2 from '@/shared/components/titles/Headline2';
import BankCardsList from '@/features/board/templates/BankCardsList';
import AccountsList from '@/features/board/templates/AccountsList';
import RecentTransactionsTable from '@/features/board/templates/RecentTransactionsTable';
import AllTransactionsButton from '@/features/board/components/AllTransactionsButton';

function page() {
  return (
    <div className="w-full">
      <Headline2 title="Mis tarjetas" />
      <BankCardsList />
      <Headline2 title="Cuentas" />
      <AccountsList />
      <Headline2
        title="Transacciones recientes"
        Action={<AllTransactionsButton />}
      />
      <RecentTransactionsTable />
    </div>
  )
}

export default page