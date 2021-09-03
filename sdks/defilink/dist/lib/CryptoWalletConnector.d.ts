import { ConnectorUpdate } from '@web3-react/types';
import { AbstractConnector } from '@web3-react/abstract-connector';
import { IWalletConnectProviderOptions } from '@walletconnect/types';
export declare const URI_AVAILABLE = "URI_AVAILABLE";
export interface CryptoWalletConnectorArguments extends IWalletConnectProviderOptions {
    supportedChainIds?: number[];
}
export declare class UserRejectedRequestError extends Error {
    constructor();
}
export declare class CryptoWalletConnector extends AbstractConnector {
    private readonly config;
    walletConnectProvider?: any;
    cryptoExtentionProvider?: any;
    constructor(config: CryptoWalletConnectorArguments);
    private handleChainChanged;
    private handleAccountsChanged;
    private handleDisconnect;
    getDocument(): Document;
    hasLocalStoragedSession(): Boolean;
    activate(): Promise<ConnectorUpdate>;
    getProvider(): Promise<any>;
    getChainId(): Promise<number | string>;
    getAccount(): Promise<null | string>;
    deactivate(): void;
    close(): Promise<void>;
}
