<template>
    <div class="tile is-parent is-4 binary-state-card" v-on:click="cardClicked" v-bind:class="{selected: selected}">
        <div class="card">
            <div class="card-content">
                <div class="tile is-parent is-vertical">
                    <div class="tile is-child">
                        <p class="title">{{ title }}</p>
                    </div>
                    <div class="tile is-child">
                        <p>{{ description }}</p>
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
</style>
