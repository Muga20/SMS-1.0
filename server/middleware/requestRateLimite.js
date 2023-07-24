// Define a rate limiting middleware
import rateLimit from 'express-rate-limit';

// Create a rate limiter with a limit of 500 requests per hour
const limiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 50,
  message: 'Too many requests from this IP, please try again after an hour.',
});


export default limiter;