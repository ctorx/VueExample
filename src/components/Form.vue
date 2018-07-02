<!-- 
    ============================================================================
      VueForm component
    ============================================================================
    I'm using this instead of inline forms in templates as this adds the 
    validation pieces needed.  See also FormMixin and ValFormGroup 
    component.

    NOTE: we are passing messages to the form-messages component and inProgress
    to the submitButton component 
-->

<template>
    <form v-on:submit="vueFormSubmit" novalidate class="needs-validation">
        <form-messages :messages="messages"></form-messages>
        <slot></slot>
        <submit-button :btnClass="btnClass" :btnText="btnText" :inProgress="inProgress"></submit-button>
    </form>
</template>

<script>
    import FormMessages from "@/components/FormMessages.vue";
    import SubmitButton from "@/components/SubmitButton.vue";

    export default {
        name: 'VueForm',
        props: {
            inProgress: Boolean,
            submitFunc: Function,
            messages: Array,
            btnText: String,
            btnClass: String
        },
        components: { FormMessages, SubmitButton },
        methods: {
            vueFormSubmit(event){
                this.submitFunc(event);
            }
        }
    }
</script>