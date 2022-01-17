<script lang="ts">
    import Clock from "../components/Clock.svelte";
    import LabeledColorPicker from "../components/LabeledColorPicker.svelte";

    let name: string = "world";
    let nameColor: string = "#ff0000";
    let yell: boolean = false;

    let clockBgColor: string = "#808080";
    let clockTextColor: string = "#FFFFFF";

    $: greeting = `Hello, ${name}!`;
    $: formattedGreeting = yell ? greeting.toUpperCase() : greeting;
</script>

<div class="canvas">
    <div class="settings-panel">
        <div class="pretty-form">
            <label for="name">Name</label>
            <span class="line-break" />
            <input id="name" class="mt-small" bind:value={name} />

            <label class="mx-medium">
                <input type="checkbox" bind:checked={yell} />
                <span class="muted"> (should I yell?) </span>
            </label>

            <LabeledColorPicker label="Name color" bind:color={nameColor} />

            <LabeledColorPicker
                label="Clock background color"
                bind:color={clockBgColor}
            />
            <LabeledColorPicker
                label="Clock text color"
                bind:color={clockTextColor}
            />
        </div>
    </div>
    <div class="greetings-display">
        <Clock backgroundColor={clockBgColor} textColor={clockTextColor} />
        <h1 style="color: {nameColor}" class="m-medium">{formattedGreeting}</h1>
    </div>
</div>

<style>
    .canvas {
        display: flex;
    }
    .settings-panel {
        position: relative;
        width: 35%;
        padding: 15px;
        margin: 5px;
        background-color: #f6f6f6;
        border-radius: 5px;
    }
    .greetings-display {
        position: relative;
        width: 100%;
        border: solid;
        border-color: #a8a8a8;
        border-width: 1px;
        border-radius: 5px;
    }
    .pretty-form {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: center;
    }
    .muted {
        color: #a8a8a8;
    }
    .line-break {
        width: 100%;
    }
    .mt-small {
        margin: 7px 0px;
    }
    .mx-medium {
        margin: 0px 15px;
    }
    .m-medium {
        margin: 15px;
    }
</style>
