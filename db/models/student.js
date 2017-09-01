'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')

//hasOne, hasMany, belongsTo, belongsToMany Sequelize methods

module.exports = db.define('student', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,

  },

  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },

  campus: {
    type: Sequelize.STRING,
    allowNull: false,

  }
})
