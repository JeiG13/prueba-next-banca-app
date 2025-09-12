"use client";
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/shared/store/hooks';
import { resetAccountSlice } from '@/shared/store/slices/accountSlice';
import { getAccountsMock } from '@/shared/store/thunks/accountThunk';
import AccountCard from '../components/AccountCard';

function AccountsList() {
  const dispatch = useAppDispatch();
  const { accountsMock, accountsMockStatus } = useAppSelector((state) => state.account);

  useEffect(() => {
    dispatch(getAccountsMock(1));
  
    return () => {
      dispatch(resetAccountSlice());
    }
  }, [dispatch]);

  return (
    <div className="w-full mt-6 grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
      {
        accountsMock.map((account) => (
          <AccountCard
            account={account}
            key={account.id}
          />
        ))
      }
    </div>
  );
};

export default AccountsList;
