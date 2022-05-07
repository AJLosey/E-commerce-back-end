const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product }]
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }]
    });

    res.status(200).json(tagData);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const Data = await Tag.create({
      tag_name: req.body.name,
    });
    res.status(200).json(Data);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const tagData = await Tag.update({ tag_name: req.body.name }, { where: { id: req.params.id } });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const tagData = await Tag.destroy({ where: { id: req.params.id } });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(404).json(err);
  }
});

module.exports = router;
