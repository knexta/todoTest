const { _findAll, _find, _create, _update, _delete } = require("../services/todo.service");

exports.getTodos = async (req, res, next) => {
  try {
    let rows = await _findAll();

    if (!rows.status) return next(rows.data);

    res.status(200).json({ status: true, data: rows.data });
  } catch (error) {
    next(error);
  }
};

exports.getTodo = async (req, res, next) => {
  try {
    let { id } = req.params;

    let rows = await _find({ where: { id } });

    if (!rows.status) return next(rows.data);

    res.satus(200).json({ status: true, data: rows.data });
  } catch (error) {
    next(error);
  }
};

exports.createTodo = async (req, res, next) => {
  try {
    let { name } = req.body;

    let rows = await _create({ name });

    if (!rows.status) return next(rows.data);

    res.status(201).json({ status: true, data: rows.data });
  } catch (error) {
    next(error);
  }
};

exports.updateTodo = async (req, res, next) => {
  try {
    let { id } = req.params;
    let fields = req.body;

    let rows = await _update({ ...fields }, { where: { id } });

    if (!rows.status) return next(rows.data);

    res.status(200).json({ status: true, data: rows.data });
  } catch (error) {
    next(error);
  }
};

exports.deleteTodo = async (req, res, next) => {
  try {
    let { id } = req.params;

    let rows = await _delete({ where: { id } });

    if (!rows.status) return next(rows.data);

    res.status(200).json({ status: true, data: rows.data });
  } catch (error) {
    next(error);
  }
};
