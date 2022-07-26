<script>
  import Icon from "../icons/Icon.svelte";

  import {
    Popover,
    PopoverButton,
    PopoverPanel,
    Transition,
  } from "@rgossiaux/svelte-headlessui";
</script>

<Popover class="relative z-50">
  <PopoverButton>
    <span><Icon name="info" class="h-7 w-7 text-black" /></span>
  </PopoverButton>

  <Transition
    enter="transition duration-200 ease-out"
    enterFrom="translate-y-1 opacity-0"
    enterTo="translate-y-0 opacity-100"
    leave="transition duration-150 ease-in"
    leaveFrom="translate-y-0 opacity-100"
    leaveTo="translate-y-1 opacity-0">
    <PopoverPanel
      class="absolute right-0 mt-1 w-52 space-y-2 rounded-md bg-white p-4 shadow-xl">
      <div class="text-center font-bold">image editor</div>
      <div class="bg mx-auto h-1 w-12 rounded-full bg-blue-600" />
      <div class="text-center ">ver 0.2.0</div>
      <div class="text-center text-sm">
        &copy; 2022 <a
          href="https://github.com/hafizhaziq307"
          target="_blank"
          class="font-medium hover:text-blue-600 hover:underline"
          >Hafiz Haziq</a>
      </div>
    </PopoverPanel>
  </Transition>
</Popover>
