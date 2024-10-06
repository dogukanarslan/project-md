import ghpages from "gh-pages"

ghpages.publish(
  "out",
  { nojekyll: true, message: "Auto-generated commit", branch: "deploy" },
  (err) => console.error("err", err)
)
