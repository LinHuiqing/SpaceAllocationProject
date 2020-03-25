<template>
    <div class="tile is-parent is-vertical">
        <p class="title">Request for space</p>
        <p class="subtitle">Use this form to request for space.</p>

        <SizeSelectionRow></SizeSelectionRow>

        <PowerAVRow></PowerAVRow>
    </div>
</template>

<script>
import SizeSelectionRow from './space_form/SizeSelectionRow';
import PowerAVRow from './space_form/PowerAVRow.vue';

export default {
  name: "SpaceForm",
  components: {
    SizeSelectionRow, PowerAVRow
  }
}
</script>
