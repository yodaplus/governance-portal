import { useMemo } from 'react';
import { BigNumber as BigNumberJS } from 'bignumber.js';
import Skeleton from 'modules/app/components/SkeletonThemed';
import { Stats } from 'modules/home/components/Stats';
import { Poll } from 'modules/polling/types';
import { Delegate } from 'modules/delegates/types';
import { isActivePoll } from 'modules/polling/helpers/utils';
import { DelegateStatusEnum } from 'modules/delegates/delegates.constants';
import { disablePolls, disableDelegates } from 'modules/features';
import { config } from 'lib/config';

type Props = {
  polls: Poll[];
  delegates: Delegate[];
  totalMKRDelegated: string;
  mkrOnHat?: string;
  mkrInChief?: string;
};

export function GovernanceStats({
  polls,
  delegates,
  totalMKRDelegated,
  mkrOnHat,
  mkrInChief
}: Props): JSX.Element {
  const activePollCount = useMemo(() => polls.filter(poll => isActivePoll(poll)).length, [polls]);
  const recognizedDelegateCount = delegates.filter(
    delegate => delegate.status === DelegateStatusEnum.recognized
  ).length;
  const shadowDelegateCount = delegates.filter(
    delegate => delegate.status === DelegateStatusEnum.shadow
  ).length;

  const infoUnits = [
    {
      title: `${config.GOV_TOKEN} on Hat`,
      value: mkrOnHat ? `${mkrOnHat} ${config.GOV_TOKEN}` : <Skeleton />
    },
    ...(disablePolls
      ? []
      : [{ title: 'Active Polls', value: polls ? activePollCount.toString() : <Skeleton /> }]),
    ...(disableDelegates
      ? []
      : [
          {
            title: 'Recognized Delegates',
            value: delegates ? recognizedDelegateCount.toString() : <Skeleton />
          },
          {
            title: 'Shadow Delegates',
            value: delegates ? shadowDelegateCount.toString() : <Skeleton />
          },
          {
            title: `${config.GOV_TOKEN} Delegated`,
            value: totalMKRDelegated ? (
              `${new BigNumberJS(totalMKRDelegated).toFormat(0)} {config.GOV_TOKEN}`
            ) : (
              <Skeleton />
            )
          }
        ]),

    {
      title: `${config.GOV_TOKEN} in Chief`,
      value: mkrInChief ? `${mkrInChief} ${config.GOV_TOKEN}` : <Skeleton />
    }
  ];

  return <Stats title="Governance Stats" infoUnits={infoUnits} />;
}
