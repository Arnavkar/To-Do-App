 <!-- padding all directions medium : refer to style and identity spacing-->
<template>
  <q-page class="q-ma-lg">
    <q-list 
    v-if="Object.keys(tasks).length"
    separator
    bordered>
      
      <task 
      v-for="(task,key) in tasks" 
      :key="key" 
      :task="task" 
      :id="key"></task>
    </q-list>

    <div class="absolute-bottom text-right q-mb-xl">
      <q-btn 
      @click="showAddTask=true"
      round 
      color="primary" 
      size="24px" 
      icon="add" />
    </div>

    <q-dialog v-model="showAddTask">
      <add-task @close-popup="showAddTask=false;"/>
    </q-dialog>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    data(){
        return {
            showAddTask:false
        }
    },
    computed: {
        ...mapGetters("tasks", ["tasks"]),
        // tasks(){
        //     this.$store.getters['tasks/tasks'] -> without map getters
        //     from store called tasks, get the the tasks getter
        // }
    },
    components: {
        'task': require("components/Tasks/task.vue").default,
        'add-task': require("components/Tasks/Modals/addtask.vue").default,
    },
};
</script>
<style>
</style>