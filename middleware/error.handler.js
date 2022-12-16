function errorLogs(err, req, res, next) {
  console.log('errorLogs');
  console.error(err);
  next(err);
}

function handleError(err, req, res, next) {
  console.err('handleError');
  res.status(501).json({
    message: err.message,
    stack: err.stack,
  });
}

module.exports = { errorLogs, handleError };
