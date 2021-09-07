import httpClient from '../../../infrastructure/services/httpClient';
import { Contract, ContractDTO } from '../types/Contract';

const getDate = (dateString: string) => new Date(Date.parse(dateString));

const DTOtoObj = (contractDTO?: ContractDTO): Contract | null =>
  contractDTO
    ? {
        contractId: contractDTO.contractId,
        company: contractDTO.company,
        periodEnd: getDate(contractDTO.periodEnd),
        periodStart: getDate(contractDTO.periodStart),
        scheduledForRenewal: Boolean(contractDTO.scheduledForRenewal),
        negotiationRenewalDate: getDate(contractDTO.negotiationRenewalDate),
      }
    : null;

const getContract = async (contractId: string) => {
  const { data } = await httpClient.get<{ contract: ContractDTO }>(
    `/contract/${contractId}`
  );

  return DTOtoObj(data?.contract);
};

const getContracts = async () => {
  const { data } = await httpClient.get<{ contracts: ContractDTO[] }>(
    '/contracts'
  );

  return (data?.contracts || []).filter(Boolean).map(DTOtoObj);
};

const createContract = async (newContract: Omit<Contract, 'contractId'>) => {
  const { data } = await httpClient.post<{ contract: ContractDTO }>(
    '/contract',
    {
      contract: newContract,
    }
  );

  return DTOtoObj(data?.contract);
};

const updateContract = async (
  modifiedContract: Contract,
  contractId: string
) => {
  const { data } = await httpClient.patch<{ contract: ContractDTO }>(
    `/contract/${contractId}`,
    {
      contract: modifiedContract,
    }
  );

  return DTOtoObj(data?.contract);
};

const contractsService = {
  getContract,
  getContracts,
  createContract,
  updateContract,
};

export default contractsService;
