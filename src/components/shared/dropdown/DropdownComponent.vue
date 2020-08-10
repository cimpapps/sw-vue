<template>
  <div class="text-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-list-item
            v-for="(item, index) in columns"
            :key="index"
        >
          <v-checkbox
              v.if='item.hasOwnProperty("hidden")'
              v-model="!item.hidden"
              :label="item.headerName"
              :value="item.id"
              selected-color="red"
              @click="checkElement(item.id)"
          ></v-checkbox>
        </v-list-item>
        <v-btn
            color="primary"
            dark
            v-bind="attrs"
            vx-on="on"
        >
          Dropdown
        </v-btn>
      </template>
      <v-list>
        <v-container fluid>

        </v-container>
      </v-list>
    </v-menu>
  </div>
</template>

<script lang="ts" src="./dropdown.component.ts">

</script>
