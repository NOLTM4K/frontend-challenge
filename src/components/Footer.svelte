<script lang="ts">
    import facebookIcon from '$lib/images/footer-facebook.png';
    import twitterIcon from '$lib/images/footer-twitter.png';
    import githubIcon from '$lib/images/footer-github.png';
    import dribbbleIcon from '$lib/images/footer-dribbble.png';
</script>

<style>
    .footer-container {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
        padding: 48px 80px;
        font-family: Arial;
        font-style: normal;
        font-size: 16px;
        line-height: 24px;
        width: 100%;
        color: #6B7280;
    }
    
    .icon-container {
        display: flex;
        flex-direction: row;
        gap: 24px;
    }
</style>

<div class="footer-container">
    <p class="copyright">© 2021 Flowbite, LLC. All rights reserved.</p>
    <div class="icon-container">
        <img src={facebookIcon} alt="Facebook icon" />
        <img src={twitterIcon} alt="Twitter icon" />
        <img src={githubIcon} alt="Github icon" />
        <img src={dribbbleIcon} alt="Dribbble icon" />
    </div>
</div>