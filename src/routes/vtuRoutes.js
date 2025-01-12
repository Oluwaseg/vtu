const express = require('express');
const { protect, authorize } = require('../middleware/auth');
const vtuController = require('../controllers/vtuController');
const router = express.Router();

/**
 * @swagger
 * /vtu/airtime:
 *   post:
 *     summary: Purchase airtime
 *     tags: [VTU Services]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - phoneNumber
 *               - amount
 *               - provider
 *             properties:
 *               phoneNumber:
 *                 type: string
 *                 example: "2348012345678"
 *               amount:
 *                 type: number
 *                 example: 1000
 *               provider:
 *                 type: string
 *                 enum: [MTN, AIRTEL, GLO, 9MOBILE]
 *     responses:
 *       200:
 *         description: Airtime purchase successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 data:
 *                   type: object
 *                   properties:
 *                     transaction:
 *                       type: object
 *                     response:
 *                       type: object
 */
router.post('/airtime', protect, authorize('user', 'reseller', 'admin'), vtuController.buyAirtime);

/**
 * @swagger
 * /vtu/data:
 *   post:
 *     summary: Purchase data bundle
 *     tags: [VTU Services]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - phoneNumber
 *               - bundleCode
 *               - provider
 *             properties:
 *               phoneNumber:
 *                 type: string
 *                 example: "2348012345678"
 *               bundleCode:
 *                 type: string
 *                 example: "MTN-1GB"
 *               provider:
 *                 type: string
 *                 enum: [MTN, AIRTEL, GLO, 9MOBILE]
 *     responses:
 *       200:
 *         description: Data bundle purchase successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 data:
 *                   type: object
 *                   properties:
 *                     transaction:
 *                       type: object
 *                     response:
 *                       type: object
 */
router.post('/data', protect, authorize('user', 'reseller', 'admin'), vtuController.buyDataBundle);

module.exports = router;