import { ServiceDecorator } from "./base.decorator.js";

class TimingDecorator extends ServiceDecorator {
  async createOrder(data) {
    const start = performance.now();
    const result = await this.service.createOrder(data);
    const end = performance.now();
    const duration = end - start; 
    console.log(`[TIMING] createOrder took ${duration.toFixed(5)}ms`);
    return result;
  }
}

export { TimingDecorator };
