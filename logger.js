// Logger module for advanced project planner
export class Logger {
  constructor() {
    this.level = 'info';
  }
  
  log(message) {
    console.log(`[${this.level}] ${message}`);
  }
}