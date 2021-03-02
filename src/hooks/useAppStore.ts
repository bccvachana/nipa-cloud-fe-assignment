import { useSelector } from 'react-redux';
import { IRootStore } from 'stores';
import { IAppStore } from 'stores/types';

const useAppStore = (): IAppStore => useSelector((state: IRootStore) => state.app);

export default useAppStore;
