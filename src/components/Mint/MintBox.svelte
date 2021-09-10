<script lang="ts">
  import { isConnect, myAddress, contractAddress, signer, totalSupply, myBalance, cost } from '@/stores'
  import PConnect from '@/components/PolygonConnect/index.svelte'
  import CNDV2Tabi from '@/data/abi/ClonesNeverDieV2Test.json'
  import { ethers } from 'ethers'

  let mintValue: any
  let payableMatic: any

  $: $myAddress

  function calcPayValue(num: number) {
    const oneValue = 0.03
    payableMatic = oneValue * num
    return payableMatic.toString()
  }

  async function mintClone() {
    let overrides = {
      value: ethers.utils.parseEther(calcPayValue(mintValue))
    }
    const contract = await new ethers.Contract($contractAddress, CNDV2Tabi, $signer)
    const transaction = await contract.mintClone(mintValue, overrides)
    await transaction.wait()
    const ts = await contract.totalSupply()
    $totalSupply = ts
  }
</script>

<div class="mintbox">
  <div class="boxcontent">
    <div class="subtitle"><b>Your Address</b></div>
    <input type="text" readonly value="{$myAddress}" disabled="{!$isConnect}" />
    <div class="subtitle"><b>Number of mint limit (1-20)</b></div>
    <input type="number" bind:value="{mintValue}" disabled="{!$isConnect}" />
    <div class="subcontent">notice: 1 Clone = 30 MATIC</div>
    <div class="subcontent">
      Your MATIC balance: {$myBalance}
    </div>
    <div class="subcontent">
      Cost: {$cost}
    </div>
    {#if $isConnect && mintValue}
      <div class="subbtn" on:click="{mintClone}">
        <b> MINT </b>
      </div>
    {:else if $isConnect}
      <div class="unactive-subbtn">
        <b> MINT </b>
      </div>
    {:else}
      <div class="subbtn">
        <PConnect />
      </div>
    {/if}
  </div>
</div>

<div class="modal">
  <div class="modal_body">Modal</div>
</div>

<style lang="scss">
  .mintbox {
    display: block;
    width: 100%;
    height: 100%;
    border: 2px solid $highlight-color;
    box-sizing: border-box;
    border-radius: 10px;
  }

  .modal {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    background-color: rgba(0, 0, 0, 0.6);
  }

  .modal_body {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 250px;
    height: 60vh;
    padding: 40px;
    text-align: center;
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
    transform: translateX(-50%) translateY(-50%);
  }

  .boxcontent {
    padding: 30px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }

  .subcontent {
    width: 100%;
    font-size: 16px;
    margin-bottom: 25px;
  }

  .unactive-subbtn {
    width: 100%;
    background-color: lightgray;
    font-size: 20px;
    border-radius: 10px;
    text-align: center;
    padding: 10px;
    box-sizing: border-box;
  }
  .subbtn {
    width: 100%;
    background-color: $highlight-color;
    font-size: 20px;
    border-radius: 10px;
    text-align: center;
    padding: 10px;
    box-sizing: border-box;
    cursor: pointer;
  }

  .subbtn:active {
    opacity: 0.7;
  }

  input {
    width: 100%;
    height: 40px;
    font-size: 20px;
    padding: 10px;
    margin-bottom: 30px;
    display: flex;
    box-sizing: border-box;
  }
</style>
