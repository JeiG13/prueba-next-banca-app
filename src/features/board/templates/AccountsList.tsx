"use client";
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/shared/store/hooks';
import { resetAccountSlice } from '@/shared/store/slices/accountSlice';
import { getAccountsMock } from '@/shared/store/thunks/accountThunk';
import AccountCard from '../components/AccountCard';
import CardsSkeletons from '@/shared/templates/skeletons/CardsSkeletons';
import HandleLoadingState from '@/shared/templates/HandleLoadingState';
import { ReduxStatus } from '@/shared/enums/reduxStatusEnum';

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
    <div className="w-full">
      <HandleLoadingState
          isLoading={accountsMockStatus === ReduxStatus.pending}
          noItemsLabel="No se han encontrado cuentas"
          areThereItems={accountsMock.length > 0}
          LoadingComponent={<CardsSkeletons />}
      >
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
      </HandleLoadingState>
      
    </div>
  );
};

export default AccountsList;
