<script lang="ts">
    import { page } from '$app/stores';
 
    const url = $page.url;
 
    console.log(url);
	let a = url.searchParams.get('clickid'); 
	let b = url.searchParams.get('sum'); 
	let c = url.searchParams.get('txid');
</script>

a: {a}
<br>
b: {b}
<br>
c: {c}