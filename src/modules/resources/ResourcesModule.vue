<template>
  <section class="module active">
    <h2>{{ resourcesStore.title }}</h2>
    <p>{{ resourcesStore.description }}</p>
    <div
      v-for="group in resourcesStore.groups"
      :key="group.title"
      class="resource-submodule">
      <h3>{{ group.title }}</h3>
      <p>{{ group.description }}</p>
      <ul>
        <li v-for="link in group.links" :key="link.href">
          <a :href="link.href" target="_blank">{{ link.label }}</a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { resourcesStore } from './store/index.js';
</script>
