const Transaction = require('../models/Transaction');
const vtuService = require('../services/vtuService');

exports.buyAirtime = async (req, res) => {
  try {
    const { phoneNumber, amount, provider } = req.body;

    const transaction = await Transaction.create({
      user: req.user._id,
      type: 'airtime',
      amount,
      phoneNumber,
      provider,
      reference: `AIR${Date.now()}${Math.floor(Math.random() * 1000)}`
    });

    const response = await vtuService.buyAirtime(phoneNumber, amount, provider);

    transaction.status = 'completed';
    transaction.responseData = response;
    await transaction.save();

    res.status(200).json({
      status: 'success',
      data: {
        transaction,
        response
      }
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: error.message
    });
  }
};

exports.buyDataBundle = async (req, res) => {
  try {
    const { phoneNumber, bundleCode, provider } = req.body;

    const transaction = await Transaction.create({
      user: req.user._id,
      type: 'data',
      amount: 0, // Will be updated after successful purchase
      phoneNumber,
      provider,
      reference: `DATA${Date.now()}${Math.floor(Math.random() * 1000)}`
    });

    const response = await vtuService.buyDataBundle(phoneNumber, bundleCode, provider);

    transaction.status = 'completed';
    transaction.responseData = response;
    await transaction.save();

    res.status(200).json({
      status: 'success',
      data: {
        transaction,
        response
      }
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: error.message
    });
  }
};