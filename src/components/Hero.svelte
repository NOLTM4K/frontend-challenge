<script lang="ts">
    import arrowRight from '$lib/images/hero-arrow-right.png';
    import camera from '$lib/images/hero-camera.png';
    import characters from '$lib/images/hero-characters.png';
</script>

<style>
    .hero-container {
        display: flex;
        height: 748px;
        padding-top: 96px;
        gap: 10px;
        flex-direction: row;
        align-items: center;
        align-self: stretch;
        text-align: center;
        justify-content: space-evenly;
    }

    .hero-content-container {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-left: 80px;
        gap: 40px;
        font-family: Arial;
        font-style: normal;
    }

    .heading {
        font-size: 60px;
        font-weight: 400;
        line-height: 100%;
    }

    .supporting-text {
        font-size: 20px;
        line-height: 100%;
        color: #6B7280;
    }

    .hero-image-container {
        width: 630px;
        height: 630px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .flex-image {
        height: 100%;
        object-fit: cover;
    }

    @media only screen and (max-width: 600px) {
        .hero-container {
            flex-direction: column;
            gap: 0;
        }

        .hero-content-container {
            padding-left: 0;
            width: 100%;
        }

        .hero-image-container {
            width: 100%;
        }

        .flex-image {
            width: 100%;
            max-width: 322px;
            height: auto;
        }
    }

    .btn-container {
        display: flex;
        gap: 20px;
    }

    .btn {
        display: inline-flex;
        width: 166px;
        height: 52px;
        flex-direction: row;
        padding: 15px 25px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        border-radius: 10px;
        font-size: 16px;
        line-height: 150%;
    }

    .btn-blue {
        background: #1C64F2;
        color: #FFF;
    }

    .btn-clear {
        border: 1px solid #D1D5DB;
    }



</style>

<div class="hero-container">
    <div class="hero-content-container">
        <h1 class="heading">We invest in the world's potential</h1>
        <p class="supporting-text">Here at flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
        <div class="btn-container">
            <button class="btn btn-blue">
                Learn more
                <img src={arrowRight} alt="learn more arrow icon" />
            </button>
            <button class="btn btn-clear">
                <img src={camera} alt="watch video camera icon" />
                Watch video
            </button>
        </div>
    </div>
    <div  class="hero-image-container">
        <img src={characters} alt="two stylistic clay people constructing a clay 3D web page" class="flex-image"/>
    </div>
</div>