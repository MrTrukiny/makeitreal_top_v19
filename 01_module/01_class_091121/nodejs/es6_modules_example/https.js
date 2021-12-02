import { send } from './request.js';
import { read } from './response.js';

function makeRequest(url, data) {
  send(url, data);
  return read();
}

const responseData = makeRequest('http://www.google.com', 'hello');
console.log(responseData);
