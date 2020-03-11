<template>
    <div>
        <p class="title">Other Details</p>
        <p class="subtitle">Pick as appropiate</p>
        <div class="tile is-ancestor">
        <BinaryStateCard
            title="Noise Sensitive"
            description="If your project is sensitive to noise, e.g. microphone, voice input/output, indicate so here. We will spread out noise sensitive displays as far out as possible."
            v-bind:selected="this.selections['Noise Sensitive']"
            v-on:toggleSelection="onCardSelected">

        </BinaryStateCard>

        <BinaryStateCard
            title="Noise Generation"
            description="If your prototype includes machinery that operates significant noise (e.g. drones), indicate so here."
            v-bind:selected="this.selections['Noise Generation']"
            v-on:toggleSelection="onCardSelected">

        </BinaryStateCard>

        <BinaryStateCard
            title="Headroom"
            description="If your prototype requires significant headroom, indicate so here"
            v-bind:selected="this.selections['Headroom']"
            v-on:toggleSelection="onCardSelected">

        </BinaryStateCard>
        </div>
    </div>
</template>

<script>
import BinaryStateCard from './BinaryStateCard.vue'

export default {
    name: "size-selection-row",
    data: function(){
        return {
            selections: {
                "Noise Sensitive": false,
                "Noise Generation": false,
                "Headroom": false,
            },
            customSize: {
                width: 0,
                height: 0,
            }
        }
    },
    methods: {
        onCardSelected: function(data){
            this.selections[data.title] = !this.selections[data.title];
        }
    },
    components: {
        BinaryStateCard
    }
}
</script>
