<script>
    export let bannerData = {};
    const { HEADING, IMAGE_URL, DESCRIPTION, TUTORIAL_URL, WATCH_TUTORIAL } = bannerData;
</script>

<section class="hero is-info" id="banner">
    <div class="hero-body">
        <div class="container">
            <div class="columns is-vcentered">
                <div class="column">
                    <h1 class="title is-1 is-uppercase">{HEADING}</h1>
                    <p>{DESCRIPTION}</p>
                    <br><br>
                    <a href={TUTORIAL_URL} target="_blank" class="button is-medium watch_btn">
                        <i class="far fa-play-circle fa-lg" />&nbsp;&nbsp;
                        {WATCH_TUTORIAL}
                    </a>
                </div>
                <div class="column">
                    <img src={IMAGE_URL} alt="">
                </div>
            </div>
        </div>
    </div>
    <img src="images/wave1.png" alt="">
</section>

<style>
    .watch_btn   {
        background-color: transparent;
        border: none;
        color: white;
        text-decoration: none;
    }
    .watch_btn:hover {
        background-color: transparent;
        color: white;
        text-decoration: none;
    }
</style>