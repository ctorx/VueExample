
export default {
    data: function() {
        return {
            inProgress: false,
            messages:[]
        }  
    },
    methods: {
        whenValid: function(event, onValid) {
            event.preventDefault();
            event.stopPropagation();

            // Clear messages on submit            
            this.messages = [];

            var form = event.target;
            if (form.checkValidity() === false) {
                form.classList.add('was-validated');
                return;
            }
            onValid();
        },
        getParams: function(values) {
            var params = new URLSearchParams();
            for(var key in values) {
                params.append(key, values[key]);
            }
            return params;       
        }
    }
};
