import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

import useRedirect from '@infrastructure/utils/useRedirect';
import UnstyledLink from '@ui/atoms/UnstyledLink';
import Header from '@ui/atoms/Header';
import { useGetContract } from './hooks/useGetContract';
import ContractForm from './ContractForm';
import { useUpdateContract } from './hooks/useUpdateContract';
import { useCreateContract } from './hooks/useCreateContract';
import { Contract } from './types/Contract';

const BreadcrumbHeader: FC = ({ children }) => (
  <Header>
    <UnstyledLink to="/contracts">Contracts</UnstyledLink> / {children}
  </Header>
);

type ContractEditorProps = {
  mode: 'create' | 'edit';
};

type ModeProps = {
  onSubmit: () => void;
};

const Create = ({ onSubmit }: ModeProps) => {
  const createContract = useCreateContract();

  const handleSubmit = async (submittedContract: Contract) => {
    await createContract(submittedContract);

    onSubmit();
  };

  return (
    <>
      <BreadcrumbHeader>Create contract</BreadcrumbHeader>

      <ContractForm onSubmit={handleSubmit} />
    </>
  );
};

const Edit = ({ onSubmit }: ModeProps) => {
  const { contractId } = useParams<{ contractId?: string }>();
  const { contract } = useGetContract(contractId);

  const updateContractOfId = useUpdateContract();

  const handleSubmit = async (submittedContract: Contract) => {
    await updateContractOfId(contract?.contractId || '')(submittedContract);

    onSubmit();
  };

  return (
    <>
      <BreadcrumbHeader>Edit contract</BreadcrumbHeader>

      <ContractForm contract={contract} onSubmit={handleSubmit} />
    </>
  );
};

const ContractEditor = ({ mode = 'create' }: ContractEditorProps) => {
  const redirectToContracts = useRedirect('/contracts');

  if (mode === 'edit') {
    return <Edit onSubmit={redirectToContracts} />;
  }

  return <Create onSubmit={redirectToContracts} />;
};

export default ContractEditor;
