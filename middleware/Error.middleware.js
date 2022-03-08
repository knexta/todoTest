exports.errorHandler = (err, req, res, next) => {
  const error = { ...err };

  error.message = err.message;

  res.status(error.statusCode || 500).json({
    status: false,
    data: error.message || "Internal Error",
  });
};
