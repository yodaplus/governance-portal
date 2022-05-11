import { Signer } from 'ethers';
import * as types from './types';
export declare function getContract(address: string, abi: object, defaultSigner: Signer): any;
export declare type Sdk = {
  chief: types.Chief;
  chiefOld: types.Chief;
  dai: types.Dai;
  end: types.End;
  esm: types.Esm;
  iou: types.Iou;
  iouOld: types.Iou;
  mkr: types.Mkr;
  pause: types.Pause;
  pauseProxy: types.PauseProxy;
  polling: types.Polling;
  pot: types.Pot;
  vat: types.Vat;
  voteDelegateFactory: types.VoteDelegateFactory;
  voteProxyFactory: types.VoteProxyFactory;
  voteProxyFactoryOld: types.VoteProxyFactory;
  vow: types.Vow;
};

export declare function getMainnetSdk(defaultSigner: Signer): Sdk;
export declare function getApothemSdk(defaultSigner: Signer): Sdk;
