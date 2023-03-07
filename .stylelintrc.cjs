module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-recess-order",
    "stylelint-prettier/recommended",
  ],
  plugins: ["stylelint-scss"],
  // overrides: [
  //   {
  //     files: ["**/*.(scss|css|vue|html)"],
  //     customSyntax: "postcss-scss",
  //   },
  //   {
  //     files: ["**/*.(html|vue)"],
  //     customSyntax: "postcss-html",
  //   },
  // ],
  rules: {
    "prettier/prettier": true,
    "rule-empty-line-before": null,
  },
};
