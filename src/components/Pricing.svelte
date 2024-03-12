<script lang="ts">
    import { onMount } from 'svelte';
    import toggle from '$lib/images/pricing-toggle.png';
    import arrowNarrowRight from '$lib/images/pricing-arrow-narrow-right.png';
    import pricingFeature1 from '$lib/images/pricing-credit-card.png';
    import pricingFeature2 from '$lib/images/pricing-emoji-happy.png';
    import pricingFeature3 from '$lib/images/pricing-shield-check.png';
    import pricingFeature4 from '$lib/images/pricing-paper-airplane.png';
    import pricingFeature5 from '$lib/images/pricing-fire.png';
    import pricingFeature6 from '$lib/images/pricing-presentation-chart-bar.png';
    import pricingFeature7 from '$lib/images/pricing-chat.png';
    import pricingFeature8 from '$lib/images/pricing-cube.png';
    import pricingFeature4Gray from '$lib/images/pricing-gray-paper-airplane.png';
    import pricingFeature5Gray from '$lib/images/pricing-gray-fire.png';
    import pricingFeature6Gray from '$lib/images/pricing-gray-presentation-chart-bar.png';
    import pricingFeature7Gray from '$lib/images/pricing-gray-chat.png';
    import pricingFeature8Gray from '$lib/images/pricing-gray-cube.png';

    interface PriceData {
        starter: Plan
        pro: Plan
        platinum: Plan
    }
    interface Plan {
        amount: string
        unit: string
    }

    let data: PriceData;

    let selectedIntervalMonthly = true;

    const fetchPrices = async () => {
        let interval = (selectedIntervalMonthly === true ? 'monthly' : 'yearly');
        const response = await fetch('/prices/' + interval, {
            method: 'GET', // Changed from 'POST' to 'GET'
            headers: {
                'content-type': 'application/json'
            }
        });
        data = await response.json();
    }

    onMount(async()=> {
        await fetchPrices();
    }); 
</script>

<style>
    .pricing-container {
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

    @media only screen and (max-width: 600px) {
        .pricing-container {
            padding: 64px 0 48px 0;
        }
    }

    .heading-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
    }
    .heading {
        max-width: 1360px;
        font-size: 36px;
        line-height: 45px;
    }

    .supporting-text {
        max-width: 768px;
        font-size: 20px;
        line-height: 30px;
        color: #6B7280;
    }

    .switch {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 16px;

    }

    .toggle-text {
        font-size: 16px;
        line-height: 16px;
    }

    .pricing-cards {
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        justify-content: center;
        gap: 40px;
        flex-wrap: wrap;
    }

    .card-container {
        display: flex;
        flex-direction: column;
        padding: 32px;
        align-items: center;
        gap: 16px;
        border-radius: 8px;
        border: 1px solid #E5E7EB;
        background: #FFF;
        box-shadow: 0px 1px 2px -1px rgba(0, 0, 0, 0.10), 0px 1px 3px 0px rgba(0, 0, 0, 0.10);
        width: 400px;
        min-width: 350px;
    }

    @media only screen and (max-width: 600px) {
        .card-container {
            width: 100%;
        }
    }

    .card-container-center {
        border: 1px solid #1C64F2;
    }

    .card-badge {
        padding: 2px 12px;
        border-radius: 6px;
        background: #E2E4EB;
        color: #1E429F;
        font-size: 14px;
        line-height: 150%;
    }

    .card-title {
        font-size: 24px;
        line-height: 24px;
    }

    .card-price {
        font-size: 48px;
        line-height: 48px;
    }

    .cta-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 10px;
        color: #1C64F2;
    }

    .card-button {
        display: flex;
        padding: 10px 20px;
        justify-content: center;
        align-items: center;
        max-width: 336px;
        height: 41px;
        border-radius: 8px;
        background: #111928;
        color: #FFF;
    }

    .card-button-center {
        background: #1C64F2;
    }

    .card-feature-list {
        display: flex;
        flex-direction: column;
        gap: 16px;
        min-width: 320px;
    }

    .card-feature {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
    }

    .strikethrough {
        text-decoration: line-through;
        color: #6B7280;
    }

    .priceToggle {
        display: none;
    }
</style>

