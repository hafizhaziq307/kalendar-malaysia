<script>
  import Content from "./components/content/Content.svelte";
  import Header from "./components/header/Header.svelte";

  export let months;
  export let days;
  export let events;
</script>

<main class="w-full min-h-screen">
  <div class="w-[44.5rem] mx-auto flex items-center justify-end py-2">
    <Header />
  </div>
  <div class=" w-[44.5rem] mx-auto">
    <Content {days} {months} {events} />
  </div>
</main>
