import { ServiceDecorator } from "./base.decorator.js";

class LoggingDecorator extends ServiceDecorator {
  async createOrder(data) {
    console.log("[LOG] createOrder called with:", data);
    const result = await this.service.createOrder(data);
    console.log("[LOG] result:", result);
    return result;
  }
}

export { LoggingDecorator };
