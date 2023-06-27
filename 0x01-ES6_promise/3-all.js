const { uploadPhoto, createUser } = require('./utils');

function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(([photoResponse, userResponse]) => {
      const { body: photoBody } = photoResponse;
      const { body: userBody } = userResponse;

      console.log(`Body: ${userBody.firstName} ${userBody.lastName}`);
    })
    .catch((error) => {
      console.error('Signup system offline');
    });
}

export default handleProfileSignup;
