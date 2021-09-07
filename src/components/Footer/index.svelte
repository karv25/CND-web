<script lang="ts">
  import Fa from 'svelte-fa'
  import { faFlag } from '@fortawesome/free-solid-svg-icons'
</script>

<hr />

<div class="container">
  <div class="container-content">
    <div class="footer-content">
      <div class="footer-notice">
        <div class="footer-title">contact us</div>
      </div>
      <ul class="navbar_icons">
        <li><a href="/#/"><Fa icon="{faFlag}" /></a></li>
        <li><a href="/#/home"><Fa icon="{faFlag}" /></a></li>
        <li><a href="mailto:popcateum@gmail.com"><Fa icon="{faFlag}" /></a></li>
      </ul>
      <div class="notice-content">
        Copyright: clones never die의 모든 작품은 이설 작가에게 있습니다. 무단으로 사용시 법적 처벌을 받을 수 있습니다.
      </div>
    </div>
    <div class="footer-logo-container">
      <div class="footer-logo">
        <img class="footer-img" src="/assets/logo-white.png" alt="logo" />
        <div class="logo-text">
          <b>CLONES NEVER DIE</b>
        </div>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  hr {
    border: none;
    height: 10px;
    margin: 50px 0px;
    background-color: $highlight-color;
  }

  .container-content {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    max-width: 1280px;
    margin: 0px auto;
    margin-bottom: 50px;
  }

  .footer-content {
    width: 50%;
  }

  .footer-logo-container {
    width: 20%;
    text-align: center;
    margin-bottom: 30px;
  }

  .footer-img {
    width: 50%;
  }

  .logo-text {
    font-size: 1.4rem;
    text-align: center;
  }

  .footer-title {
    font-size: 1.5rem;
    margin-bottom: 30px;
  }

  .footer-logo {
    width: 100%;
  }

  .notice-content {
    font-size: 0.8rem;
  }

  .navbar_icons {
    list-style: none;
    display: flex;
    padding-left: 0;
    margin-bottom: 30px;
    li {
      margin-right: 15px;
    }
  }

  @media screen and (max-width: 768px) {
    .container-content {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      flex-direction: column-reverse;
      justify-content: space-around;
      align-items: center;
      margin-bottom: 50px;
    }

    .footer-logo-container {
      width: 100%;
      text-align: center;
      margin-bottom: 70px;
    }
    .footer-content {
      width: 100%;
    }
  }
</style>
