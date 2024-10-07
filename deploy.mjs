import ghpages from "gh-pages"

ghpages.publish(
  "out",
  {
    nojekyll: true,
    message: "Auto-generated commit",
    branch: "deploy",
    history: false
  },
  (err) => console.error("err", err)
)
