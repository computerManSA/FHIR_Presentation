
export const SECURITY_CONFIG = {
  // Rate limiting
  API_WINDOW_MS: 15 * 60 * 1000, // 15 minutes
  API_MAX_REQUESTS: 100,
  VALIDATION_MAX_REQUESTS: 5,
  
  // Account lockout
  MAX_FAILED_ATTEMPTS: 3,
  LOCKOUT_TIME_MS: 30 * 60 * 1000, // 30 minutes
  
  // Code validation
  MIN_CODE_LENGTH: 6,
  MAX_CODE_LENGTH: 10,
  ALLOWED_CODE_PATTERN: /^[a-zA-Z0-9]+$/,
  
  // Timing attack prevention
  MIN_RESPONSE_DELAY_MS: 100,
  MAX_RESPONSE_DELAY_MS: 300,
  
  // Security headers
  HSTS_MAX_AGE: 31536000, // 1 year
  CSP_DIRECTIVES: {
    defaultSrc: ["'self'"],
    styleSrc: ["'self'", "'unsafe-inline'"],
    scriptSrc: ["'self'"],
    imgSrc: ["'self'", "data:", "https:"],
  }
};
