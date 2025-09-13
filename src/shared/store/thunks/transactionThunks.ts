import { IPostTransaction } from "@/shared/interfaces/PostTransaction";
import { createTransactionRequest } from "@/shared/services/api/transaction/transactionService";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const postTransaction = createAsyncThunk('transaction/postTransaction', async (transaction: IPostTransaction) => {
  await createTransactionRequest(transaction);
});
