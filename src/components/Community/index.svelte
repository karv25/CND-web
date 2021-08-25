<script lang="ts">
</script>

<div class="container">
  <div class="container-title">Community</div>
  <div class="container-content">
    <div class="sub-content">
      우리는 커뮤니티를 통해 CxNxD 유저들이 소통할 수 있었으면 합니다. 그래서 디스코드 커뮤니티와 트위터를 운영합니다!
      부디 이 sns들이 서로간의 소통의 장이 되었으면 합니다! 우리는 커뮤니티를 통해 CxNxD 유저들이 소통할 수 있었으면
      합니다. 그래서 디스코드 커뮤니티와 트위터를 운영합니다! 부디 이 sns들이 서로간의 소통의 장이 되었으면 합니다!
    </div>
    <div class="sub-btn">
      <a href="https://www.naver.com"><div class="btn"><b>Discord</b></div></a>
      <a href="https://www.naver.com"><div class="btn"><b>Twitter</b></div></a>
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
    width: 60%;
    line-height: 22px;
    font-size: 18px;
    margin-bottom: 20px;
  }

  .sub-btn {
    width: 30%;
  }
  .btn {
    width: 100%;
    height: 40px;
    background-color: $highlight-color;
    margin-bottom: 10px;
    border-radius: 10px;
    text-align: center;
    box-sizing: border-box;
    cursor: pointer;
    padding: 10px;
  }

  .btn:active {
    opacity: 0.7;
  }

  @media screen and (max-width: 768px) {
    .sub-content {
      width: 100%;
      font-size: 1rem;
    }

    .sub-btn {
      width: 100%;
    }
  }
</style>
