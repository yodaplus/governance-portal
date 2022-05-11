import { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface VoteDelegateFactoryInterface extends utils.Interface {
    contractName: "VoteDelegateFactory";
    functions: {
        "chief()": FunctionFragment;
        "create()": FunctionFragment;
        "delegates(address)": FunctionFragment;
        "isDelegate(address)": FunctionFragment;
        "polling()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "chief", values?: undefined): string;
    encodeFunctionData(functionFragment: "create", values?: undefined): string;
    encodeFunctionData(functionFragment: "delegates", values: [string]): string;
    encodeFunctionData(functionFragment: "isDelegate", values: [string]): string;
    encodeFunctionData(functionFragment: "polling", values?: undefined): string;
    decodeFunctionResult(functionFragment: "chief", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "create", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delegates", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isDelegate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "polling", data: BytesLike): Result;
    events: {
        "CreateVoteDelegate(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "CreateVoteDelegate"): EventFragment;
}
export declare type CreateVoteDelegateEvent = TypedEvent<[
    string,
    string
], {
    delegate: string;
    voteDelegate: string;
}>;
export declare type CreateVoteDelegateEventFilter = TypedEventFilter<CreateVoteDelegateEvent>;
export interface VoteDelegateFactory extends BaseContract {
    contractName: "VoteDelegateFactory";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: VoteDelegateFactoryInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        chief(overrides?: CallOverrides): Promise<[string]>;
        create(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        delegates(arg0: string, overrides?: CallOverrides): Promise<[string]>;
        isDelegate(guy: string, overrides?: CallOverrides): Promise<[boolean]>;
        polling(overrides?: CallOverrides): Promise<[string]>;
    };
    chief(overrides?: CallOverrides): Promise<string>;
    create(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    delegates(arg0: string, overrides?: CallOverrides): Promise<string>;
    isDelegate(guy: string, overrides?: CallOverrides): Promise<boolean>;
    polling(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        chief(overrides?: CallOverrides): Promise<string>;
        create(overrides?: CallOverrides): Promise<string>;
        delegates(arg0: string, overrides?: CallOverrides): Promise<string>;
        isDelegate(guy: string, overrides?: CallOverrides): Promise<boolean>;
        polling(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "CreateVoteDelegate(address,address)"(delegate?: string | null, voteDelegate?: string | null): CreateVoteDelegateEventFilter;
        CreateVoteDelegate(delegate?: string | null, voteDelegate?: string | null): CreateVoteDelegateEventFilter;
    };
    estimateGas: {
        chief(overrides?: CallOverrides): Promise<BigNumber>;
        create(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        delegates(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        isDelegate(guy: string, overrides?: CallOverrides): Promise<BigNumber>;
        polling(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        chief(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        create(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        delegates(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isDelegate(guy: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        polling(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
