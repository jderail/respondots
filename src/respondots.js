import Dot from './models/dot';
import Vector2 from './maths/vector';

/**
 * Default configuration
 */
const defaults = {
  gridSize: 50,
  dotSize: 5,
  backgroundColor: '#333',
  dotColor: '#e0e0e0',
  range: 100,
  zIndex: 0,
};

export default class Respondots {
  constructor(root, conf = {}) {
    this.root = root;
    this.conf = { ...defaults, ...conf };

    // Create canvas
    this.canvas = document.createElement('canvas');
    this.canvas.style.position = 'absolute';
    this.canvas.style.top = 0;
    this.canvas.style.left = 0;
    this.canvas.style.bottom = 0;
    this.canvas.style.right = 0;
    this.canvas.style.zIndex = this.conf.zIndex;
    const { width, height } = this.root.getBoundingClientRect();
    this.canvas.height = height;
    this.canvas.width = width;
    this.root.appendChild(this.canvas);
    this.ctx = this.canvas.getContext('2d');

    this.update = this.update.bind(this);
    this.handleMousemove = this.handleMousemove.bind(this);
    this.handleMouseout = this.handleMouseout.bind(this);
    this.handleResize = this.handleResize.bind(this);

    // Initialize dots
    this.dots = [];
    for (let i = 10; i < width; i += this.conf.gridSize) {
      for (let j = 10; j < height; j += this.conf.gridSize) {
        this.dots.push(new Dot(i, j, this.conf.dotSize));
      }
    }

    this.bindEvents();
    window.requestAnimationFrame(this.update);
  }

  /**
     * Bind events
     */
  bindEvents() {
    this.root.addEventListener('mouseenter', this.handleMousemove);
    this.root.addEventListener('mousemove', this.handleMousemove);
    this.root.addEventListener('wheel', this.handleMousemove);
    this.root.addEventListener('mouseleave', this.handleMouseout);
    window.addEventListener('resize', this.handleResize);
  }

  /**
     * Handle window resize
     */
  handleResize() {
    this.canvas.height = 0;
    this.canvas.width = 0;
    const { width, height } = this.root.getBoundingClientRect();
    this.canvas.height = height;
    this.canvas.width = width;
    this.dots.splice(0, this.dots.length);
    for (let i = 10; i < width; i += this.conf.gridSize) {
      for (let j = 10; j < height; j += this.conf.gridSize) {
        this.dots.push(new Dot(i, j, this.conf.dotSize));
      }
    }
  }

  /**
     * Mouse move handler
     * @param {Event} e
     */
  handleMousemove(e) {
    const { top, left } = this.root.getBoundingClientRect();
    const mousePos = new Vector2(
      e.pageX - left - window.pageXOffset,
      e.pageY - top - window.pageYOffset,
    );
    this.dots.forEach(((d) => d.updateTarget(mousePos, this.conf.range)));
  }

  /**
     * Mouse out heandler (trigger dots' target positions reset)
     * @param {Event} e
     */
  handleMouseout() {
    this.dots.forEach(((d) => d.resetTarget()));
  }

  /**
     * Animation loop
     */
  update() {
    // Get and clear context
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Draw background
    this.ctx.fillStyle = this.conf.backgroundColor;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = this.conf.dotColor;

    // Draw each dots
    this.dots.forEach(((d) => d.draw(this.ctx)));

    window.requestAnimationFrame(this.update);
  }
}
