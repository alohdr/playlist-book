const mongoose = require("mongoose");

const shelfSchema = new mongoose.Schema({
    name: String,
    identity: [
        {
        qty: Number,
        location: {
            type: String,
            enum: ["1st floor", "2nd floor", "3rd floor"],
            default: "-",
        },
        },
    ],
    bookID: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book",
        },
    ],
});

const bookShelf = mongoose.model("bookShelf", shelfSchema);

module.exports = bookShelf;
