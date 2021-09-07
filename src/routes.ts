import Home from './pages/Home/index.svelte'
import Wallet from './pages/Wallet/index.svelte'
import Gallery from './pages/Gallery/index.svelte'
import NotFound from './pages/NotFound/index.svelte'

export default {
  '/': Home,
  '/wallet': Wallet,
  '/gallery': Gallery,
  // Catch-all, must be last
  '*': NotFound,
}