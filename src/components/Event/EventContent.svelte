<script lang="ts">
  export let progress: boolean
  export let name: string
  export let description: string
  export let img: string
</script>

<div class="event-box">
  <img class="event-img" src="{img}" alt="event-img" />
  <div class="event-sub-box">
    {#if progress}
      <div class="event-mark">진행중</div>
    {:else}
      <div class="event-mark">종료</div>
    {/if}
    <div class="event-title">{name}</div>
    <div class="event-content">
      {description}
    </div>
  </div>
</div>

<style lang="scss">
  .event-box {
    width: 32%;
    box-sizing: border-box;
    border: 1px solid lightgray;
    border-radius: 10px;
    margin-bottom: 10px;
  }

  .event-sub-box {
    margin: 10px;
  }

  .event-mark {
    width: fit-content;
    padding: 3px;
    background-color: $highlight-color;
    border-radius: 3px;
    margin-bottom: 5px;
    font-size: 0.8rem;
  }

  .event-title {
    font-size: 1.3rem;
    margin-bottom: 10px;
  }

  .event-content {
    width: 100%;
    font-size: 0.9rem;
    line-height: 1rem;
  }

  .event-img {
    width: 100%;
    border-radius: 9px 9px 0px 0px;
  }

  @media screen and (max-width: 768px) {
    .event-box {
      width: 100%;
      box-sizing: border-box;
      border: 1px solid lightgray;
      border-radius: 10px;
      margin-bottom: 10px;
    }
  }
</style>
