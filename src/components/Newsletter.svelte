<script lang="ts">
    import mailIcon from '$lib/images/newsletter-mail.png';
</script>

<style>
    .newsletter-container {
        display: flex;
        flex-direction: column;
        padding: 64px 80px 96px 80px;
        font-family: Arial;
        font-style: normal;
        color: #111928;
        align-items: center;
        text-align: center;
        gap: 48px;
    }

    .heading-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
    }

    .heading {
        font-size: 36px;
        line-height: 45px;
    }

    .supporting-text {
        max-width: 672px;
        font-size: 20px;
        line-height: 30px;
        color: #6B7280;
    }

    .signup-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 8px
    }

    .input-line {
        display: flex;
        flex-direction: row;
    }

    .email-input {
        display: flex;
        width: 344px;
        padding: 14px 16px;
        border-radius: 8px 0px 0px 8px;
        border: 1px solid #E5E7EB;
        background: #F9FAFB;
        color: #6B7280;
        line-height: 150%;
        gap: 10px;
    }

    .icon {
        width: 20px;
        height: 20px;
    }

    .btn-subscribe {
        border-radius: 0 8px 8px 0;
        background: #1C64F2;
        color: #FFF;
        font-size: 16px;
        line-height: 150%;
        padding: 12px 20px;
    }

    .email-helper-text {
        font-size: 14px;
        line-height: 100%;
        color: #6B7280;
    }

    .privacy-policy {
        text-decoration: underline;
        color: #111928;
    }
</style>

<div class="newsletter-container">
    <div class="heading-container">
        <h2 class="heading">Sign up for our newsletter</h2>
        <p class="supporting-text">Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.</p>
        <div class="signup-container">
            <div class = "input-line">
                <div class="email-input">
                    <img src={mailIcon} alt="Mail Icon" class="icon"/>
                    <input type="email" placeholder="Enter your email" />
                </div>
                <button class="btn-subscribe" on:click={handleSubscribe}>Subscribe</button>
            </div>
            <div class="email-helper-text">
                <p>We care about the protection of your data. Read our <span class="privacy-policy">Privacy Policy</span>.</p>
            </div>
        </div>
        <!-- {#if isEmailAccepted}
        <div class="email-success">Email address submitted successfully, thanks for your subscription! Please follow the instructions in the email sent to your inbox.</div>
        {/if}
        {#if email && !validateEmail(email)}
        <div class="email-error">Invalid email. Please validate and resubmit.</div>
        {/if} -->
    </div>
</div>