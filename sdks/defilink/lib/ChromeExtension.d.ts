export declare enum ChromeExtensionEventType {
    connectRequest = "connectRequest",
    transactionRequest = "transactionRequest"
}
export interface ChromeExtensionEventPayload {
    type: ChromeExtensionEventType;
    detail: any;
}
export declare class ExtensionEventInit<ChromeExtensionEventPayload> implements CustomEventInit {
    detail?: ChromeExtensionEventPayload;
    bubbles?: boolean;
    cancelable?: boolean;
    composed?: boolean;
    constructor(props: ChromeExtensionEventPayload);
}
export declare class ChromeExtension {
    static hasInstallChromeExtension(): boolean;
    static requestConnect({ uri }: {
        uri: string;
    }): void;
}
