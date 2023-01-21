<script>
    import IconLink from './IconButton.svelte';
    import { faCodeBranch, faHeart } from '@fortawesome/free-solid-svg-icons';
    import { faDiscord, faGithub, faSteam, faYoutube } from '@fortawesome/free-brands-svg-icons';
    import urls from '../urls';
</script>

<footer class="mt-12 text-2xl text-gray-600 md:space-x-5 space-x-3">
    <IconLink label="Heart" icon={faHeart} classes="hover:text-red-600" location="/shhh" />
    <IconLink label="GitHub" icon={faGithub} location={urls.github} classes="hover:text-github" />
    <IconLink
        label="Repository"
        icon={faCodeBranch}
        location={urls.repo}
        classes="hover:text-github"
    />
    <IconLink
        label="YouTube"
        icon={faYoutube}
        location={urls.youtube}
        classes="hover:text-youtube"
    />
    <IconLink
        label="Discord"
        icon={faDiscord}
        location={urls.discord}
        classes="hover:text-blurple"
    />
    <IconLink label="Steam" icon={faSteam} location={urls.steam} classes="hover:text-steam" />
</footer>
