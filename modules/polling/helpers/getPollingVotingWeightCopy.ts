import { config } from 'lib/config';

export const getPollingVotingWeightCopy = (isVotingDelegate: boolean): string =>
  isVotingDelegate
    ? `Your polling voting weight is made up of the ${config.GOV_TOKEN} delegated to your delegate contract. This amount is applied to all polls you vote on.`
    : `Your polling voting weight is made up of the ${config.GOV_TOKEN} in your wallet, vote proxy, and voting contract. This amount is applied to all polls you vote on.`;
