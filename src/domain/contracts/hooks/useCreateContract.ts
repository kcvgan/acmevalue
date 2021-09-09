import { unwrapResult } from '@reduxjs/toolkit';

import { useAppDispatch } from '@infrastructure/utils/useAppDispatch';
import { Contract } from '../types/Contract';
import { addNewContract } from '../store/contractsSlice';

export const useCreateContract = () => {
  const dispatch = useAppDispatch();

  return async (newContract: Omit<Contract, 'contractId'>) =>
    dispatch(addNewContract(newContract)).then(unwrapResult);
};
