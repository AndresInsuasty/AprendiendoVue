new Vue({
    el: '#app',

    data (){
        return{
            name: 'Bitcoin',
            img: 'https://bitcoin.org/img/icons/opengraph.png?1608131429',
            changePercent: -10,
            prices: [1000,2000,3000,4000,5000,6000,7000],
            pricesWithDays:[
                {day:'Lunes',value:1000},
                {day:'Martes',value:2000},
                {day:'Miercoles',value:3000},
                {day:'Jueves',value:4000},
                {day:'Viernes',value:5000},
                {day:'Sabado',value:6000},
                {day:'Domingo',value:7000},
            ]
        }
    }
})