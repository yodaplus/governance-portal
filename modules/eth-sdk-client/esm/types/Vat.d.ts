import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface VatInterface extends utils.Interface {
    contractName: "Vat";
    functions: {
        "Line()": FunctionFragment;
        "cage()": FunctionFragment;
        "can(address,address)": FunctionFragment;
        "dai(address)": FunctionFragment;
        "debt()": FunctionFragment;
        "deny(address)": FunctionFragment;
        "file(bytes32,bytes32,uint256)": FunctionFragment;
        "flux(bytes32,address,address,uint256)": FunctionFragment;
        "fold(bytes32,address,int256)": FunctionFragment;
        "fork(bytes32,address,address,int256,int256)": FunctionFragment;
        "frob(bytes32,address,address,address,int256,int256)": FunctionFragment;
        "gem(bytes32,address)": FunctionFragment;
        "grab(bytes32,address,address,address,int256,int256)": FunctionFragment;
        "heal(uint256)": FunctionFragment;
        "hope(address)": FunctionFragment;
        "ilks(bytes32)": FunctionFragment;
        "init(bytes32)": FunctionFragment;
        "live()": FunctionFragment;
        "move(address,address,uint256)": FunctionFragment;
        "nope(address)": FunctionFragment;
        "rely(address)": FunctionFragment;
        "sin(address)": FunctionFragment;
        "slip(bytes32,address,int256)": FunctionFragment;
        "suck(address,address,uint256)": FunctionFragment;
        "urns(bytes32,address)": FunctionFragment;
        "vice()": FunctionFragment;
        "wards(address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "Line", values?: undefined): string;
    encodeFunctionData(functionFragment: "cage", values?: undefined): string;
    encodeFunctionData(functionFragment: "can", values: [string, string]): string;
    encodeFunctionData(functionFragment: "dai", values: [string]): string;
    encodeFunctionData(functionFragment: "debt", values?: undefined): string;
    encodeFunctionData(functionFragment: "deny", values: [string]): string;
    encodeFunctionData(functionFragment: "file", values: [BytesLike, BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "flux", values: [BytesLike, string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "fold", values: [BytesLike, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "fork", values: [BytesLike, string, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "frob", values: [BytesLike, string, string, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "gem", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "grab", values: [BytesLike, string, string, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "heal", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "hope", values: [string]): string;
    encodeFunctionData(functionFragment: "ilks", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "init", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "live", values?: undefined): string;
    encodeFunctionData(functionFragment: "move", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "nope", values: [string]): string;
    encodeFunctionData(functionFragment: "rely", values: [string]): string;
    encodeFunctionData(functionFragment: "sin", values: [string]): string;
    encodeFunctionData(functionFragment: "slip", values: [BytesLike, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "suck", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "urns", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "vice", values?: undefined): string;
    encodeFunctionData(functionFragment: "wards", values: [string]): string;
    decodeFunctionResult(functionFragment: "Line", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "can", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "dai", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "debt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deny", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "file", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "flux", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fold", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fork", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "frob", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gem", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grab", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "heal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hope", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ilks", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "init", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "live", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "move", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nope", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rely", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "slip", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "suck", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "urns", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "vice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "wards", data: BytesLike): Result;
    events: {
        "LogNote(bytes4,bytes32,bytes32,bytes32,bytes)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "LogNote"): EventFragment;
}
export declare type LogNoteEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    string
], {
    sig: string;
    arg1: string;
    arg2: string;
    arg3: string;
    data: string;
}>;
export declare type LogNoteEventFilter = TypedEventFilter<LogNoteEvent>;
export interface Vat extends BaseContract {
    contractName: "Vat";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: VatInterface;
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
        Line(overrides?: CallOverrides): Promise<[BigNumber]>;
        cage(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        can(arg0: string, arg1: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        dai(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        debt(overrides?: CallOverrides): Promise<[BigNumber]>;
        deny(usr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "file(bytes32,bytes32,uint256)"(ilk: BytesLike, what: BytesLike, data: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "file(bytes32,uint256)"(what: BytesLike, data: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        flux(ilk: BytesLike, src: string, dst: string, wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        fold(i: BytesLike, u: string, rate: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        fork(ilk: BytesLike, src: string, dst: string, dink: BigNumberish, dart: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        frob(i: BytesLike, u: string, v: string, w: string, dink: BigNumberish, dart: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        gem(arg0: BytesLike, arg1: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        grab(i: BytesLike, u: string, v: string, w: string, dink: BigNumberish, dart: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        heal(rad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        hope(usr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        ilks(arg0: BytesLike, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            Art: BigNumber;
            rate: BigNumber;
            spot: BigNumber;
            line: BigNumber;
            dust: BigNumber;
        }>;
        init(ilk: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        live(overrides?: CallOverrides): Promise<[BigNumber]>;
        move(src: string, dst: string, rad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        nope(usr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        rely(usr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        sin(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        slip(ilk: BytesLike, usr: string, wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        suck(u: string, v: string, rad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        urns(arg0: BytesLike, arg1: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber] & {
            ink: BigNumber;
            art: BigNumber;
        }>;
        vice(overrides?: CallOverrides): Promise<[BigNumber]>;
        wards(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    Line(overrides?: CallOverrides): Promise<BigNumber>;
    cage(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    can(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
    dai(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    debt(overrides?: CallOverrides): Promise<BigNumber>;
    deny(usr: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "file(bytes32,bytes32,uint256)"(ilk: BytesLike, what: BytesLike, data: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "file(bytes32,uint256)"(what: BytesLike, data: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    flux(ilk: BytesLike, src: string, dst: string, wad: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    fold(i: BytesLike, u: string, rate: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    fork(ilk: BytesLike, src: string, dst: string, dink: BigNumberish, dart: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    frob(i: BytesLike, u: string, v: string, w: string, dink: BigNumberish, dart: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    gem(arg0: BytesLike, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
    grab(i: BytesLike, u: string, v: string, w: string, dink: BigNumberish, dart: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    heal(rad: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    hope(usr: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    ilks(arg0: BytesLike, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        Art: BigNumber;
        rate: BigNumber;
        spot: BigNumber;
        line: BigNumber;
        dust: BigNumber;
    }>;
    init(ilk: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    live(overrides?: CallOverrides): Promise<BigNumber>;
    move(src: string, dst: string, rad: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    nope(usr: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    rely(usr: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    sin(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    slip(ilk: BytesLike, usr: string, wad: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    suck(u: string, v: string, rad: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    urns(arg0: BytesLike, arg1: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber] & {
        ink: BigNumber;
        art: BigNumber;
    }>;
    vice(overrides?: CallOverrides): Promise<BigNumber>;
    wards(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        Line(overrides?: CallOverrides): Promise<BigNumber>;
        cage(overrides?: CallOverrides): Promise<void>;
        can(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
        dai(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        debt(overrides?: CallOverrides): Promise<BigNumber>;
        deny(usr: string, overrides?: CallOverrides): Promise<void>;
        "file(bytes32,bytes32,uint256)"(ilk: BytesLike, what: BytesLike, data: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "file(bytes32,uint256)"(what: BytesLike, data: BigNumberish, overrides?: CallOverrides): Promise<void>;
        flux(ilk: BytesLike, src: string, dst: string, wad: BigNumberish, overrides?: CallOverrides): Promise<void>;
        fold(i: BytesLike, u: string, rate: BigNumberish, overrides?: CallOverrides): Promise<void>;
        fork(ilk: BytesLike, src: string, dst: string, dink: BigNumberish, dart: BigNumberish, overrides?: CallOverrides): Promise<void>;
        frob(i: BytesLike, u: string, v: string, w: string, dink: BigNumberish, dart: BigNumberish, overrides?: CallOverrides): Promise<void>;
        gem(arg0: BytesLike, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
        grab(i: BytesLike, u: string, v: string, w: string, dink: BigNumberish, dart: BigNumberish, overrides?: CallOverrides): Promise<void>;
        heal(rad: BigNumberish, overrides?: CallOverrides): Promise<void>;
        hope(usr: string, overrides?: CallOverrides): Promise<void>;
        ilks(arg0: BytesLike, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            Art: BigNumber;
            rate: BigNumber;
            spot: BigNumber;
            line: BigNumber;
            dust: BigNumber;
        }>;
        init(ilk: BytesLike, overrides?: CallOverrides): Promise<void>;
        live(overrides?: CallOverrides): Promise<BigNumber>;
        move(src: string, dst: string, rad: BigNumberish, overrides?: CallOverrides): Promise<void>;
        nope(usr: string, overrides?: CallOverrides): Promise<void>;
        rely(usr: string, overrides?: CallOverrides): Promise<void>;
        sin(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        slip(ilk: BytesLike, usr: string, wad: BigNumberish, overrides?: CallOverrides): Promise<void>;
        suck(u: string, v: string, rad: BigNumberish, overrides?: CallOverrides): Promise<void>;
        urns(arg0: BytesLike, arg1: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber] & {
            ink: BigNumber;
            art: BigNumber;
        }>;
        vice(overrides?: CallOverrides): Promise<BigNumber>;
        wards(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "LogNote(bytes4,bytes32,bytes32,bytes32,bytes)"(sig?: BytesLike | null, arg1?: BytesLike | null, arg2?: BytesLike | null, arg3?: BytesLike | null, data?: null): LogNoteEventFilter;
        LogNote(sig?: BytesLike | null, arg1?: BytesLike | null, arg2?: BytesLike | null, arg3?: BytesLike | null, data?: null): LogNoteEventFilter;
    };
    estimateGas: {
        Line(overrides?: CallOverrides): Promise<BigNumber>;
        cage(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        can(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
        dai(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        debt(overrides?: CallOverrides): Promise<BigNumber>;
        deny(usr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "file(bytes32,bytes32,uint256)"(ilk: BytesLike, what: BytesLike, data: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "file(bytes32,uint256)"(what: BytesLike, data: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        flux(ilk: BytesLike, src: string, dst: string, wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        fold(i: BytesLike, u: string, rate: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        fork(ilk: BytesLike, src: string, dst: string, dink: BigNumberish, dart: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        frob(i: BytesLike, u: string, v: string, w: string, dink: BigNumberish, dart: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        gem(arg0: BytesLike, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
        grab(i: BytesLike, u: string, v: string, w: string, dink: BigNumberish, dart: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        heal(rad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        hope(usr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        ilks(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        init(ilk: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        live(overrides?: CallOverrides): Promise<BigNumber>;
        move(src: string, dst: string, rad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        nope(usr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        rely(usr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        sin(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        slip(ilk: BytesLike, usr: string, wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        suck(u: string, v: string, rad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        urns(arg0: BytesLike, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
        vice(overrides?: CallOverrides): Promise<BigNumber>;
        wards(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        Line(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        cage(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        can(arg0: string, arg1: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        dai(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        debt(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deny(usr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "file(bytes32,bytes32,uint256)"(ilk: BytesLike, what: BytesLike, data: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "file(bytes32,uint256)"(what: BytesLike, data: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        flux(ilk: BytesLike, src: string, dst: string, wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        fold(i: BytesLike, u: string, rate: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        fork(ilk: BytesLike, src: string, dst: string, dink: BigNumberish, dart: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        frob(i: BytesLike, u: string, v: string, w: string, dink: BigNumberish, dart: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        gem(arg0: BytesLike, arg1: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        grab(i: BytesLike, u: string, v: string, w: string, dink: BigNumberish, dart: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        heal(rad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        hope(usr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        ilks(arg0: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        init(ilk: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        live(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        move(src: string, dst: string, rad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        nope(usr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        rely(usr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        sin(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        slip(ilk: BytesLike, usr: string, wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        suck(u: string, v: string, rad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        urns(arg0: BytesLike, arg1: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        vice(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        wards(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
