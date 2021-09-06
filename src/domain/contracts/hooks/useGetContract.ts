import { useEffect, useState } from 'react';

import { Contract } from '../types/Contract';
import contractsService from '../api/contractsService';

export const useGetContract = (initialId?: string) => {
  const [contract, setContract] = useState<Contract | undefined>();

  const fetchContract = async (id: string) => {
    const fetchedContract = await contractsService.getContract(id);

    setContract(fetchedContract);
  };

  useEffect(() => {
    if (initialId) {
      fetchContract(initialId);
    }
  }, [initialId]);

  return {
    fetchContract,
    contract,
  };
};
