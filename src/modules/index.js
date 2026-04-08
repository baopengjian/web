export const moduleLoaders = {
  learning: () => import('./learning/LearningModule.vue'),
  resources: () => import('./resources/ResourcesModule.vue'),
  engineering: () => import('./engineering/EngineeringModule.vue'),
  display: () => import('./display/DisplayModule.vue'),
  my: () => import('./my/MyModule.vue')
};
