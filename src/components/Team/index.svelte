<script lang="ts">
  import Member from './Member.svelte'

  interface Member {
    memberImage: string
    name: string
    description: string
    twitter: string
    facebook: string
    discord: string
  }

  const teamData: Array<Member> = [
    {
      memberImage: '/assets/M1.jpeg',
      name: '1번',
      description: '안녕하세요 팀원설명입니다.안녕하세요 팀원설명입니다.안녕하세요 팀원설명입니다.',
      twitter: 'https://twitter.com',
      discord: 'https://discord.com',
      facebook: 'https://facebook.com'
    },
    {
      memberImage: '/assets/M1.jpeg',
      name: '1번',
      description: '안녕하세요 팀원설명입니다.안녕하세요 팀원설명입니다.안녕하세요 팀원설명입니다.',
      twitter: 'https://twitter.com',
      discord: 'https://discord.com',
      facebook: 'https://facebook.com'
    },
    {
      memberImage: '/assets/M1.jpeg',
      name: '1번',
      description: '안녕하세요 팀원설명입니다.안녕하세요 팀원설명입니다.안녕하세요 팀원설명입니다.',
      twitter: 'https://twitter.com',
      discord: 'https://discord.com',
      facebook: 'https://facebook.com'
    },
    {
      memberImage: '/assets/M1.jpeg',
      name: '1번',
      description: '안녕하세요 팀원설명입니다.안녕하세요 팀원설명입니다.안녕하세요 팀원설명입니다.',
      twitter: 'https://twitter.com',
      discord: 'https://discord.com',
      facebook: 'https://facebook.com'
    }
  ]
</script>

<div class="container">
  <div class="container-title">Team</div>
  <div class="container-content">
    {#each teamData as item}
      <Member
        memberImage="{item.memberImage}"
        name="{item.name}"
        description="{item.description}"
        twitter="{item.twitter}"
        facebook="{item.facebook}"
        discord="{item.discord}"
      />
    {/each}
  </div>
</div>

<hr class="divide-line" />

<style lang="scss">
  .container-content {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
</style>
