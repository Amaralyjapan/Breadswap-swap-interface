import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://breadswap.finance/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://breadswap.finance/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://breadswap.finance/syrup',
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: 'https://breadswap.finance/lottery',
  },
  {
    label: 'NFT',
    icon: 'NftIcon',
    href: 'https://breadswap.finance/nft',
  },
  {
    label: 'Teams & Profile',
    icon: 'GroupsIcon',
    items: [
      {
        label: 'Leaderboard',
        href: 'https://breadswap.finance/teams',
      },
      {
        label: 'Your Profile',
        href: 'https://breadswap.finance/profile',
      },
    ],
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://breadswap.info',
      },
      {
        label: 'Tokens',
        href: 'https://breadswap.info/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://breadswap.info/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://breadswap.info/accounts',
      },
    ],
  },
  {
    label: 'IFO',
    icon: 'IfoIcon',
    href: 'https://breadswap.finance/ifo',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Voting',
        href: 'https://voting.breadswap.finance',
      },
      {
        label: 'Github',
        href: 'https://github.com/breadswap',
      },
      {
        label: 'Docs',
        href: 'https://docs.breadswap.finance',
      },
      {
        label: 'Blog',
        href: 'https://breadswap.medium.com',
      },
    ],
  },
]

export default config
