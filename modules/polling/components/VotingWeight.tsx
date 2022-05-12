import { Box, Flex, Text } from 'theme-ui';
import { Icon } from '@makerdao/dai-ui-icons';
import Tooltip from 'modules/app/components/Tooltip';

import { getPollingVotingWeightCopy } from 'modules/polling/helpers/getPollingVotingWeightCopy';
import { useAccount } from 'modules/app/hooks/useAccount';
import { useMKRVotingWeight } from 'modules/mkr/hooks/useMKRVotingWeight';
import { formatValue } from 'lib/string';
import { config } from 'lib/config';

const getDescription = votingWeight => {
  if (votingWeight) {
    if (votingWeight.chiefBalanceProxy && votingWeight.chiefBalanceCold && votingWeight.walletBalanceCold) {
      return (
        <>
          <Text as="p">
            {'Proxy balance in chief: ' +
              formatValue(votingWeight.chiefBalanceProxy, 'wad', 18) +
              ` ${config.GOV_TOKEN}`}
          </Text>
          <Text as="p">
            {'Hot balance in chief: ' +
              formatValue(votingWeight.chiefBalanceHot, 'wad', 18) +
              ` ${config.GOV_TOKEN}`}
          </Text>
          <Text as="p">
            {'Hot balance in wallet: ' +
              formatValue(votingWeight.walletBalanceHot, 'wad', 18) +
              ` ${config.GOV_TOKEN}`}
          </Text>
          <Text as="p">
            {'Cold balance in chief: ' +
              formatValue(votingWeight.chiefBalanceCold, 'wad', 18) +
              ` ${config.GOV_TOKEN}`}
          </Text>
          <Text as="p">
            {'Cold balance in wallet: ' +
              formatValue(votingWeight.walletBalanceCold, 'wad', 18) +
              ` ${config.GOV_TOKEN}`}
          </Text>
        </>
      );
    } else {
      return (
        <>
          <Text as="p">
            {'Balance in chief: ' +
              formatValue(votingWeight.chiefBalanceHot, 'wad', 18) +
              ` ${config.GOV_TOKEN}`}
          </Text>
          <Text as="p">
            {'Balance in wallet: ' +
              formatValue(votingWeight.walletBalanceHot, 'wad', 18) +
              ` ${config.GOV_TOKEN}`}
          </Text>
        </>
      );
    }
  }

  return null;
};

export default function VotingWeight(): JSX.Element {
  const { account, voteDelegateContractAddress } = useAccount();

  const { data: votingWeight } = useMKRVotingWeight(account);

  const votingWeightCopy = getPollingVotingWeightCopy(!!voteDelegateContractAddress);

  const tooltipLabel = (
    <Box>
      <Text as="p">{votingWeightCopy}</Text>
      {getDescription(votingWeight)}
    </Box>
  );

  return (
    <Flex
      sx={{
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%'
      }}
    >
      <Flex sx={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text as="p" color="textSecondary">
          Voting weight
        </Text>
        <Tooltip label={tooltipLabel}>
          <Box>
            <Icon name="question" ml={2} mt={'6px'} />
          </Box>
        </Tooltip>
      </Flex>
      <Text sx={{ color: 'text' }}>
        {votingWeight ? `${formatValue(votingWeight.total)} ${config.GOV_TOKEN}` : '--'}
      </Text>
    </Flex>
  );
}
