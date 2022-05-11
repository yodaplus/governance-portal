import { Sdk } from 'modules/eth-sdk-client';
import { BigNumber } from 'ethers';

export const getChiefDeposits = async (address: string, contract: Sdk['chief']): Promise<BigNumber> => {
  const deposits = await contract.deposits(address);
  return deposits;
};
