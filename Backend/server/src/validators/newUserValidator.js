const { userSchema } = require("../schemas/userSchema");

function newUserValidator(body) {
  let user = userSchema.validate(body, { abortEarly: false });

  if (user.error?.details) {
    let error = user.error.details.map((err) => err.message);

    throw new Error(error.join("\n"));
  } else {
    
    return user;

  }
}

module.exports = { newUserValidator };
