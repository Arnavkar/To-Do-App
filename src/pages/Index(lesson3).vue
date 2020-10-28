<template>
  <q-page padding>
    <ul>
      <task 
        v-for="(task,index) in tasks"
        :key="task.id"
        :task="task"
        :index="index">{{task.name}}</task>
    </ul>
  </q-page>
</template>

<script>

export default {
  components:{
    'task': require('components/task.vue').default
  },
  data(){
    return {
      tasks:[
        {
          id:'001',
          name: 'go to shop',
          dueDate: '2019/05/12',
          dueTime:'10:30'
        },
         {
          id:'002',
          name: 'get bananas',
          dueDate: '2019/05/13',
          dueTime:'14:30'
        },
         {
          id:'003',
          name: 'get apples',
          dueDate: '2020/05/13',
          dueTime:'07:30'
        }
      ]
    }
  },
  methods: {
    deleteTask(index) {;
      this.tasks.splice(index,1)
    }
  }
}
</script>

<style>

</style>