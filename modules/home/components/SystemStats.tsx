import Skeleton from 'modules/app/components/SkeletonThemed';
import { Stats } from 'modules/home/components/Stats';
import { useTotalDai } from 'modules/web3/hooks/useTotalDai';
import { useDaiSavingsRate } from 'modules/web3/hooks/useDaiSavingsRate';
import { useSystemSurplus } from 'modules/web3/hooks/useSystemSurplus';
import { useSystemWideDebtCeiling } from 'modules/web3/hooks/useSystemWideDebtCeiling';
import { formatValue } from 'lib/string';
import { config } from 'lib/config';

export function SystemStats(): JSX.Element {
  const { data: totalDai } = useTotalDai();
  const { data: daiSavingsRate } = useDaiSavingsRate();
  const { data: systemSurplus } = useSystemSurplus();
  const { data: debtCeiling } = useSystemWideDebtCeiling();

  const infoUnits = [
    {
      title: `${config.TOKEN} Savings Rate`,
      value: daiSavingsRate ? `${daiSavingsRate.toFixed(2)}%` : <Skeleton />
    },
    {
      title: `Total ${config.TOKEN}`,
      value: totalDai ? `${formatValue(totalDai, 'rad')} ${config.TOKEN}` : <Skeleton />
    },
    {
      title: `${config.TOKEN} Debt Ceiling`,
      value: debtCeiling ? `${formatValue(debtCeiling, 'rad')} ${config.TOKEN}` : <Skeleton />
    },
    {
      title: 'System Surplus',
      value: systemSurplus ? `${formatValue(systemSurplus, 'rad')} ${config.TOKEN}` : <Skeleton />
    }
  ];

  return <Stats title="System Stats" infoUnits={infoUnits} viewMoreUrl="https://usxd-stats.yodaplus.net/" />;
}
