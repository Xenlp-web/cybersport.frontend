import io from 'socket.io-client';
import config from '@config/app/default';

const socket = io.connect(config.common.api.socketUrl);

export default subscribeToTimer;