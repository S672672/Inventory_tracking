const { check, validationResult } = require('express-validator');

const validateProduct = [
  check('name').not().isEmpty().withMessage('Product name is required'),
  check('price').isFloat({ gt: 0 }).withMessage('Product price must be greater than 0'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = { validateProduct };
