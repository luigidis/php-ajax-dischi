console.log('yo');

const app = new Vue({
    el: '#app',
    data: {
        discs: [],
    },
    methods: {
        fetchDiscs() {
            axios
                .get('./api/dischi.php')
                .then((res) => {
                    console.log(res);
                    this.discs = res.data.response;
                })
        }

    },
    beforeMount() {
        this.fetchDiscs();
    },

});