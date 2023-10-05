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
      newTask : '',
    }
  },

  methods : {
    // Funzione che rimuove la task
    removeTask (index) {
      this.tasks.splice(index, 1)
    },

    addTask () {
      if (this.newTask.length > 4) {
        let taskObject = {
          text : this.newTask,
          flagDone : false
        }
        this.tasks.push(taskObject)
      }
    },
  },
  
  mounted () {
    
  }
}) .mount('#app');