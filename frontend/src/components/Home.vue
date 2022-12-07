<template>
  <div class="mt-5">
    <h1>Home</h1>
    
    <div class="row">
      <div class="col">
        <input v-model="startDate" type="date" class="form-control" placeholder="Start Date" aria-label="Start Date">
      </div>
      <div class="col">
        <input v-model="endDate" type="date" class="form-control" placeholder="End Date" aria-label="End Date">
      </div>
    </div>
    <div class="row mt-3">
      <div class="col">
        <button class="btn btn-primary" @click="submit">load data</button>
        <button class="btn btn-warning ml-2" @click="reset">reset data</button>
      </div>
    </div>
    <div class="mt-3">
      <div class="bg-light p-3">
        {{response}}
      </div>
    </div>

    <ul class="mt-5">
      <li v-for="company in companies" :key="company.id">
        {{ company.name }}
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    props: ['category'],
    async created() {
      const companies = await axios.get(`${this.$config.apiUrl}/companies`);
      if (companies.data) {
        console.log(companies.data)
        this.companies = companies.data;
      }
    },
    
    data() {
      return {
        companies: null,
        response: null,
        startDate: null,
        endDate: null
      }
    },

    methods: {
      async submit(event) {
        console.log(event);
        let resp = await axios.post(`${this.$config.apiUrl}/submit?name=tester`, {
          card_cvc: "123",
          account_number: "234522134",
          ssn: "1234",
          card_number: "16661",
          startDate: this.startDate,
          endDate: this.endDate,
        });
        console.log(resp)
        this.response = resp.data
      },

      reset() {
        this.response = null
      }

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
