import axios from "axios";
import f from "../xhook";

const xhook = f.xhook;

xhook.before((req, callback) => {
  console.log(2, req);
  callback();
});

axios
  .get("http://demo5468585.mockable.io/patients/empi/goals")
  .then((response) => {
    console.log({ data: response.data, headers: response.headers });
  });
