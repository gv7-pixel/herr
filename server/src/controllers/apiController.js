/**
 * API Controller
 * Provides health status and project configuration info for Neha's birthday surprise
 */

export const getHealth = (req, res) => {
  res.status(200).json({
    status: 'ok',
    message: 'Backend server is healthy and running smoothly.',
    timestamp: new Date().toISOString(),
  });
};

export const getProjectInfo = (req, res) => {
  res.status(200).json({
    project: 'herr',
    recipient: 'Neha',
    targetDate: '2026-11-06T00:00:00',
    phase: 1,
    status: 'initialized',
  });
};
