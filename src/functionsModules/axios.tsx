import axios from 'axios';

function readCookie(name: any) {
    var match = document.cookie.match(new RegExp('(^|;\s*)(' + name + ')=([^;]*)'));
    return (match ? decodeURIComponent(match[3]) : null);
  };

  var token = readCookie('XSRF-TOKEN');

  export default axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'X-XSRF-TOKEN': token,
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true
});
