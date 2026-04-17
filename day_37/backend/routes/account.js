const express = require("express");
const authmiddleware = require("./middleware");
const { User, Account } = require("../db");
const { default: mongoose } = require("mongoose");
const router = express.Router()

router.get("/balance", authmiddleware, async (req, res) => {

    const account = await Account.findOne({
        userID: req.userId,
    })

    res.json({
        balance: account.balance,
    })
})


router.post("/transfer", authmiddleware, async (req, res) => {
    const session = await mongoose.startSession();
    session.startTransaction();

    const { to, amount } = req.body;
    const account = await Account.findOne({
        userID: req.userId,
    }).session(session);

    if (!account || account.balance < amount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Insufficient balance"
        })
    }

    const toAccount = await Account.findOne({
        userID: to,
    }).session(session);

    if (!toAccount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Invalid account"
        })
    }

    await Account.updateOne({ userID: req.userId, }, { $inc: { balance: -amount, } }).session(session);

    await Account.updateOne({ userID: to, }, { $inc: { balance: amount } }).session(session);
    await session.commitTransaction();
    res.json({
        message: "Transfer successful"
    })
})

module.exports = router;

// /api/v1/account/transfer
// /api/v1/account/balance