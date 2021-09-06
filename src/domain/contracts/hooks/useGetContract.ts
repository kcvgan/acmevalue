import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  selectContractById,
  fetchContract as getContract,
} from '../store/contractsSlice';

export const useGetContract = (initialId?: string) => {
  const contract = useSelector(selectContractById(initialId));
  const dispatch = useDispatch();

  const fetchContract = async (id: string) => {
    dispatch(getContract(id));
  };

  useEffect(() => {
    if (initialId && !contract) {
      fetchContract(initialId);
    }
  }, [initialId]);

  return {
    fetchContract,
    contract,
  };
};
