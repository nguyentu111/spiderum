/**
 * An array of routes that are accessible to the public
 * These routes do not require authentication
 * @type {RegExp[]}
 */
export const publicRoutes = [
  /^\/?$/,
  /^\/post(?:\/[a-zA-Z0-9-]+)?$/,
  /^\/category(?:\/[a-zA-Z0-9-]+)?$/,
];

/**
 * An array of routes that are used for authentication
 * These routes will redirect logged in users to /settings
 * @type {string[]}
 */
export const authRoutes = [
  "/login",
  "/register",
  "/error",
  "/create-new-account",
  "/forgot-password",
  "/reset-password",
];

/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API authentication purposes
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/";

/**
 * The default login path
 * @type {string}
 */
export const DEFAULT_LOGIN_PATH = "/login";
