<script lang="ts">
  import SaleGraph from './SaleGraph.svelte'
  import MintBox from './MintBox.svelte'
</script>

<div class="container" id="mint">
  <div class="container-title">CxNxD V2 Mint</div>
  <div class="container-paragraph">
    클론즈 네버 다이의 버전 2를 민트할 수 있습니다. 클론즈 하나당 가격은 30매틱입니다. 매틱이 없다면 아래 방법을
    참고해서 매틱을 얻을 수 있습니다.
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
