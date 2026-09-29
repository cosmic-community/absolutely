const fs = require('fs')
const path = require('path')

const SCRIPT_TAG = '<script src="/dashboard-console-capture.js"></script>'

function findHtmlFiles(dir, files) {
  files = files || []
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      findHtmlFiles(fullPath, files)
    } else if (entry.name.endsWith('.html')) {
      files.push(fullPath)
    }
  }
  return files
}

function injectScript() {
  const buildDir = path.join(process.cwd(), '.next')
  if (!fs.existsSync(buildDir)) {
    console.log('No .next directory found, skipping console capture injection.')
    return
  }
  const htmlFiles = findHtmlFiles(buildDir)
  htmlFiles.forEach((file) => {
    const content = fs.readFileSync(file, 'utf8')
    if (!content.includes('dashboard-console-capture.js') && content.includes('</head>')) {
      const updated = content.replace('</head>', `${SCRIPT_TAG}</head>`)
      fs.writeFileSync(file, updated, 'utf8')
    }
  })
  console.log(`Console capture injection checked ${htmlFiles.length} file(s).`)
}

injectScript()