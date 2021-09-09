import { useDispatch } from 'react-redux';

import rootStore from '@application/store/rootStore';

export type AppDispatch = typeof rootStore.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
