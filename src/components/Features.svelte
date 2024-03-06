<script lang="ts">
    import imageFeature1 from '$lib/images/features-presentation-chart-line.png';
    import imageFeature2 from '$lib/images/features-academic-cap.png';
    import imageFeature3 from '$lib/images/features-briefcase.png';
</script>

<style>
    .features-container {
        display: flex;
        flex-direction: column;
        padding: 96px 80px;
        font-family: Arial;
        font-style: normal;
        gap: 48px;
    }

    .heading-container {
        display: flex;
        flex-direction: column;
        gap: 16px;
        min-width: 476px;
    }

    .heading {
        font-size: 36px;
        line-height: 45px;
    }

    .supporting-text {
        font-size: 20px;
        line-height: 30px;
        max-width: 768px;
        color: #6B7280;
    }

    .features-row {
        display: flex;
        flex-direction: row;
        gap: 48px;
        flex-wrap: wrap;
        align-items: center;
    }

    .feature {
        display: flex;
        flex-direction: column;
        gap: 16px;
        max-width: 400px;
    }

    .icon {
        width: 48px;
        height: 48px;
        border-radius: 50px;
        background: #E2E4EB;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    img {
        width: 32px;
        height: 32px;
    }

    .feature-title {
        font-size: 20px;
        line-height: 25px;
        color: #111928;
    }

    .feature-description {
        font-size: 16px;
        line-height: 24px;
        color: #6B7280;
    }
    
</style>

<div class="features-container">
    <div class="heading-container">
        <h2 class="heading">Designed for business teams like yours</h2>
        <p class="supporting-text">Here at flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
    </div>
    <div class="features-row">
        <div class="feature">
            <div class="icon">
                <img src={imageFeature1} alt="Marketing Icon" />
            </div>
            <h3 class="feature-title">Marketing</h3>
            <p class="feature-description">Plan it, create it, launch it. Collaborate seamlessly with all  the organization and hit your marketing goals every month with our marketing plan.</p>
        </div>
        <div class="feature">
            <div class="icon">
                <img src={imageFeature2} alt="Legal Icon" />
            </div>
            <h3 class="feature-title">Legal</h3>
            <p class="feature-description">Protect your organization, devices and stay compliant with our structured workflows and custom permissions made for you.</p>
        </div>
        <div class="feature">
            <div class="icon">
                <img src={imageFeature3} alt="Business Automation Icon" />
            </div>
            <h3 class="feature-title">Business Automation</h3>
            <p class="feature-description">Auto-assign tasks, send Slack messages, and much more. Now power up with hundreds of new templates to help you get started.</p>
        </div>
    </div>
</div>