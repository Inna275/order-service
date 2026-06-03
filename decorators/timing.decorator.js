import { ServiceDecorator } from "./base.decorator.js";

class TimingDecorator extends ServiceDecorator {
  async createOrder(data) {
    const start = Date.now();
    const result = await this.service.createOrder(data);
    const end = Date.now();
    console.log(`[TIMING] createOrder took ${end - start}ms`);
    return result;
  }
}

export { TimingDecorator };
