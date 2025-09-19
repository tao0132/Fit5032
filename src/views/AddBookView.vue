<template>
  <div>
    <h1>Add Book</h1>
    <form @submit.prevent="addBook">
      <div>
        <label for="isbn">ISBN:</label>
        <input type="text" v-model="isbn" id="isbn" required />
      </div>
      <div>
        <label for="name">Name:</label>
        <input type="text" v-model="name" id="name" required />
      </div>
      <button type="submit">Add Book</button>
    </form>
    
    <!-- BookList Component -->
    <BookList />
  </div>
</template>

<script>
import { ref } from 'vue';
import db from '../firebase/init.js'
import { collection, addDoc } from 'firebase/firestore';
import BookList from '../components/BookList.vue';

export default {
  components: {
    BookList
  },
  setup() {
    const isbn = ref('');
    const name = ref('');

    const addBook = async () => {
      console.log('Add book button clicked');
      console.log('ISBN:', isbn.value);
      console.log('Name:', name.value);
      
      try {
        const isbnNumber = Number(isbn.value);
        if (isNaN(isbnNumber)) {
          alert('ISBN must be a valid number');
          return;
        }

        console.log('Adding book to Firestore...');
        const docRef = await addDoc(collection(db, 'books'), {
          isbn: isbnNumber,
          name: name.value
        });
        console.log('Book added with ID:', docRef.id);
        
        isbn.value = '';
        name.value = '';
        alert('Book added successfully!');
      } catch (error) {
        console.error('Error adding book: ', error);
        alert('Error adding book: ' + error.message);
      }
    };

    return {
      isbn,
      name,
      addBook
    };
  }
};
</script>
