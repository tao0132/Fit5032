<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <h1 class="text-center">User Information Form</h1>

        <form @submit.prevent="submitForm">
          <div class="row mb-3">
            <div class="col-sm-6">
              <label for="username" class="form-label">Username</label>
              <input
                type="text"
                class="form-control"
                id="username"
                v-model="formData.username"
                required
              />
            </div>
            <div class="col-sm-6">
              <label for="password" class="form-label">Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                v-model="formData.password"
                required
              />
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-sm-6">
              <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="isAustralian"
                  v-model="formData.isAustralian"
                />
                <label class="form-check-label" for="isAustralian">
                  Australian Resident?
                </label>
              </div>
            </div>

            <div class="col-sm-6">
              <label for="gender" class="form-label">Gender</label>
              <select
                class="form-select"
                id="gender"
                v-model="formData.gender"
                required
              >
                <option value="" disabled>Select one...</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div class="mb-3">
            <label for="reason" class="form-label">Reason for joining</label>
            <textarea
              class="form-control"
              id="reason"
              rows="3"
              v-model="formData.reason"
              required
            ></textarea>
          </div>

          <div class="text-center">
            <button type="submit" class="btn btn-primary me-2">Submit</button>
            <button type="button" class="btn btn-secondary" @click="clearForm">
              Clear
            </button>
          </div>
        </form>

        <div class="mt-4" v-if="submittedCards.length">
          <h3 class="mb-3">Submitted</h3>
          <div
            class="card mb-3"
            v-for="(card, idx) in submittedCards"
            :key="idx"
          >
            <div class="card-header">#{{ idx + 1 }}</div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item"><strong>Username:</strong> {{ card.username }}</li>
              <li class="list-group-item"><strong>Password:</strong> {{ card.password }}</li>
              <li class="list-group-item"><strong>Australian:</strong> {{ card.isAustralian ? 'Yes' : 'No' }}</li>
              <li class="list-group-item"><strong>Gender:</strong> {{ card.gender }}</li>
              <li class="list-group-item"><strong>Reason:</strong> {{ card.reason }}</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const defaults = {
  username: '',
  password: '',
  isAustralian: false,
  reason: '',
  gender: ''
}

const formData = ref({ ...defaults })
const submittedCards = ref([])

const submitForm = () => {
  if (!formData.value.username || !formData.value.password || !formData.value.gender || !formData.value.reason) return
  submittedCards.value.push({ ...formData.value })
}

const clearForm = () => {
  formData.value = { ...defaults }
}
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
.card-header {
  background-color: #275FDA;
  color: white;
  padding: 10px;
  border-radius: 10px 10px 0 0;
}
.list-group-item {
  padding: 10px;
}
</style>
