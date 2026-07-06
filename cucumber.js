module.exports = {
  default: {
    formatOptions: {
      snippetInterface: "async-await"
    },

    requireModule: [
      "ts-node/register"
    ],

    require: [
    "src/step-definitions/**/*.ts",
    "src/hooks/**/*.ts"

    ],

    paths: [
      "src/features/**/*.feature"
    ],

    publishQuiet: true,

    dryRun: false,

    format: [
      "progress-bar",
      "html:reports/cucumber-report.html",
      "json:reports/cucumber-report.json",
      "rerun:rerun/rerun.txt"
    ],

    parallel: 1
  }
};