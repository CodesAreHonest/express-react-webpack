module.exports = {
    "plugins": [ "react" ],
    "extends": [
      "eslint:recommended",
      "plugin:react/recommended"
    ],
    "parser": "babel-eslint",
    "rules": {
        "no-console": 0,
        "no-undef": 0
    },
    "settings": {
      "react": {
        "pragma": "React",
        "version": "detect"
      }
    }
  };