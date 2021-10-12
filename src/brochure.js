import { setInnerHTML } from "$/dev.js"
import template from "/brochure.html?raw"

async function main() {
  const res = await fetch("/brochure.html")
  let text = res.ok || template
  if (text) text = await res.text()

  const app = document.getElementById("app")
  setInnerHTML(app, text)
}

main()

const app = document.getElementById("app")
setInnerHTML(app, brochureTemplate)
