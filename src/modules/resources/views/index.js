import { createSection } from '../../../shared/dom.js';
import { resourcesStore } from '../store/index.js';
import { createResourceGroup } from '../components/ResourceGroup.js';

export function renderResourcesModule() {
  const section = createSection(resourcesStore.title, resourcesStore.description);
  resourcesStore.groups.forEach(group => {
    section.appendChild(createResourceGroup(group.title, group.description, group.links));
  });
  return section;
}
