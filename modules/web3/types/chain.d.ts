import { SupportedChainId } from '../constants/chainID';
import { SupportedNetworks } from '../constants/networks';

export type Chain = {
  blockExplorerUrl: string;
  chainId: SupportedChainId;
  label: string;
  network: SupportedNetworks;
  defaultRpc: string;
  spockUrl: string;
  rpcs: {
    [key: string]: string;
  };
};
