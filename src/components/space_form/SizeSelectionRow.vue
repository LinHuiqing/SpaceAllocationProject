<template>
    <div>
        <p class="title">Size of Booth Area</p>
        <p class="subtitle">Choose one</p>
        <div class="tile is-ancestor">
        <BinaryStateCard
            title="Standard"
            description="1x1m space enough to fit a table and display monitor. Ample for software-only projects."
            v-bind:selected="this.selections.Standard"
            v-on:toggleSelection="onCardSelected">

        </BinaryStateCard>

        <BinaryStateCard
            title="Upsize"
            description="2x2m space for a table + some floor area to demonstrate a moving prototype."
            v-bind:selected="this.selections.Upsize"
            v-on:toggleSelection="onCardSelected">

        </BinaryStateCard>

        <CustomSpaceCard
            title="Custom"
            description="Define a custom space here"
            v-bind:selected="this.selections.Custom"
            v-on:toggleSelection="onCardSelected">

        </CustomSpaceCard>
        </div>
    </div>
</template>

<script>
import BinaryStateCard from './BinaryStateCard.vue'
import CustomSpaceCard from './CustomSpaceCard.vue'

export default {
    name: "size-selection-row",
    data: function(){
        return {
            selections: {
                Standard: true,
                Upsize: false,
                Custom: false,
            },
            customSize: {
                length: 0,
                breadth: 0,
            }
        }
    },
    methods: {
        onCardSelected: function(data){
            this.selections[data.title] = true
            if(this.selections[data.title] === true){
                let sizes = ["Standard", "Upsize", "Custom"];
                for(let i = 0; i < sizes.length; i++){
                    if(data.title !== sizes[i]){
                        this.selections[sizes[i]] = false;
                    }
                }
                if (data.title === sizes[0]) {
                  this.setLength(1);
                  this.setBreadth(1);
                } else if (data.title === sizes[1]) {
                  this.setLength(2);
                  this.setBreadth(2);
                } else {
                  this.customSize.length = data.length;
                  this.customSize.breadth = data.breadth;
                  this.setLength(this.customSize.length);
                  this.setBreadth(this.customSize.breadth);
                }
            }
        },
        setLength (length) {
          this.$store.commit('form/setLength', length)
        },
        setBreadth (breadth) {
          this.$store.commit('form/setBreadth', breadth)
        },
    },
    components: {
        BinaryStateCard, CustomSpaceCard
    }
}
</script>
