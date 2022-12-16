<script lang="ts" setup>
import { onMounted, ref, toRefs, useSlots } from "vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});
const VideoHover = ref<boolean>(false);
const slots = useSlots();
const defaultSlot = slots.default && slots.default()[0];
const { modelValue } = toRefs(props);

const DomRef = ref<HTMLDivElement>();
const HoverRef = ref<HTMLDivElement>();

onMounted(() => {
  console.log();
  let left = Number(DomRef.value?.offsetLeft);
  let top =
    Number(DomRef.value?.offsetTop) - Number(DomRef.value?.clientHeight) * 3;
  (HoverRef.value as any).style.left = left + "px";
  (HoverRef.value as any).style.top = top + "px";
});

const VideoiconMousemove = () => {
  VideoHover.value = true;
  console.log(VideoHover.value);
};

const VideoiconMouseout = () => {
  setTimeout(() => {
    VideoHover.value = false;
    console.log("xxx");
  }, 100);
};

const xxx = () => {
  VideoHover.value = true;
  console.log(VideoHover.value);
};
</script>

<template>
  <Transition>
    <div
      class="TagHover"
      @mousemove="xxx"
      @mouseout="VideoiconMouseout"
      ref="HoverRef"
      v-show="VideoHover"
    >
      <slot name="tag"> </slot>
    </div>
  </Transition>
  <div
    ref="DomRef"
    @mousemove="VideoiconMousemove"
    @mouseout="VideoiconMouseout"
  >
    <slot></slot>
  </div>
</template>
