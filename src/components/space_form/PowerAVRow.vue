<template>
    <div>
        <p class="title">Power &amp; AV</p>
        <p class="subtitle">Change Quantity As Appropiate</p>
        <div class="tile is-ancestor">
        <IncrementDecrementCard
            title="Power Outlets"
            description="How many power outlets you need. Do not daisy chain your own extension cords."
            v-on:valueChanged="setPowerOutlets">
        </IncrementDecrementCard>

        <IncrementDecrementCard
            title="Widescreen Monitors"
            description="HDMI Connectivity. No speakers."
            v-on:valueChanged="setMonitors">
        </IncrementDecrementCard>

        <IncrementDecrementCard
            title="Photo/Video Frame"
            description="Same thing you used for 3.007 exhibition. Can play sound but horrible picture quality."
            v-on:valueChanged="setFrames">
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
        setPowerOutlets (powerOutlets) {
          this.$store.commit('form/setPowerOutlets', powerOutlets)
        },
        setMonitors (monitors) {
          this.$store.commit('form/setMonitors', monitors)
        },
        setFrames (frames) {
          this.$store.commit('form/setFrames', frames)
        },
    },
    components: {
        IncrementDecrementCard
    }
}
</script>
