import { Contract } from 'ethers';
import apothemChiefAbi from 'modules/contracts/abis/apothem/chief.json';
import apothemDaiAbi from 'modules/contracts/abis/apothem/dai.json';
import apothemEndAbi from 'modules/contracts/abis/apothem/end.json';
import apothemEsmAbi from 'modules/contracts/abis/apothem/esm.json';
import apothemIouAbi from 'modules/contracts/abis/apothem/iou.json';
import apothemMkrAbi from 'modules/contracts/abis/apothem/mkr.json';
import apothemPauseAbi from 'modules/contracts/abis/apothem/pause.json';
import apothemPauseProxyAbi from 'modules/contracts/abis/apothem/pauseProxy.json';
import apothemPollingAbi from 'modules/contracts/abis/apothem/polling.json';
import apothemPotAbi from 'modules/contracts/abis/apothem/pot.json';
import apothemVatAbi from 'modules/contracts/abis/apothem/vat.json';
import apothemVoteDelegateFactoryAbi from 'modules/contracts/abis/apothem/voteDelegateFactory.json';
import apothemVoteProxyFactoryAbi from 'modules/contracts/abis/apothem/voteProxyFactory.json';
import apothemVowAbi from 'modules/contracts/abis/apothem/vow.json';
export function getContract(address, abi, defaultSigner) {
  return new Contract(address, abi, defaultSigner);
}
export function getMainnetSdk(defaultSigner) {
  return {
    chief: getContract('0xD78F0d4B884C7D3Ba644A1b249CE913E1AD895D3', apothemChiefAbi, defaultSigner),
    chiefOld: getContract('0xD78F0d4B884C7D3Ba644A1b249CE913E1AD895D3', apothemChiefAbi, defaultSigner),
    dai: getContract('0x1F514bd7461Bfa23C83822f76cE671D194D83Ad5', apothemDaiAbi, defaultSigner),
    end: getContract('0xEFB2608CbaFa800d9949b9B18ca3332042CBA0f3', apothemEndAbi, defaultSigner),
    esm: getContract('0x68199D8330b4Fba1B4C2e0638760DBdD0C46fa6C', apothemEsmAbi, defaultSigner),
    iou: getContract('0x33Eb18f8A03595a7EE5a046d7ADEd2462F6DB060', apothemIouAbi, defaultSigner),
    iouOld: getContract('0x33Eb18f8A03595a7EE5a046d7ADEd2462F6DB060', apothemIouAbi, defaultSigner),
    mkr: getContract('0xBE83B14835daD188c713e1F2A300bf46fd1bcEBE', apothemMkrAbi, defaultSigner),
    pause: getContract('0x6Fdc432154FE3c3a63EBeF4BC4d0E38873E9ae73', apothemPauseAbi, defaultSigner),
    pauseProxy: getContract(
      '0x7383b4755FFEf229C78d4C6a95de1e0776C4a526',
      apothemPauseProxyAbi,
      defaultSigner
    ),
    polling: getContract('0x908aF4d1E7CA522aeee927F66ec5c87E84c351C5', apothemPollingAbi, defaultSigner),
    pot: getContract('0xE34E651e5BDc25118d335d9f307b4B40905772Bd', apothemPotAbi, defaultSigner),
    vat: getContract('0xADD756B7a1384c48339Fe0f951405Ce03a3C9889', apothemVatAbi, defaultSigner),
    voteDelegateFactory: getContract(
      '0xB55Bf3aDC61511923a1A88D345e01b293e1DC4f6',
      apothemVoteDelegateFactoryAbi,
      defaultSigner
    ),
    voteProxyFactory: getContract(
      '0xDed66a1a53eaAf3AAec1D7F53028e84de45Af773',
      apothemVoteProxyFactoryAbi,
      defaultSigner
    ),
    voteProxyFactoryOld: getContract(
      '0xDed66a1a53eaAf3AAec1D7F53028e84de45Af773',
      apothemVoteProxyFactoryAbi,
      defaultSigner
    ),
    vow: getContract('0x8Ef0FAA9b039F8c4aB9d60705263c2B5AE483ceA', apothemVowAbi, defaultSigner)
  };
}
export function getApothemSdk(defaultSigner) {
  return {
    chief: getContract('0x4796dC3110bc1db8064910485b6c21451ff8f285', apothemChiefAbi, defaultSigner),
    chiefOld: getContract('0x4796dC3110bc1db8064910485b6c21451ff8f285', apothemChiefAbi, defaultSigner),
    dai: getContract('0xDDddBBe40f40e8F6084C42a6cAA002877aD21906', apothemDaiAbi, defaultSigner),
    end: getContract('0x4bFd6F581CF190a98FD4D27cA2241E7fE2a13542', apothemEndAbi, defaultSigner),
    esm: getContract('0xC486Fd2F80Dbe562C66Cee3A4D5a745Db7D3807d', apothemEsmAbi, defaultSigner),
    iou: getContract('0x7DA1B7180B80b64db494cC481729EfF7e8492B09', apothemIouAbi, defaultSigner),
    iouOld: getContract('0x7DA1B7180B80b64db494cC481729EfF7e8492B09', apothemIouAbi, defaultSigner),
    mkr: getContract('0xB643d716608ba491dC50D4fc414B1530b2aE32E4', apothemMkrAbi, defaultSigner),
    pause: getContract('0x148B7015B7eeAc50D6124E4e56dCC36B4dE1C5f1', apothemPauseAbi, defaultSigner),
    pauseProxy: getContract(
      '0xCa0cFcf3066Fb463517a4819408FE9167F69fbDE',
      apothemPauseProxyAbi,
      defaultSigner
    ),
    polling: getContract('0x5EB446De6b83417662f1D4c0c34a687461A487A1', apothemPollingAbi, defaultSigner),
    pot: getContract('0xA6Abe99c0BEA553b0a01fAA120B8d3077AD3b389', apothemPotAbi, defaultSigner),
    vat: getContract('0x9a786475F517a43d1136c44453be367A39115c5C', apothemVatAbi, defaultSigner),
    voteDelegateFactory: getContract(
      '0x40eA527Bd8b57a178B9F432279bc3b06C730BEb9',
      apothemVoteDelegateFactoryAbi,
      defaultSigner
    ),
    voteProxyFactory: getContract(
      '0xfC9D474Cf20188ED02BBE01e6374Cd0F2955E386',
      apothemVoteProxyFactoryAbi,
      defaultSigner
    ),
    voteProxyFactoryOld: getContract(
      '0xfC9D474Cf20188ED02BBE01e6374Cd0F2955E386',
      apothemVoteProxyFactoryAbi,
      defaultSigner
    ),
    vow: getContract('0xe19EF6b36824dAbC814dfA0086424c1f1e01EFA6', apothemVowAbi, defaultSigner)
  };
}
