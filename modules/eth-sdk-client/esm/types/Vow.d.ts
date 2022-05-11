import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface VowInterface extends utils.Interface {
    contractName: "Vow";
    functions: {
        "Ash()": FunctionFragment;
        "Sin()": FunctionFragment;
        "bump()": FunctionFragment;
        "cage()": FunctionFragment;
        "deny(address)": FunctionFragment;
        "dump()": FunctionFragment;
        "fess(uint256)": FunctionFragment;
        "file(bytes32,uint256)": FunctionFragment;
        "flap()": FunctionFragment;
        "flapper()": FunctionFragment;
        "flog(uint256)": FunctionFragment;
        "flop()": FunctionFragment;
        "flopper()": FunctionFragment;
        "heal(uint256)": FunctionFragment;
        "hump()": FunctionFragment;
        "kiss(uint256)": FunctionFragment;
        "live()": FunctionFragment;
        "rely(address)": FunctionFragment;
        "sin(uint256)": FunctionFragment;
        "sump()": FunctionFragment;
        "vat()": FunctionFragment;
        "wait()": FunctionFragment;
        "wards(address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "Ash", values?: undefined): string;
    encodeFunctionData(functionFragment: "Sin", values?: undefined): string;
    encodeFunctionData(functionFragment: "bump", values?: undefined): string;
    encodeFunctionData(functionFragment: "cage", values?: undefined): string;
    encodeFunctionData(functionFragment: "deny", values: [string]): string;
    encodeFunctionData(functionFragment: "dump", values?: undefined): string;
    encodeFunctionData(functionFragment: "fess", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "file", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "flap", values?: undefined): string;
    encodeFunctionData(functionFragment: "flapper", values?: undefined): string;
    encodeFunctionData(functionFragment: "flog", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "flop", values?: undefined): string;
    encodeFunctionData(functionFragment: "flopper", values?: undefined): string;
    encodeFunctionData(functionFragment: "heal", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "hump", values?: undefined): string;
    encodeFunctionData(functionFragment: "kiss", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "live", values?: undefined): string;
    encodeFunctionData(functionFragment: "rely", values: [string]): string;
    encodeFunctionData(functionFragment: "sin", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "sump", values?: undefined): string;
    encodeFunctionData(functionFragment: "vat", values?: undefined): string;
    encodeFunctionData(functionFragment: "wait", values?: undefined): string;
    encodeFunctionData(functionFragment: "wards", values: [string]): string;
    decodeFunctionResult(functionFragment: "Ash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "Sin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bump", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deny", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "dump", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fess", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "file", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "flap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "flapper", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "flog", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "flop", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "flopper", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "heal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hump", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "kiss", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "live", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rely", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sump", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "vat", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "wait", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "wards", data: BytesLike): Result;
    events: {
        "LogNote(bytes4,address,bytes32,bytes32,bytes)": EventFragment;
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
    usr: string;
    arg1: string;
    arg2: string;
    data: string;
}>;
export declare type LogNoteEventFilter = TypedEventFilter<LogNoteEvent>;
export interface Vow extends BaseContract {
    contractName: "Vow";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: VowInterface;
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
        Ash(overrides?: CallOverrides): Promise<[BigNumber]>;
        Sin(overrides?: CallOverrides): Promise<[BigNumber]>;
        bump(overrides?: CallOverrides): Promise<[BigNumber]>;
        cage(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        deny(usr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        dump(overrides?: CallOverrides): Promise<[BigNumber]>;
        fess(tab: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "file(bytes32,uint256)"(what: BytesLike, data: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "file(bytes32,address)"(what: BytesLike, data: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        flap(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        flapper(overrides?: CallOverrides): Promise<[string]>;
        flog(era: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        flop(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        flopper(overrides?: CallOverrides): Promise<[string]>;
        heal(rad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        hump(overrides?: CallOverrides): Promise<[BigNumber]>;
        kiss(rad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        live(overrides?: CallOverrides): Promise<[BigNumber]>;
        rely(usr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        sin(arg0: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        sump(overrides?: CallOverrides): Promise<[BigNumber]>;
        vat(overrides?: CallOverrides): Promise<[string]>;
        wait(overrides?: CallOverrides): Promise<[BigNumber]>;
        wards(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    Ash(overrides?: CallOverrides): Promise<BigNumber>;
    Sin(overrides?: CallOverrides): Promise<BigNumber>;
    bump(overrides?: CallOverrides): Promise<BigNumber>;
    cage(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    deny(usr: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    dump(overrides?: CallOverrides): Promise<BigNumber>;
    fess(tab: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "file(bytes32,uint256)"(what: BytesLike, data: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "file(bytes32,address)"(what: BytesLike, data: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    flap(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    flapper(overrides?: CallOverrides): Promise<string>;
    flog(era: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    flop(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    flopper(overrides?: CallOverrides): Promise<string>;
    heal(rad: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    hump(overrides?: CallOverrides): Promise<BigNumber>;
    kiss(rad: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    live(overrides?: CallOverrides): Promise<BigNumber>;
    rely(usr: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    sin(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    sump(overrides?: CallOverrides): Promise<BigNumber>;
    vat(overrides?: CallOverrides): Promise<string>;
    wait(overrides?: CallOverrides): Promise<BigNumber>;
    wards(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        Ash(overrides?: CallOverrides): Promise<BigNumber>;
        Sin(overrides?: CallOverrides): Promise<BigNumber>;
        bump(overrides?: CallOverrides): Promise<BigNumber>;
        cage(overrides?: CallOverrides): Promise<void>;
        deny(usr: string, overrides?: CallOverrides): Promise<void>;
        dump(overrides?: CallOverrides): Promise<BigNumber>;
        fess(tab: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "file(bytes32,uint256)"(what: BytesLike, data: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "file(bytes32,address)"(what: BytesLike, data: string, overrides?: CallOverrides): Promise<void>;
        flap(overrides?: CallOverrides): Promise<BigNumber>;
        flapper(overrides?: CallOverrides): Promise<string>;
        flog(era: BigNumberish, overrides?: CallOverrides): Promise<void>;
        flop(overrides?: CallOverrides): Promise<BigNumber>;
        flopper(overrides?: CallOverrides): Promise<string>;
        heal(rad: BigNumberish, overrides?: CallOverrides): Promise<void>;
        hump(overrides?: CallOverrides): Promise<BigNumber>;
        kiss(rad: BigNumberish, overrides?: CallOverrides): Promise<void>;
        live(overrides?: CallOverrides): Promise<BigNumber>;
        rely(usr: string, overrides?: CallOverrides): Promise<void>;
        sin(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        sump(overrides?: CallOverrides): Promise<BigNumber>;
        vat(overrides?: CallOverrides): Promise<string>;
        wait(overrides?: CallOverrides): Promise<BigNumber>;
        wards(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "LogNote(bytes4,address,bytes32,bytes32,bytes)"(sig?: BytesLike | null, usr?: string | null, arg1?: BytesLike | null, arg2?: BytesLike | null, data?: null): LogNoteEventFilter;
        LogNote(sig?: BytesLike | null, usr?: string | null, arg1?: BytesLike | null, arg2?: BytesLike | null, data?: null): LogNoteEventFilter;
    };
    estimateGas: {
        Ash(overrides?: CallOverrides): Promise<BigNumber>;
        Sin(overrides?: CallOverrides): Promise<BigNumber>;
        bump(overrides?: CallOverrides): Promise<BigNumber>;
        cage(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        deny(usr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        dump(overrides?: CallOverrides): Promise<BigNumber>;
        fess(tab: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "file(bytes32,uint256)"(what: BytesLike, data: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "file(bytes32,address)"(what: BytesLike, data: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        flap(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        flapper(overrides?: CallOverrides): Promise<BigNumber>;
        flog(era: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        flop(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        flopper(overrides?: CallOverrides): Promise<BigNumber>;
        heal(rad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        hump(overrides?: CallOverrides): Promise<BigNumber>;
        kiss(rad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        live(overrides?: CallOverrides): Promise<BigNumber>;
        rely(usr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        sin(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        sump(overrides?: CallOverrides): Promise<BigNumber>;
        vat(overrides?: CallOverrides): Promise<BigNumber>;
        wait(overrides?: CallOverrides): Promise<BigNumber>;
        wards(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        Ash(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        Sin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        bump(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        cage(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        deny(usr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        dump(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        fess(tab: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "file(bytes32,uint256)"(what: BytesLike, data: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "file(bytes32,address)"(what: BytesLike, data: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        flap(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        flapper(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        flog(era: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        flop(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        flopper(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        heal(rad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        hump(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        kiss(rad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        live(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rely(usr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        sin(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sump(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        vat(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        wait(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        wards(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
