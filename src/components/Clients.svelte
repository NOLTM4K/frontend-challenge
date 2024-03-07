<script lang="ts">
    import google from '$lib/images/clients-logo-google.png';
    import microsoft from '$lib/images/clients-logo-microsoft.png';
    import spotify from '$lib/images/clients-logo-spotify.png';
    import mailchimp from '$lib/images/clients-logo-mailchimp.png';
</script>

<style>
    .clients-container {
        display: flex;
        padding: 48px 0;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        gap: 56px;
        
    }

    .heading {
        font-family: Arial;
        font-style: normal;
        font-size: 36px;
        line-height: 56px;

    }

    .logos {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        flex-wrap: wrap;
        color: #4B5563;
        gap: 56px;
    }

    .logo {
        width: 128px;
        height: 41.76px;
    }

    .logo:nth-child(2) {
        width: 150px;
        height: 32.02px;
    }

    .logo:nth-child(3) {
        width: 123.45px;
        height: 37.17px;
    }

    .logo:nth-child(4) {
        width: 136px;
        height: 37.23px;
    }
</style>

<div class="clients-container">
    <h2 class="heading">You'll be in good company </h2>
    <div class="logos">
        <img src={google} alt="Google logo" class="logo" />
        <img src={microsoft} alt="Microsoft logo" class="logo" />
        <img src={spotify} alt="Spotify logo" class="logo" />
        <img src={mailchimp} alt="Mailchimp logo" class="logo" />
    </div>
</div>