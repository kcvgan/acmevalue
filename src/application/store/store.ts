import { configureStore } from '@reduxjs/toolkit';

import contractsReducer from '../../domain/contracts/store/contractsSlice';

export default configureStore({
  reducer: {
    contracts: contractsReducer,
  },
});
