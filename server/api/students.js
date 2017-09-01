"use strict";
const router = require("express").Router();
const { Student } = require("../../db/models");

// GET api/students
router.get("/", function(req, res, next) {
  Student.findAll()
    .then(function(students) {
      return res.json(students);
    })
    .catch(next);
});

// GET api/students/:studentId
router.get("/:studentId", function(req, res, next) {
  Student.findById(req.params.studentId) // find by id? Look into docs
    .then(function(student) {
      return res.json(student);
    })
    .catch(next);
});

// POST api/students
router.post("/", function(req, res, next) {
  Student.create(req.body)
    .then(function(student) {
      return res.json(student);
    })
    .catch(next);
});

// PUT api/students/:studentId
router.put("/:studentId", function(req, res, next) {
  Student.findById(req.params.studentId)
    .then(function(student) {
      return res.json(student.update(req.body));
    })
    .catch(next);
});

// DELETE /api/students/:studentId
router.delete("/:studentId", function(req, res, next) {
  Student.destroy({
    where: {
      id: req.params.studentId
    }
  })
    .then(function() {
      res.status(204).end();
    })
    .catch(next);
});

module.exports = router;
