import { Contract } from '../types/Contract';
import contractsService from '../api/contractsService';

export const useUpdateContract =
  () => (contractId: string) => async (modifiedContract: Partial<Contract>) =>
    contractsService.updateContract(modifiedContract, contractId);
