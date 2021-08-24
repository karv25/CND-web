<script lang="ts">
  let perc: number = 5
  let perc2: any = `width: ${perc}%;`
</script>

<div class="subtitle">
  <b>Mint progress</b>
</div>

<div class="progressbar">
  <div class="in-progressbar" style={perc2}>{perc}%</div>
</div>
<div class="amount">
  500 / 10,000 Clones
</div>

<div id="mintdata"></div>

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
