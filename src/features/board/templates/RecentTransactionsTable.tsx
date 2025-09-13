"use client";
import { ReduxStatus } from "@/shared/enums/reduxStatusEnum";
import { ITransaction } from "@/shared/interfaces/Transaction";
import { useAppDispatch, useAppSelector } from "@/shared/store/hooks";
import { getRecentTransactions } from "@/shared/store/thunks/accountThunk";
import BasicTable, { Column } from "@/shared/templates/BasicTable";
import HandleLoadingState from "@/shared/templates/HandleLoadingState";
import { useEffect } from "react";

const columns: Column<ITransaction>[] = [
  { key: 'transaction_date', label: "Fecha", type: 'date' },
  { key: 'description', label: "Descripción" },
  { key: 'amount.value', label: "Débito USD", type: 'number' },
  { key: 'balance', label: "Balance USD", type: 'number' },
];

function RecentTransactionsTable() {
  const { accountRecentTransactions, accountRecentTransactionsStatus } = useAppSelector((state) => state.account);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getRecentTransactions(1));
  }, [dispatch]);

  return (
    <div className="w-full mt-6">
        <HandleLoadingState
          isLoading={accountRecentTransactionsStatus === ReduxStatus.pending}
          noItemsLabel="No se han encontrado cuentas"
          areThereItems={accountRecentTransactions.length > 0}
        >
          <BasicTable<ITransaction>
            columns={columns}
            data={accountRecentTransactions}
          />
        </HandleLoadingState>
    </div>
  );
};

export default RecentTransactionsTable;
