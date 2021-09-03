import { ISessionStorage, IWalletConnectSession } from '@walletconnect/types';
export declare class SessionStorage implements ISessionStorage {
    key: string;
    constructor({ key }?: {
        key: string;
    });
    getSession: () => IWalletConnectSession | null;
    setSession: (session: IWalletConnectSession) => IWalletConnectSession;
    removeSession: () => void;
}
