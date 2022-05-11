import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface EndInterface extends utils.Interface {
    contractName: "End";
    functions: {
        "Art(bytes32)": FunctionFragment;
        "bag(address)": FunctionFragment;
        "cage()": FunctionFragment;
        "cash(bytes32,uint256)": FunctionFragment;
        "cat()": FunctionFragment;
        "debt()": FunctionFragment;
        "deny(address)": FunctionFragment;
        "dog()": FunctionFragment;
        "file(bytes32,uint256)": FunctionFragment;
        "fix(bytes32)": FunctionFragment;
        "flow(bytes32)": FunctionFragment;
        "free(bytes32)": FunctionFragment;
        "gap(bytes32)": FunctionFragment;
        "live()": FunctionFragment;
        "out(bytes32,address)": FunctionFragment;
        "pack(uint256)": FunctionFragment;
        "pot()": FunctionFragment;
        "rely(address)": FunctionFragment;
        "skim(bytes32,address)": FunctionFragment;
        "skip(bytes32,uint256)": FunctionFragment;
        "snip(bytes32,uint256)": FunctionFragment;
        "spot()": FunctionFragment;
        "tag(bytes32)": FunctionFragment;
        "thaw()": FunctionFragment;
        "vat()": FunctionFragment;
        "vow()": FunctionFragment;
        "wait()": FunctionFragment;
        "wards(address)": FunctionFragment;
        "when()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "Art", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "bag", values: [string]): string;
    encodeFunctionData(functionFragment: "cage", values?: undefined): string;
    encodeFunctionData(functionFragment: "cash", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "cat", values?: undefined): string;
    encodeFunctionData(functionFragment: "debt", values?: undefined): string;
    encodeFunctionData(functionFragment: "deny", values: [string]): string;
    encodeFunctionData(functionFragment: "dog", values?: undefined): string;
    encodeFunctionData(functionFragment: "file", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "fix", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "flow", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "free", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "gap", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "live", values?: undefined): string;
    encodeFunctionData(functionFragment: "out", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "pack", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "pot", values?: undefined): string;
    encodeFunctionData(functionFragment: "rely", values: [string]): string;
    encodeFunctionData(functionFragment: "skim", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "skip", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "snip", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "spot", values?: undefined): string;
    encodeFunctionData(functionFragment: "tag", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "thaw", values?: undefined): string;
    encodeFunctionData(functionFragment: "vat", values?: undefined): string;
    encodeFunctionData(functionFragment: "vow", values?: undefined): string;
    encodeFunctionData(functionFragment: "wait", values?: undefined): string;
    encodeFunctionData(functionFragment: "wards", values: [string]): string;
    encodeFunctionData(functionFragment: "when", values?: undefined): string;
    decodeFunctionResult(functionFragment: "Art", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bag", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cat", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "debt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deny", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "dog", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "file", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fix", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "flow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "free", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "live", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "out", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pack", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pot", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rely", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "skim", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "skip", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "snip", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "spot", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tag", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "thaw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "vat", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "vow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "wait", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "wards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "when", data: BytesLike): Result;
    events: {
        "Cage()": EventFragment;
        "Cash(bytes32,address,uint256)": EventFragment;
        "Deny(address)": EventFragment;
        "File(bytes32,uint256)": EventFragment;
        "Flow(bytes32)": EventFragment;
        "Free(bytes32,address,uint256)": EventFragment;
        "Pack(address,uint256)": EventFragment;
        "Rely(address)": EventFragment;
        "Skim(bytes32,address,uint256,uint256)": EventFragment;
        "Skip(bytes32,uint256,address,uint256,uint256,uint256)": EventFragment;
        "Snip(bytes32,uint256,address,uint256,uint256,uint256)": EventFragment;
        "Thaw()": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Cage"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Cash"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Deny"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "File"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Flow"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Free"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Pack"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Rely"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Skim"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Skip"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Snip"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Thaw"): EventFragment;
}
export declare type Cage__Event = TypedEvent<[], {}>;
export declare type Cage__EventFilter = TypedEventFilter<Cage__Event>;
export declare type Cage_bytes32_Event = TypedEvent<[string], {
    ilk: string;
}>;
export declare type Cage_bytes32_EventFilter = TypedEventFilter<Cage_bytes32_Event>;
export declare type CashEvent = TypedEvent<[
    string,
    string,
    BigNumber
], {
    ilk: string;
    usr: string;
    wad: BigNumber;
}>;
export declare type CashEventFilter = TypedEventFilter<CashEvent>;
export declare type DenyEvent = TypedEvent<[string], {
    usr: string;
}>;
export declare type DenyEventFilter = TypedEventFilter<DenyEvent>;
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
export declare type FlowEvent = TypedEvent<[string], {
    ilk: string;
}>;
export declare type FlowEventFilter = TypedEventFilter<FlowEvent>;
export declare type FreeEvent = TypedEvent<[
    string,
    string,
    BigNumber
], {
    ilk: string;
    usr: string;
    ink: BigNumber;
}>;
export declare type FreeEventFilter = TypedEventFilter<FreeEvent>;
export declare type PackEvent = TypedEvent<[
    string,
    BigNumber
], {
    usr: string;
    wad: BigNumber;
}>;
export declare type PackEventFilter = TypedEventFilter<PackEvent>;
export declare type RelyEvent = TypedEvent<[string], {
    usr: string;
}>;
export declare type RelyEventFilter = TypedEventFilter<RelyEvent>;
export declare type SkimEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber
], {
    ilk: string;
    urn: string;
    wad: BigNumber;
    art: BigNumber;
}>;
export declare type SkimEventFilter = TypedEventFilter<SkimEvent>;
export declare type SkipEvent = TypedEvent<[
    string,
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    BigNumber
], {
    ilk: string;
    id: BigNumber;
    usr: string;
    tab: BigNumber;
    lot: BigNumber;
    art: BigNumber;
}>;
export declare type SkipEventFilter = TypedEventFilter<SkipEvent>;
export declare type SnipEvent = TypedEvent<[
    string,
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    BigNumber
], {
    ilk: string;
    id: BigNumber;
    usr: string;
    tab: BigNumber;
    lot: BigNumber;
    art: BigNumber;
}>;
export declare type SnipEventFilter = TypedEventFilter<SnipEvent>;
export declare type ThawEvent = TypedEvent<[], {}>;
export declare type ThawEventFilter = TypedEventFilter<ThawEvent>;
export interface End extends BaseContract {
    contractName: "End";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: EndInterface;
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
        Art(arg0: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;
        bag(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        "cage()"(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "cage(bytes32)"(ilk: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        cash(ilk: BytesLike, wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        cat(overrides?: CallOverrides): Promise<[string]>;
        debt(overrides?: CallOverrides): Promise<[BigNumber]>;
        deny(usr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        dog(overrides?: CallOverrides): Promise<[string]>;
        "file(bytes32,uint256)"(what: BytesLike, data: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "file(bytes32,address)"(what: BytesLike, data: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        fix(arg0: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;
        flow(ilk: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        free(ilk: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        gap(arg0: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;
        live(overrides?: CallOverrides): Promise<[BigNumber]>;
        out(arg0: BytesLike, arg1: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        pack(wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        pot(overrides?: CallOverrides): Promise<[string]>;
        rely(usr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        skim(ilk: BytesLike, urn: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        skip(ilk: BytesLike, id: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        snip(ilk: BytesLike, id: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        spot(overrides?: CallOverrides): Promise<[string]>;
        tag(arg0: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;
        thaw(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        vat(overrides?: CallOverrides): Promise<[string]>;
        vow(overrides?: CallOverrides): Promise<[string]>;
        wait(overrides?: CallOverrides): Promise<[BigNumber]>;
        wards(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        when(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    Art(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    bag(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    "cage()"(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "cage(bytes32)"(ilk: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    cash(ilk: BytesLike, wad: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    cat(overrides?: CallOverrides): Promise<string>;
    debt(overrides?: CallOverrides): Promise<BigNumber>;
    deny(usr: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    dog(overrides?: CallOverrides): Promise<string>;
    "file(bytes32,uint256)"(what: BytesLike, data: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "file(bytes32,address)"(what: BytesLike, data: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    fix(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    flow(ilk: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    free(ilk: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    gap(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    live(overrides?: CallOverrides): Promise<BigNumber>;
    out(arg0: BytesLike, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
    pack(wad: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    pot(overrides?: CallOverrides): Promise<string>;
    rely(usr: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    skim(ilk: BytesLike, urn: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    skip(ilk: BytesLike, id: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    snip(ilk: BytesLike, id: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    spot(overrides?: CallOverrides): Promise<string>;
    tag(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    thaw(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    vat(overrides?: CallOverrides): Promise<string>;
    vow(overrides?: CallOverrides): Promise<string>;
    wait(overrides?: CallOverrides): Promise<BigNumber>;
    wards(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    when(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        Art(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        bag(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        "cage()"(overrides?: CallOverrides): Promise<void>;
        "cage(bytes32)"(ilk: BytesLike, overrides?: CallOverrides): Promise<void>;
        cash(ilk: BytesLike, wad: BigNumberish, overrides?: CallOverrides): Promise<void>;
        cat(overrides?: CallOverrides): Promise<string>;
        debt(overrides?: CallOverrides): Promise<BigNumber>;
        deny(usr: string, overrides?: CallOverrides): Promise<void>;
        dog(overrides?: CallOverrides): Promise<string>;
        "file(bytes32,uint256)"(what: BytesLike, data: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "file(bytes32,address)"(what: BytesLike, data: string, overrides?: CallOverrides): Promise<void>;
        fix(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        flow(ilk: BytesLike, overrides?: CallOverrides): Promise<void>;
        free(ilk: BytesLike, overrides?: CallOverrides): Promise<void>;
        gap(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        live(overrides?: CallOverrides): Promise<BigNumber>;
        out(arg0: BytesLike, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
        pack(wad: BigNumberish, overrides?: CallOverrides): Promise<void>;
        pot(overrides?: CallOverrides): Promise<string>;
        rely(usr: string, overrides?: CallOverrides): Promise<void>;
        skim(ilk: BytesLike, urn: string, overrides?: CallOverrides): Promise<void>;
        skip(ilk: BytesLike, id: BigNumberish, overrides?: CallOverrides): Promise<void>;
        snip(ilk: BytesLike, id: BigNumberish, overrides?: CallOverrides): Promise<void>;
        spot(overrides?: CallOverrides): Promise<string>;
        tag(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        thaw(overrides?: CallOverrides): Promise<void>;
        vat(overrides?: CallOverrides): Promise<string>;
        vow(overrides?: CallOverrides): Promise<string>;
        wait(overrides?: CallOverrides): Promise<BigNumber>;
        wards(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        when(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "Cage()"(): Cage__EventFilter;
        "Cage(bytes32)"(ilk?: BytesLike | null): Cage_bytes32_EventFilter;
        "Cash(bytes32,address,uint256)"(ilk?: BytesLike | null, usr?: string | null, wad?: null): CashEventFilter;
        Cash(ilk?: BytesLike | null, usr?: string | null, wad?: null): CashEventFilter;
        "Deny(address)"(usr?: string | null): DenyEventFilter;
        Deny(usr?: string | null): DenyEventFilter;
        "File(bytes32,uint256)"(what?: BytesLike | null, data?: null): File_bytes32_uint256_EventFilter;
        "File(bytes32,address)"(what?: BytesLike | null, data?: null): File_bytes32_address_EventFilter;
        "Flow(bytes32)"(ilk?: BytesLike | null): FlowEventFilter;
        Flow(ilk?: BytesLike | null): FlowEventFilter;
        "Free(bytes32,address,uint256)"(ilk?: BytesLike | null, usr?: string | null, ink?: null): FreeEventFilter;
        Free(ilk?: BytesLike | null, usr?: string | null, ink?: null): FreeEventFilter;
        "Pack(address,uint256)"(usr?: string | null, wad?: null): PackEventFilter;
        Pack(usr?: string | null, wad?: null): PackEventFilter;
        "Rely(address)"(usr?: string | null): RelyEventFilter;
        Rely(usr?: string | null): RelyEventFilter;
        "Skim(bytes32,address,uint256,uint256)"(ilk?: BytesLike | null, urn?: string | null, wad?: null, art?: null): SkimEventFilter;
        Skim(ilk?: BytesLike | null, urn?: string | null, wad?: null, art?: null): SkimEventFilter;
        "Skip(bytes32,uint256,address,uint256,uint256,uint256)"(ilk?: BytesLike | null, id?: BigNumberish | null, usr?: string | null, tab?: null, lot?: null, art?: null): SkipEventFilter;
        Skip(ilk?: BytesLike | null, id?: BigNumberish | null, usr?: string | null, tab?: null, lot?: null, art?: null): SkipEventFilter;
        "Snip(bytes32,uint256,address,uint256,uint256,uint256)"(ilk?: BytesLike | null, id?: BigNumberish | null, usr?: string | null, tab?: null, lot?: null, art?: null): SnipEventFilter;
        Snip(ilk?: BytesLike | null, id?: BigNumberish | null, usr?: string | null, tab?: null, lot?: null, art?: null): SnipEventFilter;
        "Thaw()"(): ThawEventFilter;
        Thaw(): ThawEventFilter;
    };
    estimateGas: {
        Art(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        bag(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        "cage()"(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "cage(bytes32)"(ilk: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        cash(ilk: BytesLike, wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        cat(overrides?: CallOverrides): Promise<BigNumber>;
        debt(overrides?: CallOverrides): Promise<BigNumber>;
        deny(usr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        dog(overrides?: CallOverrides): Promise<BigNumber>;
        "file(bytes32,uint256)"(what: BytesLike, data: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "file(bytes32,address)"(what: BytesLike, data: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        fix(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        flow(ilk: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        free(ilk: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        gap(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        live(overrides?: CallOverrides): Promise<BigNumber>;
        out(arg0: BytesLike, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
        pack(wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        pot(overrides?: CallOverrides): Promise<BigNumber>;
        rely(usr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        skim(ilk: BytesLike, urn: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        skip(ilk: BytesLike, id: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        snip(ilk: BytesLike, id: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        spot(overrides?: CallOverrides): Promise<BigNumber>;
        tag(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        thaw(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        vat(overrides?: CallOverrides): Promise<BigNumber>;
        vow(overrides?: CallOverrides): Promise<BigNumber>;
        wait(overrides?: CallOverrides): Promise<BigNumber>;
        wards(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        when(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        Art(arg0: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        bag(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "cage()"(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "cage(bytes32)"(ilk: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        cash(ilk: BytesLike, wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        cat(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        debt(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deny(usr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        dog(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "file(bytes32,uint256)"(what: BytesLike, data: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "file(bytes32,address)"(what: BytesLike, data: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        fix(arg0: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        flow(ilk: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        free(ilk: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        gap(arg0: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        live(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        out(arg0: BytesLike, arg1: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pack(wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        pot(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rely(usr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        skim(ilk: BytesLike, urn: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        skip(ilk: BytesLike, id: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        snip(ilk: BytesLike, id: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        spot(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tag(arg0: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        thaw(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        vat(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        vow(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        wait(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        wards(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        when(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
