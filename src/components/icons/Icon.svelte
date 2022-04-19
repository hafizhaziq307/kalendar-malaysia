<script>
  export let name;

  let icons = [
    {
      name: "chevron-left",
      box: 20,
      svg: `<path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"/>`,
    },
    {
      name: "chevron-right",
      box: 20,
      svg: `<path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>`,
    },
    {
      name: "info",
      box: 20,
      svg: `<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>`,
    },
  ];
  let displayIcon = icons.find((e) => e.name === name);
</script>

<svg
  class={$$props.class}
  fill="currentColor"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 {displayIcon.box} {displayIcon.box}"
  >{@html displayIcon.svg}</svg>
