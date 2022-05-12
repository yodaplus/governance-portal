import React from 'react';
import { PluralityResult, Poll, PollTally, RankedChoiceResult } from '../types';
import { Text, Flex } from 'theme-ui';
import { isActivePoll } from '../helpers/utils';
import SkeletonThemed from 'modules/app/components/SkeletonThemed';
import { getVoteColor } from '../helpers/getVoteColor';
import { POLL_VOTE_TYPE } from 'modules/polling/polling.constants';
import { formatValue } from 'lib/string';
import { parseUnits } from 'ethers/lib/utils';
import { config } from 'lib/config';

export default function PollWinningOptionBox({
  tally,
  poll
}: {
  poll: Poll;
  tally?: PollTally;
}): React.ReactElement {
  const textWin = isActivePoll(poll) ? 'Leading option' : 'Winning option';

  return (
    <Flex sx={{ py: 2, justifyContent: 'center' }}>
      {tally && tally.winningOptionName && tally.totalMkrParticipation > 0 ? (
        <Text as="p" variant="caps" sx={{ textAlign: 'center', px: [3, 4], wordBreak: 'break-word' }}>
          {textWin}:{' '}
          <span sx={{ color: getVoteColor(parseInt(tally?.winner || '0'), poll.voteType) }}>
            {tally?.winningOptionName}
          </span>{' '}
          {tally.pollVoteType === POLL_VOTE_TYPE.PLURALITY_VOTE &&
            'with ' +
              formatValue(
                parseUnits(
                  (tally.results as PluralityResult[])
                    .find(({ optionId }) => optionId === tally.winner)
                    ?.mkrSupport.toString() || '0'
                )
              ) +
              ` ${config.GOV_TOKEN} supporting.`}
          {tally.pollVoteType === (POLL_VOTE_TYPE.RANKED_VOTE || POLL_VOTE_TYPE.UNKNOWN) &&
            'with ' +
              formatValue(
                parseUnits(
                  (tally.results as RankedChoiceResult[])
                    .find(({ optionId }) => optionId === tally.winner)
                    ?.firstChoice.toString() || '0'
                )
              ) +
              ` ${config.GOV_TOKEN} supporting as first choice.`}
        </Text>
      ) : tally && !tally.winningOptionName ? (
        <Text as="p" variant="caps" sx={{ textAlign: 'center', px: [3, 4], wordBreak: 'break-word' }}>
          {isActivePoll(poll) ? 'No leading option' : 'No winning option'}
        </Text>
      ) : (
        <SkeletonThemed />
      )}
    </Flex>
  );
}
