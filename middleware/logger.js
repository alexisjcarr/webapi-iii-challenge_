module.exports = function logger(req, res, next) {
  let timestamp = new Date();
  timestamp = timestamp.toISOString();
  console.log(`${req.method} to ${req.url} at ${timestamp}`);

  next();
};
