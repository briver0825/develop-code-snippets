# SuperTable

Very easy to use table.

## Source code

```vue
<template>
  <el-table
    v-bind="$attrs"
    v-loading="props.loading"
    :element-loading-text="loadingText"
    :data="props.dataSource"
    @current-change="handleCurrentChange"
    @selection-change="handleSelectionChange"
  >
    <el-table-column align="center" type="index" v-if="props.index" />
    <el-table-column align="center" type="selection" v-if="props.selection" />
    <el-table-column type="expand" v-if="$slots.expand">
      <template #default="{ row }">
        <slot name="expand" :row="row" />
      </template>
    </el-table-column>
    <el-table-column
      v-for="(column, index) in columns"
      :key="column.key"
      :prop="column.key"
      :label="column.title"
      v-bind="column"
      :align="column.align || props.align"
    >
      <template #header>
        <slot :name="`${column.key}-header`">
          {{ column.title }}
        </slot>
      </template>
      <template #default="{ row, $index }">
        <slot :name="column.key" :row="row" :index="$index">
          {{ row[column.key] }}
        </slot>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
const props = defineProps({
  columns: {
    type: Array,
    default: [],
  },
  dataSource: {
    type: Array,
    default: [],
  },
  align: {
    type: String,
    default: "left",
  },
  loading: {
    type: Boolean,
    default: false,
  },
  loadingText: {
    type: String,
    default: "Loading...",
  },
  selection: {
    type: Boolean,
    default: false,
  },
  index: {
    type: Boolean,
    default: false,
  },
})

const emits = defineEmits(["selection-change", "current-change"])

const handleSelectionChange = (...args) => emits("selection-change", ...args)
const handleCurrentChange = (...args) => emits("current-change", ...args)
</script>
```

## Example

```vue
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
```
