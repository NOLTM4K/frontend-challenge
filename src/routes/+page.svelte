<script lang="ts">
	import Hero from '../components/Hero.svelte';
	import Clients from '../components/Clients.svelte';
	import Introduction from '../components/Introduction.svelte';
	import Features from '../components/Features.svelte';
	import Pricing from '../components/Pricing.svelte';
	import Newsletter from '../components/Newsletter.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<slot>
	<Hero />
	<Clients />
	<Introduction />
	<Features />
	<Pricing />
	<Newsletter />
	<Footer />
</slot>


<!-- Default Page -->
<!-- <section class="h-full w-full flex flex-col items-center justify-center gap-10">
	<h1 class="text-4xl font-bold max-w-4xl px-8">
		Welcome to your <span class="bg-[#00fe37] px-1">personal Challenge</span> @THE ARC!
	</h1>
	<p class="max-w-4xl px-8 text-center">
		Wir sind froh, dass du dich der Herausforderung stellst und freuen uns auf deine Ergebnisse.
		<br />
		Falls du Fragen zur Challenge hast, kannst du dich jederzeit an uns wenden.
		<br />
		Dein Startpunkt ist die <code class="bg-dark text-white p-1 rounded">README.md</code>
	</p>
</section> -->
