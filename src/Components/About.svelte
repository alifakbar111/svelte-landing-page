<script>
    export let aboutData = {};
    const { HEADING, TITLE, IMAGE_URL , WHY_CHOOSE_US_LIST} = aboutData;
</script>

<section class="hero grey-bgcolor" id="about-us">
    <div class="hero-body">
        <div class="container">
            <h2 class="title is-2 has-text-centered">{HEADING}</h2>
            <div class="columns">
                <div class="column">
                    <h3 class="title is-3">{TITLE}</h3>
                    <ul>
                        {#each WHY_CHOOSE_US_LIST as list}
                        <li>{list}</li>
                        {/each}
                    </ul>
                </div>
            <div class="column">
                <img src={IMAGE_URL} alt="">
            </div>
        </div>
      </div>
    </div>
</section>

<style>
ul {
    list-style-type: disc;
}
</style>