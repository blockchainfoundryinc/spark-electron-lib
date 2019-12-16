export interface SparkConfig {
    host: string;
    port: number;
    syscoin_datadir?: string;
    funding_url: string;
    username?: string;
    password?: string;
    rpcport?: string;
    explorer_tx_url: string;
    explorer_address_url: string;
    explorer_asset_url: string;
    explorer_block_url: string;
    default_unlock_period: number;
    zmq_socket_url?: string;
    spark_version: string;
    syscoin_version: string;
    mode: string;
}
export declare const EVENT: {
    QUIT_APP: string;
};
export declare const IPC_MESSAGE: {
    ZMQ_START: string;
    ZMQ_REINDEX: string;
};
export declare const IPC_CHANNEL: {
    RELAUNCH_APP: string;
    QUIT_APP: string;
    ZMQSOCKET: string;
    ZMQSOCKET_ERROR: string;
};
