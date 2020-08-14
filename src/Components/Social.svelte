<script>
    export let socialData = {};
    const {
        HEADING,
        IMAGE_LIST
    } = socialData;
</script>

<section class="hero grey-bgcolor" id="social-media">
    <div class="hero-body">
        <div class="container has-text-centered	">
            <h2 class="title is-2">{HEADING}</h2>
            <div class="is-block">
                {#each IMAGE_LIST as list}
                <div class="is-inline-flex is-centered px-2">
                    <a href><img class="image is-48x48" src={list} alt="Social media {list}"></a>
                </div>
                {/each}
            </div>
            <!-- <div class="columns is-centered">
                {#each IMAGE_LIST as list}
                <div class="column is-relative">
                    <a href>
                        <img  class="image is-48x48" src={list} alt="Social media {list}">
                    </a>
                </div>
                {/each}
            </div> -->
        </div>
    </div>
</section>

<style>
</style>