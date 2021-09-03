import { ConnectorUpdate } from '@web3-react/types';
import { AbstractConnector } from '@web3-react/abstract-connector';
import { IClientMeta, IRPCMap } from '@walletconnect/types';
export declare const URI_AVAILABLE = "URI_AVAILABLE";
export interface DeFiLinkConnectorArguments {
    supportedChainIds?: number[];
    rpc?: IRPCMap;
    infuraId?: string;
    chainId?: number;
    clientMeta?: IClientMeta;
    pollingInterval?: number;
}
export declare class UserRejectedRequestError extends Error {
    constructor();
}
export declare class DeFiLinkConnector extends AbstractConnector {
    private readonly config;
    walletConnectProvider?: any;
    cryptoExtentionProvider?: any;
    constructor(config: DeFiLinkConnectorArguments);
    private handleChainChanged;
    private handleAccountsChanged;
    private handleDisconnect;
    getDocument(): Document;
    hasLocalStoragedSession(): boolean;
    activate(): Promise<ConnectorUpdate>;
    getProvider(): Promise<any>;
    getChainId(): Promise<number | string>;
    getAccount(): Promise<null | string>;
    deactivate(): void;
    close(): Promise<void>;
}
