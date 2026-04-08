import { createSection, createLinkList } from '../../../shared/dom.js';
import { learningStore } from '../store/index.js';
import { createLearningInfo } from '../components/LearningInfo.js';

export function renderLearningModule() {
  const section = createSection(learningStore.title, learningStore.description);
  section.appendChild(createLinkList(learningStore.links));
  section.appendChild(createLearningInfo());
  return section;
}
