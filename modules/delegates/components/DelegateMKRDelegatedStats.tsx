import BigNumber from 'bignumber.js';
import { Flex } from 'theme-ui';
import { useMkrDelegated } from 'modules/mkr/hooks/useMkrDelegated';
import { Delegate } from 'modules/delegates/types';
import { StatBox } from 'modules/app/components/StatBox';
import { useAccount } from 'modules/app/hooks/useAccount';
import { formatValue } from 'lib/string';
import { parseUnits } from 'ethers/lib/utils';
import { config } from 'lib/config';

export function DelegateMKRDelegatedStats({
  delegate,
  delegatorCount
}: {
  delegate: Delegate;
  delegatorCount?: number;
}): React.ReactElement {
  const { account } = useAccount();
  // TODO: Fetch addresses suporting through API fetching

  const { data: mkrStaked } = useMkrDelegated(account, delegate.voteDelegateAddress);

  return (
    <Flex
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: ['column', 'row'],
        marginTop: 1,
        marginBottom: 1
      }}
    >
      <StatBox
        value={formatValue(parseUnits(delegate.mkrDelegated)) ?? 'Untracked'}
        label={`Total ${config.GOV_TOKEN} Delegated`}
      />
      <StatBox
        value={typeof delegatorCount !== 'undefined' ? new BigNumber(delegatorCount).toFormat(0) : '--'}
        label={'Total Active Delegators'}
      />
      <StatBox
        value={typeof mkrStaked !== 'undefined' ? formatValue(mkrStaked) : '0.00'}
        label={`${config.GOV_TOKEN} Delegated by you`}
      />
    </Flex>
  );
}
