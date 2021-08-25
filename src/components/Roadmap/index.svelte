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
      img: 'https://dummyimage.com/200x200.jpg?text=roadmapimg',
      description:
        '로드맵 내용입니다. 로드맵 내용입니다. 우리는 10%에 도달하면 뭐뭐를 낼것입니다. 이것은 우리 프로젝트에 도움이되고 홀더들에게도 도움이 될 것입니다 어쩌구저쩌구.'
    },
    {
      percent: '40%',
      img: 'https://dummyimage.com/200x200.jpg?text=roadmapimg',
      description:
        '로드맵 내용입니다. 로드맵 내용입니다. 우리는 10%에 도달하면 뭐뭐를 낼것입니다. 이것은 우리 프로젝트에 도움이되고 홀더들에게도 도움이 될 것입니다 어쩌구저쩌구.'
    },
    {
      percent: '60%',
      img: 'https://dummyimage.com/200x200.jpg?text=roadmapimg',
      description:
        '로드맵 내용입니다. 로드맵 내용입니다. 우리는 10%에 도달하면 뭐뭐를 낼것입니다. 이것은 우리 프로젝트에 도움이되고 홀더들에게도 도움이 될 것입니다 어쩌구저쩌구.'
    },
    {
      percent: '80%',
      img: 'https://dummyimage.com/200x200.jpg?text=roadmapimg',
      description:
        '로드맵 내용입니다. 로드맵 내용입니다. 우리는 10%에 도달하면 뭐뭐를 낼것입니다. 이것은 우리 프로젝트에 도움이되고 홀더들에게도 도움이 될 것입니다 어쩌구저쩌구.'
    },
    {
      percent: '100%',
      img: 'https://dummyimage.com/200x200.jpg?text=roadmapimg',
      description:
        '로드맵 내용입니다. 로드맵 내용입니다. 우리는 10%에 도달하면 뭐뭐를 낼것입니다. 이것은 우리 프로젝트에 도움이되고 홀더들에게도 도움이 될 것입니다 어쩌구저쩌구.'
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
