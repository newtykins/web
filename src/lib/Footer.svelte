<script>
    import IconLink from './IconLink.svelte';
    import { faHeart } from '@fortawesome/free-solid-svg-icons';
    import { faGithub } from '@fortawesome/free-brands-svg-icons';
</script>

<footer class="mt-12 text-2xl text-gray-600">
    <IconLink icon={faHeart} classes="mr-6 hover:text-red-600" location="/shhh" />
    <IconLink
        icon={faGithub}
        location="https://github.com/newtykins/web"
        classes="hover:text-github"
    />
</footer>
