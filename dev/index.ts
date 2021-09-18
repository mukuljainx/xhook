// import axios from "axios";
import f from '../dist/xhook';
console.log(99, f.xhook);
const xhook = f.xhook;

xhook.before((req, callback) => {
  console.log('XHOOK BEFORE');
  console.log(req);
  console.log('\n\n');
  callback();
});

xhook.after(function (request, originalResponse) {
  console.log('XHOOK AFTER');
  console.log({ request, originalResponse });
  console.log('\n\n');
});

const URL = {
  get: 'http://demo5468585.mockable.io/patients/empi/goals',
  post: 'https://demo5468585.mockable.io/events',
};

// axios
//   .get(URL.get)
//   .then((response) => {
//     console.log({ data: response.data, headers: response.headers });
//   });

const form = new FormData();
form.append('name', 'test');

fetch(URL.post, {
  method: 'post',
  body: form,
}).then((d) => {
  console.log(433, d);
});

console.log(form);
