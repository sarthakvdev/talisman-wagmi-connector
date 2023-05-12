'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./talismn-wagmi-connector.cjs.prod.js");
} else {
  module.exports = require("./talismn-wagmi-connector.cjs.dev.js");
}
