import Vector2 from '../maths/vector';
import { clamp, lerp, easeOutQuad } from '../maths/utils';

export default class Dot {
  /**
     * Create a new Dot
     * @param {Number} x
     * @param {Number} y
     * @param {Number} r
     */
  constructor(x, y, r) {
    this.origin = new Vector2(x, y);
    this.ratio = 0;
    this.currentRatio = 0;
    this.target = this.origin.clone();
    this.current = this.origin.clone();
    this.radius = r;
  }

  /**
     * Update dot's targeted display position according to range around mouse position
     * @param {Vector2} mousePosition
     * @param {Number} maxRange
     */
  updateTarget(mousePosition, maxRange) {
    const distance = this.origin.distanceTo(mousePosition);
    this.ratio = (1 - clamp((distance - maxRange) / maxRange, 0, 1));
    this.target.setFrom(this.origin);

    if (this.ratio > 0) {
      this.ratio = easeOutQuad(this.ratio);
      const dir = this.origin.clone();
      dir.diff(mousePosition);
      dir.ratio(this.ratio);
      this.target.add(dir);
    }
  }

  /**
     * Reset dot targeted display position to origin and ratio to 0
     */
  resetTarget() {
    this.target.setFrom(this.origin);
    this.ratio = 0;
  }

  /**
     * Draw the dot on canvas context given in parameter
     * @param {CanvasRenderingContext2D} ctx
     */
  draw(ctx) {
    this.current.lerp(this.target, 0.05);
    this.currentRatio = lerp(this.currentRatio, this.ratio, 0.05);
    ctx.beginPath();
    ctx.arc(this.current.x, this.current.y, this.radius + this.currentRatio * 2.5, 0, 2 * Math.PI);
    ctx.fill();
  }
}
