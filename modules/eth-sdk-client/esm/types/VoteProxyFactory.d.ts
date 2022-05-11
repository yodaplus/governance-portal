import { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface VoteProxyFactoryInterface extends utils.Interface {
    contractName: "VoteProxyFactory";
    functions: {
        "approveLink(address)": FunctionFragment;
        "breakLink()": FunctionFragment;
        "chief()": FunctionFragment;
        "coldMap(address)": FunctionFragment;
        "hasProxy(address)": FunctionFragment;
        "hotMap(address)": FunctionFragment;
        "initiateLink(address)": FunctionFragment;
        "linkRequests(address)": FunctionFragment;
        "linkSelf()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "approveLink", values: [string]): string;
    encodeFunctionData(functionFragment: "breakLink", values?: undefined): string;
    encodeFunctionData(functionFragment: "chief", values?: undefined): string;
    encodeFunctionData(functionFragment: "coldMap", values: [string]): string;
    encodeFunctionData(functionFragment: "hasProxy", values: [string]): string;
    encodeFunctionData(functionFragment: "hotMap", values: [string]): string;
    encodeFunctionData(functionFragment: "initiateLink", values: [string]): string;
    encodeFunctionData(functionFragment: "linkRequests", values: [string]): string;
    encodeFunctionData(functionFragment: "linkSelf", values?: undefined): string;
    decodeFunctionResult(functionFragment: "approveLink", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "breakLink", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "chief", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "coldMap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasProxy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hotMap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initiateLink", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "linkRequests", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "linkSelf", data: BytesLike): Result;
    events: {
        "LinkConfirmed(address,address,address)": EventFragment;
        "LinkRequested(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "LinkConfirmed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LinkRequested"): EventFragment;
}
export declare type LinkConfirmedEvent = TypedEvent<[
    string,
    string,
    string
], {
    cold: string;
    hot: string;
    voteProxy: string;
}>;
export declare type LinkConfirmedEventFilter = TypedEventFilter<LinkConfirmedEvent>;
export declare type LinkRequestedEvent = TypedEvent<[
    string,
    string
], {
    cold: string;
    hot: string;
}>;
export declare type LinkRequestedEventFilter = TypedEventFilter<LinkRequestedEvent>;
export interface VoteProxyFactory extends BaseContract {
    contractName: "VoteProxyFactory";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: VoteProxyFactoryInterface;
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
        approveLink(cold: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        breakLink(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        chief(overrides?: CallOverrides): Promise<[string]>;
        coldMap(arg0: string, overrides?: CallOverrides): Promise<[string]>;
        hasProxy(guy: string, overrides?: CallOverrides): Promise<[boolean]>;
        hotMap(arg0: string, overrides?: CallOverrides): Promise<[string]>;
        initiateLink(hot: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        linkRequests(arg0: string, overrides?: CallOverrides): Promise<[string]>;
        linkSelf(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    approveLink(cold: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    breakLink(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    chief(overrides?: CallOverrides): Promise<string>;
    coldMap(arg0: string, overrides?: CallOverrides): Promise<string>;
    hasProxy(guy: string, overrides?: CallOverrides): Promise<boolean>;
    hotMap(arg0: string, overrides?: CallOverrides): Promise<string>;
    initiateLink(hot: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    linkRequests(arg0: string, overrides?: CallOverrides): Promise<string>;
    linkSelf(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        approveLink(cold: string, overrides?: CallOverrides): Promise<string>;
        breakLink(overrides?: CallOverrides): Promise<void>;
        chief(overrides?: CallOverrides): Promise<string>;
        coldMap(arg0: string, overrides?: CallOverrides): Promise<string>;
        hasProxy(guy: string, overrides?: CallOverrides): Promise<boolean>;
        hotMap(arg0: string, overrides?: CallOverrides): Promise<string>;
        initiateLink(hot: string, overrides?: CallOverrides): Promise<void>;
        linkRequests(arg0: string, overrides?: CallOverrides): Promise<string>;
        linkSelf(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "LinkConfirmed(address,address,address)"(cold?: string | null, hot?: string | null, voteProxy?: string | null): LinkConfirmedEventFilter;
        LinkConfirmed(cold?: string | null, hot?: string | null, voteProxy?: string | null): LinkConfirmedEventFilter;
        "LinkRequested(address,address)"(cold?: string | null, hot?: string | null): LinkRequestedEventFilter;
        LinkRequested(cold?: string | null, hot?: string | null): LinkRequestedEventFilter;
    };
    estimateGas: {
        approveLink(cold: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        breakLink(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        chief(overrides?: CallOverrides): Promise<BigNumber>;
        coldMap(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        hasProxy(guy: string, overrides?: CallOverrides): Promise<BigNumber>;
        hotMap(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        initiateLink(hot: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        linkRequests(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        linkSelf(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        approveLink(cold: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        breakLink(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        chief(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        coldMap(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        hasProxy(guy: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        hotMap(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initiateLink(hot: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        linkRequests(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        linkSelf(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
