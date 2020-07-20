<template>
  <div class="text-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            color="primary"
            dark
            v-bind="attrs"
            v-on="on"
        >
          Dropdown
        </v-btn>
      </template>
      <v-list>
        <v-container fluid>
          <v-list-item
              v-for="(item, index) in columns"
              :key="index"
          >
            <v-checkbox
                v-model="test"
                :label="item.headerName"
                :value="item.id"
                selected-color="red"
            ></v-checkbox>
          </v-list-item>
        </v-container>
      </v-list>
    </v-menu>
  </div>
</template>

<script lang="ts" src="./dropdown.component.ts">

</script>
