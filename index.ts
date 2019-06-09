export interface ClientConfig {
  host: string;
  port: string;
  syscoin_datadir?: string;
  funding_url: string;
  username: string;
  password: string;
  rpcPort: number;
  explorer_tx_url: string;
  explorer_address_url: string;
  explorer_asset_url: string;
  explorer_block_url: string;
  default_unlock_period: number;
  zmq_socket_url?: string;
}
