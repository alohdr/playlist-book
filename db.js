const mongoose = require("mongoose");

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect("mongodb://localhost:27017/zetta");
}

// let bookSchema = new mongoose.Schema({
//     name: String,
//     qty: Number
// });

// let Book = mongoose.model('Book', bookSchema);

// let Book1 = new Book({
//     name: "Alogritma Dasar",
//     qty: 30
// })

// Book.find()