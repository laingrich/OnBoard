<template>
  <div
    v-for="(crewMember, index) in crewMembers"
    :key="index"
    class="q-pa-sm row items-start q-gutter-sm"
    @click="toggleCardIn(index)"
    :style="{'border-radius': '10px', 'background-color': crewMember.in ? 'green' : 'red'}"
  >
    <q-card
      class="my-card"
      :style="{ 'border-radius': '10px' }"
      >
      <img :src="`src/assets/${crewMember.image}`">

      <q-card-section>
        <div class="text-h6">{{ crewMember.name }}</div>
        <div class="text-subtitle2">{{ crewMember.role }}</div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      crewMembers: [
        { name: 'John Haddock', role: 'Captain', image: 'captain.png', in: false },
        { name: 'Tin-Tin', role: 'First Mate', image: 'first_mate.png', in: false },
        { name: 'Snowy', role: 'Boat-Dog', image: 'boat_dog.png', in: false },
        { name: 'Bianca', role: 'Head Chef', image: 'chef.png', in: false },
        { name: 'Calculus', role: 'Chief Engineer', image: 'chief_engineer.png', in: false },
        { name: 'Nestor', role: 'Chief Steward', image: 'chief_steward.png', in: false },
        { name: 'Thomson', role: 'Deckhand', image: 'deckhand1.png', in: false },
        { name: 'Thompson', role: 'Deckhand', image: 'deckhand2.png', in: false },
      ]
    }
  },
  methods: {
    toggleCardIn(index) {
      this.crewMembers[index].in = !this.crewMembers[index].in;
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
.selected-card
  background-color: green
</style>
