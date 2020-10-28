<template>
    <q-item 
    @click="updateTask({
        id: id,
        updates:{
            completed: !task.completed
        }
    })"
    :class= "!task.completed ? 'bg-orange-1' : 'bg-green-1' " 
    clickable
    v-ripple>
        <q-item-section side top>
            <q-checkbox 
            v-model="task.completed"/>
        </q-item-section>
        <q-item-section>
            <q-item-label
                :class="{'text-strikethrough' : task.completed}"> 
                {{task.name}}
            </q-item-label>
            <!-- <q-item-label caption>
                Notify me about updates etc. etc. 
            </q-item-label> -->
        </q-item-section>

        <q-item-section 
        v-if="task.dueDate"
        side>
            <div class="row">
                <div class="column justify-center">
                    <q-icon 
                    name="event"
                    size="18px"
                    class="q-mr-xs"/>
                    </div>
                <div class="column">
                    <q-item-label 
                    class="row justify-end"
                    caption>
                        {{task.dueDate}}
                    </q-item-label>
                    <q-item-label 
                    class="row justify-end"
                    caption>
                        <small>{{task.dueTime}}</small>
                    </q-item-label>
                </div>
            </div>
        </q-item-section> 

        <q-item-section side>
            <q-btn 
            @click.stop="promptToDelete(id)"
            flat 
            round 
            color="red"
            icon="delete"
            dense/>
        </q-item-section> 
    </q-item>
    <!-- // click.stop prevents the click from propagating to the other paired click functions, very important! -->
</template>

<script>
import {mapActions} from 'vuex'

export default {
    props:['task','id'],
    methods:{
        ...mapActions('tasks',['updateTask','deleteTask']),
        //^ the above masks the action tasks available
        promptToDelete(id){
            this.$q.dialog({
                title:'Confirm',
                message: "Would you like to delete this task?",
                ok:{
                    push:true
                },
                cancel:{
                    color:'negative'
                },
                persistent: true
            }).onOk(()=>{
                this.deleteTask(id)
            })
        }
    }
}
</script>

<style>

</style>