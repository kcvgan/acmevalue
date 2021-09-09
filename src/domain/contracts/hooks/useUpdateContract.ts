import { unwrapResult } from '@reduxjs/toolkit';

import { useAppDispatch } from '@infrastructure/utils/useAppDispatch';
import { Contract } from '../types/Contract';
import { updateContract } from '../store/contractsSlice';

export const useUpdateContract = () => {
  const dispatch = useAppDispatch();

  return (contractId: string) => async (modifiedContract: Partial<Contract>) =>
    dispatch(updateContract({ contractId, modifiedContract })).then(
      unwrapResult
    );
};
