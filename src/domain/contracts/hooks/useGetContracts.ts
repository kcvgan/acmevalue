import { useEffect, useState } from 'react';

import { Contract } from '../types/Contract';
import contractsService from '../api/contractsService';

export const useGetContracts = () => {
  const [contracts, setContracts] = useState<Contract[] | undefined>();

  const fetchContracts = async () => {
    const fetchedContracts = await contractsService.getContracts();

    setContracts(fetchedContracts);
  };

  useEffect(() => {
    fetchContracts();
  }, []);

  return {
    fetchContracts,
    contracts,
  };
};
