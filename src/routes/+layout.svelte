<script lang="ts">
	import 'uno.css';
	import '../style.css';
	import '@unocss/reset/tailwind.css';
</script>

<style>
	@media only screen and (max-width: 600px) {
		:global(body) {
			padding: 0 32px 0 32px;
		}
	}
</style>

<slot />