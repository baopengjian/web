// 模块切换
const navBtns = document.querySelectorAll('.nav-btn');
const modules = document.querySelectorAll('.module');

navBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // 移除所有 active 类
    navBtns.forEach(b => b.classList.remove('active'));
    modules.forEach(m => m.classList.remove('active'));
    
    // 添加 active 类到当前按钮和模块
    btn.classList.add('active');
    const moduleId = btn.dataset.module;
    document.getElementById(moduleId).classList.add('active');
  });
});

// 计算器功能
const expressionInput = document.getElementById("expression");
const evaluateBtn = document.getElementById("evaluateBtn");
const resultValue = document.getElementById("resultValue");
const errorMessage = document.getElementById("errorMessage");

function safeEvaluate(expression) {
  try {
    const sanitized = expression.replace(/[^0-9.+\-*/()%\s]/g, "");
    const result = Function(`"use strict"; return (${sanitized})`)();
    return Number.isFinite(result) ? result : "无效结果";
  } catch (error) {
    return null;
  }
}

if (evaluateBtn) {
  evaluateBtn.addEventListener("click", () => {
    const expression = expressionInput.value.trim();
    if (!expression) {
      errorMessage.textContent = "请输入表达式";
      resultValue.textContent = "--";
      return;
    }
    const result = safeEvaluate(expression);
    if (result === null) {
      errorMessage.textContent = "表达式无效";
      resultValue.textContent = "--";
    } else {
      errorMessage.textContent = "";
      resultValue.textContent = result;
    }
  });
}

// 乘法表功能
const showTableBtn = document.getElementById("showTableBtn");
const multiplicationTable = document.getElementById("multiplicationTable");

function renderMultiplicationTable(size = 10) {
  const table = document.createElement("table");
  const headerRow = document.createElement("tr");
  headerRow.appendChild(document.createElement("th"));

  for (let c = 1; c <= size; c += 1) {
    const th = document.createElement("th");
    th.textContent = c;
    headerRow.appendChild(th);
  }
  table.appendChild(headerRow);

  for (let r = 1; r <= size; r += 1) {
    const row = document.createElement("tr");
    const rowHeader = document.createElement("th");
    rowHeader.textContent = r;
    row.appendChild(rowHeader);

    for (let c = 1; c <= size; c += 1) {
      const cell = document.createElement("td");
      cell.textContent = r * c;
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
  return table;
}

if (showTableBtn) {
  showTableBtn.addEventListener("click", () => {
    multiplicationTable.innerHTML = "";
    multiplicationTable.appendChild(renderMultiplicationTable(12));
  });
}
  }

  multiplicationTable.innerHTML = "";
  multiplicationTable.appendChild(table);
}

evaluateBtn.addEventListener("click", () => {
  errorMessage.textContent = "";
  const expression = expressionInput.value.trim();

  if (!expression) {
    errorMessage.textContent = "请输入一个数学表达式。";
    resultValue.textContent = "--";
    return;
  }

  const result = safeEvaluate(expression);
  if (result === null) {
    errorMessage.textContent = "表达式无效，请检查语法。";
    resultValue.textContent = "--";
  } else {
    resultValue.textContent = result;
  }
});

showTableBtn.addEventListener("click", () => {
  renderMultiplicationTable(12);
});

aValue.addEventListener("input", updateSum);
bValue.addEventListener("input", updateSum);

renderMultiplicationTable(12);
updateSum();
