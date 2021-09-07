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
        '로터스 스테이킹이 활성화됩니다. 또한 샌드박스에서 클론들의 전시회가 시작됩니다. 게임같은 전시회를 즐겨주세요!'
    },
    {
      percent: '40%',
      img: '/assets/roadmap2.png',
      description:
        '클론들의 이야기를 10편의 코믹으로 풀어나가게 됩니다. 오직 홀더분들만이 코믹을 보게 됩니다!'
    },
    {
      percent: '60%',
      img: '/assets/roadmap3.png',
      description:
        '메타버스 속에서 클론들만의 패션이 진행됩니다.'
    },
    {
      percent: '80%',
      img: '/assets/roadmap4.png',
      description:
        '클론들만의 nft아트를 선물해드립니다.'
    },
    {
      percent: '100%',
      img: '/assets/roadmap5.png',
      description:
        'Clones Never Die V3 개발과 다양한 프로젝트가 진행이됩니다.'
    }
  ]
</script>

<div class="container">
  <div class="container-title">Roadmap</div>
  <div class="container-content">
    <div class="sub-content">
      <div class="sub-content-paragraph">
        우리는 이번 CxNxV V2가 판매됨에 따라 실행할 목표를 정했습니다. 목표 판매율에 달성할때마다 그에 대한 작업을
        실행합니다!
      </div>
    </div>
    {#each roadmapData as item}
      <Tile percent="{item.percent}" img="{item.img}" description="{item.description}" />
    {/each}
    <div class="mobile-occupy">
      CND를 많이 응원해주세요!
    </div>
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
