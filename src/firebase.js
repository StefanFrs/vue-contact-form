import firebase from 'firebase'
import { ref, onUnmounted } from 'vue'

const config = {
  apiKey: "AIzaSyAHvLtGOlL9B0JQvfE2wyWmoa4Su-a_tkk",
    authDomain: "contact-form-vue-9ac53.firebaseapp.com",
    projectId: "contact-form-vue-9ac53",
    storageBucket: "contact-form-vue-9ac53.appspot.com",
    messagingSenderId: "585462292149",
    appId: "1:585462292149:web:eadab541580087a88f28fc",
    measurementId: "G-VQPGNENG8Z"
}

const firebaseApp = firebase.initializeApp(config)

const db = firebaseApp.firestore()
const usersCollection = db.collection('users')

export const createUser = user => {
  return usersCollection.add(user)
}

export const getUser = async id => {
  const user = await usersCollection.doc(id).get()
  return user.exists ? user.data() : null
}

export const updateUser = (id, user) => {
  return usersCollection.doc(id).update(user)
}

export const deleteUser = id => {
  return usersCollection.doc(id).delete()
}

export const useLoadUsers = () => {
  const users = ref([])
  const close = usersCollection.onSnapshot(snapshot => {
    users.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return users
}
