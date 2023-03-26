<template>
  <el-table
    v-bind="$attrs"
    v-loading="props.loading"
    :element-loading-text="loadingText"
    :data="props.dataSource"
    @current-change="handleCurrentChange"
    @selection-change="handleSelectionChange"
  >
    <el-table-column align="center" type="index" v-if="props.index"/>
    <el-table-column align="center" type="selection" v-if="props.selection" />
    <el-table-column type="expand" v-if="$slots.expand">
      <template #default="{ row }">
        <slot name="expand" :row="row"/>
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
