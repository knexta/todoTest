const express = require("express");

const { getTodos, getTodo, createTodo, updateTodo, deleteTodo } = require("../controller/todo.controller");

const router = express.Router();

router.get("/", getTodos);

router.get("/:id", getTodo);

router.post("/", createTodo);

router.patch("/:id", updateTodo);

router.delete("/:id", deleteTodo);

module.exports = router;
