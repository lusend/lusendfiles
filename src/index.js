import { setInnerHTML } from "$/dev.js"

async function main() {
  const modules = Object.keys(import.meta.glob("/public/*.html")).map(
    (module) =>
      module
        .replace("/public", "")
        .replace(".html", "")
        .replace("/brochure", "/brochure/")
  )
  const path = window.location.pathname
  const res = await fetch(path + ".html")
  let text = res.ok && modules.includes(path)

  if (text) text = await res.text()

  const app = document.getElementById("app")
  setInnerHTML(
    app,
    text ||
      `<p><code>${path}</code> does not exist. Select from the following: </p>
      <pre>${modules
        .map((module) => module)
        .map((module) => `<a href="${module}">${module}</a>`)
        .join("\n")}</pre>`
  )
}

main()
