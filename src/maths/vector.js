import { lerp } from './utils';

export default class Vector2 {
  /**
     * Create a new Vector2
     * @param {Number} x
     * @param {Number} y
     */
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  /**
     * Test if vector is equal to vector given in parameter
     * @param {Vector2} v
     */
  equals(v) {
    return this.x === v.x && this.y === v.y;
  }

  /**
     * Set vector coordinates with values from vector given in parameters
     * @param {Vector2} v
     */
  setFrom(v) {
    this.x = v.x;
    this.y = v.y;
  }

  /**
     * Linearly interpolates with a vector
     * @param {Vector2} v
     * @param {Number} amount
     */
  lerp(v, amount) {
    this.x = lerp(this.x, v.x, amount);
    this.y = lerp(this.y, v.y, amount);
  }

  /**
     * Create a copy of vector
     */
  clone() {
    return new Vector2(this.x, this.y);
  }

  /**
     * Substract vector
     * @param {Vector2} v
     */
  diff(v) {
    this.x -= v.x;
    this.y -= v.y;
  }

  /**
     * Apply ratio to vector
     * @param {Number} r
     */
  ratio(r) {
    this.x *= r;
    this.y *= r;
  }

  /**
     * Add vector
     * @param {Vector2} v
     */
  add(v) {
    this.x += v.x;
    this.y += v.y;
  }

  /**
     * Distance with the vector
     * @param {Vector2} v
     */
  distanceTo(v) {
    return Math.sqrt((v.x - this.x) * (v.x - this.x) + (v.y - this.y) * (v.y - this.y));
  }
}
