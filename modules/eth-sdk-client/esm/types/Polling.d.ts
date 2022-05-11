import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface PollingInterface extends utils.Interface {
    contractName: "Polling";
    functions: {
        "createPoll(uint256,uint256,string,string)": FunctionFragment;
        "npoll()": FunctionFragment;
        "vote(uint256[],uint256[])": FunctionFragment;
        "withdrawPoll(uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "createPoll", values: [BigNumberish, BigNumberish, string, string]): string;
    encodeFunctionData(functionFragment: "npoll", values?: undefined): string;
    encodeFunctionData(functionFragment: "vote", values: [BigNumberish[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "withdrawPoll", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "createPoll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "npoll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "vote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawPoll", data: BytesLike): Result;
    events: {
        "PollCreated(address,uint256,uint256,uint256,uint256,string,string)": EventFragment;
        "PollWithdrawn(address,uint256,uint256)": EventFragment;
        "Voted(address,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "PollCreated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PollWithdrawn"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Voted"): EventFragment;
}
export declare type PollCreatedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    string
], {
    creator: string;
    blockCreated: BigNumber;
    pollId: BigNumber;
    startDate: BigNumber;
    endDate: BigNumber;
    multiHash: string;
    url: string;
}>;
export declare type PollCreatedEventFilter = TypedEventFilter<PollCreatedEvent>;
export declare type PollWithdrawnEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], {
    creator: string;
    blockWithdrawn: BigNumber;
    pollId: BigNumber;
}>;
export declare type PollWithdrawnEventFilter = TypedEventFilter<PollWithdrawnEvent>;
export declare type VotedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], {
    voter: string;
    pollId: BigNumber;
    optionId: BigNumber;
}>;
export declare type VotedEventFilter = TypedEventFilter<VotedEvent>;
export interface Polling extends BaseContract {
    contractName: "Polling";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: PollingInterface;
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
        createPoll(startDate: BigNumberish, endDate: BigNumberish, multiHash: string, url: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        npoll(overrides?: CallOverrides): Promise<[BigNumber]>;
        "vote(uint256[],uint256[])"(pollIds: BigNumberish[], optionIds: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "vote(uint256,uint256)"(pollId: BigNumberish, optionId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "withdrawPoll(uint256)"(pollId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "withdrawPoll(uint256[])"(pollIds: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    createPoll(startDate: BigNumberish, endDate: BigNumberish, multiHash: string, url: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    npoll(overrides?: CallOverrides): Promise<BigNumber>;
    "vote(uint256[],uint256[])"(pollIds: BigNumberish[], optionIds: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "vote(uint256,uint256)"(pollId: BigNumberish, optionId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "withdrawPoll(uint256)"(pollId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "withdrawPoll(uint256[])"(pollIds: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        createPoll(startDate: BigNumberish, endDate: BigNumberish, multiHash: string, url: string, overrides?: CallOverrides): Promise<void>;
        npoll(overrides?: CallOverrides): Promise<BigNumber>;
        "vote(uint256[],uint256[])"(pollIds: BigNumberish[], optionIds: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        "vote(uint256,uint256)"(pollId: BigNumberish, optionId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "withdrawPoll(uint256)"(pollId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "withdrawPoll(uint256[])"(pollIds: BigNumberish[], overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "PollCreated(address,uint256,uint256,uint256,uint256,string,string)"(creator?: string | null, blockCreated?: null, pollId?: BigNumberish | null, startDate?: null, endDate?: null, multiHash?: null, url?: null): PollCreatedEventFilter;
        PollCreated(creator?: string | null, blockCreated?: null, pollId?: BigNumberish | null, startDate?: null, endDate?: null, multiHash?: null, url?: null): PollCreatedEventFilter;
        "PollWithdrawn(address,uint256,uint256)"(creator?: string | null, blockWithdrawn?: null, pollId?: null): PollWithdrawnEventFilter;
        PollWithdrawn(creator?: string | null, blockWithdrawn?: null, pollId?: null): PollWithdrawnEventFilter;
        "Voted(address,uint256,uint256)"(voter?: string | null, pollId?: BigNumberish | null, optionId?: BigNumberish | null): VotedEventFilter;
        Voted(voter?: string | null, pollId?: BigNumberish | null, optionId?: BigNumberish | null): VotedEventFilter;
    };
    estimateGas: {
        createPoll(startDate: BigNumberish, endDate: BigNumberish, multiHash: string, url: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        npoll(overrides?: CallOverrides): Promise<BigNumber>;
        "vote(uint256[],uint256[])"(pollIds: BigNumberish[], optionIds: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "vote(uint256,uint256)"(pollId: BigNumberish, optionId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "withdrawPoll(uint256)"(pollId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "withdrawPoll(uint256[])"(pollIds: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        createPoll(startDate: BigNumberish, endDate: BigNumberish, multiHash: string, url: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        npoll(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "vote(uint256[],uint256[])"(pollIds: BigNumberish[], optionIds: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "vote(uint256,uint256)"(pollId: BigNumberish, optionId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "withdrawPoll(uint256)"(pollId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "withdrawPoll(uint256[])"(pollIds: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
