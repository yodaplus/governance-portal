import { Sdk } from 'modules/eth-sdk-client';

export async function getSlateAddresses(contract: Sdk['chief'], slateHash: string, i = 0): Promise<string[]> {
  try {
    return [await contract.slates(slateHash, i)].concat(await getSlateAddresses(contract, slateHash, i + 1));
  } catch (_) {
    return [];
  }
}
