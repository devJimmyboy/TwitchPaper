import './style.css'
import type { WallpaperPropertyListener } from 'wp-engine'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`

const wallpaperPropertyListener: WallpaperPropertyListener<{
  examplecolor: 'color'
  examplebool: 'bool'
  examplecombo: 'combo'
  exampletextinput: 'textinput'
  examplefile: 'file'
  exampledirectory: 'directory'
}> = {
  applyUserProperties(properties) {
    console.log(properties.examplebool)
  },
}
window.wallpaperPropertyListener = wallpaperPropertyListener
