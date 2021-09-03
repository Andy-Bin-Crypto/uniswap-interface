import Connector from '@walletconnect/core';
import { IWalletConnectOptions, ISessionStorage } from '@walletconnect/types';
import SocketTransport from '../socket-transport';
export declare const DeFiLinkConnectorGenerator: (connectorOpts: IWalletConnectOptions, sessionStorage: ISessionStorage) => {
    connector: Connector;
    transport: SocketTransport;
};
