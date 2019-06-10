export interface ClientConfig {
    host: string;
    port: number;
    syscoin_datadir?: string;
    funding_url: string;
    username: string;
    password: string;
    rpcport: number;
    explorer_tx_url: string;
    explorer_address_url: string;
    explorer_asset_url: string;
    explorer_block_url: string;
    default_unlock_period: number;
    zmq_socket_url?: string;
}
export declare const IPC_MESSAGE: {};
export declare const IPC_CHANNEL: {
    RELAUNCH_APP: string;
    QUIT_APP: string;
};
