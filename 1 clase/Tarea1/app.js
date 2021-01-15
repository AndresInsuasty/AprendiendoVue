new Vue({
    el: '#app',

    data() {
        return {
            title: '',
            time: 0,
            courses: ['primero', 'segundo'],
            totalTime:0,


        }
    },

    computed: {},

    methods: {
        addCourse() {
            thiscourses = this.courses.concat(this.title)
            this.title = ''
            this.time = 0
        }
    }
})