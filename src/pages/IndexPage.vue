<template>
  <q-page class="flex flex-center">
    <div class="q-pa-xl row items-start q-gutter-xl">
      <CrewCard />

    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import CrewCard from 'src/components/CrewCard.vue'

export default defineComponent({
    name: 'IndexPage',
    components: { CrewCard }
})
</script>
