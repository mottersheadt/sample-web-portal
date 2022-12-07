<template>
  <div class="mt-5">
    <h1>Submit</h1>
    <button @click="submit">submit</button>

    <div class="response">
      {{response}}
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        response: null
      }
    },

    methods: {
      async submit() {
        let resp = await axios.post(`${this.$config.apiUrl}/submit?name=tester`, {
          card_cvc: "123",
          account_number: "234522134",
          ssn: "1234",
          card_number: "16661",
        });
        this.response = resp.data
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
