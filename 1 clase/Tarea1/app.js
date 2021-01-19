new Vue({
    el: '#app',

    data() {
        return {
            title: '',
            time: 0,
            courses: [],
            totalTime:0,


        }
    },

    computed: {},

    methods: {
        addCourse() {
            this.courses = this.courses.concat({'title':this.title,'time':this.time})
            this.totalTime += parseInt(this.time) 
            this.title = ''
            this.time = 0
        }
    }
})