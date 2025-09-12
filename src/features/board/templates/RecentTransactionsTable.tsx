"use client";
import { ITransaction } from "@/shared/interfaces/Transaction";
import { useAppDispatch, useAppSelector } from "@/shared/store/hooks";
import { getRecentTransactions } from "@/shared/store/thunks/accountThunk";
import BasicTable, { Column } from "@/shared/templates/BasicTable";
import { useEffect } from "react";

const columns: Column<ITransaction>[] = [
  { key: 'transaction_date', label: "Fecha", type: 'date' },
  { key: 'description', label: "Descripción" },
  { key: 'amount.value', label: "Débito USD", type: 'number' },
  { key: 'balance', label: "Balance USD", type: 'number' },
];

function RecentTransactionsTable() {
  const { accountRecentTransactions } = useAppSelector((state) => state.account);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getRecentTransactions(1));
  }, [dispatch]);

  return (
    <div className="w-full mt-6">
      <BasicTable<ITransaction>
        columns={columns}
        data={accountRecentTransactions}
      />
    </div>
  );
};

export default RecentTransactionsTable;
