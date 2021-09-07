import { useDispatch } from 'react-redux';

import { Contract } from '../types/Contract';
import { addNewContract } from '../store/contractsSlice';

export const useCreateContract = () => {
  const dispatch = useDispatch();

  return async (newContract: Omit<Contract, 'contractId'>) =>
    dispatch(addNewContract(newContract));
};
