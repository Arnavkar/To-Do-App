// where all the data goes
//Use the chrome extension for vue devtools with Vuex - we can do live manipulation of tools in the inspection browser
import Vue from 'vue'
import { uid } from 'quasar'

const state ={
    //if implementing firebase - firebase can't read arrays, only objects. Therefore we need to restructure tasks and a JSON object
    // if we change it to this object structure, the binded key in the todo page needs to change as well
    tasks:{
        // 'ID1':{
        //     name: 'Go to shop',
        //     completed: false,
        //     dueDate:"2019/05/12",
        //     dueTime:"18:30"
        // },
        // 'ID2':{
        //     name: 'Get bananas',
        //     completed: false,
        //     dueDate:"2019/05/13",
        //     dueTime:"14:30"
        // },
        // 'ID3':{
        //     name: 'Get apples',
        //     completed: false,
        //     dueDate:"2019/05/14",
        //     dueTime:"12:30" 
        // }
    }
    // tasks:[
    //     {
    //         id: 1,
    //         name: 'Go to shop',
    //         completed: false,
    //         dueDate:"2019/05/12",
    //         dueTime:"18:30"
    //     },
    //     {
    //         id: 2,
    //         name: 'Get bananas',
    //         completed: false,
    //         dueDate:"2019/05/13",
    //         dueTime:"14:30"
    //     },
    //     {
    //         id: 3,
    //         name: 'Get apples',
    //         completed: false,
    //         dueDate:"2019/05/14",
    //         dueTime:"12:30"
    //     }
    // ]
} 

//mutations -> changes the data - methods that only manipulate the data directly and instantly
const mutations={
    updateTask(state,payload){
        Object.assign(state.tasks[payload.id],payload.updates)
    },
    deleteTask(state,id){
        //delete state.tasks[id] will delete object but not re render
        //we instead need import vue and use built in Vue methods
        Vue.delete(state.tasks, id)
    },
    addTask(state,payload){
        Vue.set(state.tasks,payload.id,payload.task)
    }
}

//actions -> contains methods which can be asynchronous. these commit mutations
const actions={
    updateTask({ commit },payload){
        commit('updateTask', payload)
    },
    deleteTask({commit},id){
        commit('deleteTask',id)
    },
    addTask({commit},task){
        let taskId = uid()
        let payload = {
            id: taskId,
            task: task
        }
        commit('addTask', payload)
    }
} 

//methods that retrieve the data
// you can manipulate data with getters too
const getters = {
    tasks: (state) => {
        return state.tasks
    }
}

export default{
    namespaced: true, // allows us to create more stores (the name after the dash is the name of this particular store)
    state, 
    mutations,
    actions, 
    getters
}