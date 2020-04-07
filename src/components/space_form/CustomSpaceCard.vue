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
                    <div class="tile is-child">
                        <p>Enter space:</p>
                        <b-field label="Length" class="lmao">
                            <b-input type="number"
                                min="1"
                                v-model="length"
                                maxlength=2
                                v-on:input="cardClicked">
                            </b-input>
                        </b-field>
                        <b-field label="Breadth" class="lmao">
                            <b-input type="number"
                                min="1"
                                v-model="breadth"
                                maxlength=2
                                v-on:input="cardClicked">
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
    data() {
      return {
        length: "1",
        breadth: "1"
      }
    },
    methods: {
        cardClicked: function(){
            this.$emit("toggleSelection", {
                "title": this.title,
                "selected": this.selected,
                "length": this.length,
                "breadth": this.breadth
            });
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
