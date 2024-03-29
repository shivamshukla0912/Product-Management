const mongoose = require("mongoose");

//validations---------------------->>>

//Value Validation
const isEmpty = function (value) {
  if (typeof value === "undefined" || value === null) return false;
  if (typeof value === "string" && value.trim().length === 0) return false;
  return true;
};

// Vlidation for objectId
const isValidObjectId = (objectId) => {
  return mongoose.Types.ObjectId.isValid(objectId);
};

//Name Validation
const isValidName = function (name) {
  const nameRegex = /^[a-zA-Z ]+$/;
  return nameRegex.test(name);
};

// Email Validation
const isValidEmail = function (email) {
  const emailRegex =
    /^[a-z0-9][a-z0-9-_\.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/;
  return emailRegex.test(email);
};

//Phone Validation
const isValidPhone = function (phone) {
  const phoneRegex = /^[6-9]\d{9}$/;
  return phoneRegex.test(phone);
};

// pincode Validation
const isValidPincode = function (pincode) {
  const pincodeRegex = /^[1-9][0-9]{5}$/;
  return pincodeRegex.test(pincode);
};

//validation for Input Body
const isValidInputBody = function (object) {
  return Object.keys(object).length > 0;
};

const isValidStreet = function (street) {
  let streets = /^[#.0-9a-zA-Z\s,-]+$/;
  return streets.test(street);
};

const isValidFile = (img) => {
  const regex = /(\/*\.(?:png|gif|webp|jpeg|jpg))/.test(img)
  return regex
}
//Price Validation
const isValidPrice = function (price) {
  return /^[1-9]\d{0,7}(?:\.\d{1,2})?$/.test(price);
};
//Valid Sizes
const validSize = function (size) {
  return ["S", "XS", "M", "X", "L", "XXL", "XL"].includes(size);
};

//Style Validation
const isValidStyle = function (value) {
  return /^[a-zA-Z _.-]+$/.test(value);
};

//Price validation
const validPrice = function (price) {
  return /^\d{0,8}(\.\d{1,4})?$/.test(price);
};

//status validation
const isValidStatus = (value) => 
{ return ['pending', 'completed', 'cancelled'].indexOf(value) !== -1 }

//number validation
const isNumber = function (value) {
  if (typeof (value) === 'undefined' || typeof (value) === 'null') return false
  if (typeof (value) === 'number') return true

}


module.exports = {
  isEmpty,
  validSize,
  isValidName,
  isValidEmail,
  isValidPhone,
  isValidInputBody,
  isValidPincode,
  isValidObjectId,
  isValidStreet,
  isValidFile,
  isValidPrice,
  isValidStyle,
  validPrice,
  isValidStatus,isNumber
};

