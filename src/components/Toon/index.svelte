<script lang="ts">
  interface Toon {
    ToonImage: string
  }

  const toonData: Array<Toon> = [
    {
      ToonImage: '/assets/toon1/1.png'
    },
    {
      ToonImage: '/assets/toon1/2.png'
    },
    {
      ToonImage: '/assets/toon1/3.png'
    },
    {
      ToonImage: '/assets/toon1/4.png'
    },
    {
      ToonImage: '/assets/toon1/5.png'
    },
    {
      ToonImage: '/assets/toon1/6.png'
    },
    {
      ToonImage: '/assets/toon1/7.png'
    },
    {
      ToonImage: '/assets/toon1/8.png'
    },
    {
      ToonImage: '/assets/toon1/9.png'
    },
    {
      ToonImage: '/assets/toon1/10.png'
    },
    {
      ToonImage: '/assets/toon1/11.png'
    },
    {
      ToonImage: '/assets/toon1/12.png'
    },
    {
      ToonImage: '/assets/toon1/13.png'
    },
    {
      ToonImage: '/assets/toon1/14.png'
    },
    {
      ToonImage: '/assets/toon1/15.png'
    },
    {
      ToonImage: '/assets/toon1/16.png'
    },
    {
      ToonImage: '/assets/toon1/17.png'
    },
    {
      ToonImage: '/assets/toon1/18.png'
    },
    {
      ToonImage: '/assets/toon1/19.png'
    },
    {
      ToonImage: '/assets/toon1/20.png'
    },
    {
      ToonImage: '/assets/toon1/21.png'
    },
    {
      ToonImage: '/assets/toon1/22.png'
    },
    {
      ToonImage: '/assets/toon1/23.png'
    },
    {
      ToonImage: '/assets/toon1/24.png'
    },
    {
      ToonImage: '/assets/toon1/25.png'
    },
    {
      ToonImage: '/assets/toon1/26.png'
    },
    {
      ToonImage: '/assets/toon1/27.png'
    },
    {
      ToonImage: '/assets/toon1/28.png'
    },
    {
      ToonImage: '/assets/toon1/29.png'
    },
    {
      ToonImage: '/assets/toon1/30.png'
    }
  ]
</script>

<div class="container">
  <div class="container-title">Comics</div>
  <div class="container-content">
    <div class="container-paragraph">There is Comics about CxNxD here. Check out about CxNxD!</div>
    {#each toonData as data}
      <div class="toonTool">
        <img class="toonTool" src="{data.ToonImage}" alt="img" />
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  .container-content {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
    min-height: 80vh;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .container-paragraph {
    width: 60%;
    margin-bottom: 30px;
  }

  .toonTool {
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    .container-paragraph {
      width: 100%;
    }
  }
</style>
