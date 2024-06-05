module.exports = (config) => {
  console.log(config);
  config.output = {
    ...config.output,
    // customize
  };
  return config;
};
