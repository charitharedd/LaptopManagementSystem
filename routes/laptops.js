
const express = require('express');
const router = express.Router();
const Laptop = require('../models/laptop');

// Add a new laptop
router.post('/', async (req, res) => {
    try {
        const laptop = new Laptop(req.body);
        await laptop.save();
        res.status(201).json(laptop);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get all laptops
router.get('/', async (req, res) => {
    try {
        const laptops = await Laptop.find();
        res.json(laptops);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update laptop details
router.put('/:id', async (req, res) => {
    try {
        const laptop = await Laptop.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(laptop);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Delete a laptop
router.delete('/:id', async (req, res) => {
    try {
        await Laptop.findByIdAndDelete(req.params.id);
        res.status(204).end();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
