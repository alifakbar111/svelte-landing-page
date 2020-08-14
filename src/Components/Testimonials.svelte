<script>
export let testimonialsData = {};
const { HEADING, TESTIMONIAL_LIST } = testimonialsData;
</script>


<section class="hero" id="testimonials">
    <div class="hero-body">
        <div class="container">
            <h2 class="title is-2 has-text-centered">{HEADING}</h2>
            <div class="columns is-centered">
                {#each TESTIMONIAL_LIST as list}
                <div class="column is-4">
                    <p>{list.DESCRIPTION}</p>
                    <br>
                    <div class="media">
                        <div class="media-left">
                            <figure class="image is-48x48">
                                <img class="is-rounded" src={list.IMAGE_URL} alt="" />
                            </figure>
                        </div>
                        <div class="media-content">
                            <b>{list.NAME}</b>
                            <p>{list.DESIGNATION}</p>
                        </div>
                    </div>
                </div>
                {/each}
            </div>
        </div>
    </div>
</section>

<style>
    div.column {
        margin-top: 10px;
        margin-bottom: 10px;
        border-left: 4px solid rgba(0, 114, 255, 0.5);
    }
</style>