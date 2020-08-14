<script>
    export let navlists = [];
    export let header;
</script>
<nav class="navbar is-fixed-top is-info" id="nav-bar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <a class="navbar-item is-size-4" href="/">
            {header}
        </a>
        <a id="navbar-burger" role="button" class="navbar-burger" aria-expanded="false" data-target="menubar">
            <span></span>
            <span></span>
            <span></span>
        </a>
    </div>

    <div id="menubar" class="navbar-menu">
        <div class="navbar-end has-text-left">
            {#each navlists as list}
            <a class="navbar-item is-hoverable" href="{list.url}">
                {list.label}
            </a>
            {/each}
        </div>
  </nav>

<style>
a.navbar-item:hover {
    background-color: transparent !important;
    text-decoration: none;
}

@media screen and (min-width: 746px) {
    .navbar {
        padding-left: 2rem;
        padding-right: 2rem;
    }
}

</style>