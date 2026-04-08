export function sanitizeExpression(expression) {
  return expression.replace(/[^0-9.+\-*/()%\s]/g, '');
}

export function safeEvaluate(expression) {
  try {
    const sanitized = sanitizeExpression(expression);
    const result = Function(`"use strict"; return (${sanitized})`)();
    return Number.isFinite(result) ? result : null;
  } catch {
    return null;
  }
}

export function createMultiplicationTable(size = 10) {
  const table = document.createElement('table');
  const headerRow = document.createElement('tr');
  headerRow.appendChild(document.createElement('th'));

  for (let c = 1; c <= size; c += 1) {
    const th = document.createElement('th');
    th.textContent = c;
    headerRow.appendChild(th);
  }
  table.appendChild(headerRow);

  for (let r = 1; r <= size; r += 1) {
    const row = document.createElement('tr');
    const rowHeader = document.createElement('th');
    rowHeader.textContent = r;
    row.appendChild(rowHeader);

    for (let c = 1; c <= size; c += 1) {
      const cell = document.createElement('td');
      cell.textContent = r * c;
      row.appendChild(cell);
    }
    table.appendChild(row);
  }

  return table;
}
