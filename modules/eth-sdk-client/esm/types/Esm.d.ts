import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface EsmInterface extends utils.Interface {
    contractName: "Esm";
    functions: {
        "Sum()": FunctionFragment;
        "burn()": FunctionFragment;
        "cage()": FunctionFragment;
        "deny(address)": FunctionFragment;
        "denyProxy(address)": FunctionFragment;
        "end()": FunctionFragment;
        "file(bytes32,uint256)": FunctionFragment;
        "fire()": FunctionFragment;
        "gem()": FunctionFragment;
        "join(uint256)": FunctionFragment;
        "live()": FunctionFragment;
        "min()": FunctionFragment;
        "proxy()": FunctionFragment;
        "rely(address)": FunctionFragment;
        "revokesGovernanceAccess()": FunctionFragment;
        "sum(address)": FunctionFragment;
        "wards(address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "Sum", values?: undefined): string;
    encodeFunctionData(functionFragment: "burn", values?: undefined): string;
    encodeFunctionData(functionFragment: "cage", values?: undefined): string;
    encodeFunctionData(functionFragment: "deny", values: [string]): string;
    encodeFunctionData(functionFragment: "denyProxy", values: [string]): string;
    encodeFunctionData(functionFragment: "end", values?: undefined): string;
    encodeFunctionData(functionFragment: "file", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "fire", values?: undefined): string;
    encodeFunctionData(functionFragment: "gem", values?: undefined): string;
    encodeFunctionData(functionFragment: "join", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "live", values?: undefined): string;
    encodeFunctionData(functionFragment: "min", values?: undefined): string;
    encodeFunctionData(functionFragment: "proxy", values?: undefined): string;
    encodeFunctionData(functionFragment: "rely", values: [string]): string;
    encodeFunctionData(functionFragment: "revokesGovernanceAccess", values?: undefined): string;
    encodeFunctionData(functionFragment: "sum", values: [string]): string;
    encodeFunctionData(functionFragment: "wards", values: [string]): string;
    decodeFunctionResult(functionFragment: "Sum", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deny", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "denyProxy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "end", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "file", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fire", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gem", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "join", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "live", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "min", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proxy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rely", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokesGovernanceAccess", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sum", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "wards", data: BytesLike): Result;
    events: {
        "Deny(address)": EventFragment;
        "DenyProxy(address,address)": EventFragment;
        "File(bytes32,uint256)": EventFragment;
        "Fire()": EventFragment;
        "Join(address,uint256)": EventFragment;
        "Rely(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Deny"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DenyProxy"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "File"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Fire"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Join"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Rely"): EventFragment;
}
export declare type DenyEvent = TypedEvent<[string], {
    usr: string;
}>;
export declare type DenyEventFilter = TypedEventFilter<DenyEvent>;
export declare type DenyProxyEvent = TypedEvent<[
    string,
    string
], {
    base: string;
    pause: string;
}>;
export declare type DenyProxyEventFilter = TypedEventFilter<DenyProxyEvent>;
export declare type File_bytes32_uint256_Event = TypedEvent<[
    string,
    BigNumber
], {
    what: string;
    data: BigNumber;
}>;
export declare type File_bytes32_uint256_EventFilter = TypedEventFilter<File_bytes32_uint256_Event>;
export declare type File_bytes32_address_Event = TypedEvent<[
    string,
    string
], {
    what: string;
    data: string;
}>;
export declare type File_bytes32_address_EventFilter = TypedEventFilter<File_bytes32_address_Event>;
export declare type FireEvent = TypedEvent<[], {}>;
export declare type FireEventFilter = TypedEventFilter<FireEvent>;
export declare type JoinEvent = TypedEvent<[
    string,
    BigNumber
], {
    usr: string;
    wad: BigNumber;
}>;
export declare type JoinEventFilter = TypedEventFilter<JoinEvent>;
export declare type RelyEvent = TypedEvent<[string], {
    usr: string;
}>;
export declare type RelyEventFilter = TypedEventFilter<RelyEvent>;
export interface Esm extends BaseContract {
    contractName: "Esm";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: EsmInterface;
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
        Sum(overrides?: CallOverrides): Promise<[BigNumber]>;
        burn(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        cage(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        deny(usr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        denyProxy(target: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        end(overrides?: CallOverrides): Promise<[string]>;
        "file(bytes32,uint256)"(what: BytesLike, data: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "file(bytes32,address)"(what: BytesLike, data: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        fire(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        gem(overrides?: CallOverrides): Promise<[string]>;
        join(wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        live(overrides?: CallOverrides): Promise<[BigNumber]>;
        min(overrides?: CallOverrides): Promise<[BigNumber]>;
        proxy(overrides?: CallOverrides): Promise<[string]>;
        rely(usr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        revokesGovernanceAccess(overrides?: CallOverrides): Promise<[boolean] & {
            ret: boolean;
        }>;
        sum(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        wards(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    Sum(overrides?: CallOverrides): Promise<BigNumber>;
    burn(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    cage(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    deny(usr: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    denyProxy(target: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    end(overrides?: CallOverrides): Promise<string>;
    "file(bytes32,uint256)"(what: BytesLike, data: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "file(bytes32,address)"(what: BytesLike, data: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    fire(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    gem(overrides?: CallOverrides): Promise<string>;
    join(wad: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    live(overrides?: CallOverrides): Promise<BigNumber>;
    min(overrides?: CallOverrides): Promise<BigNumber>;
    proxy(overrides?: CallOverrides): Promise<string>;
    rely(usr: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    revokesGovernanceAccess(overrides?: CallOverrides): Promise<boolean>;
    sum(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    wards(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        Sum(overrides?: CallOverrides): Promise<BigNumber>;
        burn(overrides?: CallOverrides): Promise<void>;
        cage(overrides?: CallOverrides): Promise<void>;
        deny(usr: string, overrides?: CallOverrides): Promise<void>;
        denyProxy(target: string, overrides?: CallOverrides): Promise<void>;
        end(overrides?: CallOverrides): Promise<string>;
        "file(bytes32,uint256)"(what: BytesLike, data: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "file(bytes32,address)"(what: BytesLike, data: string, overrides?: CallOverrides): Promise<void>;
        fire(overrides?: CallOverrides): Promise<void>;
        gem(overrides?: CallOverrides): Promise<string>;
        join(wad: BigNumberish, overrides?: CallOverrides): Promise<void>;
        live(overrides?: CallOverrides): Promise<BigNumber>;
        min(overrides?: CallOverrides): Promise<BigNumber>;
        proxy(overrides?: CallOverrides): Promise<string>;
        rely(usr: string, overrides?: CallOverrides): Promise<void>;
        revokesGovernanceAccess(overrides?: CallOverrides): Promise<boolean>;
        sum(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        wards(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "Deny(address)"(usr?: string | null): DenyEventFilter;
        Deny(usr?: string | null): DenyEventFilter;
        "DenyProxy(address,address)"(base?: string | null, pause?: string | null): DenyProxyEventFilter;
        DenyProxy(base?: string | null, pause?: string | null): DenyProxyEventFilter;
        "File(bytes32,uint256)"(what?: BytesLike | null, data?: null): File_bytes32_uint256_EventFilter;
        "File(bytes32,address)"(what?: BytesLike | null, data?: null): File_bytes32_address_EventFilter;
        "Fire()"(): FireEventFilter;
        Fire(): FireEventFilter;
        "Join(address,uint256)"(usr?: string | null, wad?: null): JoinEventFilter;
        Join(usr?: string | null, wad?: null): JoinEventFilter;
        "Rely(address)"(usr?: string | null): RelyEventFilter;
        Rely(usr?: string | null): RelyEventFilter;
    };
    estimateGas: {
        Sum(overrides?: CallOverrides): Promise<BigNumber>;
        burn(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        cage(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        deny(usr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        denyProxy(target: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        end(overrides?: CallOverrides): Promise<BigNumber>;
        "file(bytes32,uint256)"(what: BytesLike, data: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "file(bytes32,address)"(what: BytesLike, data: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        fire(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        gem(overrides?: CallOverrides): Promise<BigNumber>;
        join(wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        live(overrides?: CallOverrides): Promise<BigNumber>;
        min(overrides?: CallOverrides): Promise<BigNumber>;
        proxy(overrides?: CallOverrides): Promise<BigNumber>;
        rely(usr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        revokesGovernanceAccess(overrides?: CallOverrides): Promise<BigNumber>;
        sum(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        wards(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        Sum(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        burn(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        cage(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        deny(usr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        denyProxy(target: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        end(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "file(bytes32,uint256)"(what: BytesLike, data: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "file(bytes32,address)"(what: BytesLike, data: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        fire(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        gem(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        join(wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        live(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        min(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proxy(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rely(usr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        revokesGovernanceAccess(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sum(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        wards(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
