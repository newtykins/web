<script lang="ts">
    export let route = '';

    import { goto } from '$app/navigation';
    import { page } from '$app/stores';

    $: isActive = $page.url.pathname === route;
</script>

<li class={`mr-4${isActive ? ' box-border border-slate-500 p-2 border-2' : ''}`}>
    <button
        class={`font-bold tracking-wider${!isActive ? ' hover:underline' : ''}`}
        on:click={() => goto(route)}
    >
        <slot />
    </button>
</li>
