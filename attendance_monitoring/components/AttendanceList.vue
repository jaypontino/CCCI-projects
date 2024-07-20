<template>
  
    <div class="p-6 bg-primary-light rounded-lg shadow-md">
      <div class="mb-4 flex items-center">
        <input v-model="newStudentName" type="text" placeholder="Enter student name" class="flex-grow p-2 border rounded mr-2">
        <a-button type="primary" @click="addStudent">Add Student</a-button>
      </div>
      <a-table :dataSource="students" :columns="columns" rowKey="name" bordered>
        <template #bodyCell="{ column, record }">
          <span v-if="column.key === 'status'">
            <a-select v-model:value="record.status" style="width: 100%;">
              <a-select-option value="Present">Present</a-select-option>
              <a-select-option value="Absent">Absent</a-select-option>
              <a-select-option value="Late">Late</a-select-option>
            </a-select>
          </span>
          <span v-else-if="column.key === 'date'">{{ record.date }}</span>
          <span v-else-if="column.key !== 'action'">{{ record[column.key] }}</span>
          <span v-else>
            <a-button type="link" @click="deleteStudent(record.name)">Delete</a-button>
          </span>
        </template>
      </a-table>
      <p class="mt-4">Date: {{ currentDate }}</p>
    </div>
 
</template>

<script setup>
import { ref } from 'vue';//Reactive Reference


const newStudentName = ref('');

const currentDate = new Date().toISOString().split('T')[0];

const students = ref([
  { name: 'Angas, Kristian', status: 'Present', date: currentDate },
  { name: 'Ibrahim, Norfaidz', status: 'Present', date: currentDate },
  { name: 'Kasim, Abdulyasir', status: 'Present', date: currentDate },
  { name: 'Mustapha, Abdulrahman', status: 'Present', date: currentDate },
  { name: 'Hadje Ebrahim, Maha', status: 'Present', date: currentDate },
  { name: 'Usman, Intishar', status: 'Present', date: currentDate },
  { name: 'Junaid, Jassim', status: 'Present', date: currentDate },
  { name: 'Sumo, Alyasa', status: 'Present', date: currentDate },
  { name: 'Pahay, Reynaldo', status: 'Present', date: currentDate },
  { name: 'Pontino, Johara', status: 'Present', date: currentDate },
  { name: 'Gairanan, Junford', status: 'Present', date: currentDate },
  { name: 'Magomnang, Alhanif', status: 'Present', date: currentDate },
]);

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Action',
    key: 'action',
  }
];

const addStudent = () => {
  if (newStudentName.value) {
    students.value.push({ name: newStudentName.value, status: 'Present', date: currentDate });
    newStudentName.value = '';
  } else {
    alert('Student name cannot be empty');
  }
};

const deleteStudent = (name) => {
  students.value = students.value.filter(student => student.name !== name);
  message.success('Student deleted successfully');
};
</script>

