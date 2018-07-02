
<template>
    <div class="container">
      <vue-form :submitFunc="submit" :messages="messages" :inProgress="inProgress" btnClass="btn btn-success" btnText="Sign In">
        <div class="signin">
          <h1>Sign In</h1>

          <form-group hasLabel="true">
            <label for="email">Email Address</label>
            <input type="email" v-model="email" class="form-control" required v-bind:disabled="inProgress">
          </form-group>

          <form-group hasLabel="true">
            <label for="password">Password</label>
            <input type="password" v-model="password" class="form-control" required minlength="8" :disabled="inProgress">
          </form-group>
        </div>
      </vue-form>
    </div>
</template>

<script>
  import { FormMixin, VueForm, FormGroup, SubmitButton } from '@/components/formImports.js';

  export default {
    data: function() {
      return {
        email: null,
        password: null
      };
    },
    mixins: [ FormMixin ],
    components: { VueForm, FormGroup, SubmitButton },
    methods: {
      submit: function(event){
        this.whenValid(event, () => {

          this.inProgress = true;

          // For this example, we just sleep for a few ticks and show a dummy message
          // in a real app, we'd be calling an api here
          window.setTimeout(()=> {
             this.inProgress = false;
             this.messages = [{ type: 'danger', message: 'This is a hardcoded message' }];
          }, 1500);
        })
      }
    }
  };
</script>
