import axios from 'axios';


export default axios.create({
    baseURL : 'https://df21-2409-40d1-1-4f9a-863-cf3c-7a06-6701.in.ngrok.io',
    headers:{"ngrok-skip-browser-warning": true}
});