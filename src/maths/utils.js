
/**
 * Linear interpolation between v0 and v1 by interpolant t
 * @param {Number} v0
 * @param {Number} v1
 * @param {Number} t
 */
export const lerp = (v0, v1, t) => v0 * (1 - t) + v1 * t;

/**
 * Clamp Val between min and max
 * @param {Number} val
 * @param {Number} min
 * @param {Number} max
 */
export const clamp = (val, min, max) => Math.min(Math.max(val, min), max);

/**
 * Ezasing function
 * @param {Number} t
 */
export const easeOutQuad = (t) => t * (2 - t);
