const Master = require('../models/master');

exports.getMaster = async (req, res) => {
    try {
        const master = await Master.findOne({ email: req.body.email });
        res.json(master);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};