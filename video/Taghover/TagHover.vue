<!--
 * @Descripttion: 
 * @version: 
 * @Author: cain
 * @Date: 2022-12-16 16:03:51
 * @LastEditors: Andy
 * @LastEditTime: 2023-01-18 10:55:40
 * @FilePath: \cain-video\video\Taghover\TagHover.vue
-->
<script lang="ts" setup>
import { nextTick, onMounted, ref, toRefs, useSlots, watch } from "vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  top: {
    type: Number,
    default: 0,
  },
  left: {
    type: Number,
    default: 0,
  },
});
const VideoHover = ref<boolean>(false);
const VideoFlagHover = ref<boolean>(true);
const slots = useSlots();
const defaultSlot = slots.default && slots.default()[0];
const { modelValue, top, left } = toRefs(props);

const DomRef = ref<HTMLDivElement>();
const HoverRef = ref<HTMLDivElement>();

onMounted(() => {
  (HoverRef.value as any).style.left = left.value + "px";
  (HoverRef.value as any).style.top = top.value + "px";
});

watch(
  () => DomRef.value?.offsetLeft,
  (old) => {
    console.log(old);
  }
);

const VideoiconMousemove = () => {
  nextTick;
  console.log(HoverRef.value?.offsetLeft + "xx");

  VideoHover.value = true;
  VideoFlagHover.value = false;
};

const VideoiconMouseout = () => {
  VideoFlagHover.value = true;
  setTimeout(() => {
    if (VideoFlagHover.value) VideoHover.value = false;
  }, 400);
};

const xxx = () => {
  VideoHover.value = true;
  VideoFlagHover.value = false;
};
</script>

<template>
  <div style="position: relative">
    <Transition>
      <div
        class="TagHover"
        @mousemove="xxx"
        @mouseout="VideoiconMouseout"
        ref="HoverRef"
        v-show="VideoHover"
      >
        <slot name="tag"> </slot>
        <div
          class="ModelTop"
          @mousemove="VideoiconMousemove"
          @mouseout="VideoiconMouseout"
        ></div>
      </div>
    </Transition>

    <div
      ref="DomRef"
      @mousemove="VideoiconMousemove"
      @mouseout="VideoiconMouseout"
    >
      <slot></slot>
    </div>
  </div>
</template>
