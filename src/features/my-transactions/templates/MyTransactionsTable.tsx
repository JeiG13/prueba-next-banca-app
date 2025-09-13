"use client";
import { useEffect, useMemo } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';

import ControlledDatePicker from "@/shared/components/inputs/ControlledDatePicker";
import { ITransaction } from "@/shared/interfaces/Transaction";
import { useAppDispatch, useAppSelector } from "@/shared/store/hooks";
import { resetAccountSlice } from "@/shared/store/slices/accountSlice";
import { getMyTransactions } from "@/shared/store/thunks/accountThunk";
import BasicTable, { Column } from "@/shared/templates/BasicTable";

import { dateFiltersInitialValues } from "../constants/dateFiltersInitialValues";
import { IDateFilters } from "../interfaces/DateFilters";
import filterTransactions from "../helpers/filterTransactions";
import { isBefore } from "date-fns";
import dateFiltersValidationSchema from "../validations/dateFiltersValidationSchema";

const columns: Column<ITransaction>[] = [
  { key: 'transaction_date', label: "Fecha", type: 'date' },
  { key: 'description', label: "Descripción" },
  { key: 'amount.value', label: "Débito USD", type: 'number' },
  { key: 'balance', label: "Balance USD", type: 'number' },
];

function MyTransactionsTable() {
  const dispatch = useAppDispatch();
  const { myTransactions } = useAppSelector((state) => state.account);

  const { control, watch } = useForm<IDateFilters>({
    defaultValues: dateFiltersInitialValues,
    resolver: zodResolver(dateFiltersValidationSchema),
    mode: 'all',
    reValidateMode: 'onChange',
  });

  const startDate = watch('startDate');
  const endDate = watch('endDate');

  useEffect(() => {
    dispatch(getMyTransactions(1));
  
    return () => {
      dispatch(resetAccountSlice());
    }
  }, [dispatch]);

  const filteredTransactions: ITransaction[] = useMemo(() => {
    if (startDate && endDate && isBefore(endDate, startDate)) {
      return [];
    }
  
    return filterTransactions(myTransactions, startDate, endDate);
  }, [myTransactions, startDate, endDate]);
  
  return (
    <div className="w-full mt-4">
      <div className="w-full grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <ControlledDatePicker<IDateFilters>
						label="Fecha Inicial"
						control={control}
						name="startDate"
						className="bg-white"
					/>
        </div>
        <div>
          <ControlledDatePicker<IDateFilters>
						label="Fecha Final"
						control={control}
						name="endDate"
						className="bg-white"
					/>
        </div>
      </div>
      <div className="mt-4">
        <BasicTable<ITransaction>
          columns={columns}
          data={filteredTransactions}
        />
      </div>
    </div>
  );
};

export default MyTransactionsTable