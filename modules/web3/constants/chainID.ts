export enum SupportedChainId {
  APOTHEM = 51,
  MAINNET = 50
}

export const ALL_SUPPORTED_CHAIN_IDS: SupportedChainId[] = Object.values(SupportedChainId).filter(
  id => typeof id === 'number'
) as SupportedChainId[];
