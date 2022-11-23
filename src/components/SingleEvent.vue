<script>

export default {
    name: "SingleEvent",
    props: {
        event: Object
    }
}

</script>

<template>

    <!-- single column event card -->
    <div class="col-6">

        <div class="p-3 d-flex justify-content-between ms_col">

            <!-- container for event location and place -->
            <div class="col-6">
                <h6>
                    <span>
                        <font-awesome-icon icon="fa-solid fa-location-dot" />
                    </span>
                    {{ event.location }}
                </h6>
                <h4>{{ event.place }}</h4>
            </div>

            <!-- container for event day and month  -->
            <div class="col-4 text-center">
                <h1>{{ event.date.day }}</h1>

                <p class="month">{{ event.date.month }}</p>

                <!-- button to buy ticket -->
                <button type="button" class="btn">Get ticket</button>

            </div>

        </div>

    </div>

</template>