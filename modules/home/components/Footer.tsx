import { Flex, Box, Text, useColorMode } from 'theme-ui';
import { Icon } from '@makerdao/dai-ui-icons';
import { ExternalLink } from 'modules/app/components/ExternalLink';
import React, { useEffect, useState } from 'react';
import { translate } from '@makerdao/i18n-helper';
import { useBreakpointIndex } from '@theme-ui/match-media';

const ContactSection = ({ heading, logos, icon }) => {
  return (
    <Flex sx={{ flexDirection: 'column', gap: 2 }}>
      <Text as="h4" sx={{ fontSize: 3, fontWeight: 'semiBold' }}>
        {heading}
      </Text>
      {/* <Text sx={{ fontSize: 3, fontWeight: 'semiBold', color: 'footerText' }}>{title}</Text> */}
      <Flex
        sx={{
          alignItems: 'center',
          '& svg': {
            width: 20,
            height: 20,
            transition: 'opacity 0.2s',
            cursor: 'pointer',
            opacity: 0.8,
            marginRight: 24,
            ':hover': {
              opacity: 1
            }
          }
        }}
      >
        {logos.map(({ title, url, icon, styles }) => (
          <ExternalLink key={title} styles={{ color: 'text', ...styles }} href={url} title={title}>
            <Icon name={icon} />
          </ExternalLink>
        ))}
      </Flex>
      <Box sx={{ width: '120px' }}>
        <Icon name={icon} size="auto" sx={{ my: [0, 0, 4] }} />
      </Box>
    </Flex>
  );
};

export default function Footer({ locale = 'en' }: { locale?: string }): React.ReactElement {
  const bpi = useBreakpointIndex();
  const [mode] = useColorMode();

  const t = text => translate(text, locale);

  const links = [
    {
      header: t('Governance'),
      list: []
    },
    {
      header: t('Products & Tools'),
      list: [
        {
          url: 'https://usxd-stats.yodaplus.net/',
          title: t('Stats')
        }
      ]
    },
    {
      header: t('Developer'),
      list: []
    }
  ];

  const logos = {
    yodaplus: [{ title: 'GitHub', url: 'https://github.com/yodaplus', icon: 'github' }]
  };

  const mobile = bpi <= 1;
  return (
    <div sx={{ position: 'relative' }}>
      <div
        sx={{
          width: '100vw',
          height: '100%',
          left: '50%',

          zIndex: -1,
          position: 'absolute',
          transform: 'translateX(-50%)',
          backgroundImage:
            mode === 'dark'
              ? bpi <= 2
                ? 'url(/assets/bg_dark_medium.jpeg)'
                : 'url(/assets/bg_footer_dark.jpeg)'
              : bpi <= 2
              ? 'url(/assets/bg_medium.jpeg)'
              : 'url(/assets/bg_footer_light.jpeg)',
          backgroundSize: ['1500px', '1500px', '1500px', '100% 600px', '100% 400px'],
          backgroundRepeat: 'no-repeat',
          backgroundPosition: ['-750px 100%', '-750px 100%', '-750px 100%', 'bottom', 'bottom']
        }}
      />
      <Flex
        as="footer"
        sx={{
          justifyContent: 'flex-start',
          gap: 4,
          width: '100%',
          flexDirection: mobile ? 'column' : 'row',
          pt: 4,
          pb: 5
        }}
      >
        <ContactSection heading="Official Community Channels" icon="yodaplus" logos={logos.yodaplus} />
        <Flex
          sx={{
            justifyContent: 'space-between',
            gap: [4, 2, 5],
            width: ['100%', '100%', 'initial'],
            flexWrap: ['wrap', 'nowrap']
          }}
        >
          {links.map(group => {
            return (
              <Flex key={group.header} sx={{ flexDirection: 'column', gap: 2, minWidth: ['45%', 'initial'] }}>
                <Text as="h4" sx={{ fontSize: 3, fontWeight: 'semiBold' }}>
                  {group.header}
                </Text>
                {group.list.map(({ url, title }) => {
                  return (
                    <ExternalLink key={title} href={url} title={title} styles={{ fontSize: [1, 2] }}>
                      <Text sx={{ fontSize: 3, color: 'footerText' }}>{title}</Text>
                    </ExternalLink>
                  );
                })}
              </Flex>
            );
          })}
        </Flex>
      </Flex>
    </div>
  );
}
