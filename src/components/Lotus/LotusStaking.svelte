<script lang="ts">
</script>

<div class="sub-content">
  <div class="sub-title"><b>Lotus Staking</b></div>
  <div class="sub-item">
    <div class="sub-item-wrap">
      <div class="sub-item-title"><b>Staking</b></div>
      <div class="sub-item-explain">Send clones to Lotus. Please select a clone to stake and press the button.</div>
      <div class="sub-item-title"><b>My Clones</b></div>
      <ul class="sub-item-list-head">
        <li class="list-item">
          <div class="item-number">Select</div>
          <div class="item-number">No.</div>
          <div class="item-name">Name</div>
          <div class="item-id">Token ID</div>
        </li>
      </ul>
      <ul class="sub-item-list">
        <li class="list-item">
          <input type="checkbox" name="asd" />
          <div class="item-number">1</div>
          <div class="item-name">CxNxD #0001</div>
          <div class="item-id">1</div>
        </li>
      </ul>
      <div class="sub-selected">Selected ID: 1, 2, 3, 4, 5</div>
      <div class="sub-btn">Staking</div>
    </div>
  </div>
</div>

<style lang="scss">
  .sub-content {
    width: 100%;
    margin-bottom: 40px;
  }

  .sub-title {
    color: $highlight-color;
    font-size: 1.2rem;
    margin-bottom: 20px;
  }

  .sub-item {
    border: 2px solid $highlight-color;
    height: auto;
    box-sizing: border-box;
    border-radius: 10px;
  }

  .sub-item-wrap {
    padding: 30px;
    display: flex;
    height: 80%;
    flex-direction: column;
    justify-content: space-around;
  }

  .sub-item-title {
    font-size: 1.6rem;
    margin-bottom: 10px;
  }

  .sub-item-explain {
    font-size: 0.9rem;
    margin-bottom: 20px;
  }

  .sub-item-list {
    padding: 10px;
    height: 200px;
    overflow: scroll;
  }

  .sub-item-list-head {
    box-sizing: border-box;
    border-radius: 10px;
  }

  .list-item {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    font-size: 1rem;
  }

  .sub-btn {
    width: 100%;
    background-color: $highlight-color;
    font-size: 20px;
    border-radius: 10px;
    text-align: center;
    padding: 10px;
    box-sizing: border-box;
    cursor: pointer;
  }

  .sub-selected {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  @media screen and (max-width: 768px) {
    .sub-item-wrap {
      padding: 15px;
    }
    .list-item {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 10px;
      font-size: 0.7rem;
    }
  }
</style>
