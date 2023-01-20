<script>
    import IconLink from './IconButton.svelte';
    import { faCodeBranch, faHeart } from '@fortawesome/free-solid-svg-icons';
    import { faDiscord, faGithub, faSteam } from '@fortawesome/free-brands-svg-icons';
    import urls from './urls';
</script>

<footer class="mt-12 text-2xl text-gray-600 space-x-5">
    <IconLink icon={faHeart} classes="hover:text-red-600" location="/shhh" />
    <IconLink icon={faGithub} location="https://github.com/newtykins" classes="hover:text-github" />
    <IconLink
        icon={faCodeBranch}
        location="https://github.com/newtykins/web"
        classes="hover:text-github"
    />
    <IconLink
        icon={faDiscord}
        location="https://discord.gg/brEhN5Y7YK"
        classes="hover:text-blurple"
    />
    <IconLink icon={faSteam} location={urls.steam} classes='hover:text-steam' />
</footer>
