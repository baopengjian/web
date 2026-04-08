import { createSection } from '../../../shared/dom.js';
import { displayStore } from '../store/index.js';
import { createCalculator } from '../components/Calculator.js';
import { createMultiplicationSection } from '../components/MultiplicationTable.js';

export function renderDisplayModule() {
  const section = createSection(displayStore.title, displayStore.description);
  section.appendChild(createMultiplicationSection());
  section.appendChild(createCalculator());
  return section;
}
