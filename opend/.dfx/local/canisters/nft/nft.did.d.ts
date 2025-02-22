import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface nft {
  'getAsset' : ActorMethod<[], Array<number>>,
  'getCanisterId' : ActorMethod<[], Principal>,
  'getName' : ActorMethod<[], string>,
  'getOwner' : ActorMethod<[], Principal>,
  'transferOwnership' : ActorMethod<[Principal], string>,
}
export interface _SERVICE extends nft {}
