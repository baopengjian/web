<template>
  <section class="module active">
    <h2>{{ learningStore.title }}</h2>
    <p>{{ learningStore.description }}</p>
    <ul>
      <li v-for="link in learningStore.links" :key="link.href">
        <a :href="link.href" target="_blank">{{ link.label }}</a>
      </li>
    </ul>
    <div class="learning-content">
      <h3>基础概念</h3>
      <p>前端开发涉及 HTML、CSS 和 JavaScript 的组合。</p>
    </div>
  </section>
</template>

<script setup>
import { learningStore } from './store/index.js';
</script>
