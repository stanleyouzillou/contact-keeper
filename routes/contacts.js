const express = require("express");
const router = express.Router();

// CRUD routes

// @route GET api/contacts
// @desc Get all users contact
// @access Private

router.get("/", (req, res) => {
  res.send("Get all contacts");
});

// @route POST api/contacts
// @desc add new contact
// @access Private

router.post("/", (req, res) => {
  res.send("Add contact");
});

// @route PUT api/contacts/:id
// @desc Update contact
// @access Private

router.put("/:id", (req, res) => {
  res.send("Update Contact");
});

// @route delete api/contacts/:id
// @desc Delete contact
// @access Private

router.delete("/:id", (req, res) => {
  res.send("Delete Contact");
});

module.exports = router;
