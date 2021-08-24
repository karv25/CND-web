<script lang="ts">
  import { totalSupply, contractAddress } from '@/stores'
  import { onMount } from 'svelte'
  import { ethers } from 'ethers'
  import CNDV2Tabi from '@/data/abi/ClonesNeverDieV2Test.json'

  const provider = new ethers.providers.JsonRpcProvider('https://dataseed.popcateum.org')
  // const provider = new ethers.providers.JsonRpcProvider('https://rpc-mainnet.maticvigil.com/')

  let percent: any
  let percentWidth: any = `width: ${percent}%;`
  $: percentWidth = `width: ${percent}%;`

  $: percent = $totalSupply / 100
  onMount(() => {
    getTotalSupply()
  })

  async function getTotalSupply() {
    const contract = new ethers.Contract($contractAddress, CNDV2Tabi, provider)
    $totalSupply = parseInt(await contract.totalSupply())
    percent = $totalSupply / 100
  }
</script>

<div class="subtitle">
  <b>Mint progress</b>
</div>

<div class="progressbar">
  <div class="in-progressbar" style="{percentWidth}">{percent}%</div>
</div>
<div class="amount">{$totalSupply} / 10,000 Clones</div>

<style lang="scss">
  .progressbar {
    background-color: lightgray;
    width: 100%;
    border-radius: 13px;
    margin-bottom: 10px;
  }

  .in-progressbar {
    background-color: $highlight-color;
    height: 20px;
    border-radius: 10px;
    text-align: center;
    /* padding: 3px; */
    font-size: 20px;
    padding: 3px 0px;
  }

  .amount {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
</style>
