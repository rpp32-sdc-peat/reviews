// import http from "k6/http";
// import { check, sleep } from "k6";
// import { Counter } from 'k6/metrics';

// export const requests = new Counter('http_reqs');

// export const options = {
//   stages: [
//     { target: 20, duration: '1m' },
//     { target: 15, duration: '1m' },
//     { target: 0, duration: '1m' },
//   ],
//   thresholds: {
//     requests: ['count < 100'],
//   },
// };

// export default function () {
//   // our HTTP request, note that we are saving the response to res, which can be accessed later

//   const res = http.get('http://3.230.184.160:3000/reviews/?product_id=2&sort=helpful&count=3');

//   sleep(1);

//   const checkRes = check(res, {
//     'status is 200': (r) => r.status === 200,
//     'response body': (r) => r.body.indexOf('Feel free to browse') !== -1,
//   });
// }


import http from 'k6/http';
import { check, sleep } from 'k6';
import { Rate } from 'k6/metrics';

export const errorRate = new Rate('errors');

export default function () {
  const url = 'http://3.230.184.160:3000/reviews/?product_id=2&sort=helpful&count=3';
  check(http.get(url), {
    'status is 200': (r) => r.status == 200,
  }) || errorRate.add(1);
}
sleep(1);