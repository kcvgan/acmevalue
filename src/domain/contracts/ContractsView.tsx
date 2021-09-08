import * as React from 'react';
import { useRouteMatch } from 'react-router-dom';

import useRedirect from '@infrastructure/utils/useRedirect';
import { useGetContracts } from './hooks/useGetContracts';
import ContractsList from './ContractsList';
import { Contract } from './types/Contract';
import ContractsActions from './ContractsActions';

const ContractsView = () => {
  const { contracts } = useGetContracts();
  const redirect = useRedirect();
  const { path } = useRouteMatch();

  const editContract = (contract?: Contract) =>
    redirect(`${path}/${contract?.contractId}`);

  return (
    <>
      <ContractsActions />
      <ContractsList contracts={contracts} selectContract={editContract} />
    </>
  );
};

export default ContractsView;
