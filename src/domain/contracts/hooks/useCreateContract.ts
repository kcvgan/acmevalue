import { Contract } from '../types/Contract';
import contractsService from '../api/contractsService';

export const useCreateContract =
  () => async (newContract: Omit<Contract, 'contractId'>) =>
    contractsService.createContract(newContract);
