import * as React from 'react';
import styled from 'styled-components';

import ArrowButton from '@ui/molecules/ArrowButton';
import { Contract } from './types/Contract';

const ScrollContainer = styled.div`
  overflow-x: scroll;
`;

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.grey.primary};
  min-width: 768px;
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  margin: 0;
  gap: 4px;
  color: ${({ theme }) => theme.colors.textDark};
`;

const ListHeader = styled.div`
  width: 100%;
  display: flex;
  background-color: ${({ theme }) => theme.colors.grey.light};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 4px;
`;

const ListColumn = styled.div`
  display: flex;
  padding: 0.8rem 1rem;
  width: 180px;
  justify-content: flex-start;
`;

const DateColumn = styled(ListColumn)`
  width: 200px;
`;

const ListItem = styled.li`
  display: flex;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  background-color: ${({ theme }) => theme.colors.grey.dark};

  &:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05), 0 4px 4px rgba(0, 0, 0, 0.1);
    background-color: ${({ theme }) => theme.colors.grey.light};
  }
`;

const EditColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 4px;
  width: 36px;
  cursor: pointer;
`;

const Circle = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 100%;
  margin: auto;
`;

const GreenCircle = styled(Circle)`
  background-color: ${({ theme }) => theme.colors.success};
`;

const GrayCircle = styled(Circle)`
  background-color: ${({ theme }) => theme.colors.grey.primary};
`;

type ContractsListProps = {
  contracts?: Contract[];
  selectContract?: (selectedContract: Contract) => void;
};

const ContractsList = ({
  contracts = [],
  selectContract = () => null,
}: ContractsListProps) => (
  <ScrollContainer>
    <Wrapper>
      <ListHeader>
        <ListColumn>Company</ListColumn>
        <DateColumn>Period start</DateColumn>
        <DateColumn>Period end</DateColumn>
        <ListColumn>Scheduled for renewal</ListColumn>
        <DateColumn>Negotiation renewal date</DateColumn>
        <EditColumn />
      </ListHeader>
      <List>
        {contracts.map((contract, index) => (
          <ListItem key={contract.contractId}>
            <ListColumn data-cy={`contract-company-cell-${index}`}>
              {contract.company}
            </ListColumn>
            <DateColumn>{contract.periodStart.toLocaleString()}</DateColumn>
            <DateColumn>{contract.periodEnd.toLocaleString()}</DateColumn>
            <ListColumn>
              {contract.scheduledForRenewal ? <GreenCircle /> : <GrayCircle />}
            </ListColumn>
            <DateColumn>
              {contract.negotiationRenewalDate.toLocaleString()}
            </DateColumn>
            <EditColumn
              onClick={() => selectContract(contract)}
              data-cy={`edit-contract-button-${index}`}
            >
              <ArrowButton />
            </EditColumn>
          </ListItem>
        ))}
      </List>
    </Wrapper>
  </ScrollContainer>
);

export default ContractsList;
