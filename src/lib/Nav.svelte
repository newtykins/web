<script lang="ts">
    import NavLink from './NavLink.svelte';
</script>

<nav
    class="flex items-center flex-wrap justify-between relative mb-20 select-none mt-5 font-quicksand"
>
    <button class="rainbow text-2xl mr-6 font-bold tracking-wider"> newt! </button>

    <ul class="align-baseline flex-wrap flex md:items-center flex-grow md:bg-transparent">
        <NavLink route='/'>Home</NavLink>
        <NavLink route='/about'>About</NavLink>
    </ul>
</nav>
