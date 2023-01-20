<script lang="ts">
    import NavLink from './NavLink.svelte';
</script>

<nav
    class="flex items-center flex-wrap justify-between relative lg:mb-20 md:mb-20 mb-10 select-none mt-5 font-quicksand"
>
    <button class="lg:text-3xl md:text-4xl text-2xl mr-6 font-bold tracking-wider">newt!</button>

    <ul class="align-baseline flex-wrap flex flex-grow">
        <NavLink route="/">Home</NavLink>
        <NavLink route="/about">About</NavLink>
    </ul>
</nav>
