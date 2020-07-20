<template>
  <div class="text-center">
    <v-menu offset-y>
      <v-content>
        <v-btn
            color="primary"
            dark
            slot="activator"
        >
          Dropdown
        </v-btn>
      </v-content>
      <v-list>
        <v-list-item
            v-for="(item, index) in items"
            :key="index"
            @click=""
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
    export default {
        data: () => ({
            items: [
                { title: 'Click Me' },
                { title: 'Click Me' },
                { title: 'Click Me' },
                { title: 'Click Me 2' },
            ],
        }),
    }
</script>
<style scoped>

</style>



