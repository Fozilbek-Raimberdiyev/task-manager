<script setup>
import Layout from "../../Layouts/default.vue";
import { Link } from "@inertiajs/vue3";
import { usePage } from "@inertiajs/vue3";
import { ref } from "vue";
const props = ref(usePage().props);
import { Head } from "@inertiajs/vue3";

console.log(props.value);
</script>
<template>
    <Head>
        <title>Your page title</title>
        <meta name="description" content="Your page description" /> 
    </Head>
    <Layout>
        <div class="container-table100">
            <div class="wrap-table100">
                <h1 class="mt-5">Testlar</h1>
                <table class="table">
                    <thead class="row header">
                        <!-- <tr> -->
                        <th class="cell">Fan nomi</th>
                        <th class="cell">Savollar soni</th>
                        <!-- <div class="cell">Test turi</div> -->
                        <th class="cell">Vaqti</th>
                        <th class="cell">Harakatlar</th>
                        <!-- </tr> -->
                    </thead>
                    <tbody>
                        <tr class="row">
                            <td class="cell" data-title="Full Name">
                                Matematika
                            </td>
                            <td class="cell" data-title="Age">20</td>
                            <td class="cell" data-title="Job Title">
                                60 daqiqa
                            </td>
                            <!-- <div class="cell" data-title="Location">Washington</div> -->
                            <td class="cell" data-title="Location">
                                <Link
                                    class="btn btn-success"
                                    href="/tests/matematika"
                                    >Boshlash</Link
                                >
                            </td>
                        </tr>
                        <tr class="row">
                            <div class="cell" data-title="Full Name">
                                Joseph Smith
                            </div>
                            <div class="cell" data-title="Age">27</div>
                            <div class="cell" data-title="Job Title">
                                Project Manager
                            </div>
                            <div class="cell" data-title="Location">
                                Somerville, MA
                            </div>
                        </tr>
                        <tr class="row">
                            <div class="cell" data-title="Full Name">
                                Justin Black
                            </div>
                            <div class="cell" data-title="Age">26</div>
                            <div class="cell" data-title="Job Title">
                                Front-End Developer
                            </div>
                            <div class="cell" data-title="Location">
                                Los Angeles
                            </div>
                        </tr>
                        <tr class="row">
                            <div class="cell" data-title="Full Name">
                                Sean Guzman
                            </div>
                            <div class="cell" data-title="Age">25</div>
                            <div class="cell" data-title="Job Title">
                                Web Designer
                            </div>
                            <div class="cell" data-title="Location">
                                San Francisco
                            </div>
                        </tr>
                        <tr class="row">
                            <div class="cell" data-title="Full Name">
                                Keith Carter
                            </div>
                            <div class="cell" data-title="Age">20</div>
                            <div class="cell" data-title="Job Title">
                                Graphic Designer
                            </div>
                            <div class="cell" data-title="Location">
                                New York, NY
                            </div>
                        </tr>
                        <tr class="row">
                            <div class="cell" data-title="Full Name">
                                Austin Medina
                            </div>
                            <div class="cell" data-title="Age">32</div>
                            <div class="cell" data-title="Job Title">
                                Photographer
                            </div>
                            <div class="cell" data-title="Location">
                                New York
                            </div>
                        </tr>
                        <tr class="row">
                            <div class="cell" data-title="Full Name">
                                Vincent Williamson
                            </div>
                            <div class="cell" data-title="Age">31</div>
                            <div class="cell" data-title="Job Title">
                                iOS Developer
                            </div>
                            <div class="cell" data-title="Location">
                                Washington
                            </div>
                        </tr>
                        <tr class="row">
                            <div class="cell" data-title="Full Name">
                                Joseph Smith
                            </div>
                            <div class="cell" data-title="Age">27</div>
                            <div class="cell" data-title="Job Title">
                                Project Manager
                            </div>
                            <div class="cell" data-title="Location">
                                Somerville, MA
                            </div>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </Layout>
</template>

<style scoped>
@font-face {
    font-family: Poppins-Regular;
    src: url(https://colorlib.com/etc/tb/Table_Responsive_v2/fonts/poppins/Poppins-Regular.ttf);
}

@font-face {
    font-family: Poppins-Bold;
    src: url(https://colorlib.com/etc/tb/Table_Responsive_v2/fonts/poppins/Poppins-Bold.ttf);
}

a {
    margin: 0;
    transition: all 0.4s;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
}

a:focus {
    outline: none !important;
}

.limiter {
    width: 100%;
    margin: 0 auto;
}

.container-table100 {
    min-height: 100vh;
    /* background: #c4d3f6; */
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: 33px 30px;
}

.wrap-table100 {
    /*   width: 960px; */
    border-radius: 10px;
    overflow: hidden;
}

.table {
    width: 100%;
    display: table;
    margin: 0;
}

@media screen and (max-width: 768px) {
    .table {
        display: block;
    }
}

.row {
    display: table-row;
    background: #fff;
}

.row.header {
    color: #fff;
    /* background: #6c7ae0; */
}

@media screen and (max-width: 768px) {
    .row {
        display: block;
    }
    .row.header {
        padding: 0;
        height: 0;
    }
    .row.header .cell {
        display: none;
    }
    .row .cell:before {
        font-family: Poppins-Bold;
        font-size: 12px;
        color: gray;
        line-height: 1.2;
        text-transform: uppercase;
        font-weight: unset !important;
        margin-bottom: 13px;
        content: attr(data-title);
        min-width: 98px;
        display: block;
    }
}

.cell {
    display: table-cell;
}

@media screen and (max-width: 768px) {
    .cell {
        display: block;
    }
}

.row .cell {
    font-family: Poppins-Regular;
    font-size: 15px;
    color: #666;
    line-height: 1.2;
    font-weight: unset !important;
    padding-top: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #f2f2f2;
}

.row.header .cell {
    font-family: Poppins-Regular;
    font-size: 18px;
    color: #fff;
    line-height: 1.2;
    font-weight: unset !important;
    padding-top: 19px;
    padding-bottom: 19px;
}

.row .cell:nth-child(1) {
    width: 360px;
    padding-left: 40px;
}

.row .cell:nth-child(2) {
    width: 160px;
}

.row .cell:nth-child(3) {
    width: 250px;
}

.row .cell:nth-child(4) {
    width: 190px;
}

.table,
.row {
    width: 100% !important;
}

.row:hover {
    background-color: #ececff;
    cursor: pointer;
}

@media (max-width: 768px) {
    .row {
        border-bottom: 1px solid #f2f2f2;
        padding-bottom: 18px;
        padding-top: 30px;
        padding-right: 15px;
        margin: 0;
    }
    .row .cell {
        border: none;
        padding-left: 30px;
        padding-top: 16px;
        padding-bottom: 16px;
    }
    .row .cell:nth-child(1) {
        padding-left: 30px;
    }
    .row .cell {
        font-family: Poppins-Regular;
        font-size: 18px;
        color: #555;
        line-height: 1.2;
        font-weight: unset !important;
    }
    .table,
    .row,
    .cell {
        width: 100% !important;
    }
}
</style>
