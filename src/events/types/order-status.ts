export enum OrderStatus {
  // When order has been created, but the ticket it is trying to order has not been reserved
  Created = "created",
  // Ticket the order is trying to reserve has already been reserved, or when the user has cancelled the order, or order expires before payment
  Cancelled = "cancelled",
  // The order has successfully reserved a ticket
  AwaitingPayment = "awaiting:payment",
  // order has reserved the ticket and user has provided payment successfully
  Complete = "complete",
}
