<script lang="ts">
  import * as animateScroll from 'svelte-scrollto'
  import Fa from 'svelte-fa'
  import { faFlag } from '@fortawesome/free-solid-svg-icons'
  import { push, pop, replace } from 'svelte-spa-router'

  let navbarMenu = 'navbar_menu'
  let navbarIcons = 'navbar_icons'

  let toggleBtnActive = false
  function clickedToggleBtn() {
    toggleBtnActive = !toggleBtnActive
  }

  function toMint() {
    push('/')
    animateScroll.scrollTo({ element: '#mint' })
    clickedToggleBtn()
  }
</script>

<nav class="navbar">
  <div class="navbar_logo">
    CxNxD
    <!-- <img src="/assets/mainlogo.png" alt="mainlogo" /> -->
  </div>

  <ul class="{toggleBtnActive === false ? 'navbar_menu' : 'navbar_menu_active'}">
    <li><a href="/#/" on:click="{clickedToggleBtn}">Home</a></li>
    <li><div on:click="{toMint}">Mint</div></li>
    <li><a href="/#/wallet" on:click="{clickedToggleBtn}">Wallet</a></li>
    <li><a href="/#/gallery" on:click="{clickedToggleBtn}">Gallery</a></li>
    <li><a href="/#/about" on:click="{clickedToggleBtn}">About</a></li>
  </ul>

  <ul class="{toggleBtnActive === false ? 'navbar_icons' : 'navbar_icons_active'}">
    <li><a href="/#/"><Fa icon="{faFlag}" /></a></li>
    <li><a href="/#/home"><Fa icon="{faFlag}" /></a></li>
    <li><a href="/#/home"><Fa icon="{faFlag}" /></a></li>
  </ul>

  <div class="navbar_toggleBtn" on:click="{() => (toggleBtnActive = !toggleBtnActive)}">
    <Fa icon="{faFlag}" />
  </div>
</nav>

<style lang="scss">
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 12px;

    a {
      text-decoration: none;
      color: white;
    }

    .navbar_logo {
      width: 230px;
      font-size: 40px;
    }

    .navbar_menu {
      display: flex;
      list-style: none;
      li {
        padding: 8px 12px;
      }
      li a:hover {
        color: $highlight-color;
      }
    }

    .navbar_menu_active {
      display: flex;
      list-style: none;
      li {
        padding: 8px 12px;
      }
      li a:hover {
        color: $highlight-color;
      }
    }

    .navbar_icons {
      list-style: none;
      display: flex;
      padding-left: 0;
      li {
        padding: 8px 12px;
      }
    }

    .navbar_icons_active {
      list-style: none;
      display: flex;
      padding-left: 0;
      li {
        padding: 8px 12px;
      }
    }

    .navbar_toggleBtn {
      display: none;
      position: absolute;
      right: 32px;
      font-size: 24px;
    }
  }

  @media screen and (max-width: 768px) {
    .navbar {
      flex-direction: column;
      align-items: flex-start;
      padding: 8px 24px;

      .navbar_menu {
        display: none;
        width: 100%;
        flex-direction: column;
        align-items: center;
      }

      .navbar_icons {
        display: none;
        justify-content: center;
        width: 100%;
      }

      .navbar_toggleBtn {
        display: block;
        margin-top: 8px;
      }

      .navbar_menu_active {
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: center;
      }

      .navbar_icons_active {
        display: flex;
        justify-content: center;
        width: 100%;
      }
    }
  }
</style>
