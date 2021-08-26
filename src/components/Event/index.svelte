<script lang="ts">
  import EventContent from './EventContent.svelte'

  interface EContent {
    progress: boolean
    name: string
    description: string
    img: string
  }

  const eventData: Array<EContent> = [
    {
      progress: true,
      name: '에어드랍 이벤트',
      description:
        '에어드랍 이벤트! 우리 트위터를 팔로우 하고 트윗을 남겨주세요! 300명을 선정해서 CxNxD V2 를 에어드랍 합니다!',
      img: 'https://dummyimage.com/200x100.gif?text=event-sample'
    },
    {
      progress: true,
      name: '에어드랍 이벤트',
      description:
        '에어드랍 이벤트! 우리 트위터를 팔로우 하고 트윗을 남겨주세요! 300명을 선정해서 CxNxD V2 를 에어드랍 합니다!',
      img: 'https://dummyimage.com/200x100.gif?text=event-sample'
    },
    {
      progress: true,
      name: '에어드랍 이벤트',
      description:
        '에어드랍 이벤트! 우리 트위터를 팔로우 하고 트윗을 남겨주세요! 300명을 선정해서 CxNxD V2 를 에어드랍 합니다!',
      img: 'https://dummyimage.com/200x100.gif?text=event-sample'
    }
  ]
</script>

<div class="container">
  <div class="container-title">Event</div>
  <div class="container-content">
    {#each eventData as item}
      <EventContent progress="{item.progress}" name="{item.name}" description="{item.description}" img="{item.img}" />
    {/each}
  </div>
</div>

<hr class="divide-line" />

<style lang="scss">
  .container-content {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
</style>
