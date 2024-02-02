<script setup>
import { Link } from "@inertiajs/vue3";
import { ref } from "vue";
import { useFixedHeader } from "vue-use-fixed-header";

const headerRef = ref(null);

const { styles } = useFixedHeader(headerRef);
</script>
<template>
    <div class="">
        <header
            ref="headerRef"
            :style="styles"
            class="navbar navbar-expand-lg bg-body-tertiary header Header"
        >
            <div class="container">
                <Link class="navbar-brand" href="/">Quizer</Link>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link
                                class="nav-link active"
                                aria-current="page"
                                href="/tests"
                                >Testlar</Link
                            >
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" href="/posts"
                                >Maqolalar</Link
                            >
                        </li>
                        <li class="nav-item dropdown">
                            <a
                                class="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Dropdown
                            </a>
                            <ul class="dropdown-menu">
                                <li>
                                    <a class="dropdown-item" href="#">Action</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#"
                                        >Another action</a
                                    >
                                </li>
                                <li><hr class="dropdown-divider" /></li>
                                <li>
                                    <a class="dropdown-item" href="#"
                                        >Something else here</a
                                    >
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" aria-disabled="true"
                                >Disabled</a
                            >
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <input
                            class="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button class="btn btn-outline-success" type="submit">
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </header>
        <main class="container" style="min-height: 55vh">
            <slot></slot>
        </main>
        <footer class="mt-5 pt-5 pb-5 footer">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5 col-xs-12 about-company">
                        <h2>Heading</h2>
                        <p class="pr-5 text-white-50">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nullam ac ante mollis quam tristique convallis
                        </p>
                        <p>
                            <a href="#"
                                ><i class="fa fa-facebook-square mr-1"></i></a
                            ><a href="#"
                                ><i class="fa fa-linkedin-square"></i
                            ></a>
                        </p>
                    </div>
                    <div class="col-lg-3 col-xs-12 links">
                        <h4 class="mt-lg-0 mt-sm-3">Links</h4>
                        <ul class="m-0 p-0">
                            <li>- <a href="#">Lorem ipsum</a></li>
                            <li>- <a href="#">Nam mauris velit</a></li>
                            <li>- <a href="#">Etiam vitae mauris</a></li>
                            <li>- <a href="#">Fusce scelerisque</a></li>
                            <li>- <a href="#">Sed faucibus</a></li>
                            <li>- <a href="#">Mauris efficitur nulla</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-4 col-xs-12 location">
                        <h4 class="mt-lg-0 mt-sm-4">Location</h4>
                        <p>22, Lorem ipsum dolor, consectetur adipiscing</p>
                        <p class="mb-0">
                            <i class="fa fa-phone mr-3"></i>(541) 754-3010
                        </p>
                        <p>
                            <i class="fa fa-envelope-o mr-3"></i>info@hsdf.com
                        </p>
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col copyright">
                        <p class="">
                            <small class="text-white-50"
                                >© 2023. All Rights Reserved.</small
                            >
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<style scoped>
.Header {
    position: sticky;
    top: 0;
    z-index: 10000;
}
</style>
