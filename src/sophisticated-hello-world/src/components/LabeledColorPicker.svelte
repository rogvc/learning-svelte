<script lang="ts">
    export let label: string = "Label";
    export let color: string = "#FFFFFF";
</script>

<label for="cp-input" style="margin-top: 15px">{label}</label>
<input id="cp-input" type="color" bind:value={color} style="margin-top: 7px;" />

<style>
    input[type="color"] {
        -webkit-appearance: none;
        width: 100%;
        padding: 3px;
        margin-bottom: 0px;
        background-color: gray;
        border-radius: 5px;
        border-width: 0px;
    }
    input[type="color"]::-webkit-color-swatch-wrapper {
        padding: 0;
    }
    input[type="color"]::-webkit-color-swatch {
        border: none;
    }
</style>
