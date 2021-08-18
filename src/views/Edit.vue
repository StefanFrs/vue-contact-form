<template>
  <div class="card card-body mt-4">
    <h3>Edit users</h3>
    <form @submit.prevent="update">
      <div class="form-group">
        <label>Name:</label>
        <input v-model="form.name" class="form-control" required />
      </div>

      <div class="form-group mt-3">
        <label>Last name:</label>
        <input v-model="form.Lname" class="form-control" required />
      </div>

      <div class="form-group mt-3">
        <label>Email</label>
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
      <button type="submit" class="btn btn-primary  mt-3">
        Update
      </button>
    </form>
  </div>
</template>

<script>
import { reactive, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getUser, updateUser } from '@/firebase'

export default {
  setup() {
    const router = useRouter()
    const route = useRoute()
    const userId = computed(() => route.params.id)

    const form = reactive({  name: '', Lname:'', email: '', gender: '', date: '', })
    onMounted(async () => {
      //get details of the user on update, asigned values to form
      const user = await getUser(userId.value)
      console.log(user, userId.value)
      form.name = user.name
      form.Lname = user.Lname
      form.email = user.email
      form.gender = user.gender
      form.date = user.date
    })

    const update = async () => {
      await updateUser(userId.value, { ...form })
      //redirect path back to the router
      router.push('/')
      form.name = ''
      form.Lname = ''
      form.email = ''
      form.gender = ''
      form.date = ''
    }

    return { form, update }
  }
}
</script>
