import { createSection } from '../../../shared/dom.js';
import { myStore } from '../store/index.js';
import { createProfileInfo } from '../components/ProfileInfo.js';

export function renderMyModule() {
  const section = createSection(myStore.title, myStore.description);
  section.appendChild(createProfileInfo(myStore.about, myStore.projects));
  return section;
}
