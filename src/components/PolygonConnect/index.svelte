<script lang="ts">
  import { onDestroy } from 'svelte'
  import { ethers } from 'ethers'
  import { isConnect, myAddress, provider, signer } from '@/stores'
  const ethereum: any | undefined = (window as any).ethereum

  onDestroy(() => {
    $: if ($isConnect === true) {
      getInfo()
    }
  })

  async function requestAccount() {
    await ethereum.request({ method: 'eth_requestAccounts' })
    $isConnect = true
  }

  async function addChain() {
    await ethereum.request({
      method: 'wallet_addEthereumChain',
      params: [
        {
          chainId: '0x4bd',
          chainName: 'Popcateum',
          nativeCurrency: {
            name: 'Popcat',
            symbol: 'POP',
            decimals: 18
          },
          rpcUrls: ['https://dataseed.popcateum.org'],
          blockExplorerUrls: ['https://explorer.popcateum.org']
        }
      ]
    })
    // await ethereum.request({
    //   method: 'wallet_addEthereumChain',
    //   params: [
    //     {
    //       chainId: '0x89',
    //       chainName: 'Matic Mainnet',
    //       nativeCurrency: {
    //         name: 'Matic',
    //         symbol: 'MATIC',
    //         decimals: 18
    //       },
    //       rpcUrls: ['https://rpc-mainnet.maticvigil.com/'],
    //       blockExplorerUrls: ['https://polygonscan.com/']
    //     }
    //   ]
    // })
  }

  async function getInfo() {
    $provider = new ethers.providers.Web3Provider(ethereum)
    $signer = $provider.getSigner()
    await getAddress()
  }

  async function getAddress() {
    $myAddress = await $signer.getAddress()
  }

  function changed() {
    ethereum.on('accountsChanged', async () => {
      await getAddress()
    })
  }

  async function connect() {
    await addChain()
    requestAccount()
    changed()
  }
</script>

<div on:click="{connect}">
  <b> Wallet Connect </b>
</div>
