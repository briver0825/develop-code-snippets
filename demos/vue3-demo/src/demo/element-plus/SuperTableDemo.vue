<script setup>
import SuperTable from "../../components/SuperTable/index.vue"

const columns = [
  { key: "id", title: "Id" },
  { key: "date", title: "Date" },
  { key: "name", title: "name" },
  { key: "address", title: "Address" },
  { key: "action", title: "Action" },
]

const dataSource = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
]
</script>
<template>
  <div class="container">
    <SuperTable
      :columns="columns"
      :dataSource="dataSource"
      align="center"
      border
      stripe
      index
    >
      <template #id="{ index }">
        {{ index + 1 }}
      </template>

      <template #action="{ row }">
        <el-button text type="primary">Detail</el-button>
      </template>
    </SuperTable>
  </div>
</template>

<style scoped>
.container {
  width: 800px;
}
</style>
