<script>

export default {
    name: "SectionSubscribe"
}

</script>

<template>

    <!-- section site subscription -->
    <section id="subscribe">

        <div class="container">

            <div class="row">

                <!-- single column -->
                <div class="col-3 position-relative">

                    <!-- container circle form green   -->
                    <div id="circle" class="position-absolute translate-middle top-50 start-50"></div>

                </div>

                <!-- single column  -->
                <div class="col-6">

                    <!-- container with section titles -->
                    <div class="titles p-3 text-center">

                        <h1>Subscribe <span id="newsletter">Newsletter</span></h1>

                        <p>Enter your email address to register to our newsletter subscription delivered on a regular
                            basis!</p>

                    </div>

                    <!-- container with input group (text and button) -->

                    <div class="input-group mb-3">

                        <input type="text" class="form-control" placeholder="Enter your email"
                            aria-label="Recipient's username" aria-describedby="button-addon2">

                        <button class="btn" type="button" id="button-addon2">Subscribe</button>

                    </div>

                </div>

                <!-- single column  -->
                <div class="col-3 position-relative semi_circle">

                    <!-- image with semi circle shape  -->
                    <img src="../assets/img/maxcoach-shape-02.png" alt=""
                        class="position-absolute translate-middle top-50 start-50">

                </div>

            </div>

        </div>

    </section>

</template>