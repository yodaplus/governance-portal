import { BaseProvider } from '@ethersproject/providers';
import { SupportedNetworks, CHAIN_INFO, DEFAULT_NETWORK } from '../constants/networks';
import { ethers } from 'ethers';

ethers.utils.Logger.setLogLevel(ethers.utils.Logger.levels.ERROR);

const getRpcUrl = (network: string) => {
  const chainInfo = CHAIN_INFO[network] ? CHAIN_INFO[network] : DEFAULT_NETWORK;

  return chainInfo.rpcs[chainInfo.defaultRpc];
};

export const getDefaultProvider = (
  networkOrUrl: SupportedNetworks | string,
  optionsOverrides?: Record<string, string>
): BaseProvider => {
  const rpcUrl = networkOrUrl.startsWith('http') ? networkOrUrl : getRpcUrl(networkOrUrl);

  return ethers.getDefaultProvider(rpcUrl, optionsOverrides);
};
