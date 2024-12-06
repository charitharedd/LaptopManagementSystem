
const mongoose = require('mongoose');
const LaptopSchema = new mongoose.Schema({
    brand: String,
    model: String,
    serialNumber: String,
    status: { type: String, enum: ['available', 'assigned', 'maintenance'], default: 'available' },
    purchaseDate: Date,
});
module.exports = mongoose.model('Laptop', LaptopSchema);
