import io from 'socket.io-client';
import Echo from 'laravel-echo';
import config from '@config/app/default';

let echo = new Echo({
  broadcaster: 'socket.io',
  host: config.common.api.socketUrl,
  client: io,
  protocol: "http"
});

export default echo;