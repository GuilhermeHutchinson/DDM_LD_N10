
const { getDefaultConfig } = require('expo/metro-config');

const  defaultConfig = getDefaultConfig(__dirname);
const config = getDefaultConfig("cjs");

module.exports = config;
