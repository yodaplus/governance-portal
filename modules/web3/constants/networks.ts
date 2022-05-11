import { config } from 'lib/config';
import { Chain } from '../types/chain';
import { SupportedChainId } from './chainID';

export const NetworkContextName = 'NETWORK';

import {
  MAINNET_SPOCK_URL,
  STAGING_MAINNET_SPOCK_URL,
  GOERLI_SPOCK_URL
  // LOCAL_SPOCK_URL,
} from 'modules/gql/gql.constants';

export enum SupportedConnectors {
  XDC_PAY = 'XDCPay'
  // METAMASK = 'metamask',
  // WALLET_CONNECT = 'walletConnect',
  // COINBASE_WALLET = 'coinbaseWallet'
  // LEDGER = 'ledger',
  // TREZOR = 'trezor'
}
export enum SupportedNetworks {
  MAINNET = 'apothem',
  APOTHEM = 'apothem'
}

export enum NodeProviders {
  REMOTE = 'remote',
  LOCAL = 'local'
}

type ChainInfo = {
  [key in SupportedChainId]: Chain;
};

export const CHAIN_INFO: ChainInfo = {
  [SupportedChainId.APOTHEM]: {
    etherscanPrefix: '',
    chainId: SupportedChainId.APOTHEM,
    label: 'Apothem',
    network: SupportedNetworks.APOTHEM,
    defaultRpc: NodeProviders.REMOTE,
    spockUrl: process.env.NODE_ENV === 'development' ? STAGING_MAINNET_SPOCK_URL : MAINNET_SPOCK_URL,
    rpcs: {
      [NodeProviders.REMOTE]: 'https://rpc-apothem.xinfin.yodaplus.net'
    }
  }
};

export const DEFAULT_NETWORK = CHAIN_INFO[SupportedChainId.APOTHEM];

export const ETH_TX_STATE_DIFF_ENDPOINT = (network: SupportedNetworks): string =>
  `https://statediff.ethtx.info/api/decode/state-diffs/${network}`;

/**
 * Hardcoded values for the simulate tx endpoint. We don't need to generate them
 * dynamically because we're only interested in the results of a successful tx.
 */
// const url = 'http://18.157.179.179'; //old
const url = 'http://3.127.236.127';

export const SIMULATE_TX_ENDPOINT = `${url}/api/v1/transactions/simulation/`;

export const SIMULATE_TX_GAS = '0x1c6b9e'; // 1862558 wei

export const SIMULATE_TX_GAS_PRICE = '0x23bd501f00'; // 153500000000 wei or 153.5 Gwei

export const SIGNATURE_CAST = '0x96d373e5'; // Signature for 'cast()'

export const SIMULATE_TX_VALUE = '0';

export const SIMULATE_TX_FROM = '0x5cab1e5286529370880776461c53a0e47d74fb63'; // The chief-keeper EOA, owned by TO, used to cast spells

export const DECODED_SPELL_ENDPOINT = (hash: string): string =>
  `${url}/api/v1/transactions/${hash}/diffs/decoded`;

export const AVG_BLOCKS_PER_DAY = 6500;

export const GASNOW_ENDPOINT = 'https://www.etherchain.org/api/gasnow';
export const GASNOW_URL = 'https://www.etherchain.org/tools/gasnow';
