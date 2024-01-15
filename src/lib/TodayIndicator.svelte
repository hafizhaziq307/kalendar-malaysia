<script>
    export let currentDate;
    export let day;
</script>

<div class="absolute top-0.5 left-0.5 z-10">
    <div class="{currentDate === day.date ? '' : 'hidden'}">
        <div class="grid place-content-center">
            <div class="absolute rounded-full bg-blue-600 ring-1 ring-white w-3 h-3"></div>
            <div class=" animate-ping rounded-full bg-blue-400/90 w-3 h-3" />
        </div>
    </div>
</div>
