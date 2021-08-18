<template>
   <div class="card card-body mt-4">
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label>Name:</label>
        <input v-model="form.name" class="form-control" required />
      </div>

      <div class="form-group mt-3">
        <label>Last name:</label>
        <input v-model="form.Lname" class="form-control" required />
      </div>

      <div class="form-group mt-3">
        <label>Email:</label>
        <input v-model="form.email" class="form-control" type="email" required />
      </div>
     <div class="form-group mt-3 d-flex flex-column">
        <label>Gender</label>
          <select v-model="form.gender" id="dropdown" name="dropdown" class="form-control" required>
            <option disable selected value>Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
      </div>
       <div class="form-group mt-3 d-flex flex-column">
          <label for="birthday">Birthday:</label>
          <input v-model="form.date" type="date" id="birthday" class="form-control" name="birthday">
       </div>
       <div class="form-group mt-3">
         <label class="form-label text-center uno" id="input-image" for="customFile">
            Image profile
         </label>
        <input type="file" class="form-control input-form" id="customFile" multiple/>
        </div>

      <button type="submit" class="btn btn-success mt-3">
        Create User
      </button>
    </form>
  </div>
</template>

<script>
import { createUser } from '@/firebase'
import { reactive } from 'vue'

export default {

  setup() {
    const form = reactive({ name: '', Lname:'', email: '', gender: '', date: ''})

    //insert user in firebase collection
    const onSubmit = async () => {
      await createUser({ ...form })
      form.name = ''
      form.Lname = ''
      form.email = ''
      form.gender = ''
      form.date = ''
    }

    return { form, onSubmit }
  }
}
</script>
