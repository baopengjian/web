import { createSection } from '../../../shared/dom.js';
import { engineeringStore } from '../store/index.js';
import { createToolList } from '../components/ToolList.js';

export function renderEngineeringModule() {
  const section = createSection(engineeringStore.title, engineeringStore.description);
  section.appendChild(createToolList(engineeringStore.tools));
  section.appendChild(
    createSection('项目结构', engineeringStore.intro)
  );
  return section;
}
