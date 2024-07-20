<template>
  <div>
    <Navbar />
    <div class="p-4">
      <h2 class="text-2xl font-bold mb-4">Student Attendance List</h2>
      <div class="mb-4 flex">
        <input v-model="newStudentName" type="text" placeholder="Enter student name" @keyup.enter="addStudent" class="flex-grow p-2 border rounded mr-2">
        <a-button type="primary" @click="addStudent">Add Student</a-button>
      </div>
      <AttendanceList :students="students" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Navbar from '@/components/Navbar.vue';
import AttendanceList from '@/components/AttendanceList.vue';

const router = useRouter();

const students = ref([]);

const newStudentName = ref('');

const addStudent = () => {
  if (newStudentName.value) {
    students.value.push({ name: newStudentName.value, status: 'Present' });
    newStudentName.value = '';
  } else {
    alert('Student name cannot be empty');
  }
};

const goHome = () => {
  router.push('/');
}
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
