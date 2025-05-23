<!-- .vitepress/theme/components/PhenixDemo.vue -->
<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: 'Phenix Component Demo'
  },
  description: {
    type: String,
    default: ''
  },
  showCode: {
    type: Boolean,
    default: false
  }
})

const codeVisible = ref(props.showCode)
const demoRef = ref(null)

const toggleCode = () => {
  codeVisible.value = !codeVisible.value
}

onMounted(() => {
  // Initialize Phenix components inside the demo if needed
  if (window.Phenix && demoRef.value) {
    // You can add specific initialization for demo components here
  }
})
</script>

<template>
  <div class="phenix-demo">
    <div class="phenix-demo-header">
      <h3 v-if="title">{{ title }}</h3>
      <p v-if="description">{{ description }}</p>
    </div>
    
    <div class="phenix-demo-preview" ref="demoRef">
      <slot></slot>
    </div>
    
    <div class="phenix-demo-footer">
      <button class="phenix-demo-code-toggle" @click="toggleCode">
        {{ codeVisible ? 'Hide Code' : 'Show Code' }}
      </button>
      
      <div class="phenix-demo-code" v-if="codeVisible">
        <slot name="code"></slot>
      </div>
    </div>
  </div>
</template>

<style>
.phenix-demo {
  margin: 2rem 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
}

.phenix-demo-header {
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.02);
  border-bottom: 1px solid var(--vp-c-divider);
}

.phenix-demo-header h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;
}

.phenix-demo-header p {
  margin: 0;
  color: var(--vp-c-text-2);
}

.phenix-demo-preview {
  padding: 2rem;
  background-color: white;
}

.phenix-demo-footer {
  border-top: 1px solid var(--vp-c-divider);
}

.phenix-demo-code-toggle {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: transparent;
  border: none;
  color: var(--vp-c-brand);
  cursor: pointer;
  font-size: 0.9rem;
}

.phenix-demo-code-toggle:hover {
  background-color: rgba(0, 0, 0, 0.02);
}

.phenix-demo-code {
  padding: 1rem;
  background-color: var(--vp-code-block-bg);
  border-top: 1px solid var(--vp-c-divider);
  overflow: auto;
}
</style>
