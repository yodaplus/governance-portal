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
    chief: getContract('0x8843EEF577e2F3eC582044da45770e4542217e72', apothemChiefAbi, defaultSigner),
    chiefOld: getContract('0x8843EEF577e2F3eC582044da45770e4542217e72', apothemChiefAbi, defaultSigner),
    dai: getContract('0x15a9FC698F5254e3e7A24F6E87b5761CF44e6D38', apothemDaiAbi, defaultSigner),
    end: getContract('0xFa160D11083DA71E624dA529fFE37b8f2F628800', apothemEndAbi, defaultSigner),
    esm: getContract('0x42f78252dC5cE3de214Ca99158143729e7fc0740', apothemEsmAbi, defaultSigner),
    iou: getContract('0x35298768b79bd646a202965123d964Be9334A3bE', apothemIouAbi, defaultSigner),
    iouOld: getContract('0x35298768b79bd646a202965123d964Be9334A3bE', apothemIouAbi, defaultSigner),
    mkr: getContract('0x9dC974ecc7044884DbB2C267bE29DE01bD423a36', apothemMkrAbi, defaultSigner),
    pause: getContract('0x7e8dB3D97cd22Eb584B0bc8Ee13070fdA89FD511', apothemPauseAbi, defaultSigner),
    pauseProxy: getContract(
      '0xD8B916dC6E7ddE2b2D650a694fc796AB2b6D2c87',
      apothemPauseProxyAbi,
      defaultSigner
    ),
    polling: getContract('0xdf8e6837f0534c08111c0a4136b85658678e118f', apothemPollingAbi, defaultSigner),
    pot: getContract('0xa5E36b2fE96216e810cDDeB9aCFC1Bf5B054a5BB', apothemPotAbi, defaultSigner),
    vat: getContract('0xb57CD7aD9334306218CcF04Ae89fCA3A39552c9D', apothemVatAbi, defaultSigner),
    voteDelegateFactory: getContract(
      '0x0aC21B3191629Da71CB37edFbaB0B39A2A01A5E3',
      apothemVoteDelegateFactoryAbi,
      defaultSigner
    ),
    voteProxyFactory: getContract(
      '0xC54D9F2AEa9D68BE017C66bbD442998A309B2256',
      apothemVoteProxyFactoryAbi,
      defaultSigner
    ),
    voteProxyFactoryOld: getContract(
      '0xC54D9F2AEa9D68BE017C66bbD442998A309B2256',
      apothemVoteProxyFactoryAbi,
      defaultSigner
    ),
    vow: getContract('0x7687Ec6e0000423E8a569e4cE6895F67f8235965', apothemVowAbi, defaultSigner)
  };
}
