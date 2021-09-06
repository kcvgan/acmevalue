import { Contract } from '../types/Contract';
import contractsService from '../api/contractsService';

export const useUpdateContract =
  () =>
  (contractId: string) =>
  async (modifiedContract: Omit<Contract, 'contractId'>) =>
    contractsService.updateContract(modifiedContract, contractId);
