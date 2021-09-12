<script lang="ts">
  import { myCNDV2Balance, myCNDV2List, signer } from '@/stores'

  function imgApi(i: any) {
    let imgLink = `https://gateway.pinata.cloud/ipfs/QmdNtjM6jSzMTbczjPpiv1TY4WugxM3CqxadiTHAtrAy9p/clone-${i}.jpg`
    return imgLink
  }
</script>

<div class="sub-title"><b>CxNxD 萬</b></div>
<div class="sub-item">My Clones: {$myCNDV2Balance}</div>
<div class="sub-list">
  {#if $signer !== null && $myCNDV2Balance !== 0}
    {#each $myCNDV2List as item}
      <div class="sub-list-item">
        <!-- <img class="item-image" src="{imgApi(item)}" alt="img" /> -->
        <div class="item-name">Token Id: {item}</div>
        <div class="item-name">Name: CxNxD #{item}</div>
      </div>
    {/each}
  {:else}
    <div class="announcement">Please connect your wallet</div>
  {/if}
</div>

<!-- <div on:click="{getCNDV2Balance}">button</div> -->
<style lang="scss">
  .announcement {
    font-size: 1.2rem;
  }
  .sub-title {
    font-size: 1.3rem;
    margin-bottom: 20px;
    color: $highlight-color;
  }

  .sub-item {
    font-size: 1rem;
    margin-bottom: 30px;
  }

  .sub-list {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  .sub-list-item {
    width: 24%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid $highlight-color;
    border-radius: 10px;
    box-sizing: border-box;
  }
  .item-image {
    width: 100%;
    margin-bottom: 20px;
    border-radius: 10px;
  }

  .item-name {
    font-size: 0.9rem;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 768px) {
    .sub-list-item {
      width: 49%;
      padding: 10px;
      margin-bottom: 10px;
      border: 1px solid $highlight-color;
      border-radius: 10px;
      box-sizing: border-box;
    }
  }
</style>
