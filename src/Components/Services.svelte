<script>
export let serviceData = {};
const { HEADING, SERVICE_LIST } = serviceData;
</script>

<section class="hero" id="services">
  <div class="hero-body">
    <div class="container">
      <h2 class="title is-2 has-text-centered">{HEADING}</h2>
      <div class="columns is-centered">
        {#each SERVICE_LIST as list}
        <div class="column is-4 has-text-centered">
          <div class="is-centered">
            <img src={list.URL} alt={list.LABEL} class="img-services">
            <h4 class="title is-4 is-uppercase">{list.LABEL}</h4>
            <p>{list.DESCRIPTION}</p>
          </div>
        </div>
        {/each}
      </div>      
    </div>
  </div>
</section>

<style>
  img.img-services {
    width: 200px;
    height: 200px;
  }
</style>