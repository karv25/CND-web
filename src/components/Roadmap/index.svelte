<script lang="ts">
  import Tile from './Tile.svelte'
  interface Roadmap {
    percent: string
    img: string
    description: string
  }

  const roadmapData: Array<Roadmap> = [
    {
      percent: '20%',
      img: '/assets/roadmap1.png',
      description:
        'Lotus staking is activated. In addition, an exhibition of clones will begin at Sandbox. Please enjoy the game-like exhibition!'
    },
    {
      percent: '40%',
      img: '/assets/roadmap2.png',
      description: "he story of the clones will be told in 10 comic. Only the holders will be able to watch it's comic!"
    },
    {
      percent: '60%',
      img: '/assets/roadmap3.png',
      description: "Clones' own fashion takes place in the metabus."
    },
    {
      percent: '80%',
      img: '/assets/roadmap4.png',
      description: "Clones will present their own nft art. It's fun to collect collections!"
    },
    {
      percent: '100%',
      img: '/assets/roadmap5.png',
      description:
        'Clones Never Die V3 development and various projects are underway. Please be looking forward for it!'
    }
  ]
</script>

<div class="container">
  <div class="container-title">Roadmap</div>
  <div class="container-content">
    <div class="sub-content">
      <div class="sub-content-paragraph">
        We have set a goal to implement this CxNxD 萬 as it is sold. Every time we achieve our target sales rate, we
        work on it!
      </div>
    </div>
    {#each roadmapData as item}
      <Tile percent="{item.percent}" img="{item.img}" description="{item.description}" />
    {/each}
    <div class="mobile-occupy"></div>
  </div>
</div>

<hr class="divide-line" />

<style lang="scss">
  .container-content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  .sub-content {
    width: 100%;
    margin-bottom: 15px;
    line-height: 22px;
  }

  .sub-content-paragraph {
    width: 35%;
  }

  .mobile-occupy {
    display: none;
    flex-direction: column;
    font-size: 0.9rem;
    width: 50%;
    padding: 5px;
    box-sizing: border-box;
  }

  @media screen and (max-width: 768px) {
    .sub-content {
      width: 100%;
      font-size: 1rem;
    }

    .sub-content-paragraph {
      width: 100%;
    }
    .mobile-occupy {
      display: flex;
      flex-direction: column;
      font-size: 0.9rem;
      width: 50%;
      padding: 5px;
      box-sizing: border-box;
    }
  }
</style>
