<template>
  <section class="module active">
    <h2>{{ myStore.title }}</h2>
    <p>{{ myStore.description }}</p>
    <div class="my-content">
      <h3>关于我</h3>
      <p>{{ myStore.about }}</p>
      <h3>项目</h3>
      <ul>
        <li v-for="project in myStore.projects" :key="project">{{ project }}</li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { myStore } from './store/index.js';
</script>
