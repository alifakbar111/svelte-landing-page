<script>
export let footerData = {};
export let header = "";
const {DESCRIPTION, CONTACT_DETAILS, SUBSCRIBE_NEWSLETTER, SUBSCRIBE} = footerData;
const {HEADING, ADDRESS, MOBILE, EMAIL} = CONTACT_DETAILS;
</script>


<section class="hero is-info pb-6" id="footer">
    <img src="images/wave2.png" alt="">
    <div class="hero-body">
        <div class="container">
            <div class="columns px-3">
                <div class="column">
                    <div class="mb-2 title is-4">{header}</div>
                    <p>{DESCRIPTION}</p>                   
                </div>
                <div class="column">
                    <div class="mb-2 title is-5">{HEADING}</div>
                    <div class="mb-2 title is-6"><i class="fas fa-map-marker-alt"/>&nbsp;{ADDRESS}</div>
                    <div class="mb-2 title is-6"><i class="fas fa-phone"/>&nbsp;{MOBILE}</div>
                    <div class="mb-2 title is-6"><i class="fas fa-envelope"/>&nbsp;{EMAIL}</div>
                </div>
                <div class="column">
                    <div class="mb-2 title is-5">{SUBSCRIBE_NEWSLETTER}</div>
                    <div class="field">
                        <div class="control has-icons-left">
                            <input class="input is-rounded" type="email" placeholder="Your Email">
                            <span class="icon is-small is-left">
                                <i class="fas fa-envelope"></i>
                            </span>
                        </div>
                    </div>
                    <div class="field">
                        <div class="control">
                            <button class="button is-rounded is-primary is-inverted is-outlined">{SUBSCRIBE}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

