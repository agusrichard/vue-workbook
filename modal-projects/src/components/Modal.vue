<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal">
      <slot>Default Content</slot>
      <div>
        <slot name="buttons"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  methods: {
    closeModal() {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
  .backdrop {
    top: 0;
    position: fixed;
    background: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    width: 500px;
    height: 250px;
    background: #fff;
    border-radius: 10px;
  }

  .modal h1 {
    font-size: 40px !important;
    color: mediumseagreen;
  }

  .modal p {
    margin: 20px 0;
    height: auto;
  }
</style>