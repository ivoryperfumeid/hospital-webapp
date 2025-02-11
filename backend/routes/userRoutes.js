const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Ambil semua user
router.get("/", async (req, res) => {
    const users = await User.find();
    res.json(users);
});

// Tambah user baru
router.post("/", async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.json(newUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Update user
router.put("/:id", async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Hapus user
router.delete("/:id", async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted" });
});

module.exports = router;
