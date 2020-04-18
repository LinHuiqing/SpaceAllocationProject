<template>
    <div class="tile is-parent is-4 increment-decrement-card">
        <div class="card">
            <div class="card-content">
                <div class="tile is-parent is-vertical">
                    <div class="tile is-child title">
                        <p class="title">{{ title }}</p>
                    </div>
                    <div class="tile is-child description">
                        <p>{{ description }}</p>
                    </div>
                    <div class="tile is-child">
                        <section>
                            <b-field label="Quantity">
                                <b-numberinput
                                    min="0"
                                    v-model="value"
                                    v-on:input="valueChanged">
                                </b-numberinput>
                            </b-field>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "increment-decrement-card",
    data: function(){
        return {
            value: 0,
        };
    },
    props: {
        "title": String,
        "description": String
    },
    methods: {
        valueChanged(){
            this.$emit("valueChanged", this.value);
        },
    }
}
</script>

<style scoped>
/*
This is to ensure the card contents are all of the same height so that the input buttons are all aligned
 */
.increment-decrement-card .card-content {
    height: 100%;
}

.increment-decrement-card .card-content .is-parent{
    height: 100%;
}

.increment-decrement-card .card {
    width: 100%;
}
</style>
