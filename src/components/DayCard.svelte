<script>
  export let number;
</script>

<div
  class="w-28 h-20 grid place-content-center text-6xl text-black font-bold rounded-sm 
  {number != '' ? 'bg-white ring-2 ring-black' : ''}">
  {number}
</div>
