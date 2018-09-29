const express = require('express');
const router = express.Router();

router.get('/upload', function (req, res, next) {
    res.json({
        test: 'cool'
    });
    res.end();
});

module.exports = router;