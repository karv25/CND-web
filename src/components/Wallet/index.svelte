<script lang="ts">
  import PConnect from '@/components/PolygonConnect/index.svelte'
  import { isConnect, myAddressShort } from '@/stores'
</script>

<div class="container">
  <div class="container-title">CxNxD Wallet</div>
  <div class="container-content">
    <div class="container-paragraph">
      It's a wallet where you can check your clones and $Nectar.
      <br />
      Check it out now!
    </div>
    <div class="sub-content">
      {#if $isConnect}
        <div class="connected">
          <b>
            {$myAddressShort}
          </b>
        </div>
      {:else}
        <div class="connectBtn">
          <PConnect />
        </div>
      {/if}
    </div>
    <div class="sub-content">
      <div class="sub-title"><b>$Nectar</b></div>
      <div class="sub-item">My $Nectar: 0</div>
    </div>
    <div class="sub-content">
      <div class="sub-title"><b>CxNxD 萬</b></div>
      <div class="sub-item">My Clones: 100</div>
      <div class="sub-list">
        <div class="sub-list-item">
          <img
            class="item-image"
            src="https://gateway.pinata.cloud/ipfs/QmdNtjM6jSzMTbczjPpiv1TY4WugxM3CqxadiTHAtrAy9p/clone-12.jpg"
            alt="img"
          />
          <div class="item-name">Token Id: 0</div>
          <div class="item-name">Name: CxNxD #0002</div>
        </div>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .container-content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    min-height: 80vh;
    justify-content: space-between;
    align-items: flex-start;
  }

  .connected {
    width: 200px;
    background-color: $highlight-color;
    font-size: 20px;
    border-radius: 10px;
    text-align: center;
    padding: 10px;
    box-sizing: border-box;
  }
  .connectBtn {
    width: 200px;
    background-color: $highlight-color;
    font-size: 20px;
    border-radius: 10px;
    text-align: center;
    padding: 10px;
    box-sizing: border-box;
    cursor: pointer;
  }

  .container-paragraph {
    width: 60%;
  }
  .sub-content {
    width: 100%;
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

    .container-paragraph {
      width: 100%;
    }
  }
</style>
