// 2. Creare i data che mi serviranno a gestire le azioni in pagina.

const { createApp } = Vue;

createApp ({
  data () {
    return {
      tasks : [
        {
          text : 'fare la spesa',
          flagDone : false
        },
        {
          text : 'pagare la bolletta',
          flagDone : false
        }
      ],
      tasksDone : [],
    }
  },

  methods : {

  },
  
  mounted () {
    
  }
})