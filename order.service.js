class OrderService {
  async createOrder({ userId, productId, qty }) {
    return {
      id: Math.random().toString(36).slice(2, 11),
      userId,
      productId,
      qty,
      status: "created",
    };
  }
}

export { OrderService };
