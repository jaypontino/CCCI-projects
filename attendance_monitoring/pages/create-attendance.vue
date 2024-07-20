<template>
    <div>
      <Navbar />
      <div class="p-4">
        <h2 class="text-2xl font-bold mb-4">Create New Attendance List</h2>
        <p class="mb-4">Date: {{ newAttendance.date }}</p>
        <input v-model="newAttendance.name" type="text" placeholder="Enter list name" class="mb-4 p-2 border rounded w-full">
  
        <div class="mb-4 flex">
          <input v-model="newStudentName" type="text" placeholder="Enter student name" @keyup.enter="addStudent" class="flex-grow p-2 border rounded mr-2">
          <a-button type="primary" @click="addStudent">Add Student</a-button>
        </div>
  
        <NewAttendanceList :students="newAttendance.students" />
        <a-button type="primary" @click="saveAttendanceList" class="mt-4">Save Attendance List</a-button>
        <nuxt-link to="/" class="bg-blueviolet text-bisque hover:text-rebeccapurple px-4 py-2 rounded mt-4 inline-block">Back to Homepage</nuxt-link>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import Navbar from '@/components/Navbar.vue';
  import newAttendanceList from '~/components/newAttendanceList.vue';
  
  const router = useRouter();
  
  const newAttendance = ref({
    name: '',
    date: new Date().toISOString().split('T')[0],
    students: []
  });
  
  const newStudentName = ref('');
  
  const addStudent = () => {
    if (newStudentName.value) {
      newAttendance.value.students.push({ name: newStudentName.value, status: 'Present' });
      newStudentName.value = '';
    } else {
      alert('Student name cannot be empty');
    }
  };
  
  const saveAttendanceList = () => {
    if (newAttendance.value.name && newAttendance.value.students.length > 0) {
      console.log(newAttendance.value);
      alert('Attendance list saved successfully');
      router.push('/attendance');
    } else {
      alert('Please enter a list name and add at least one student.');
    }
  };
  </script>
  
  <style scoped>
  button {
    background-color: blueviolet;
    color: bisque;
  }
  button:hover {
    color: rebeccapurple;
  }
  </style>
  