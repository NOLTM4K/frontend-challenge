<script lang="ts">
    import image1 from '$lib/images/intro-r1p1.png';
    import image2 from '$lib/images/intro-r1p2.png';
    import image3 from '$lib/images/intro-r1p3.png';
    import image4 from '$lib/images/intro-r2p1.png';
    import image5 from '$lib/images/intro-r2p2.png';
    import image6 from '$lib/images/intro-r2p3.png';
</script>

<style>
    .introduction-container {
        display: flex;
        width: 100%;
        padding: 64px 80px 96px 80px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-family: Arial;
        font-style: normal;
        gap: 48px;
    }

    .introduction-content {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .heading {
        font-size: 36px;
        font-weight: 400;
        line-height: 54px;
    }
    
    .supporting-text {
        font-size: 18px;
        line-height: 27px;
        color: #6B7280;
    }

    .image-row-1 {
        display: grid;
        grid-template-columns: 50% 25% 25%;
        height: 240px;
        max-width: 1280px;
        grid-gap: 10px;
        justify-content: center;
        align-items: center;
    }

    .image-row-2 {
        display: grid;
        grid-template-columns: 25% 50% 25%;
        height: 240px;
        max-width: 1280px;
        grid-gap: 10px;
        justify-content: center;
        align-items: center;
    }

    img {
        height: 240px;
        width: 100%;
        object-fit: cover;
        border-radius: 8px;
    }
</style>

<div class="introduction-container">
    <div class="introduction-content">
        <h1 class="heading">We didn't reinvent the wheel</h1>
        <p class="supporting-text">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
    </div>
    <div class="image-row-1">
        <img src={image1} alt="Men at computers" />
        <img src={image2} alt="Meeting" />
        <img src={image3} alt="Office" />
    </div>
    <div class=image-row-2>
        <img src={image4} alt="Woman at computer" />
        <img src={image5} alt="Meeting" />
        <img src={image6} alt="Office" />
    </div>
</div>