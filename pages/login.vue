<template>
  <v-container>
    <v-row justify="center">
      <v-col sm="6">
        <v-text-field label="Email" variant="outlined"></v-text-field>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col sm="6">
        <v-text-field label="Password" variant="outlined"></v-text-field>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col sm="6">
        <v-btn color="blue-grey" prepend-icon="mdi-checkbox-marked-circle" class="w-100" size="large">
          Login
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>