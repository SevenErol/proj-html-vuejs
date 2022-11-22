<script>

export default {
    name: "SingleEvent",
    props: {
        event: Object
    }
}

</script>

<template>

    <div class="col-6">

        <div class="p-3 d-flex justify-content-between ms_col">

            <div class="col-6">
                <h6>
                    <span>
                        <font-awesome-icon icon="fa-solid fa-location-dot" />
                    </span>
                    {{ event.location }}
                </h6>
                <h4>{{ event.place }}</h4>
            </div>

            <div class="col-4 text-center">
                <h1>{{ event.date.day }}</h1>
                <p class="month">{{ event.date.month }}</p>
                <button type="button" class="btn">Get ticket</button>
            </div>
        </div>


    </div>



</template>