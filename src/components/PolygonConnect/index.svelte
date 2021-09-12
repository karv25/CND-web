<script lang="ts">
  import { onDestroy } from 'svelte'
  import { ethers } from 'ethers'
  import {
    isConnect,
    myAddress,
    myAddressShort,
    myBalance,
    provider,
    signer,
    NectarContract,
    myNectarBalance,
    CNDV2Contract,
    myCNDV2Balance,
    myCNDV2List
  } from '@/stores'
  import NectarAbi from '@/data/abi/Nectar.json'
  import CNDV2Abi from '@/data/abi/ClonesNeverDieV2.json'

  const ethereum: any | undefined = (window as any).ethereum
  let decimals = 1e18

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
    // await ethereum.request({
    //   method: 'wallet_addEthereumChain',
    //   params: [
    //     {
    //       chainId: '0x4bd',
    //       chainName: 'Popcateum',
    //       nativeCurrency: {
    //         name: 'Popcat',
    //         symbol: 'POP',
    //         decimals: 18
    //       },
    //       rpcUrls: ['https://dataseed.popcateum.org'],
    //       blockExplorerUrls: ['https://explorer.popcateum.org']
    //     }
    //   ]
    // })
    await ethereum.request({
      method: 'wallet_addEthereumChain',
      params: [
        {
          chainId: '0x89',
          chainName: 'Polygon Mainnet',
          nativeCurrency: {
            name: 'Matic',
            symbol: 'MATIC',
            decimals: 18
          },
          rpcUrls: ['https://polygon-rpc.com/'],
          blockExplorerUrls: ['https://polygonscan.com/']
        }
      ]
    })
  }

  async function getInfo() {
    $provider = new ethers.providers.Web3Provider(ethereum)
    $signer = $provider.getSigner()
    await getAddress()
    await getBalance()
    await getNectarBalance()
    await getCNDV2Balance()
  }

  async function getAddress() {
    $myAddress = await $signer.getAddress()
    $myAddressShort = `${$myAddress.slice(0, 6)}...${$myAddress.slice(-4)}`
  }

  async function getBalance() {
    $myBalance = ethers.utils.formatEther(await $provider.getBalance($myAddress))
  }

  function changed() {
    ethereum.on('accountsChanged', async () => {
      await getAddress()
      await getBalance()
      await getNectarBalance()
      await getCNDV2Balance()
    })
  }

  async function connect() {
    if (ethereum === undefined) {
      alert('There is no Metamask. Please install Metamask.')
      return false
    }
    await addChain()
    requestAccount()
    changed()
  }

  async function getNectarBalance() {
    const contract = await new ethers.Contract($NectarContract, NectarAbi, $signer)
    let _myNectarBalance = await contract.balanceOf($myAddress)
    $myNectarBalance = _myNectarBalance / decimals
  }

  async function getCNDV2Balance() {
    let _myCNDV2List = []
    const contract = await new ethers.Contract($CNDV2Contract, CNDV2Abi, $signer)
    let _myCNDV2Balance = await contract.balanceOf($myAddress)
    for (let i = 0; i < _myCNDV2Balance; i++) {
      let tokenId = await contract.tokenOfOwnerByIndex($myAddress, i)
      _myCNDV2List.push(tokenId)
    }
    $myCNDV2Balance = _myCNDV2Balance
    $myCNDV2List = _myCNDV2List
  }
</script>

<div on:click="{connect}">
  <b> Wallet Connect </b>
</div>
