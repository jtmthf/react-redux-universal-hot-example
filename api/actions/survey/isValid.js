import timeout from 'utils/timeout';

export default function survey(req) {
  return new Promise(async (resolve, reject) => {
    await timeout(1000);
    const errors = {};
    let valid = true;
    if (~['bobby@gmail.com', 'timmy@microsoft.com'].indexOf(req.body.email)) {
      errors.email = 'Email address already used';
      valid = false;
    }
    if (valid) {
      resolve();
    } else {
      reject(errors);
    }
  });
}
