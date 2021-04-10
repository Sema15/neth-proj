<template>
  <tbody>
  <tr v-for="(item, index) in displayedPackages"
      :key="index"
      class=""
      @click="show(item)"
  >
    <td><p class="text-left">{{ item.name }}</p></td>
    <td><p class="text-left">{{ item.author }}</p></td>
  </tr>
  <div class="pagination">
    <div
        v-for="(pageNumber, index) in pages"
        :key="index"
        :class="{activePage : page === pageNumber}"
        class="page-item"
    >
      <button
          class="page-link"
          type="button"
          @click="page = pageNumber">{{ pageNumber }}
      </button>
    </div>
  </div>
  <modal :adaptive="true" name="packageDesc">
    <v-container v-if="packageDesk" fluid>
      <h1>{{ packageDesk.name }}
        <v-chip class="ma-2">{{ packageDesk.lastversion }}</v-chip>
      </h1>
      <h2>by {{ packageDesk.author }}</h2>
      <p>{{ packageDesk.description }}</p>
      <p>GitHub: <a :href="packageDesk.github" target="_blank">{{ packageDesk.github }}</a> </p>
      <p v-if="packageDesk.github !== packageDesk.homepage">HomePage:
        <a
            :href="packageDesk.homepage"
            target="_blank"
        >{{ packageDesk.homepage }}</a></p>
    </v-container>
  </modal>
  </tbody>
</template>

<script>
export default {
  name: "Card",
  props: {
    packages: {
      type: Array
    },
    pages: {
      type: Array
    },
    page: {
      type: Number
    }
  },
  data() {
    return {
      packageDesk: null,
      perPage: 10,
    }
  },
  methods: {
    show(pack) {
      this.$modal.show('packageDesc');
      this.packageDesk = pack
    },
    paginate(packages) {
      let from = (this.page * this.perPage) - this.perPage;
      let to = (this.page * this.perPage);
      return packages.slice(from, to);
    }
  },
  computed: {
    displayedPackages() {
      return this.paginate(this.packages);
    }
  },
}
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  flex-wrap: wrap;
  padding-top: 20px;

  .page-item {
    border: 1px solid;
    border-radius: 4px;
    margin: 0 4px 4px 0;

    &.activePage {
      background-color: #808080;
    }

    .page-link {
      padding: 0 10px;
    }
  }
}
</style>
