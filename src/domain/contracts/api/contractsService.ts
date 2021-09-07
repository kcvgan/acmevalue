import { api } from '../../../infrastructure/services/axiosInstance';
import { Contract, ContractDTO } from '../types/Contract';

const getDate = (dateString: string) => new Date(Date.parse(dateString));

const DTOtoObj = (contractDTO: ContractDTO): Contract => ({
  contractId: contractDTO.contractId,
  company: contractDTO.company,
  periodEnd: getDate(contractDTO.periodEnd),
  periodStart: getDate(contractDTO.periodStart),
  scheduledForRenewal: Boolean(contractDTO.scheduledForRenewal),
  negotiationRenewalDate: getDate(contractDTO.negotiationRenewalDate),
});

const getContract = async (contractId: string) => {
  const response = await api.get<{ contract: ContractDTO }>(
    `/contract/${contractId}`
  );

  return DTOtoObj(response?.data?.contract);
};

const getContracts = async () => {
  const response = await api.get<{ contracts: ContractDTO[] }>('/contracts');

  return (response?.data?.contracts || []).map(DTOtoObj);
};

const createContract = async (newContract: Omit<Contract, 'contractId'>) => {
  const response = await api.post('/contract', { contract: newContract });

  return response.data.contract || null;
};

const updateContract = async (
  modifiedContract: Contract,
  contractId: string
) => {
  const response = await api.patch(`/contract/${contractId}`, {
    contract: modifiedContract,
  });

  return response.data.contract || null;
};

const contractsService = {
  getContract,
  getContracts,
  createContract,
  updateContract,
};

export default contractsService;
