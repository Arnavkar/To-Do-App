<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <!-- <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        /> -->

        <q-toolbar-title class = "absolute-center">
          To Do Application
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-footer>
      <q-tabs>
        <q-route-tab 
        class="text-grey-5"
        exact clickable
        v-for="nav in navs"
        :key="nav.label"
        :to="nav.to"
        :icon="nav.icon" 
        :label="nav.label"/>
        
      </q-tabs>
    </q-footer>


    <q-drawer
    v-model="leftDrawerOpen"
    :breakpoint="767"
    :width="220"
    bordered
    content-class = "bg-primary"
    > 
      <q-list dark>
        <q-item-label header> Navigation </q-item-label>
        <q-item
          class="text-grey-5"
          v-for="nav in navs"
          :key="nav.label"
          :to="nav.to"
          exact
          clickable>
          <q-item-section avatar>
            <q-icon :name="nav.icon"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>{{nav.label}}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Todo',
    //caption: 'quasar.dev',
    icon: 'list',
    link: ''
  },
  {
    title: 'Github',
    //caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  }
];

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      navs:[
        {
          icon: "list",
          label:"Todo",
          to:"/"
        },
        {
          icon:"settings",
          label:"Settings",
          to:"/settings"
        },
      ]
    }
  }
}
</script>

<style lang = "scss">
  @media screen and (min-width:800px){
    .q-footer{
      display:none;
    }
  }

  .q-drawer 
    .q-router-link--exact-active{
    color: white !important;
  }

  .q-footer .q-router-link--exact-active{
    color: white !important;
  }


</style>