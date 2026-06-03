import { ServiceDecorator } from "./base.decorator.js";

class CacheDecorator extends ServiceDecorator {
  constructor(service) {
    super(service);
    this.cache = new Map();
  }

  _key(data) {
    return `${data.userId}:${data.productId}:${data.qty}`;
  }

  async createOrder(data) {
    const key = this._key(data);

    if (this.cache.has(key)) {
      console.log("[CACHE] hit");
      return this.cache.get(key);
    }

    const result = await this.service.createOrder(data);
    this.cache.set(key, result);
    console.log("[CACHE] stored");
    return result;
  }
}

export { CacheDecorator };
