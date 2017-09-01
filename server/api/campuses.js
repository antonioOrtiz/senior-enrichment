"use strict";
const router = require("express").Router();
const { Campus } = require("../../db/models");

// GET api/campuses
router.get("/", function(req, res, next) {
  Campus.findAll()
    .then(function(campuses) {
      return res.json(campuses);
    })
    .catch(next);
});

// GET /api/campuses/:campusId
router.get("/:campusId", function(req, res, next) {
  Campus.findById(eq.params.campusId)
    .then(function(campus) {
      return res.json(campus);
    })
    .catch(next);
});

// POST /api/campuses/
router.post("/", function(req, res, next) {
  Campus.create(req.body)
    .then(function(campus) {
      return res.json(campus);
    })
    .catch(next);
});

// PUT /api/campuses/:campusId
router.put("/:campusId", function(req, res, next) {
  Campus.findById(req.params.campusId)
    .then(function(campus) {
      return campus.update(req.body);
    })
    .then(function(campus) {
      return res.json(campus);
    })
    .catch(next);
  //Campus.update(req.body, {
  //   where : {
  //       id: req.parms.id
  //   },
  //   returning: true
  // })
});

router.delete("/:campusId", function(req, res, next) {
  Campus.destroy({
    where: {
      campus_id: req.params.campusId
    }
  })
    .then(function() {
      res.status(204).end();
    })
    .catch(next);
});

module.exports = router;
