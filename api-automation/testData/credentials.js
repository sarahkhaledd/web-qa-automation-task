const { generateUser } = require('../utils/data_generator');

// Generate users with timestamp to ensure uniqueness in CI
function generateUniqueUser() {
  const baseUser = generateUser();
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 1000);
  
  return {
    ...baseUser,
    email: `${baseUser.email.split('@')[0]}_${timestamp}_${random}@${baseUser.email.split('@')[1]}`
  };
}

module.exports = {
    user: {
      name: 'user',
      email: 'user@gmail.com',
      password: 'user123'
    },
    newUser: generateUniqueUser(),
    lifecycleUser: generateUniqueUser(),
    updatedLifecycleUser: generateUniqueUser(),
    tokenTestUser: generateUniqueUser(),
    updatedTokenTestUser: generateUniqueUser()
  };  