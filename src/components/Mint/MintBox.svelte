<script lang="ts">
</script>

<div class="mintbox">
  <div class="boxcontent">
    <div class="subtitle"><b>Your Address</b></div>
    <input type="text" readonly value="0x6sd5f4s3d5f43sd5f43s5df43sd5f43sd5f4as565165165165da" />
    <div class="subtitle"><b>Number of mint limit (1-20)</b></div>
    <input type="text" />
    <div class="subcontent">
      notice: 1 Clone = 30 MATIC 어쩌구 저쩌구 저쩌구notice: 1 Clone = 30 MATIC 어쩌구 저쩌구 저쩌구notice: 1 Clone = 30
      MATIC 어쩌구 저쩌구 저쩌구
    </div>
    <div class="subbtn">
      <b> MINT </b>
    </div>
  </div>
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
