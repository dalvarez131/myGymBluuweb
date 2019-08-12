const app = new Vue({
   el: '#app',
   data: {
       title: 'GYM with Vue',
       todos: [],
       newTodo: '',
       todoDoneStatus : false
   },
   computed: {

   },
   methods: {
    backgroundAlert(todo) {
        return {
            'alert-success' : todo.status === true,
            'alert-primary' : todo.status === false
        };
    },
    addNewTodo() {
        if (this.newTodo != '') {
            this.todos.push({
                name: this.newTodo,
                status: false });
            this.newTodo = '';
            localStorage.setItem('gym-vue',JSON.stringify(this.todos));
        }
      },
      todoDone(index) {
        this.todos[index].status ? this.todos[index].status = false : this.todos[index].status = true;
        localStorage.setItem('gym-vue',JSON.stringify(this.todos));
      },
      deleteTodo(index) {
        this.todos.splice(index, 1); 
        localStorage.setItem('gym-vue',JSON.stringify(this.todos));
      }
   },
   created: function() {
    let datosDB = JSON.parse(localStorage.getItem('gym-vue'));
    if (datosDB === null){
        this.todos = [];
    } else {
        this.todos = datosDB;
    }
   }
});