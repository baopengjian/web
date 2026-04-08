<template>
  <div class="app-shell">
    <header class="header">
      <h1>前端学习演示项目</h1>
      <nav class="nav">
        <button
          v-for="item in navItems"
          :key="item.key"
          class="nav-btn"
          :class="{ active: item.key === activeModule }"
          @click="selectModule(item.key)">
          {{ item.label }}
        </button>
      </nav>
    </header>

    <main class="main">
      <component :is="currentComponent" v-if="currentComponent" />
      <div v-else class="panel">加载中...</div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const navItems = [
  { key: 'learning', label: '学习' },
  { key: 'resources', label: '资源' },
  { key: 'engineering', label: '工程' },
  { key: 'display', label: '展示' },
  { key: 'my', label: '我的' }
];
const activeModule = ref('learning');
const currentComponent = ref(null);

const moduleLoaders = {
  learning: () => import('./modules/learning/LearningModule.vue'),
  resources: () => import('./modules/resources/ResourcesModule.vue'),
  engineering: () => import('./modules/engineering/EngineeringModule.vue'),
  display: () => import('./modules/display/DisplayModule.vue'),
  my: () => import('./modules/my/MyModule.vue')
};

async function loadModule(key) {
  const module = await moduleLoaders[key]();
  currentComponent.value = module.default;
}

function selectModule(key) {
  if (activeModule.value === key) return;
  activeModule.value = key;
  loadModule(key);
}

onMounted(() => {
  loadModule(activeModule.value);
});
</script>
