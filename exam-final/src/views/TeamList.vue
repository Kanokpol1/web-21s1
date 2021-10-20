<template>
  <div >
    <p class="is-size-1">Team</p>
    <a href="/teams/australia"> Australia </a> <img src="/images/teams/australia.png" class = "Joker">
    <br><a href="/teams/france"> France  </a> <img src="/images/teams/france.png" class = "Joker">
    <br><a href="/teams/germany"> Germany  </a> <img src="/images/teams/Germany.png" class = "Joker">
    <br><a href="/teams/great-britain"> Great Britain </a> <img src="/images/teams/great-britain.png" class = "Joker">
    <br><a href="/teams/italy"> Italy  </a> <img src="/images/teams/italy.png" class = "Joker">
    <br><a href="/teams/japan"> Japan  </a> <img src="/images/teams/japan.png" class = "Joker">
    <br><a href="/teams/netherlands"> Netherlands </a> <img src="/images/teams/netherlands.png" class = "Joker">
    <br><a href="/teams/chinaa"> People's Republic of China  </a> <img src="/images/teams/china.png" class = "Joker">
    <br><a href="/teams/roc"> ROC  </a> <img src="/images/teams/roc.png" class = "Joker">
    <br><a href="/teams/usa"> United States of America  </a> <img src="/images/teams/usa.png" class = "Joker">
  </div>
</template>

<script lang="ts">
import { Team } from '@/store/types'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class TeamList extends Vue {
  get Team (): Team[] {
    return this.$store.state.teams
      .sort((a: Team, b: Team) => a.name.localeCompare(b.name))
  }
}
</script>

<style scoped>
.Joker {
  width: 2%;
  height: 2%;
  margin-right: 1rem;
  margin-top: 15px;
}
</style>
