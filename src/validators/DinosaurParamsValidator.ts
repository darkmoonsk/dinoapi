import { query } from "express-validator";

const allowedParams = [
  "weight",
  "height",
  "length",
  "diet",
  "period",
  "region",
  "type",
  "isPopular",
];

export const dinosaurParamsValidators = [
  query("weight").optional().isString().trim(),
  query("height").optional().isString().trim(),
  query("length").optional().isString().trim(),
  query("diet").optional().isString().trim(),
  query("period").optional().isString().trim(),
  query("region").optional().isString().trim(),
  query("type").optional().isString().trim(),
  query("isPopular").optional().isBoolean(),
  query().custom((value, { req }) => {
    const keys = Object.keys(req.query || {});
    const invalidKeys = keys.filter((key) => !allowedParams.includes(key));
    if (invalidKeys.length > 0) {
      throw new Error(`Invalid query parameter(s): ${invalidKeys.join(", ")}`);
    }
    return true;
  }),
  query().custom((value, { req }) => {
    const keys = Object.keys(req.query || {});
    const keysWithSpaces = keys.filter((key) => key.includes(' '));
    if (keysWithSpaces.length > 0) {
      throw new Error(`Query parameters cannot contain spaces: ${keysWithSpaces.join(', ')}`);
    }
    return true;
 }),
];

