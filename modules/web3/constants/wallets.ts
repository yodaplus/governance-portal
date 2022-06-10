import { injectedConnectorXinfin, walletConnectConnector } from '../connectors';
import { WalletInfo } from '../types/wallets';
import { SupportedConnectors } from './networks';

export const SUPPORTED_WALLETS: {
  [SupportedConnectors.XDC_PAY]: WalletInfo;
  [SupportedConnectors.WALLET_CONNECT]: WalletInfo;
} = {
  [SupportedConnectors.XDC_PAY]: {
    connector: injectedConnectorXinfin,
    name: 'XDCPay'
  },
  [SupportedConnectors.WALLET_CONNECT]: {
    connector: walletConnectConnector,
    name: 'WalletConnect'
  }
};
