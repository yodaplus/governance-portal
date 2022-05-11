import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { PauseProxy, PauseProxyInterface } from "../PauseProxy";
export declare class PauseProxy__factory {
    static readonly abi: ({
        inputs: any[];
        payable: boolean;
        stateMutability: string;
        type: string;
        constant?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        constant: boolean;
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        payable: boolean;
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): PauseProxyInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): PauseProxy;
}
