<template>
  <section class="module active">
    <h2>{{ engineeringStore.title }}</h2>
    <p>{{ engineeringStore.description }}</p>
    <ul>
      <li v-for="tool in engineeringStore.tools" :key="tool">{{ tool }}</li>
    </ul>
    <div class="engineering-content">
      <h3>项目结构</h3>
      <p>{{ engineeringStore.intro }}</p>
    </div>
  </section>
</template>

<script setup>
import { engineeringStore } from './store/index.js';
</script>
