const express = require("express");
const asyncHandler = express("express-async-handler");
const getContacts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get all Contacts" });
});

const createContact = asyncHandler(async (req, res) => {
  console.log("The request body is: ", req.body);
  const { name, email, phoneno } = req.body;
  if (!name || !email || !phoneno) {
    res.status(400);
    throw new Error("All fields are Mandatory!!");
  }
  res.status(201).json({ message: "Create Contact" });
});

const getContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Get contact for ${req.params.id}` });
});

const updateContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update contact for ${req.params.id}` });
});

const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete contact for ${req.params.id}` });
});

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
