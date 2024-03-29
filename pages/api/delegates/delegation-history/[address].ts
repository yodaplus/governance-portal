import invariant from 'tiny-invariant';
import { NextApiRequest, NextApiResponse } from 'next';

import { isSupportedNetwork } from 'modules/web3/helpers/networks';

import { fetchDelegationEventsByAddresses } from 'modules/delegates/api/fetchDelegationEventsByAddresses';
import withApiHandler from 'modules/app/api/withApiHandler';
import { DEFAULT_NETWORK } from 'modules/web3/constants/networks';

export default withApiHandler(async (req: NextApiRequest, res: NextApiResponse) => {
  const network = (req.query.network as string) || DEFAULT_NETWORK.network;
  const address = req.query.address as string;
  invariant(isSupportedNetwork(network), `unsupported network ${network}`);

  const data = await fetchDelegationEventsByAddresses([address], network);
  res.setHeader('Cache-Control', 's-maxage=15, stale-while-revalidate');
  res.status(200).json(data);
});
