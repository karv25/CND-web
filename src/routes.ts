import Home from './pages/Home/index.svelte'
import About from './pages/About/index.svelte'
import Gallery from './pages/Gallery/index.svelte'
import NotFound from './pages/NotFound/index.svelte'

export default {
  '/': Home,
  '/about': About,
  '/gallery': Gallery,

  // Catch-all, must be last
  '*': NotFound,
}