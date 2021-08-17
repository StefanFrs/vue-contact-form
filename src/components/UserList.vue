<template>
  <div class="card mt-4">
    <table class="table m-0">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Lname</th>
          <th scope="col">Email</th>
          <th scope="col">Gender</th>
          <th scope="col">Date</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="{ id, name, Lname ,email, gender, date } in users" :key="id">
          <td>{{ name }}</td>
          <td>{{ Lname }}</td>
          <td>{{ email }}</td>
          <td>{{ gender }}</td>
          <td>{{ date }}</td>
          <td>
            <router-link :to="`/edit/${id}`">
              <button class="btn btn-primary btn-sm me-2">
                Edit
              </button>
            </router-link>
            <button class="btn btn-danger btn-sm" @click="deleteUser(id)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { useLoadUsers, deleteUser } from '@/firebase'

export default {
  setup() {
    const users = useLoadUsers()
    return { users, deleteUser }
  }
}
</script>
