import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import contractsService from '../api/contractsService';
import { Contract } from '../types/Contract';

type AppState = {
  contracts: ContractsStateSlice;
};

type ContractsStateSlice = {
  contracts: Contract[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
};

const initialState: ContractsStateSlice = {
  contracts: [],
  status: 'idle',
  error: null,
};

export const fetchContracts = createAsyncThunk(
  'contracts/fetchContracts',
  contractsService.getContracts
);

export const fetchContract = createAsyncThunk(
  'contracts/fetchContract',
  contractsService.getContract
);

export const addNewContract = createAsyncThunk(
  'contracts/addNewContract',
  contractsService.createContract
);

export const updateContract = createAsyncThunk(
  'contracts/updateContract',
  ({
    modifiedContract,
    contractId,
  }: {
    modifiedContract: Partial<Contract>;
    contractId: string;
  }) => contractsService.updateContract(modifiedContract, contractId)
);

const contractsSlice = createSlice({
  name: 'contracts',
  initialState,
  reducers: {
    contractUpdated(state, action) {
      const { contractId, ...updatedContract } = action.payload;
      state.contracts.map((contract: Contract) => {
        if (contract?.contractId === contractId) {
          return {
            contractId,
            ...updatedContract,
          };
        }

        return contract;
      });
    },
    contractAdded(state, action) {
      const { contract } = action.payload;
      state.contracts.push(contract);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchContracts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchContracts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.contracts = action.payload;
      })
      .addCase(fetchContracts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      })
      .addCase(addNewContract.fulfilled, (state, action) => {
        if (action.payload) {
          state.contracts.push(action.payload);
        }
      })
      .addCase(fetchContract.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchContract.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.contracts = state.contracts.concat(action.payload);
      })
      .addCase(fetchContract.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      });
  },
});

export const { contractAdded, contractUpdated } = contractsSlice.actions;

export default contractsSlice.reducer;

export const selectAllContracts = (state: AppState) =>
  state.contracts.contracts;

export const selectContractById = (contractId?: string) => (state: AppState) =>
  state.contracts.contracts.find(
    (contract) => contract.contractId === contractId
  );
