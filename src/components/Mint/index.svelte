<script lang="ts">
  import SaleGraph from './SaleGraph.svelte'
  import MintBox from './MintBox.svelte'
</script>

<div class="container" id="mint">
  <div class="container-title">CxNxD 萬 Mint</div>
  <div class="container-paragraph">
    You can Mint Clones Never Die 萬. The Mint price of one clone is 45 MATIC. If you don't have a MATIC, check here.
  </div>
  <br />
  <div class="container-content">
    <div class="mintbox">
      <MintBox />
    </div>
    <div class="mintbox">
      <SaleGraph />
    </div>
  </div>
</div>

<hr class="divide-line" />

<style lang="scss">
  .container {
    flex-direction: column;
  }
  .container-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
  }

  .mintbox {
    width: 55%;
    height: auto;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 768px) {
    .mintbox {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      height: auto;
    }
  }
</style>
