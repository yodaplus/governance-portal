import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface PotInterface extends utils.Interface {
    contractName: "Pot";
    functions: {
        "Pie()": FunctionFragment;
        "cage()": FunctionFragment;
        "chi()": FunctionFragment;
        "deny(address)": FunctionFragment;
        "drip()": FunctionFragment;
        "dsr()": FunctionFragment;
        "exit(uint256)": FunctionFragment;
        "file(bytes32,uint256)": FunctionFragment;
        "join(uint256)": FunctionFragment;
        "live()": FunctionFragment;
        "pie(address)": FunctionFragment;
        "rely(address)": FunctionFragment;
        "rho()": FunctionFragment;
        "vat()": FunctionFragment;
        "vow()": FunctionFragment;
        "wards(address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "Pie", values?: undefined): string;
    encodeFunctionData(functionFragment: "cage", values?: undefined): string;
    encodeFunctionData(functionFragment: "chi", values?: undefined): string;
    encodeFunctionData(functionFragment: "deny", values: [string]): string;
    encodeFunctionData(functionFragment: "drip", values?: undefined): string;
    encodeFunctionData(functionFragment: "dsr", values?: undefined): string;
    encodeFunctionData(functionFragment: "exit", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "file", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "join", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "live", values?: undefined): string;
    encodeFunctionData(functionFragment: "pie", values: [string]): string;
    encodeFunctionData(functionFragment: "rely", values: [string]): string;
    encodeFunctionData(functionFragment: "rho", values?: undefined): string;
    encodeFunctionData(functionFragment: "vat", values?: undefined): string;
    encodeFunctionData(functionFragment: "vow", values?: undefined): string;
    encodeFunctionData(functionFragment: "wards", values: [string]): string;
    decodeFunctionResult(functionFragment: "Pie", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "chi", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deny", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "drip", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "dsr", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "file", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "join", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "live", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pie", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rely", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rho", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "vat", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "vow", data: BytesLike): Result;
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
export interface Pot extends BaseContract {
    contractName: "Pot";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: PotInterface;
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
        Pie(overrides?: CallOverrides): Promise<[BigNumber]>;
        cage(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        chi(overrides?: CallOverrides): Promise<[BigNumber]>;
        deny(guy: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        drip(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        dsr(overrides?: CallOverrides): Promise<[BigNumber]>;
        exit(wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "file(bytes32,uint256)"(what: BytesLike, data: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "file(bytes32,address)"(what: BytesLike, addr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        join(wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        live(overrides?: CallOverrides): Promise<[BigNumber]>;
        pie(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        rely(guy: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        rho(overrides?: CallOverrides): Promise<[BigNumber]>;
        vat(overrides?: CallOverrides): Promise<[string]>;
        vow(overrides?: CallOverrides): Promise<[string]>;
        wards(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    Pie(overrides?: CallOverrides): Promise<BigNumber>;
    cage(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    chi(overrides?: CallOverrides): Promise<BigNumber>;
    deny(guy: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    drip(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    dsr(overrides?: CallOverrides): Promise<BigNumber>;
    exit(wad: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "file(bytes32,uint256)"(what: BytesLike, data: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "file(bytes32,address)"(what: BytesLike, addr: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    join(wad: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    live(overrides?: CallOverrides): Promise<BigNumber>;
    pie(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    rely(guy: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    rho(overrides?: CallOverrides): Promise<BigNumber>;
    vat(overrides?: CallOverrides): Promise<string>;
    vow(overrides?: CallOverrides): Promise<string>;
    wards(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        Pie(overrides?: CallOverrides): Promise<BigNumber>;
        cage(overrides?: CallOverrides): Promise<void>;
        chi(overrides?: CallOverrides): Promise<BigNumber>;
        deny(guy: string, overrides?: CallOverrides): Promise<void>;
        drip(overrides?: CallOverrides): Promise<BigNumber>;
        dsr(overrides?: CallOverrides): Promise<BigNumber>;
        exit(wad: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "file(bytes32,uint256)"(what: BytesLike, data: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "file(bytes32,address)"(what: BytesLike, addr: string, overrides?: CallOverrides): Promise<void>;
        join(wad: BigNumberish, overrides?: CallOverrides): Promise<void>;
        live(overrides?: CallOverrides): Promise<BigNumber>;
        pie(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        rely(guy: string, overrides?: CallOverrides): Promise<void>;
        rho(overrides?: CallOverrides): Promise<BigNumber>;
        vat(overrides?: CallOverrides): Promise<string>;
        vow(overrides?: CallOverrides): Promise<string>;
        wards(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "LogNote(bytes4,address,bytes32,bytes32,bytes)"(sig?: BytesLike | null, usr?: string | null, arg1?: BytesLike | null, arg2?: BytesLike | null, data?: null): LogNoteEventFilter;
        LogNote(sig?: BytesLike | null, usr?: string | null, arg1?: BytesLike | null, arg2?: BytesLike | null, data?: null): LogNoteEventFilter;
    };
    estimateGas: {
        Pie(overrides?: CallOverrides): Promise<BigNumber>;
        cage(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        chi(overrides?: CallOverrides): Promise<BigNumber>;
        deny(guy: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        drip(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        dsr(overrides?: CallOverrides): Promise<BigNumber>;
        exit(wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "file(bytes32,uint256)"(what: BytesLike, data: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "file(bytes32,address)"(what: BytesLike, addr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        join(wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        live(overrides?: CallOverrides): Promise<BigNumber>;
        pie(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        rely(guy: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        rho(overrides?: CallOverrides): Promise<BigNumber>;
        vat(overrides?: CallOverrides): Promise<BigNumber>;
        vow(overrides?: CallOverrides): Promise<BigNumber>;
        wards(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        Pie(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        cage(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        chi(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deny(guy: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        drip(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        dsr(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        exit(wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "file(bytes32,uint256)"(what: BytesLike, data: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "file(bytes32,address)"(what: BytesLike, addr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        join(wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        live(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pie(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rely(guy: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        rho(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        vat(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        vow(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        wards(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
