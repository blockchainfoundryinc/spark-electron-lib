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

export const EVENT = {
  QUIT_APP: 'quitApp'
};

export const IPC_MESSAGE = {
  ZMQ_START: 'zmqsocket-start',
  ZMQ_REINDEX: 'zmqsocket-reindex'
};

export const IPC_CHANNEL = {
  RELAUNCH_APP: 'relaunch',
  QUIT_APP: 'quit',
  ZMQSOCKET: 'zmqsocket',
  ZMQSOCKET_ERROR: 'zmqsocket-error'
};

module.exports.IPC_CHANNEL = IPC_CHANNEL;
module.exports.IPC_MESSAGE = IPC_MESSAGE;
module.exports.EVENT = EVENT;
