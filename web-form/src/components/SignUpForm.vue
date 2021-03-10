<template>
  <div class="sign-up">
    <h1>Sign Up</h1>
    <form>
      <div>
        <label class="label">Email</label>
        <input type="email" v-model="email" />
      </div>

      <div>
        <label class="label">Password</label>
        <input type="password" v-model="password" />
      </div>

      <div>
        <label class="label">Skills</label>
        <input type="text" v-model="tempSkill" @keyup.alt="addSkill" />
      </div>
      <div>
        <div v-for="skill in skills" :key="skill" class="pill">{{ skill }}</div>
      </div>

      <div class="div-checkbox">
        <input type="checkbox" v-model="terms">
        <label class="terms-label">Accept Terms and Conditions</label>
      </div>
    </form>
    <div>
      <p>Email: {{ email }}</p>
      <p>Password: {{ password }}</p>
      <p>Terms: {{ terms }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignUp',
  data() {
    return {
      email: '',
      password: '',
      terms: false,
      tempSkill: '',
      skills: []
    }
  },
  methods: {
    addSkill(event) {
      console.log('event', event.key)
      if (event.key === ',' && this.tempSkill !== '') {
        if (!this.skills.includes(this.tempSkill)) {
          this.skills.push(this.tempSkill)
        }
        this.tempSkill = ''
      }
    }
  }
}
</script>

<style scoped>
  .sign-up {
    background: white;
    margin-top: 100px;
    width: 800px;
    height: 80%;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  form {
    width: 100%;
  }

  div {
    width: 50%;
    margin: 10px auto;
  }

  h1 {
    color: coral;
    border-bottom: 2px solid #999;
    padding-bottom: 5px;
  }

  .label {
    color: coral;
    font-size: 25px;
  }

  input {
    display: block;
    font-size: 22px;
    padding: 10px 20px;
    border-radius: 5px;
    width: 100%;
    border: 2px solid #ccc;
    margin-top: 5px;
  }

  input[type="checkbox"] {
    display: inline-block;
    width: 20px;
    height: 20px;
    margin: 0;
  }

  label.terms-label {
    color: #999;
    line-height: 100%;
    margin-left: 15px;
    
  }

  div.div-checkbox {
    margin-top: 20px;
    display: flex;
    align-items: center;
  }

  div.pill {
    display: inline;
    background: dodgerblue;
    padding: 5px 10px;
    margin: 0px 5px;
    color: white;
    border-radius: 40%;
    font-size: 22px;
  }
</style>