<template>
    <div>
        <p class="title">Power &amp; AV</p>
        <p class="subtitle">Change Quantity As Appropiate</p>
        <div class="tile is-ancestor">
        <IncrementDecrementCard
            title="Power Outlets"
            description="How many power outlets you need. Do not daisy chain your own extension cords."
            v-bind:value="this.values['Power Outlets']"
            v-on:valueChanged="valueChanged">
        </IncrementDecrementCard>


        <IncrementDecrementCard
            title="Widescreen Monitors"
            description="HDMI Connectivity. No speakers."
            v-bind:value="this.values['Widescreen Monitors']"
            v-on:valueChanged="valueChanged">
        </IncrementDecrementCard>

        <IncrementDecrementCard
            title="Photo/Video Frame"
            description="Same thing you used for 3.007 exhibition. Can play sound but horrible picture quality."
            v-bind:value="this.values['Photo/Video Frame']"
            v-on:valueChanged="valueChanged">
        </IncrementDecrementCard>

        </div>
    </div>
</template>

<script>
import IncrementDecrementCard from './IncrementDecrementCard.vue'

export default {
    name: "power-av-row",
    data: function(){
        return {
            values: {
                "Power Outlets": 0
            }
        }
    },
    methods: {
        valueChanged: function(data){
            this.values[data.title] = data.value;
        }
    },
    components: {
        IncrementDecrementCard
    }
}
</script>
