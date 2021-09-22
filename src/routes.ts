import Home from './pages/Home/index.svelte'
import Mint from './pages/Mint/index.svelte'
import Wallet from './pages/Wallet/index.svelte'
import Lotus from './pages/Lotus/index.svelte'
import About from './pages/About/index.svelte'

import NotFound from './pages/NotFound/index.svelte'

export default {
  '/': Home,
  '/wallet': Wallet,
  '/lotus': Lotus,
  '/mint': Mint,
  '/about': About,
  // Catch-all, must be last
  '*': NotFound,
}