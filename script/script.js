// 2. Creare i data che mi serviranno a gestire le azioni in pagina.

const { createApp } = Vue;

createApp ({
  data () {
    return {
      tasks : [
        {
          text : 'Fare la spesa',
          flagDone : false
        },
        {
          text : 'Pagare la bolletta',
          flagDone : false
        }
      ],
      newTasks : []
    }
  },

  methods : {
    // Funzione che rimuove la task
    removeTask (index) {
      this.tasks.splice(index, 1)
    },

    addTask () {
      this.newTasks.push(newTask)
    }

    taskDone () {
      
    }
  },
  
  mounted () {
    
  }
}) .mount('#app');