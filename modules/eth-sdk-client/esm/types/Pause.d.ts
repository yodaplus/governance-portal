import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface PauseInterface extends utils.Interface {
    contractName: "Pause";
    functions: {
        "authority()": FunctionFragment;
        "delay()": FunctionFragment;
        "drop(address,bytes32,bytes,uint256)": FunctionFragment;
        "exec(address,bytes32,bytes,uint256)": FunctionFragment;
        "owner()": FunctionFragment;
        "plans(bytes32)": FunctionFragment;
        "plot(address,bytes32,bytes,uint256)": FunctionFragment;
        "proxy()": FunctionFragment;
        "setAuthority(address)": FunctionFragment;
        "setDelay(uint256)": FunctionFragment;
        "setOwner(address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "authority", values?: undefined): string;
    encodeFunctionData(functionFragment: "delay", values?: undefined): string;
    encodeFunctionData(functionFragment: "drop", values: [string, BytesLike, BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "exec", values: [string, BytesLike, BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "plans", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "plot", values: [string, BytesLike, BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "proxy", values?: undefined): string;
    encodeFunctionData(functionFragment: "setAuthority", values: [string]): string;
    encodeFunctionData(functionFragment: "setDelay", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setOwner", values: [string]): string;
    decodeFunctionResult(functionFragment: "authority", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "drop", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exec", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "plans", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "plot", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proxy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAuthority", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDelay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
    events: {
        "LogNote(bytes4,address,bytes32,bytes32,uint256,bytes)": EventFragment;
        "LogSetAuthority(address)": EventFragment;
        "LogSetOwner(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "LogNote"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogSetAuthority"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogSetOwner"): EventFragment;
}
export declare type LogNoteEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    BigNumber,
    string
], {
    sig: string;
    guy: string;
    foo: string;
    bar: string;
    wad: BigNumber;
    fax: string;
}>;
export declare type LogNoteEventFilter = TypedEventFilter<LogNoteEvent>;
export declare type LogSetAuthorityEvent = TypedEvent<[string], {
    authority: string;
}>;
export declare type LogSetAuthorityEventFilter = TypedEventFilter<LogSetAuthorityEvent>;
export declare type LogSetOwnerEvent = TypedEvent<[string], {
    owner: string;
}>;
export declare type LogSetOwnerEventFilter = TypedEventFilter<LogSetOwnerEvent>;
export interface Pause extends BaseContract {
    contractName: "Pause";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: PauseInterface;
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
        authority(overrides?: CallOverrides): Promise<[string]>;
        delay(overrides?: CallOverrides): Promise<[BigNumber]>;
        drop(usr: string, tag: BytesLike, fax: BytesLike, eta: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        exec(usr: string, tag: BytesLike, fax: BytesLike, eta: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        plans(arg0: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        plot(usr: string, tag: BytesLike, fax: BytesLike, eta: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        proxy(overrides?: CallOverrides): Promise<[string]>;
        setAuthority(authority_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setDelay(delay_: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setOwner(owner_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    authority(overrides?: CallOverrides): Promise<string>;
    delay(overrides?: CallOverrides): Promise<BigNumber>;
    drop(usr: string, tag: BytesLike, fax: BytesLike, eta: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    exec(usr: string, tag: BytesLike, fax: BytesLike, eta: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    plans(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    plot(usr: string, tag: BytesLike, fax: BytesLike, eta: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    proxy(overrides?: CallOverrides): Promise<string>;
    setAuthority(authority_: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setDelay(delay_: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setOwner(owner_: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        authority(overrides?: CallOverrides): Promise<string>;
        delay(overrides?: CallOverrides): Promise<BigNumber>;
        drop(usr: string, tag: BytesLike, fax: BytesLike, eta: BigNumberish, overrides?: CallOverrides): Promise<void>;
        exec(usr: string, tag: BytesLike, fax: BytesLike, eta: BigNumberish, overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        plans(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        plot(usr: string, tag: BytesLike, fax: BytesLike, eta: BigNumberish, overrides?: CallOverrides): Promise<void>;
        proxy(overrides?: CallOverrides): Promise<string>;
        setAuthority(authority_: string, overrides?: CallOverrides): Promise<void>;
        setDelay(delay_: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setOwner(owner_: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "LogNote(bytes4,address,bytes32,bytes32,uint256,bytes)"(sig?: BytesLike | null, guy?: string | null, foo?: BytesLike | null, bar?: BytesLike | null, wad?: null, fax?: null): LogNoteEventFilter;
        LogNote(sig?: BytesLike | null, guy?: string | null, foo?: BytesLike | null, bar?: BytesLike | null, wad?: null, fax?: null): LogNoteEventFilter;
        "LogSetAuthority(address)"(authority?: string | null): LogSetAuthorityEventFilter;
        LogSetAuthority(authority?: string | null): LogSetAuthorityEventFilter;
        "LogSetOwner(address)"(owner?: string | null): LogSetOwnerEventFilter;
        LogSetOwner(owner?: string | null): LogSetOwnerEventFilter;
    };
    estimateGas: {
        authority(overrides?: CallOverrides): Promise<BigNumber>;
        delay(overrides?: CallOverrides): Promise<BigNumber>;
        drop(usr: string, tag: BytesLike, fax: BytesLike, eta: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        exec(usr: string, tag: BytesLike, fax: BytesLike, eta: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        plans(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        plot(usr: string, tag: BytesLike, fax: BytesLike, eta: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        proxy(overrides?: CallOverrides): Promise<BigNumber>;
        setAuthority(authority_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setDelay(delay_: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setOwner(owner_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        authority(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        delay(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        drop(usr: string, tag: BytesLike, fax: BytesLike, eta: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        exec(usr: string, tag: BytesLike, fax: BytesLike, eta: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        plans(arg0: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        plot(usr: string, tag: BytesLike, fax: BytesLike, eta: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        proxy(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setAuthority(authority_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setDelay(delay_: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setOwner(owner_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
