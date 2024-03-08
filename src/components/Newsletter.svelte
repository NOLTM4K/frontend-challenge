<script lang="ts">
    import { writable } from 'svelte/store';
    import mailIcon from '$lib/images/newsletter-mail.png';

    let email: string = '';
    let isEmailValid = writable(false);
    let messageType = writable('');
    let messageText = writable('');

    const validateEmail = (email: string): boolean => {
        const regex = /(\<|^)[\w\d._%+-]+@(?:[\w\d-]+\.)+(\w{2,})(\>|$)/i;
        return regex.test(email);
    };

    const handleEmailInput = (event: Event) => {
        email = (event.target as HTMLInputElement).value;
        isEmailValid.set(validateEmail(email));
        messageType.set($isEmailValid === true ? '' : 'error'); // Clear message type on input
        messageText.set($isEmailValid === true ? '' : 'Please enter a valid email address.'); // Clear message text on input
    };

    const handleSubscribe = async () => {
        if (!$isEmailValid) {
            messageType.set('error');
            messageText.set('Please enter a valid email address.');
            return;
        }

        const response = await fetch('/validation', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        });
        const responseBody = await response.json();
        if (response.ok) {
            messageType.set('success');
            messageText.set(responseBody.message);
        } else {
            messageType.set('error')
            messageText.set(response.status + ' Error: ' + responseBody.error);
        }
    };
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
        gap: 32px;
    }

    @media only screen and (max-width: 600px) {
        .newsletter-container {
            padding: 48px 0;
        }
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
        gap: 8px;
        align-items: flex-start;
        width: 100%;
        max-width: 456px;
    }

    .input-line {
        display: flex;
        flex-direction: row;
        width: 100%;
    }

    .email-input {
        display: flex;
        padding: 14px 16px;
        border-radius: 8px 0px 0px 8px;
        border: 1px solid #E5E7EB;
        background: #F9FAFB;
        color: #6B7280;
        line-height: 150%;
        gap: 10px;
        flex: 1;
    }

    .icon {
        width: 20px;
        height: 20px;
    }

    .input-field {
        border: none;
        background: none;
        outline: none;
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

    .error {
        color: red;
    }
</style>

<div class="newsletter-container">
    <div class="heading-container">
        <h2 class="heading">Sign up for our newsletter</h2>
        <p class="supporting-text">Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.</p>
    </div>
    <div class="signup-container">
        <div class = "input-line">
            <div class="email-input">
                <img src={mailIcon} alt="Mail Icon" class="icon"/>
                <input class="input-field" type="email" placeholder="Enter your email" bind:value={email} on:input={handleEmailInput}/>
            </div>
            <button class="btn-subscribe" on:click={handleSubscribe} disabled={!$isEmailValid}>Subscribe</button>
        </div>
        <div class="email-helper-text">
            <p>We care about the protection of your data. Read our <span class="privacy-policy">Privacy Policy</span>.</p>
        </div>
    </div>
    {#if messageText}
    <p class:error={$messageType === 'error'}>{$messageText}</p>
    {/if}
</div>