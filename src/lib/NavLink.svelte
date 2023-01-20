<script lang="ts">
    export let route = '';

    import { goto } from '$app/navigation';
    import { page } from '$app/stores';

    $: isActive = $page.url.pathname === route;
</script>

<li
    class={`mr-4 pt-1 lg:text-base md:text-2xl text-base${
        isActive ? ' hover:lg:box-border lg:border-slate-500 lg:border-2 lg:p-2' : ' lg:pt-2.5'
    }`}
>
    <button
        class={`font-bold tracking-wider${!isActive ? ' hover:underline' : ''}`}
        on:click={() => goto(route)}
    >
        <slot />
    </button>
</li>
