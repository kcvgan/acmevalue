import { useDispatch } from 'react-redux';

import { Contract } from '../types/Contract';
import { updateContract } from '../store/contractsSlice';

export const useUpdateContract = () => {
  const dispatch = useDispatch();

  return (contractId: string) =>
    async (modifiedContract: Omit<Contract, 'contractId'>) =>
      dispatch(updateContract({ contractId, modifiedContract }));
};
