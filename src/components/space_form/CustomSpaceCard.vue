<template>
    <div class="tile is-parent is-4 binary-state-card custom-state-card" v-on:click="cardClicked" v-bind:class="{selected: selected}">
        <div class="card">
            <div class="card-content">
                <div class="tile is-parent is-vertical">
                    <div class="tile is-child">
                        <p class="title">{{ title }}</p>
                    </div>
                    <div class="tile is-child">
                        <p>{{ description }}</p>
                    </div>
                    <div class="tile is-child" v-on:click="cancelPropogation">
                        <p>Enter space:</p>
                        <b-field label="Length" class="lmao">
                            <b-input type="number"
                                v-model="length"
                                v-on:click="cancelPropogation"
                                maxlength=2>
                            </b-input>
                        </b-field>
                        <b-field label="Width" class="lmao">
                            <b-input type="number"
                                v-model="width"
                                v-on:click="cancelPropogation"
                                maxlength=2>
                            </b-input>
                        </b-field>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "binary-state-card",
    props: {
        "title": String,
        "description": String,
        "selected": Boolean,
    },
    methods: {
        cardClicked: function(){
            this.$emit("toggleSelection", {
                "title": this.title,
                "selected": this.selected,
            });
        },
        cancelPropogation: function(event){
            console.log("nani");
            event.stopPropogation();
        }
    }
}
</script>

<style scoped>
.binary-state-card:hover{
    background-color: yellow;
    cursor: pointer;
}

.binary-state-card .card {
    width: 100%;
}

.binary-state-card.selected .card {
    background-color: lightgreen;
}

.lmao {
    width: 50%;
    display: inline-block;
}
</style>
