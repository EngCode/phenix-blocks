<!-- .vitepress/theme/Layout.vue -->
<script setup>
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { nextTick, onMounted, watch } from 'vue'

const { Layout } = DefaultTheme
const { page, frontmatter, route } = useData()

// Function to initialize Phenix components
const initPhenixComponents = () => {
  if (window.Phenix) {
    // Initialize any specific Phenix components here
    // For example, if you have dropdowns, accordions, etc.
    console.log('Phenix components initialized on page:', route.path)
  }
}

// Initialize on first load
onMounted(() => {
  initPhenixComponents()
})

// Re-initialize on route changes
watch(() => route.path, async () => {
  await nextTick()
  initPhenixComponents()
})
</script>

<template>
  <!-- Use the default layout as a base -->
  <Layout>
    <!-- You can add custom slots here to extend the default layout -->
    
    <!-- Example: Add a custom class to the doc content -->
    <template #doc-before>
      <div class="phenix-doc-wrapper">
        <!-- You can add custom elements before the main content -->
      </div>
    </template>
    
    <!-- Example: Add a custom footer component -->
    <template #doc-after>
      <div class="phenix-custom-footer">
        <!-- Custom footer content can go here -->
      </div>
    </template>
  </Layout>
</template>

<style>
/* Additional custom styles for the layout */
.phenix-doc-wrapper {
  margin-bottom: 2rem;
}

.phenix-custom-footer {
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid var(--vp-c-divider);
}

/* Add any other custom layout styles here */
</style>
