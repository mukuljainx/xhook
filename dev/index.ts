// import axios from "axios";
import f from '../dist/xhook';
console.log(99, f.xhook);
const xhook = f.xhook;

const printLine = () =>
  console.log(
    new Array(50)
      .fill(0)
      .map(() => '*')
      .join('')
  );

xhook.before((req, callback) => {
  printLine();
  console.log('XHOOK BEFORE');
  console.log(req);
  const finalResponse = {
    status: 200,
    text: 'lol',
    // headers,
    type: 'json',
  };
  callback(finalResponse);
  // callback();
  printLine();
});

xhook.after(function (request, originalResponse) {
  printLine();
  console.log('XHOOK AFTER');
  console.log({ request, originalResponse });
  printLine();
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
