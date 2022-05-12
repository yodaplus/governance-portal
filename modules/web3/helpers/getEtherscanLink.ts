import { SupportedChainId } from '../constants/chainID';
import { CHAIN_INFO, SupportedNetworks } from '../constants/networks';
import { networkNameToChainId } from './chain';
import { ethToXinfinAddress } from 'modules/web3/helpers/xinfin';

export function getEtherscanLink(
  network: SupportedNetworks,
  data: string,
  type: 'transaction' | 'address'
): string {
  const chainId = networkNameToChainId(network);
  const prefix = `${
    CHAIN_INFO[chainId].blockExplorerUrl || CHAIN_INFO[SupportedChainId.APOTHEM].blockExplorerUrl
  }`;

  switch (type) {
    case 'transaction':
      return `${prefix}/txs/${data}`;
    case 'address':
    default:
      return `${prefix}/address/${ethToXinfinAddress(data)}`;
  }
}