<div class="pricing-container">
    <div class ="heading-container">
        <h2 class="heading">Designed for business teams like yours</h2>
        <p class="supporting-text">Here at flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
        <div class="switch">
            <p class="toggle-text">Monthly</p>
            <img src={toggle} alt="Toggle" class="toggle-icon" />
            <input class="priceToggle" type="checkbox" bind:value={selectedIntervalMonthly} on:change={fetchPrices}>
            <p class="toggle-text">Yearly</p>
        </div>
    </div>
    {#if data}
    <div class="pricing-cards">
        <div class="card-container">
            <h4 class="card-title">Starter</h4>
            <h3 class="card-price">{(data.starter.unit === 'USD' ? '$' : '€') + data.starter.amount}</h3>
            <div class="cta-container">
                <p class="cta-text">Go to annual plan</p>
                <img class="cta-icon" src={arrowNarrowRight} alt="Arrow" />
            </div>
            <button class="card-button">Get Started</button>
            <div class="card-feature-list">
                <div class="card-feature">
                    <img class="feature-image" src={pricingFeature1} alt="Credit card" />
                    <p class="feature-text">All tools you need to manage payments</p>
                </div>
                <div class="card-feature">
                    <img class="feature-image" src={pricingFeature2} alt="Smiley face" />
                    <p class="feature-text">No setup, monthly, or hidden fees</p>
                </div>
                <div class="card-feature">
                    <img class="feature-image" src={pricingFeature3} alt="Shield checkmark" />
                    <p class="feature-text">Comprehensive security</p>
                </div>
                <div class="card-feature">
                    <img class="feature-image" src={pricingFeature4Gray} alt="Paper airplane" />
                    <p class="feature-text strikethrough">Get hundreds of feature updates</p>
                </div>
                <div class="card-feature">
                    <img class="feature-image" src={pricingFeature5Gray} alt="Fire" />
                    <p class="feature-text strikethrough">Payouts to your bank account</p>
                </div>
                <div class="card-feature">
                    <img class="feature-image" src={pricingFeature6Gray} alt="Presentation chart" />
                    <p class="feature-text strikethrough">Financial reconciliation and reporting</p>
                </div>
                <div class="card-feature">
                    <img class="feature-image" src={pricingFeature7Gray} alt="Chat bubble" />
                    <p class="feature-text strikethrough">24×7 phone, chat, and email support</p>
                </div>
                <div class="card-feature">
                    <img class="feature-image" src={pricingFeature8Gray} alt="Cube" />
                    <p class="feature-text strikethrough">Robust developer platform</p>
                </div>
            </div>
        </div>
        <div class="card-container card-container-center">
            <div class="card-badge">Most popular</div>
            <h4 class="card-title">Pro</h4>
            <h3 class="card-price">{(data.pro.unit === 'USD' ? '$' : '€') + data.pro.amount}</h3>
            <div class="cta-container">
                <p class="cta-text">Go to annual plan</p>
                <img class="cta-icon" src={arrowNarrowRight} alt="Arrow" />
            </div>
            <button class="card-button card-button-center">Get Started</button>
            <div class="card-feature-list">
                <div class="card-feature">
                    <img class="feature-image" src={pricingFeature1} alt="Credit card" />
                    <p class="feature-text">All tools you need to manage payments</p>
                </div>
                <div class="card-feature">
                    <img class="feature-image" src={pricingFeature2} alt="Smiley face" />
                    <p class="feature-text">No setup, monthly, or hidden fees</p>
                </div>
                <div class="card-feature">
                    <img class="feature-image" src={pricingFeature3} alt="Shield checkmark" />
                    <p class="feature-text">Comprehensive security</p>
                </div>
                <div class="card-feature">
                    <img class="feature-image" src={pricingFeature4} alt="Paper airplane" />
                    <p class="feature-text">Get hundreds of feature updates</p>
                </div>
                <div class="card-feature">
                    <img class="feature-image" src={pricingFeature5} alt="Fire" />
                    <p class="feature-text">Payouts to your bank account</p>
                </div>
                <div class="card-feature">
                    <img class="feature-image" src={pricingFeature6Gray} alt="Presentation chart" />
                    <p class="feature-text strikethrough">Financial reconciliation and reporting</p>
                </div>
                <div class="card-feature">
                    <img class="feature-image" src={pricingFeature7Gray} alt="Chat bubble" />
                    <p class="feature-text strikethrough">24×7 phone, chat, and email support</p>
                </div>
                <div class="card-feature">
                    <img class="feature-image" src={pricingFeature8Gray} alt="Cube" />
                    <p class="feature-text strikethrough">Robust developer platform</p>
                </div>
            </div>
        </div>
        <div class="card-container">
                <h4 class="card-title">Platinum</h4>
                <h3 class="card-price">{(data.platinum.unit === 'USD' ? '$' : '€') + data.platinum.amount}</h3>
                <div class="cta-container">
                    <p class="cta-text">Go to annual plan</p>
                    <img class="cta-icon" src={arrowNarrowRight} alt="Arrow" />
                </div>
            <button class="card-button">Get Started</button>
            <div class="card-feature-list">
                <div class="card-feature">
                    <img class="feature-image" src={pricingFeature1} alt="Credit card" />
                    <p class="feature-text">All tools you need to manage payments</p>
                </div>
                <div class="card-feature">
                    <img class="feature-image" src={pricingFeature2} alt="Smiley face" />
                    <p class="feature-text">No setup, monthly, or hidden fees</p>
                </div>
                <div class="card-feature">
                    <img class="feature-image" src={pricingFeature3} alt="Shield checkmark" />
                    <p class="feature-text">Comprehensive security</p>
                </div>
                <div class="card-feature">
                    <img class="feature-image" src={pricingFeature4} alt="Paper airplane" />
                    <p class="feature-text">Get hundreds of feature updates</p>
                </div>
                <div class="card-feature">
                    <img class="feature-image" src={pricingFeature5} alt="Fire" />
                    <p class="feature-text">Payouts to your bank account</p>
                </div>
                <div class="card-feature">
                    <img class="feature-image" src={pricingFeature6} alt="Presentation chart" />
                    <p class="feature-text">Financial reconciliation and reporting</p>
                </div>
                <div class="card-feature">
                    <img class="feature-image" src={pricingFeature7} alt="Chat bubble" />
                    <p class="feature-text">24×7 phone, chat, and email support</p>
                </div>
                <div class="card-feature">
                    <img class="feature-image" src={pricingFeature8} alt="Cube" />
                    <p class="feature-text">Robust developer platform</p>
                </div>
            </div>
        </div>
    </div>
    {:else}
    <p>Loading...</p>
    {/if}
</div>