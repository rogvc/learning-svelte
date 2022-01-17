<script lang="ts">
    export let backgroundColor: string = "#808080";
    export let textColor: string = "#FFFFFF";

    let formattedTime = "";
    setInterval(() => {
        formattedTime = new Date().toLocaleTimeString();
    }, 1000);
</script>

<div style="background-color: {backgroundColor}" class="time-display">
    <span style="color: {textColor}">{formattedTime}</span>
</div>

<!-- All styles will be scoped to this file/component only.  -->
<style>
    .time-display {
        position: absolute;
        top: 0px;
        right: 0px;
        width: 100px;
        padding: 5px 10px;
        display: flex;
        justify-content: center;
        border-radius: 5px;
    }
</style>
