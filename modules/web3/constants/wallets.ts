import { injectedConnectorXinfin } from '../connectors';
import { WalletInfo } from '../types/wallets';
import { SupportedConnectors } from './networks';

export const SUPPORTED_WALLETS: { [connector in SupportedConnectors]: WalletInfo } = {
  [SupportedConnectors.XDC_PAY]: {
    connector: injectedConnectorXinfin,
    name: 'XDCPay'
  }
};
