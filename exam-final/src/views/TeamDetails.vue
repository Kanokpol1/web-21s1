<template>
  <div class="page-team-details">
 <div class="section" v-if="Team">
      <p class="title is-2">{{ Team.name }}</p>
      <p class="title is-5">rank: {{ Team.rank }}</p>
      <p>{{ Team.introduction }}</p>
    </div>
    <div class="section" v-else>
      <p class="title is-2">Result not found</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Team } from '@/store/types'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class TeamDetails extends Vue {
  get Team (): Team | undefined {
    return this.$store.getters.teamsBySlug[this.$route.params.slug]
  }
}
</script>
