import { OrderService } from "./order.service.js";
import { LoggingDecorator } from "./decorators/logging.decorator.js";
import { TimingDecorator } from "./decorators/timing.decorator.js";
import { CacheDecorator } from "./decorators/cache.decorator.js";

let service = new OrderService();

service = new CacheDecorator(service);
service = new TimingDecorator(service);
service = new LoggingDecorator(service);


async function run() {
  const orderData = { userId: 1, productId: "A1", qty: 2 };

  console.log("--- FIRST CALL ---");
  await service.createOrder(orderData);

  console.log("\n--- SECOND CALL ---");
  await service.createOrder(orderData);
}

run();
