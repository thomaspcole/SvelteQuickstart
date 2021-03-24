<script>
    import {MaterialApp, Button, Icon} from 'svelte-materialify';
    import * as mdi from '@mdi/js';

    let theme = 'light';
    function toggleTheme(){
        theme === 'light' ? theme = 'dark' : theme = 'light';
    }
</script>

<style>
    :global(body){
        padding: 0;
    }
</style>

<MaterialApp {theme}>
    <h1 class="text-center pt-14">Hello World</h1>

    <Button icon size="x-small" style="position:fixed; top: 0; right:0" on:click="{toggleTheme}">
		<Icon size="16px" path={theme==='light' ? mdi.mdiBrightness4 : mdi.mdiBrightness5} />
	</Button>
</MaterialApp>