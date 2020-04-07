<template>
    <div>
        <p class="title">Tables &amp; Pedestals</p>
        <p class="subtitle">Change Quantity As Appropiate</p>
        <div class="tile is-ancestor is-12 is-vertical">
            <div class="tile is-12">
                <IncrementDecrementCard
                    title="Small Tables"
                    description="0.5x0.5 Table"
                    v-bind:value="this.values['Small Tables']"
                    v-on:valueChanged="valueChanged">
                </IncrementDecrementCard>


                <IncrementDecrementCard
                    title="Large Tables"
                    description="1x1 Table"
                    v-bind:value="this.values['Large Tables']"
                    v-on:valueChanged="valueChanged">
                </IncrementDecrementCard>

                <IncrementDecrementCard
                    title="Small Pedestal"
                    description="0.5x0.5x1 pedestal to prominently display a prototype."
                    v-bind:value="this.values['Small Pedestals']"
                    v-on:valueChanged="valueChanged">
                </IncrementDecrementCard>
            </div>
            <div class="tile is-12">
                <IncrementDecrementCard
                    title="Large Pedestal"
                    description="1x1x0.5 pedestal to prominently display a prototype."
                    v-bind:value="this.values['Large Pedestals']"
                    v-on:valueChanged="valueChanged">
                </IncrementDecrementCard>
            </div>
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
                "Small Tables": 0,
                "Large Tables": 0,
                "Small Pedestals": 0,
                "Large Pedestals": 0,
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
