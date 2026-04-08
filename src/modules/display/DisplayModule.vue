<template>
  <section class="module active">
    <h2>{{ displayStore.title }}</h2>
    <p>{{ displayStore.description }}</p>
    <div class="display-content">
      <button type="button" @click="generateTable">生成乘法表</button>
      <div class="table-container" v-if="table.length">
        <table>
          <thead>
            <tr>
              <th></th>
              <th v-for="c in size" :key="c">{{ c }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in table" :key="row[0]">
              <th>{{ row[0] }}</th>
              <td v-for="(cell, index) in row.slice(1)" :key="index">{{ cell }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>计算器</h3>
      <div class="form-row">
        <label for="expression">输入表达式：</label>
        <input id="expression" type="text" v-model="expression" placeholder="例如 12 + 5 * 3" />
      </div>
      <button type="button" @click="evaluate">计算</button>
      <p class="result">结果：<span>{{ result }}</span></p>
      <p class="error">{{ errorMessage }}</p>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { displayStore } from './store/index.js';
import { safeEvaluate } from '../../shared/utils.js';

const expression = ref('');
const result = ref('--');
const errorMessage = ref('');
const size = 12;
const table = ref([]);

function generateTable() {
  const rows = [];
  for (let r = 1; r <= size; r += 1) {
    const row = [r];
    for (let c = 1; c <= size; c += 1) {
      row.push(r * c);
    }
    rows.push(row);
  }
  table.value = rows;
}

function evaluate() {
  errorMessage.value = '';
  if (!expression.value.trim()) {
    errorMessage.value = '请输入表达式';
    result.value = '--';
    return;
  }

  const value = safeEvaluate(expression.value);
  if (value === null) {
    errorMessage.value = '表达式无效';
    result.value = '--';
  } else {
    result.value = value;
  }
}
</script>
