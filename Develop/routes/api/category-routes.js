const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }]
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.get('/:id', (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }]
    });

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.post('/', (req, res) => {
  try {
    const categoryData = await Category.create({
      category_name: req.body.name,
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.put('/:id', (req, res) => {
  try {
    const categoryData = await Category.update({ category_name: req.body.name }, { where: { id: req.params.id } });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.delete('/:id', (req, res) => {
  try {
    const categoryData = await Category.destroy({ where: { id: req.params.id } });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(404).json(err);
  }
});

module.exports = router;
