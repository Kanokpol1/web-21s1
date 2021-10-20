<template>
  <div>
    <b-navbar type="is-primary" wrapper-class="container">
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ name: 'Home' }">
          <img src="/images/sports/rhythmic.png" style="filter: invert(1)" class="mr-1" />
          <span class="is-size-4">BEC Olympics</span>
        </b-navbar-item>
      </template>
      <template #start>

        <!-- TEAMS -->
         <b-navbar-item tag="router-link" :to="{ name: 'TeamDetails', params: { teamSlug: 'usa' } }">Team: USA</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ name: 'TeamList' }">Teams</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ name: 'TeamCreate' }">Create Team</b-navbar-item>
      </template>
    </b-navbar>

    <div class="container">
      <router-view />
    </div>
  </div>
</template>
