const signin = {
  type: "object",
  required: ["email", "password"],
  properties: {
    email: {
      type: "string",
      format: "email",
      errorMessage: {
        format: "Field 'email' incorrect",
        type: "Field 'email' should be a string"
      }
    },
    password: {
      type: "string",
      errorMessage: {
        type: "Field 'password' should be a string"
      }
    }
  }
};

const signup = {
  type: "object",
  required: ["email", "name", "password"],
  properties: {
    email: {
      type: "string",
      format: "email",
      errorMessage: {
        format: "Field 'email' incorrect",
        type: "Field 'email' should be a string"
      }
    },
    name: {
      type: "string",
      minLength: 2,
      maxLength: 30,
      pattern: "^[a-zA-Z0-9_ ]*$",
      errorMessage: {
        pattern: "Field 'name' can contain only letters and spaces",
        type: "Field 'name' should be a string"
      }
    },
    password: {
      type: "string",
      errorMessage: {
        type: "Field 'password' should be a string"
      }
    }
  }
};

const refreshTokens = {
  type: "object",
  required: ["refreshToken"],
  properties: {
    refreshToken: {
      type: "string",
      pattern: "^(.*)::(.*)$",
      errorMessage: {
        type: "Field 'refreshToken' should be a string",
        pattern: "Incorrect format 'refreshToken'"
      }
    }
  }
};

export default {
  signin,
  signup,
  refreshTokens,
};
