module.exports = (config) => {
  console.log(config);
  config.output = config.output.map((out) => ({
    ...out,
    // customize
  }));
  return config;
};
