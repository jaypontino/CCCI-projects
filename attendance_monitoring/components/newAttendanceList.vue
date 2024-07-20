<template>
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
</template>

<script setup>
import { ref } from 'vue';

const currentDate = new Date().toISOString().split('T')[0];
const props = defineProps({
  students: {
    type: Array,
    required: true
  }
});

const columns = ref([
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status'
  },

  {
    title: 'Action',
    key: 'action'
  }
]);

const deleteStudent = (name) => {
  props.students = props.students.filter(student => student.name !== name);
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
