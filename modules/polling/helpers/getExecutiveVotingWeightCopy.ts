import { config } from 'lib/config';

export const getExecutiveVotingWeightCopy = (isVotingDelegate: boolean): string =>
  isVotingDelegate
    ? `Your executive voting weight is made up of the ${config.GOV_TOKEN} delegated to your delegate contract. This amount is applied to any executives you support.`
    : `Your executive voting weight is made up of the ${config.GOV_TOKEN} in your vote proxy and voting contract. This amount is applied to any executives you support.`;
