const { model, Schema } = require("mongoose");

const MenuSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    ingredients: [
        {
            type: String,
            required: false
        }
    ],
    categories: [
        {
            type: String,
            required: true
        }
    ],
    price: {
        type: Number,
        required: true
    }
});

module.exports = model("Menu", MenuSchema);
