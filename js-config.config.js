module.exports = {
  interactiveMessageConfig: {
    fetchMyIssuesParam: {
      owner: "bird-studio",
      repo: "eslint-config",
      state: "open",
      assignUser: "akira-toriyama",
    },
    scope: [
      ...require("fs")
        .readdirSync("./preset")
        .map((v) => ({
          description: v,
          value: v,
        })),
      { description: "other: Other directory", value: "other" },
    ],
  },
};
