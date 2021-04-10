<template>
  <v-container fluid>
    <div class="v-input theme--light v-text-field v-text-field--is-booted">
      <div class="v-input__control">
        <div class="v-input__slot">
          <div class="v-text-field__slot">
            <label
                class="v-label theme--light"
                for="input-6"
                style="left: auto; right: 0; position: absolute;"
            >Search
            </label>
            <input
                id="input-6"
                type="text"
                @input="searchInput($event)"
            >
          </div>
        </div>
      </div>
    </div>
    <v-simple-table>
      <template v-slot:default>
        <thead v-if="searchResponse[0]">
        <tr>
          <th>Name</th>
          <th>Author</th>
        </tr>
        </thead>
        <Card
            v-if="searchResponse"
            :packages="searchResponse"
            :pages="pages"
            :page="1"
        />
      </template>
    </v-simple-table>
  </v-container>
</template>

<script>
import Card from "./Card";

export default {
  name: 'Main',
  data() {
    return {
      pages: [],
      perPage: 10,
    }
  },
  components: {
    Card,
  },
  methods: {
    searchInput(event) {
      this.pages = [];
      this.$store.dispatch('searchSignUp', event.target.value);
    },
    setPages() {
      let numberOfPages = Math.ceil(this.searchResponse.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
  },
  computed: {
    searchResponse() {
      return this.$store.state.searchResp
    }
  },
  watch: {
    searchResponse() {
      this.setPages();
    }
  },
}
</script>

<style>

</style>
