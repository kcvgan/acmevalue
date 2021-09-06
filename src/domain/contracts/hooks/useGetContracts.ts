import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchContracts, selectAllContracts } from '../store/contractsSlice';

export const useGetContracts = () => {
  const contracts = useSelector(selectAllContracts);
  const dispatch = useDispatch();

  const getContracts = async () => {
    await dispatch(fetchContracts());
  };

  useEffect(() => {
    getContracts();
  }, []);

  return {
    getContracts,
    contracts,
  };
};
