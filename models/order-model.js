const { model, Schema } = require("mongoose");

const OrderSchema = new Schema({
  client: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  products: [
    {
      type: String,
      required: true
    }
  ],
  subtotal: {
    type: Number,
    required: true
  },
  total: {
    type: Number,
    required: true
  }
});

module.exports = model("Order", OrderSchema);
