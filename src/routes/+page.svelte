<script lang="ts">
	import formValidator from "$lib/formValidator";
	import { Card, Input } from "flowbite-svelte";
    

	let formValues = $state({ name: "", age: 0 });
    let errors = $derived(formValidator(formValues));
</script>

<main class="mx-auto w-full max-w-2xl p-8">
	<div class="flex flex-col gap-4">
		<Card size="none">
			<form class="flex flex-col gap-4">
				<Input type="text" name="name" bind:value={formValues.name} placeholder="Student Name" />
				<Input type="number" name="name" bind:value={formValues.age} placeholder="Student Name" />
			</form>
		</Card>

		<Card size="none">
			<b>Values</b>
			<pre>{JSON.stringify(formValues, null, 2)}</pre>
		</Card>

		<Card size="none">
			<b>Errors</b>
			<pre>{JSON.stringify(errors, null, 2)}</pre>
		</Card>
	</div>
</main>
