<script lang="ts">
  import Fa from 'svelte-fa'
  import { faFlag } from '@fortawesome/free-solid-svg-icons'

  export let memberImage: string
  export let name: string
  export let description: string
  export let twitter: string
  export let facebook: string
  export let discord: string
</script>

<div class="team-member">
  <img class="member-image" src="{memberImage}" alt="team" />
  <div class="member-name">{name}</div>
  <ul class="member-sns">
    <li><a href={twitter}><Fa icon="{faFlag}" /></a></li>
    <li><a href="{facebook}"><Fa icon="{faFlag}" /></a></li>
    <li><a href="{discord}"><Fa icon="{faFlag}" /></a></li>
  </ul>
  <div class="member-description">
    {description}
  </div>
</div>

<style lang="scss">
  .team-member {
    width: 25%;
    padding: 6px;
    box-sizing: border-box;
  }
  .member-image {
    width: 100%;
    margin-bottom: 10px;
    border-radius: 10px;
  }

  .member-name {
    font-size: 1rem;
    margin-bottom: 10px;
  }

  .member-sns {
    list-style: none;
    display: flex;
    padding-left: 0;
    font-size: 1rem;
    li {
      /* padding: 8px 12px; */
      padding-right: 10px;
      padding-bottom: 10px;
    }
  }

  .member-description {
    font-size: 0.8rem;
    line-height: 20px;
  }

  @media screen and (max-width: 768px) {
    .team-member {
      width: 50%;
      padding: 5px;
      box-sizing: border-box;
    }
  }
</style>
