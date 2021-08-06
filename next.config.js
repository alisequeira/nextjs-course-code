const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

//here you can set your env variables
module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    //configuration if we are in development, you can have different values
    return {
      env: {
        customKeys: "custom",
      },
    };
  }
  return {
    env: {
      customKeys: "custom",
    },
  };
};
