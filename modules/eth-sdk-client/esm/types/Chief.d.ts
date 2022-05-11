import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ChiefInterface extends utils.Interface {
    contractName: "Chief";
    functions: {
        "GOV()": FunctionFragment;
        "IOU()": FunctionFragment;
        "MAX_YAYS()": FunctionFragment;
        "approvals(address)": FunctionFragment;
        "authority()": FunctionFragment;
        "canCall(address,address,bytes4)": FunctionFragment;
        "deposits(address)": FunctionFragment;
        "etch(address[])": FunctionFragment;
        "free(uint256)": FunctionFragment;
        "getCapabilityRoles(address,bytes4)": FunctionFragment;
        "getUserRoles(address)": FunctionFragment;
        "hasUserRole(address,uint8)": FunctionFragment;
        "hat()": FunctionFragment;
        "isCapabilityPublic(address,bytes4)": FunctionFragment;
        "isUserRoot(address)": FunctionFragment;
        "last(address)": FunctionFragment;
        "launch()": FunctionFragment;
        "lift(address)": FunctionFragment;
        "live()": FunctionFragment;
        "lock(uint256)": FunctionFragment;
        "owner()": FunctionFragment;
        "setAuthority(address)": FunctionFragment;
        "setOwner(address)": FunctionFragment;
        "setPublicCapability(address,bytes4,bool)": FunctionFragment;
        "setRoleCapability(uint8,address,bytes4,bool)": FunctionFragment;
        "setRootUser(address,bool)": FunctionFragment;
        "setUserRole(address,uint8,bool)": FunctionFragment;
        "slates(bytes32,uint256)": FunctionFragment;
        "vote(bytes32)": FunctionFragment;
        "votes(address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "GOV", values?: undefined): string;
    encodeFunctionData(functionFragment: "IOU", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_YAYS", values?: undefined): string;
    encodeFunctionData(functionFragment: "approvals", values: [string]): string;
    encodeFunctionData(functionFragment: "authority", values?: undefined): string;
    encodeFunctionData(functionFragment: "canCall", values: [string, string, BytesLike]): string;
    encodeFunctionData(functionFragment: "deposits", values: [string]): string;
    encodeFunctionData(functionFragment: "etch", values: [string[]]): string;
    encodeFunctionData(functionFragment: "free", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getCapabilityRoles", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "getUserRoles", values: [string]): string;
    encodeFunctionData(functionFragment: "hasUserRole", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "hat", values?: undefined): string;
    encodeFunctionData(functionFragment: "isCapabilityPublic", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "isUserRoot", values: [string]): string;
    encodeFunctionData(functionFragment: "last", values: [string]): string;
    encodeFunctionData(functionFragment: "launch", values?: undefined): string;
    encodeFunctionData(functionFragment: "lift", values: [string]): string;
    encodeFunctionData(functionFragment: "live", values?: undefined): string;
    encodeFunctionData(functionFragment: "lock", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "setAuthority", values: [string]): string;
    encodeFunctionData(functionFragment: "setOwner", values: [string]): string;
    encodeFunctionData(functionFragment: "setPublicCapability", values: [string, BytesLike, boolean]): string;
    encodeFunctionData(functionFragment: "setRoleCapability", values: [BigNumberish, string, BytesLike, boolean]): string;
    encodeFunctionData(functionFragment: "setRootUser", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "setUserRole", values: [string, BigNumberish, boolean]): string;
    encodeFunctionData(functionFragment: "slates", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "vote", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "votes", values: [string]): string;
    decodeFunctionResult(functionFragment: "GOV", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "IOU", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_YAYS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approvals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "authority", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "canCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposits", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "etch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "free", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCapabilityRoles", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUserRoles", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasUserRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hat", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isCapabilityPublic", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isUserRoot", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "last", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "launch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lift", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "live", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAuthority", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPublicCapability", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setRoleCapability", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setRootUser", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setUserRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "slates", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "vote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "votes", data: BytesLike): Result;
    events: {
        "Etch(bytes32)": EventFragment;
        "LogNote(bytes4,address,bytes32,bytes32,uint256,bytes)": EventFragment;
        "LogSetAuthority(address)": EventFragment;
        "LogSetOwner(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Etch"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogNote"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogSetAuthority"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogSetOwner"): EventFragment;
}
export declare type EtchEvent = TypedEvent<[string], {
    slate: string;
}>;
export declare type EtchEventFilter = TypedEventFilter<EtchEvent>;
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
export interface Chief extends BaseContract {
    contractName: "Chief";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ChiefInterface;
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
        GOV(overrides?: CallOverrides): Promise<[string]>;
        IOU(overrides?: CallOverrides): Promise<[string]>;
        MAX_YAYS(overrides?: CallOverrides): Promise<[BigNumber]>;
        approvals(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        authority(overrides?: CallOverrides): Promise<[string]>;
        canCall(caller: string, code: string, sig: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        deposits(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        etch(yays: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        free(wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getCapabilityRoles(code: string, sig: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        getUserRoles(who: string, overrides?: CallOverrides): Promise<[string]>;
        hasUserRole(who: string, role: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        hat(overrides?: CallOverrides): Promise<[string]>;
        isCapabilityPublic(code: string, sig: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        isUserRoot(who: string, overrides?: CallOverrides): Promise<[boolean]>;
        last(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        launch(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        lift(whom: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        live(overrides?: CallOverrides): Promise<[boolean]>;
        lock(wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        setAuthority(authority_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setOwner(owner_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setPublicCapability(code: string, sig: BytesLike, enabled: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setRoleCapability(role: BigNumberish, code: string, sig: BytesLike, enabled: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setRootUser(who: string, enabled: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setUserRole(who: string, role: BigNumberish, enabled: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        slates(arg0: BytesLike, arg1: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        "vote(bytes32)"(slate: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "vote(address[])"(yays: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        votes(arg0: string, overrides?: CallOverrides): Promise<[string]>;
    };
    GOV(overrides?: CallOverrides): Promise<string>;
    IOU(overrides?: CallOverrides): Promise<string>;
    MAX_YAYS(overrides?: CallOverrides): Promise<BigNumber>;
    approvals(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    authority(overrides?: CallOverrides): Promise<string>;
    canCall(caller: string, code: string, sig: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    deposits(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    etch(yays: string[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    free(wad: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getCapabilityRoles(code: string, sig: BytesLike, overrides?: CallOverrides): Promise<string>;
    getUserRoles(who: string, overrides?: CallOverrides): Promise<string>;
    hasUserRole(who: string, role: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    hat(overrides?: CallOverrides): Promise<string>;
    isCapabilityPublic(code: string, sig: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    isUserRoot(who: string, overrides?: CallOverrides): Promise<boolean>;
    last(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    launch(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    lift(whom: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    live(overrides?: CallOverrides): Promise<boolean>;
    lock(wad: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    setAuthority(authority_: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setOwner(owner_: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setPublicCapability(code: string, sig: BytesLike, enabled: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setRoleCapability(role: BigNumberish, code: string, sig: BytesLike, enabled: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setRootUser(who: string, enabled: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setUserRole(who: string, role: BigNumberish, enabled: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    slates(arg0: BytesLike, arg1: BigNumberish, overrides?: CallOverrides): Promise<string>;
    "vote(bytes32)"(slate: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "vote(address[])"(yays: string[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    votes(arg0: string, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        GOV(overrides?: CallOverrides): Promise<string>;
        IOU(overrides?: CallOverrides): Promise<string>;
        MAX_YAYS(overrides?: CallOverrides): Promise<BigNumber>;
        approvals(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        authority(overrides?: CallOverrides): Promise<string>;
        canCall(caller: string, code: string, sig: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        deposits(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        etch(yays: string[], overrides?: CallOverrides): Promise<string>;
        free(wad: BigNumberish, overrides?: CallOverrides): Promise<void>;
        getCapabilityRoles(code: string, sig: BytesLike, overrides?: CallOverrides): Promise<string>;
        getUserRoles(who: string, overrides?: CallOverrides): Promise<string>;
        hasUserRole(who: string, role: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        hat(overrides?: CallOverrides): Promise<string>;
        isCapabilityPublic(code: string, sig: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        isUserRoot(who: string, overrides?: CallOverrides): Promise<boolean>;
        last(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        launch(overrides?: CallOverrides): Promise<void>;
        lift(whom: string, overrides?: CallOverrides): Promise<void>;
        live(overrides?: CallOverrides): Promise<boolean>;
        lock(wad: BigNumberish, overrides?: CallOverrides): Promise<void>;
        owner(overrides?: CallOverrides): Promise<string>;
        setAuthority(authority_: string, overrides?: CallOverrides): Promise<void>;
        setOwner(owner_: string, overrides?: CallOverrides): Promise<void>;
        setPublicCapability(code: string, sig: BytesLike, enabled: boolean, overrides?: CallOverrides): Promise<void>;
        setRoleCapability(role: BigNumberish, code: string, sig: BytesLike, enabled: boolean, overrides?: CallOverrides): Promise<void>;
        setRootUser(who: string, enabled: boolean, overrides?: CallOverrides): Promise<void>;
        setUserRole(who: string, role: BigNumberish, enabled: boolean, overrides?: CallOverrides): Promise<void>;
        slates(arg0: BytesLike, arg1: BigNumberish, overrides?: CallOverrides): Promise<string>;
        "vote(bytes32)"(slate: BytesLike, overrides?: CallOverrides): Promise<void>;
        "vote(address[])"(yays: string[], overrides?: CallOverrides): Promise<string>;
        votes(arg0: string, overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "Etch(bytes32)"(slate?: BytesLike | null): EtchEventFilter;
        Etch(slate?: BytesLike | null): EtchEventFilter;
        "LogNote(bytes4,address,bytes32,bytes32,uint256,bytes)"(sig?: BytesLike | null, guy?: string | null, foo?: BytesLike | null, bar?: BytesLike | null, wad?: null, fax?: null): LogNoteEventFilter;
        LogNote(sig?: BytesLike | null, guy?: string | null, foo?: BytesLike | null, bar?: BytesLike | null, wad?: null, fax?: null): LogNoteEventFilter;
        "LogSetAuthority(address)"(authority?: string | null): LogSetAuthorityEventFilter;
        LogSetAuthority(authority?: string | null): LogSetAuthorityEventFilter;
        "LogSetOwner(address)"(owner?: string | null): LogSetOwnerEventFilter;
        LogSetOwner(owner?: string | null): LogSetOwnerEventFilter;
    };
    estimateGas: {
        GOV(overrides?: CallOverrides): Promise<BigNumber>;
        IOU(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_YAYS(overrides?: CallOverrides): Promise<BigNumber>;
        approvals(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        authority(overrides?: CallOverrides): Promise<BigNumber>;
        canCall(caller: string, code: string, sig: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        deposits(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        etch(yays: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        free(wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getCapabilityRoles(code: string, sig: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getUserRoles(who: string, overrides?: CallOverrides): Promise<BigNumber>;
        hasUserRole(who: string, role: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        hat(overrides?: CallOverrides): Promise<BigNumber>;
        isCapabilityPublic(code: string, sig: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        isUserRoot(who: string, overrides?: CallOverrides): Promise<BigNumber>;
        last(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        launch(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        lift(whom: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        live(overrides?: CallOverrides): Promise<BigNumber>;
        lock(wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        setAuthority(authority_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setOwner(owner_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setPublicCapability(code: string, sig: BytesLike, enabled: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setRoleCapability(role: BigNumberish, code: string, sig: BytesLike, enabled: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setRootUser(who: string, enabled: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setUserRole(who: string, role: BigNumberish, enabled: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        slates(arg0: BytesLike, arg1: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "vote(bytes32)"(slate: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "vote(address[])"(yays: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        votes(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        GOV(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        IOU(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAX_YAYS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approvals(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        authority(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        canCall(caller: string, code: string, sig: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deposits(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        etch(yays: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        free(wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getCapabilityRoles(code: string, sig: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUserRoles(who: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        hasUserRole(who: string, role: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        hat(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isCapabilityPublic(code: string, sig: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isUserRoot(who: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        last(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        launch(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        lift(whom: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        live(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lock(wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setAuthority(authority_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setOwner(owner_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setPublicCapability(code: string, sig: BytesLike, enabled: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setRoleCapability(role: BigNumberish, code: string, sig: BytesLike, enabled: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setRootUser(who: string, enabled: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setUserRole(who: string, role: BigNumberish, enabled: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        slates(arg0: BytesLike, arg1: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "vote(bytes32)"(slate: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "vote(address[])"(yays: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        votes(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
