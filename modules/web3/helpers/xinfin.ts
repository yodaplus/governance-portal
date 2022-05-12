export const xinfinToEthAddress = <T>(address: string | T): string | T =>
  typeof address === 'string' ? address.replace(/^xdc/, '0x') : address;

export const ethToXinfinAddress = <T>(address: string | T): string | T =>
  typeof address === 'string' ? address.replace(/^0x/, 'xdc') : address;
