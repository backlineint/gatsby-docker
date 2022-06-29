const fs = require("fs")

exports.onPostBuild = ({ store }) => {
  const { pages, functions = [] } = store.getState()
  console.log("functions", functions)
  const run = []

  pages.forEach(page => {
    if (page.mode === "SSR" || page.mode === "DSG") {
      const pageDataPath = `/page-data${page.path}/page-data.json`
      run.push(page.path, pageDataPath.replace("//", "/"))
    }
  })

  functions.forEach(func => {
    run.push(`/api/${func.functionRoute}`)
  })

  console.log("Dynamic Routes:", run)

  const manifest = { run: run }
  const file = fs.createWriteStream("pantheon-manifest.json")

  file.on("error", err => {
    /* error handling */
  })
  file.write(JSON.stringify(manifest) + "\n")
  file.end()
}
