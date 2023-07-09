<template>
  <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div class="bg-white p-4 rounded shadow">
      <h2 class="text-lg font-bold mb-4">Terms and Conditions</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus est vitae fringilla auctor.</p>
      <button @click="closeModal" class="bg-blue-500 text-white px-4 py-2 rounded mt-4">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeModal() {
      this.$emit('close-modal');
    }
  }
};
</script>
