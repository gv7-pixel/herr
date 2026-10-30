/**
 * Global error handling middleware
 */
export function errorHandler(err, req, res, next) {
  const statusCode = err.status || 500;
  const message = err.message || 'Internal Server Error';

  console.error(`[Error] ${req.method} ${req.url} - ${message}`);

  res.status(statusCode).json({
    status: 'error',
    statusCode,
    message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
}
