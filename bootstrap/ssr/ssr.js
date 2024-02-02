import { useSSRContext, ref, mergeProps, unref, withCtx, createTextVNode, onMounted, resolveComponent, createVNode, toDisplayString, createSSRApp, h } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderSlot, ssrInterpolate } from "vue/server-renderer";
import { Link, router, usePage, Head, createInertiaApp } from "@inertiajs/vue3";
import { useFixedHeader } from "vue-use-fixed-header";
import "https://cdn.jsdelivr.net/npm/swiper@9/swiper-element-bundle.min.js";
import "https://code.jquery.com/jquery-3.7.0.js";
import "https://kit.fontawesome.com/ebbc1aa60f.js";
import "https://unpkg.com/scrollreveal";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
const default_vue_vue_type_style_index_0_scoped_57d8f5c9_lang = "";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$5 = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const headerRef = ref(null);
    const { styles } = useFixedHeader(headerRef);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))} data-v-57d8f5c9><header style="${ssrRenderStyle(unref(styles))}" class="navbar navbar-expand-lg bg-body-tertiary header Header" data-v-57d8f5c9><div class="container" data-v-57d8f5c9>`);
      _push(ssrRenderComponent(unref(Link), {
        class: "navbar-brand",
        href: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Quizer`);
          } else {
            return [
              createTextVNode("Quizer")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" data-v-57d8f5c9><span class="navbar-toggler-icon" data-v-57d8f5c9></span></button><div class="collapse navbar-collapse" id="navbarSupportedContent" data-v-57d8f5c9><ul class="navbar-nav me-auto mb-2 mb-lg-0" data-v-57d8f5c9><li class="nav-item" data-v-57d8f5c9>`);
      _push(ssrRenderComponent(unref(Link), {
        class: "nav-link active",
        "aria-current": "page",
        href: "/tests"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Testlar`);
          } else {
            return [
              createTextVNode("Testlar")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="nav-item" data-v-57d8f5c9>`);
      _push(ssrRenderComponent(unref(Link), {
        class: "nav-link",
        href: "/posts"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Maqolalar`);
          } else {
            return [
              createTextVNode("Maqolalar")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="nav-item dropdown" data-v-57d8f5c9><a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-v-57d8f5c9> Dropdown </a><ul class="dropdown-menu" data-v-57d8f5c9><li data-v-57d8f5c9><a class="dropdown-item" href="#" data-v-57d8f5c9>Action</a></li><li data-v-57d8f5c9><a class="dropdown-item" href="#" data-v-57d8f5c9>Another action</a></li><li data-v-57d8f5c9><hr class="dropdown-divider" data-v-57d8f5c9></li><li data-v-57d8f5c9><a class="dropdown-item" href="#" data-v-57d8f5c9>Something else here</a></li></ul></li><li class="nav-item" data-v-57d8f5c9><a class="nav-link disabled" aria-disabled="true" data-v-57d8f5c9>Disabled</a></li></ul><form class="d-flex" role="search" data-v-57d8f5c9><input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" data-v-57d8f5c9><button class="btn btn-outline-success" type="submit" data-v-57d8f5c9> Search </button></form></div></div></header><main class="container" style="${ssrRenderStyle({ "min-height": "55vh" })}" data-v-57d8f5c9>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main><footer class="mt-5 pt-5 pb-5 footer" data-v-57d8f5c9><div class="container" data-v-57d8f5c9><div class="row" data-v-57d8f5c9><div class="col-lg-5 col-xs-12 about-company" data-v-57d8f5c9><h2 data-v-57d8f5c9>Heading</h2><p class="pr-5 text-white-50" data-v-57d8f5c9> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ante mollis quam tristique convallis </p><p data-v-57d8f5c9><a href="#" data-v-57d8f5c9><i class="fa fa-facebook-square mr-1" data-v-57d8f5c9></i></a><a href="#" data-v-57d8f5c9><i class="fa fa-linkedin-square" data-v-57d8f5c9></i></a></p></div><div class="col-lg-3 col-xs-12 links" data-v-57d8f5c9><h4 class="mt-lg-0 mt-sm-3" data-v-57d8f5c9>Links</h4><ul class="m-0 p-0" data-v-57d8f5c9><li data-v-57d8f5c9>- <a href="#" data-v-57d8f5c9>Lorem ipsum</a></li><li data-v-57d8f5c9>- <a href="#" data-v-57d8f5c9>Nam mauris velit</a></li><li data-v-57d8f5c9>- <a href="#" data-v-57d8f5c9>Etiam vitae mauris</a></li><li data-v-57d8f5c9>- <a href="#" data-v-57d8f5c9>Fusce scelerisque</a></li><li data-v-57d8f5c9>- <a href="#" data-v-57d8f5c9>Sed faucibus</a></li><li data-v-57d8f5c9>- <a href="#" data-v-57d8f5c9>Mauris efficitur nulla</a></li></ul></div><div class="col-lg-4 col-xs-12 location" data-v-57d8f5c9><h4 class="mt-lg-0 mt-sm-4" data-v-57d8f5c9>Location</h4><p data-v-57d8f5c9>22, Lorem ipsum dolor, consectetur adipiscing</p><p class="mb-0" data-v-57d8f5c9><i class="fa fa-phone mr-3" data-v-57d8f5c9></i>(541) 754-3010 </p><p data-v-57d8f5c9><i class="fa fa-envelope-o mr-3" data-v-57d8f5c9></i>info@hsdf.com </p></div></div><div class="row mt-5" data-v-57d8f5c9><div class="col copyright" data-v-57d8f5c9><p class="" data-v-57d8f5c9><small class="text-white-50" data-v-57d8f5c9>© 2023. All Rights Reserved.</small></p></div></div></div></footer></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/default.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Layout = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-57d8f5c9"]]);
const Index_vue_vue_type_style_index_0_scoped_6af0e3fa_lang = "";
const _sfc_main$4 = {
  __name: "Index",
  __ssrInlineRender: true,
  setup(__props) {
    onMounted(() => {
      ScrollReveal({ reset: true });
      ScrollReveal().reveal(".banner", { easing: "ease-in", delay: 50, origin: "top" });
      ScrollReveal().reveal(".news", { easing: "ease-in", delay: 200 });
      ScrollReveal().reveal(".events", { easing: "ease-in", delay: 200 });
      ScrollReveal().reveal(".jobs", { easing: "ease-in", delay: 200 });
      ScrollReveal().reveal(".register", { easing: "ease-in", delay: 200 });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_swiper_container = resolveComponent("swiper-container");
      const _component_swiper_slide = resolveComponent("swiper-slide");
      _push(ssrRenderComponent(Layout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="banner" id="banner" data-v-6af0e3fa${_scopeId}>`);
            _push2(ssrRenderComponent(_component_swiper_container, {
              class: "mySwiper",
              navigation: "true"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_swiper_slide, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="imgbx" data-v-6af0e3fa${_scopeId3}><a href="#news" data-v-6af0e3fa${_scopeId3}><img src="https://i.postimg.cc/dtLWZmwx/pexels-cottonbro-studio-9656754.jpg" alt="" data-v-6af0e3fa${_scopeId3}></a></div><div class="text" data-v-6af0e3fa${_scopeId3}><h1 data-v-6af0e3fa${_scopeId3}>NEWS FEEDS</h1><p data-v-6af0e3fa${_scopeId3}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, minima.</p></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "imgbx" }, [
                            createVNode("a", { href: "#news" }, [
                              createVNode("img", {
                                src: "https://i.postimg.cc/dtLWZmwx/pexels-cottonbro-studio-9656754.jpg",
                                alt: ""
                              })
                            ])
                          ]),
                          createVNode("div", { class: "text" }, [
                            createVNode("h1", null, "NEWS FEEDS"),
                            createVNode("p", null, "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, minima.")
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_swiper_slide, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="imgbx" data-v-6af0e3fa${_scopeId3}><a href="#" data-v-6af0e3fa${_scopeId3}><img src="https://i.postimg.cc/L8N4npDS/pexels-miguel-acosta-1259626.jpg" alt="" data-v-6af0e3fa${_scopeId3}></a></div><div class="text" data-v-6af0e3fa${_scopeId3}><h1 data-v-6af0e3fa${_scopeId3}>UPCOMING EVENTS</h1><p data-v-6af0e3fa${_scopeId3}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, minima.</p></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "imgbx" }, [
                            createVNode("a", { href: "#" }, [
                              createVNode("img", {
                                src: "https://i.postimg.cc/L8N4npDS/pexels-miguel-acosta-1259626.jpg",
                                alt: ""
                              })
                            ])
                          ]),
                          createVNode("div", { class: "text" }, [
                            createVNode("h1", null, "UPCOMING EVENTS"),
                            createVNode("p", null, "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, minima.")
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_swiper_slide, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="imgbx" data-v-6af0e3fa${_scopeId3}><a href="#" data-v-6af0e3fa${_scopeId3}><img src="https://i.postimg.cc/8k27SNKn/pexels-arthouse-studio-4413745.jpg" alt="" data-v-6af0e3fa${_scopeId3}></a></div><div class="text" data-v-6af0e3fa${_scopeId3}><h1 data-v-6af0e3fa${_scopeId3}>AVAILABLE JOBS</h1><p data-v-6af0e3fa${_scopeId3}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, minima.</p></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "imgbx" }, [
                            createVNode("a", { href: "#" }, [
                              createVNode("img", {
                                src: "https://i.postimg.cc/8k27SNKn/pexels-arthouse-studio-4413745.jpg",
                                alt: ""
                              })
                            ])
                          ]),
                          createVNode("div", { class: "text" }, [
                            createVNode("h1", null, "AVAILABLE JOBS"),
                            createVNode("p", null, "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, minima.")
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_swiper_slide, null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "imgbx" }, [
                          createVNode("a", { href: "#news" }, [
                            createVNode("img", {
                              src: "https://i.postimg.cc/dtLWZmwx/pexels-cottonbro-studio-9656754.jpg",
                              alt: ""
                            })
                          ])
                        ]),
                        createVNode("div", { class: "text" }, [
                          createVNode("h1", null, "NEWS FEEDS"),
                          createVNode("p", null, "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, minima.")
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_swiper_slide, null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "imgbx" }, [
                          createVNode("a", { href: "#" }, [
                            createVNode("img", {
                              src: "https://i.postimg.cc/L8N4npDS/pexels-miguel-acosta-1259626.jpg",
                              alt: ""
                            })
                          ])
                        ]),
                        createVNode("div", { class: "text" }, [
                          createVNode("h1", null, "UPCOMING EVENTS"),
                          createVNode("p", null, "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, minima.")
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_swiper_slide, null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "imgbx" }, [
                          createVNode("a", { href: "#" }, [
                            createVNode("img", {
                              src: "https://i.postimg.cc/8k27SNKn/pexels-arthouse-studio-4413745.jpg",
                              alt: ""
                            })
                          ])
                        ]),
                        createVNode("div", { class: "text" }, [
                          createVNode("h1", null, "AVAILABLE JOBS"),
                          createVNode("p", null, "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, minima.")
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><section class="news" id="news" data-v-6af0e3fa${_scopeId}><div class="titletext" data-v-6af0e3fa${_scopeId}><h1 data-v-6af0e3fa${_scopeId}>News <span data-v-6af0e3fa${_scopeId}>Feed</span></h1></div><div class="container cards_container" data-v-6af0e3fa${_scopeId}><div class="card" data-v-6af0e3fa${_scopeId}><div class="card__header" data-v-6af0e3fa${_scopeId}><img src="https://i.postimg.cc/gkCk3bbx/pexels-cottonbro-studio-3944425.jpg" alt="card__image" class="card__image" width="600" data-v-6af0e3fa${_scopeId}></div><div class="card__body" data-v-6af0e3fa${_scopeId}><span class="tag" data-v-6af0e3fa${_scopeId}>News</span><h4 data-v-6af0e3fa${_scopeId}>Trending Tech Products</h4><p data-v-6af0e3fa${_scopeId}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p></div><div class="card__footer" data-v-6af0e3fa${_scopeId}><div class="user" data-v-6af0e3fa${_scopeId}><img src="https://i.pravatar.cc/40" alt="user__image" class="user__image" data-v-6af0e3fa${_scopeId}><div class="user__info" data-v-6af0e3fa${_scopeId}><h5 data-v-6af0e3fa${_scopeId}>User 1</h5><small data-v-6af0e3fa${_scopeId}>2h ago</small></div></div></div></div><div class="card" data-v-6af0e3fa${_scopeId}><div class="card__header" data-v-6af0e3fa${_scopeId}><img src="https://i.postimg.cc/x1LjRp9t/pexels-cottonbro-studio-3944454.jpg" alt="card__image" class="card__image" width="600" data-v-6af0e3fa${_scopeId}></div><div class="card__body" data-v-6af0e3fa${_scopeId}><span class="tag" data-v-6af0e3fa${_scopeId}>News</span><h4 data-v-6af0e3fa${_scopeId}>Newly Introduced AI Model</h4><p data-v-6af0e3fa${_scopeId}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p></div><div class="card__footer" data-v-6af0e3fa${_scopeId}><div class="user" data-v-6af0e3fa${_scopeId}><img src="https://i.pravatar.cc/40?img=9" alt="user__image" class="user__image" data-v-6af0e3fa${_scopeId}><div class="user__info" data-v-6af0e3fa${_scopeId}><h5 data-v-6af0e3fa${_scopeId}>User 2</h5><small data-v-6af0e3fa${_scopeId}>Yesterday</small></div></div></div></div><div class="card" data-v-6af0e3fa${_scopeId}><div class="card__header" data-v-6af0e3fa${_scopeId}><img src="https://i.postimg.cc/J7dh4BTc/pexels-cottonbro-studio-3944460.jpg" alt="card__image" class="card__image" width="600" data-v-6af0e3fa${_scopeId}></div><div class="card__body" data-v-6af0e3fa${_scopeId}><span class="tag" data-v-6af0e3fa${_scopeId}>News</span><h4 data-v-6af0e3fa${_scopeId}>Recent Trends In IT</h4><p data-v-6af0e3fa${_scopeId}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p></div><div class="card__footer" data-v-6af0e3fa${_scopeId}><div class="user" data-v-6af0e3fa${_scopeId}><img src="https://i.pravatar.cc/40?img=5" alt="user__image" class="user__image" data-v-6af0e3fa${_scopeId}><div class="user__info" data-v-6af0e3fa${_scopeId}><h5 data-v-6af0e3fa${_scopeId}>User 3</h5><small data-v-6af0e3fa${_scopeId}>2d ago</small></div></div></div></div><div class="card" data-v-6af0e3fa${_scopeId}><div class="card__header" data-v-6af0e3fa${_scopeId}><img src="https://i.postimg.cc/3N6rLPyb/pexels-negative-space-177557.jpg" alt="card__image" class="card__image" width="600" data-v-6af0e3fa${_scopeId}></div><div class="card__body" data-v-6af0e3fa${_scopeId}><span class="tag" data-v-6af0e3fa${_scopeId}>News</span><h4 data-v-6af0e3fa${_scopeId}>Top Grossing Video Games</h4><p data-v-6af0e3fa${_scopeId}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p></div><div class="card__footer" data-v-6af0e3fa${_scopeId}><div class="user" data-v-6af0e3fa${_scopeId}><img src="https://i.pravatar.cc/40?img=13" alt="user__image" class="user__image" data-v-6af0e3fa${_scopeId}><div class="user__info" data-v-6af0e3fa${_scopeId}><h5 data-v-6af0e3fa${_scopeId}>User 4</h5><small data-v-6af0e3fa${_scopeId}>2h ago</small></div></div></div></div><div class="card" data-v-6af0e3fa${_scopeId}><div class="card__header" data-v-6af0e3fa${_scopeId}><img src="https://i.postimg.cc/ydRz1kWn/pexels-andrea-piacquadio-3760778.jpg" alt="card__image" class="card__image" width="600" data-v-6af0e3fa${_scopeId}></div><div class="card__body" data-v-6af0e3fa${_scopeId}><span class="tag" data-v-6af0e3fa${_scopeId}>News</span><h4 data-v-6af0e3fa${_scopeId}>Market Crises</h4><p data-v-6af0e3fa${_scopeId}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p></div><div class="card__footer" data-v-6af0e3fa${_scopeId}><div class="user" data-v-6af0e3fa${_scopeId}><img src="https://i.pravatar.cc/40?img=23" alt="user__image" class="user__image" data-v-6af0e3fa${_scopeId}><div class="user__info" data-v-6af0e3fa${_scopeId}><h5 data-v-6af0e3fa${_scopeId}>User 5</h5><small data-v-6af0e3fa${_scopeId}>2h ago</small></div></div></div></div><div class="card" data-v-6af0e3fa${_scopeId}><div class="card__header" data-v-6af0e3fa${_scopeId}><img src="https://i.postimg.cc/qBc91fKt/pexels-ono-kosuki-6000154.jpg" alt="card__image" class="card__image" width="600" data-v-6af0e3fa${_scopeId}></div><div class="card__body" data-v-6af0e3fa${_scopeId}><span class="tag tag-blue" data-v-6af0e3fa${_scopeId}>News</span><h4 data-v-6af0e3fa${_scopeId}>What&#39;s new in 2022 Tech</h4><p data-v-6af0e3fa${_scopeId}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p></div><div class="card__footer" data-v-6af0e3fa${_scopeId}><div class="user" data-v-6af0e3fa${_scopeId}><img src="https://i.pravatar.cc/40?img=21" alt="user__image" class="user__image" data-v-6af0e3fa${_scopeId}><div class="user__info" data-v-6af0e3fa${_scopeId}><h5 data-v-6af0e3fa${_scopeId}>User 6</h5><small data-v-6af0e3fa${_scopeId}>2h ago</small></div></div></div></div></div></section><section class="events" id="events" data-v-6af0e3fa${_scopeId}><div class="titletext" data-v-6af0e3fa${_scopeId}><h1 data-v-6af0e3fa${_scopeId}>Upcoming <span data-v-6af0e3fa${_scopeId}>Events</span></h1></div><div class="container" data-v-6af0e3fa${_scopeId}><div class="card" data-v-6af0e3fa${_scopeId}><div class="card__header" data-v-6af0e3fa${_scopeId}><img src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600" alt="card__image" class="card__image" width="600" data-v-6af0e3fa${_scopeId}></div><div class="card__body" data-v-6af0e3fa${_scopeId}><span class="tag" data-v-6af0e3fa${_scopeId}>Events</span><h4 data-v-6af0e3fa${_scopeId}>Conference Meeting</h4><p data-v-6af0e3fa${_scopeId}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p></div><div class="card__footer" data-v-6af0e3fa${_scopeId}><div class="user" data-v-6af0e3fa${_scopeId}><img src="https://i.pravatar.cc/40?img=32" alt="user__image" class="user__image" data-v-6af0e3fa${_scopeId}><div class="user__info" data-v-6af0e3fa${_scopeId}><h5 data-v-6af0e3fa${_scopeId}>User 1</h5><small data-v-6af0e3fa${_scopeId}>2h ago</small></div></div></div></div><div class="card" data-v-6af0e3fa${_scopeId}><div class="card__header" data-v-6af0e3fa${_scopeId}><img src="https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600" alt="card__image" class="card__image" width="600" data-v-6af0e3fa${_scopeId}></div><div class="card__body" data-v-6af0e3fa${_scopeId}><span class="tag" data-v-6af0e3fa${_scopeId}>Events</span><h4 data-v-6af0e3fa${_scopeId}>Talk Show Shoot</h4><p data-v-6af0e3fa${_scopeId}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p></div><div class="card__footer" data-v-6af0e3fa${_scopeId}><div class="user" data-v-6af0e3fa${_scopeId}><img src="https://i.pravatar.cc/40?img=31" alt="user__image" class="user__image" data-v-6af0e3fa${_scopeId}><div class="user__info" data-v-6af0e3fa${_scopeId}><h5 data-v-6af0e3fa${_scopeId}>User 2</h5><small data-v-6af0e3fa${_scopeId}>Yesterday</small></div></div></div></div><div class="card" data-v-6af0e3fa${_scopeId}><div class="card__header" data-v-6af0e3fa${_scopeId}><img src="https://images.pexels.com/photos/301987/pexels-photo-301987.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600" alt="card__image" class="card__image" width="600" data-v-6af0e3fa${_scopeId}></div><div class="card__body" data-v-6af0e3fa${_scopeId}><span class="tag" data-v-6af0e3fa${_scopeId}>Events</span><h4 data-v-6af0e3fa${_scopeId}>Farewell Function</h4><p data-v-6af0e3fa${_scopeId}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p></div><div class="card__footer" data-v-6af0e3fa${_scopeId}><div class="user" data-v-6af0e3fa${_scopeId}><img src="https://i.pravatar.cc/40?img=30" alt="user__image" class="user__image" data-v-6af0e3fa${_scopeId}><div class="user__info" data-v-6af0e3fa${_scopeId}><h5 data-v-6af0e3fa${_scopeId}>User 3</h5><small data-v-6af0e3fa${_scopeId}>2d ago</small></div></div></div></div><div class="card" data-v-6af0e3fa${_scopeId}><div class="card__header" data-v-6af0e3fa${_scopeId}><img src="https://images.pexels.com/photos/919734/pexels-photo-919734.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600" alt="card__image" class="card__image" width="600" data-v-6af0e3fa${_scopeId}></div><div class="card__body" data-v-6af0e3fa${_scopeId}><span class="tag" data-v-6af0e3fa${_scopeId}>Events</span><h4 data-v-6af0e3fa${_scopeId}>DJ Night</h4><p data-v-6af0e3fa${_scopeId}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p></div><div class="card__footer" data-v-6af0e3fa${_scopeId}><div class="user" data-v-6af0e3fa${_scopeId}><img src="https://i.pravatar.cc/40?img=40" alt="user__image" class="user__image" data-v-6af0e3fa${_scopeId}><div class="user__info" data-v-6af0e3fa${_scopeId}><h5 data-v-6af0e3fa${_scopeId}>User 4</h5><small data-v-6af0e3fa${_scopeId}>2h ago</small></div></div></div></div><div class="card" data-v-6af0e3fa${_scopeId}><div class="card__header" data-v-6af0e3fa${_scopeId}><img src="https://images.pexels.com/photos/2608512/pexels-photo-2608512.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600" alt="card__image" class="card__image" width="600" data-v-6af0e3fa${_scopeId}></div><div class="card__body" data-v-6af0e3fa${_scopeId}><span class="tag" data-v-6af0e3fa${_scopeId}>Events</span><h4 data-v-6af0e3fa${_scopeId}>Talk Show</h4><p data-v-6af0e3fa${_scopeId}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p></div><div class="card__footer" data-v-6af0e3fa${_scopeId}><div class="user" data-v-6af0e3fa${_scopeId}><img src="https://i.pravatar.cc/40?img=50" alt="user__image" class="user__image" data-v-6af0e3fa${_scopeId}><div class="user__info" data-v-6af0e3fa${_scopeId}><h5 data-v-6af0e3fa${_scopeId}>User 5</h5><small data-v-6af0e3fa${_scopeId}>2h ago</small></div></div></div></div><div class="card" data-v-6af0e3fa${_scopeId}><div class="card__header" data-v-6af0e3fa${_scopeId}><img src="https://images.pexels.com/photos/2774572/pexels-photo-2774572.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600&amp;lazy=load" alt="card__image" class="card__image" width="600" data-v-6af0e3fa${_scopeId}></div><div class="card__body" data-v-6af0e3fa${_scopeId}><span class="tag tag-blue" data-v-6af0e3fa${_scopeId}>Events</span><h4 data-v-6af0e3fa${_scopeId}>Motivational Talks</h4><p data-v-6af0e3fa${_scopeId}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p></div><div class="card__footer" data-v-6af0e3fa${_scopeId}><div class="user" data-v-6af0e3fa${_scopeId}><img src="https://i.pravatar.cc/40?img=51" alt="user__image" class="user__image" data-v-6af0e3fa${_scopeId}><div class="user__info" data-v-6af0e3fa${_scopeId}><h5 data-v-6af0e3fa${_scopeId}>User 6</h5><small data-v-6af0e3fa${_scopeId}>2h ago</small></div></div></div></div></div></section><section class="jobs" id="jobs" data-v-6af0e3fa${_scopeId}><div class="titletext" data-v-6af0e3fa${_scopeId}><h1 data-v-6af0e3fa${_scopeId}>Available <span data-v-6af0e3fa${_scopeId}>Jobs</span></h1></div><div class="container" data-v-6af0e3fa${_scopeId}><div class="card" data-v-6af0e3fa${_scopeId}><div class="card__header" data-v-6af0e3fa${_scopeId}><img src="https://images.pexels.com/photos/3862370/pexels-photo-3862370.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600" alt="card__image" class="card__image" width="600" data-v-6af0e3fa${_scopeId}></div><div class="card__body" data-v-6af0e3fa${_scopeId}><span class="tag" data-v-6af0e3fa${_scopeId}>Jobs</span><h4 data-v-6af0e3fa${_scopeId}>Civil Engineers</h4><p data-v-6af0e3fa${_scopeId}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p></div><div class="card__footer" data-v-6af0e3fa${_scopeId}><div class="user" data-v-6af0e3fa${_scopeId}><img src="https://i.pravatar.cc/40?img=52" alt="user__image" class="user__image" data-v-6af0e3fa${_scopeId}><div class="user__info" data-v-6af0e3fa${_scopeId}><h5 data-v-6af0e3fa${_scopeId}>User 1</h5><small data-v-6af0e3fa${_scopeId}>2h ago</small></div></div></div></div><div class="card" data-v-6af0e3fa${_scopeId}><div class="card__header" data-v-6af0e3fa${_scopeId}><img src="https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600" alt="card__image" class="card__image" width="600" data-v-6af0e3fa${_scopeId}></div><div class="card__body" data-v-6af0e3fa${_scopeId}><span class="tag" data-v-6af0e3fa${_scopeId}>Jobs</span><h4 data-v-6af0e3fa${_scopeId}>Data Analyst</h4><p data-v-6af0e3fa${_scopeId}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p></div><div class="card__footer" data-v-6af0e3fa${_scopeId}><div class="user" data-v-6af0e3fa${_scopeId}><img src="https://i.pravatar.cc/40?img=53" alt="user__image" class="user__image" data-v-6af0e3fa${_scopeId}><div class="user__info" data-v-6af0e3fa${_scopeId}><h5 data-v-6af0e3fa${_scopeId}>User 2</h5><small data-v-6af0e3fa${_scopeId}>Yesterday</small></div></div></div></div><div class="card" data-v-6af0e3fa${_scopeId}><div class="card__header" data-v-6af0e3fa${_scopeId}><img src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600" alt="card__image" class="card__image" width="600" data-v-6af0e3fa${_scopeId}></div><div class="card__body" data-v-6af0e3fa${_scopeId}><span class="tag" data-v-6af0e3fa${_scopeId}>Jobs</span><h4 data-v-6af0e3fa${_scopeId}>Web Designer</h4><p data-v-6af0e3fa${_scopeId}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p></div><div class="card__footer" data-v-6af0e3fa${_scopeId}><div class="user" data-v-6af0e3fa${_scopeId}><img src="https://i.pravatar.cc/40?img=54" alt="user__image" class="user__image" data-v-6af0e3fa${_scopeId}><div class="user__info" data-v-6af0e3fa${_scopeId}><h5 data-v-6af0e3fa${_scopeId}>User 3</h5><small data-v-6af0e3fa${_scopeId}>2d ago</small></div></div></div></div><div class="card" data-v-6af0e3fa${_scopeId}><div class="card__header" data-v-6af0e3fa${_scopeId}><img src="https://images.pexels.com/photos/7658352/pexels-photo-7658352.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600" alt="card__image" class="card__image" width="600" data-v-6af0e3fa${_scopeId}></div><div class="card__body" data-v-6af0e3fa${_scopeId}><span class="tag" data-v-6af0e3fa${_scopeId}>Jobs</span><h4 data-v-6af0e3fa${_scopeId}>Charted Accountant</h4><p data-v-6af0e3fa${_scopeId}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p></div><div class="card__footer" data-v-6af0e3fa${_scopeId}><div class="user" data-v-6af0e3fa${_scopeId}><img src="https://i.pravatar.cc/40?img=55" alt="user__image" class="user__image" data-v-6af0e3fa${_scopeId}><div class="user__info" data-v-6af0e3fa${_scopeId}><h5 data-v-6af0e3fa${_scopeId}>User 4</h5><small data-v-6af0e3fa${_scopeId}>2h ago</small></div></div></div></div><div class="card" data-v-6af0e3fa${_scopeId}><div class="card__header" data-v-6af0e3fa${_scopeId}><img src="https://images.pexels.com/photos/5669603/pexels-photo-5669603.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600" alt="card__image" class="card__image" width="600" data-v-6af0e3fa${_scopeId}></div><div class="card__body" data-v-6af0e3fa${_scopeId}><span class="tag" data-v-6af0e3fa${_scopeId}>Jobs</span><h4 data-v-6af0e3fa${_scopeId}>Company Secretary</h4><p data-v-6af0e3fa${_scopeId}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p></div><div class="card__footer" data-v-6af0e3fa${_scopeId}><div class="user" data-v-6af0e3fa${_scopeId}><img src="https://i.pravatar.cc/40?img=56" alt="user__image" class="user__image" data-v-6af0e3fa${_scopeId}><div class="user__info" data-v-6af0e3fa${_scopeId}><h5 data-v-6af0e3fa${_scopeId}>User 5</h5><small data-v-6af0e3fa${_scopeId}>2h ago</small></div></div></div></div><div class="card" data-v-6af0e3fa${_scopeId}><div class="card__header" data-v-6af0e3fa${_scopeId}><img src="https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600" alt="card__image" class="card__image" width="600" data-v-6af0e3fa${_scopeId}></div><div class="card__body" data-v-6af0e3fa${_scopeId}><span class="tag tag-blue" data-v-6af0e3fa${_scopeId}>Jobs</span><h4 data-v-6af0e3fa${_scopeId}>Data Engineer</h4><p data-v-6af0e3fa${_scopeId}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p></div><div class="card__footer" data-v-6af0e3fa${_scopeId}><div class="user" data-v-6af0e3fa${_scopeId}><img src="https://i.pravatar.cc/40?img=1" alt="user__image" class="user__image" data-v-6af0e3fa${_scopeId}><div class="user__info" data-v-6af0e3fa${_scopeId}><h5 data-v-6af0e3fa${_scopeId}>User 6</h5><small data-v-6af0e3fa${_scopeId}>2h ago</small></div></div></div></div></div></section>`);
          } else {
            return [
              createVNode("div", {
                class: "banner",
                id: "banner"
              }, [
                createVNode(_component_swiper_container, {
                  class: "mySwiper",
                  navigation: "true"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_swiper_slide, null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "imgbx" }, [
                          createVNode("a", { href: "#news" }, [
                            createVNode("img", {
                              src: "https://i.postimg.cc/dtLWZmwx/pexels-cottonbro-studio-9656754.jpg",
                              alt: ""
                            })
                          ])
                        ]),
                        createVNode("div", { class: "text" }, [
                          createVNode("h1", null, "NEWS FEEDS"),
                          createVNode("p", null, "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, minima.")
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_swiper_slide, null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "imgbx" }, [
                          createVNode("a", { href: "#" }, [
                            createVNode("img", {
                              src: "https://i.postimg.cc/L8N4npDS/pexels-miguel-acosta-1259626.jpg",
                              alt: ""
                            })
                          ])
                        ]),
                        createVNode("div", { class: "text" }, [
                          createVNode("h1", null, "UPCOMING EVENTS"),
                          createVNode("p", null, "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, minima.")
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_swiper_slide, null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "imgbx" }, [
                          createVNode("a", { href: "#" }, [
                            createVNode("img", {
                              src: "https://i.postimg.cc/8k27SNKn/pexels-arthouse-studio-4413745.jpg",
                              alt: ""
                            })
                          ])
                        ]),
                        createVNode("div", { class: "text" }, [
                          createVNode("h1", null, "AVAILABLE JOBS"),
                          createVNode("p", null, "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, minima.")
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createVNode("section", {
                class: "news",
                id: "news"
              }, [
                createVNode("div", { class: "titletext" }, [
                  createVNode("h1", null, [
                    createTextVNode("News "),
                    createVNode("span", null, "Feed")
                  ])
                ]),
                createVNode("div", { class: "container cards_container" }, [
                  createVNode("div", { class: "card" }, [
                    createVNode("div", { class: "card__header" }, [
                      createVNode("img", {
                        src: "https://i.postimg.cc/gkCk3bbx/pexels-cottonbro-studio-3944425.jpg",
                        alt: "card__image",
                        class: "card__image",
                        width: "600"
                      })
                    ]),
                    createVNode("div", { class: "card__body" }, [
                      createVNode("span", { class: "tag" }, "News"),
                      createVNode("h4", null, "Trending Tech Products"),
                      createVNode("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!")
                    ]),
                    createVNode("div", { class: "card__footer" }, [
                      createVNode("div", { class: "user" }, [
                        createVNode("img", {
                          src: "https://i.pravatar.cc/40",
                          alt: "user__image",
                          class: "user__image"
                        }),
                        createVNode("div", { class: "user__info" }, [
                          createVNode("h5", null, "User 1"),
                          createVNode("small", null, "2h ago")
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "card" }, [
                    createVNode("div", { class: "card__header" }, [
                      createVNode("img", {
                        src: "https://i.postimg.cc/x1LjRp9t/pexels-cottonbro-studio-3944454.jpg",
                        alt: "card__image",
                        class: "card__image",
                        width: "600"
                      })
                    ]),
                    createVNode("div", { class: "card__body" }, [
                      createVNode("span", { class: "tag" }, "News"),
                      createVNode("h4", null, "Newly Introduced AI Model"),
                      createVNode("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!")
                    ]),
                    createVNode("div", { class: "card__footer" }, [
                      createVNode("div", { class: "user" }, [
                        createVNode("img", {
                          src: "https://i.pravatar.cc/40?img=9",
                          alt: "user__image",
                          class: "user__image"
                        }),
                        createVNode("div", { class: "user__info" }, [
                          createVNode("h5", null, "User 2"),
                          createVNode("small", null, "Yesterday")
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "card" }, [
                    createVNode("div", { class: "card__header" }, [
                      createVNode("img", {
                        src: "https://i.postimg.cc/J7dh4BTc/pexels-cottonbro-studio-3944460.jpg",
                        alt: "card__image",
                        class: "card__image",
                        width: "600"
                      })
                    ]),
                    createVNode("div", { class: "card__body" }, [
                      createVNode("span", { class: "tag" }, "News"),
                      createVNode("h4", null, "Recent Trends In IT"),
                      createVNode("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!")
                    ]),
                    createVNode("div", { class: "card__footer" }, [
                      createVNode("div", { class: "user" }, [
                        createVNode("img", {
                          src: "https://i.pravatar.cc/40?img=5",
                          alt: "user__image",
                          class: "user__image"
                        }),
                        createVNode("div", { class: "user__info" }, [
                          createVNode("h5", null, "User 3"),
                          createVNode("small", null, "2d ago")
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "card" }, [
                    createVNode("div", { class: "card__header" }, [
                      createVNode("img", {
                        src: "https://i.postimg.cc/3N6rLPyb/pexels-negative-space-177557.jpg",
                        alt: "card__image",
                        class: "card__image",
                        width: "600"
                      })
                    ]),
                    createVNode("div", { class: "card__body" }, [
                      createVNode("span", { class: "tag" }, "News"),
                      createVNode("h4", null, "Top Grossing Video Games"),
                      createVNode("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!")
                    ]),
                    createVNode("div", { class: "card__footer" }, [
                      createVNode("div", { class: "user" }, [
                        createVNode("img", {
                          src: "https://i.pravatar.cc/40?img=13",
                          alt: "user__image",
                          class: "user__image"
                        }),
                        createVNode("div", { class: "user__info" }, [
                          createVNode("h5", null, "User 4"),
                          createVNode("small", null, "2h ago")
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "card" }, [
                    createVNode("div", { class: "card__header" }, [
                      createVNode("img", {
                        src: "https://i.postimg.cc/ydRz1kWn/pexels-andrea-piacquadio-3760778.jpg",
                        alt: "card__image",
                        class: "card__image",
                        width: "600"
                      })
                    ]),
                    createVNode("div", { class: "card__body" }, [
                      createVNode("span", { class: "tag" }, "News"),
                      createVNode("h4", null, "Market Crises"),
                      createVNode("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!")
                    ]),
                    createVNode("div", { class: "card__footer" }, [
                      createVNode("div", { class: "user" }, [
                        createVNode("img", {
                          src: "https://i.pravatar.cc/40?img=23",
                          alt: "user__image",
                          class: "user__image"
                        }),
                        createVNode("div", { class: "user__info" }, [
                          createVNode("h5", null, "User 5"),
                          createVNode("small", null, "2h ago")
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "card" }, [
                    createVNode("div", { class: "card__header" }, [
                      createVNode("img", {
                        src: "https://i.postimg.cc/qBc91fKt/pexels-ono-kosuki-6000154.jpg",
                        alt: "card__image",
                        class: "card__image",
                        width: "600"
                      })
                    ]),
                    createVNode("div", { class: "card__body" }, [
                      createVNode("span", { class: "tag tag-blue" }, "News"),
                      createVNode("h4", null, "What's new in 2022 Tech"),
                      createVNode("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!")
                    ]),
                    createVNode("div", { class: "card__footer" }, [
                      createVNode("div", { class: "user" }, [
                        createVNode("img", {
                          src: "https://i.pravatar.cc/40?img=21",
                          alt: "user__image",
                          class: "user__image"
                        }),
                        createVNode("div", { class: "user__info" }, [
                          createVNode("h5", null, "User 6"),
                          createVNode("small", null, "2h ago")
                        ])
                      ])
                    ])
                  ])
                ])
              ]),
              createVNode("section", {
                class: "events",
                id: "events"
              }, [
                createVNode("div", { class: "titletext" }, [
                  createVNode("h1", null, [
                    createTextVNode("Upcoming "),
                    createVNode("span", null, "Events")
                  ])
                ]),
                createVNode("div", { class: "container" }, [
                  createVNode("div", { class: "card" }, [
                    createVNode("div", { class: "card__header" }, [
                      createVNode("img", {
                        src: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600",
                        alt: "card__image",
                        class: "card__image",
                        width: "600"
                      })
                    ]),
                    createVNode("div", { class: "card__body" }, [
                      createVNode("span", { class: "tag" }, "Events"),
                      createVNode("h4", null, "Conference Meeting"),
                      createVNode("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!")
                    ]),
                    createVNode("div", { class: "card__footer" }, [
                      createVNode("div", { class: "user" }, [
                        createVNode("img", {
                          src: "https://i.pravatar.cc/40?img=32",
                          alt: "user__image",
                          class: "user__image"
                        }),
                        createVNode("div", { class: "user__info" }, [
                          createVNode("h5", null, "User 1"),
                          createVNode("small", null, "2h ago")
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "card" }, [
                    createVNode("div", { class: "card__header" }, [
                      createVNode("img", {
                        src: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=600",
                        alt: "card__image",
                        class: "card__image",
                        width: "600"
                      })
                    ]),
                    createVNode("div", { class: "card__body" }, [
                      createVNode("span", { class: "tag" }, "Events"),
                      createVNode("h4", null, "Talk Show Shoot"),
                      createVNode("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!")
                    ]),
                    createVNode("div", { class: "card__footer" }, [
                      createVNode("div", { class: "user" }, [
                        createVNode("img", {
                          src: "https://i.pravatar.cc/40?img=31",
                          alt: "user__image",
                          class: "user__image"
                        }),
                        createVNode("div", { class: "user__info" }, [
                          createVNode("h5", null, "User 2"),
                          createVNode("small", null, "Yesterday")
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "card" }, [
                    createVNode("div", { class: "card__header" }, [
                      createVNode("img", {
                        src: "https://images.pexels.com/photos/301987/pexels-photo-301987.jpeg?auto=compress&cs=tinysrgb&w=600",
                        alt: "card__image",
                        class: "card__image",
                        width: "600"
                      })
                    ]),
                    createVNode("div", { class: "card__body" }, [
                      createVNode("span", { class: "tag" }, "Events"),
                      createVNode("h4", null, "Farewell Function"),
                      createVNode("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!")
                    ]),
                    createVNode("div", { class: "card__footer" }, [
                      createVNode("div", { class: "user" }, [
                        createVNode("img", {
                          src: "https://i.pravatar.cc/40?img=30",
                          alt: "user__image",
                          class: "user__image"
                        }),
                        createVNode("div", { class: "user__info" }, [
                          createVNode("h5", null, "User 3"),
                          createVNode("small", null, "2d ago")
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "card" }, [
                    createVNode("div", { class: "card__header" }, [
                      createVNode("img", {
                        src: "https://images.pexels.com/photos/919734/pexels-photo-919734.jpeg?auto=compress&cs=tinysrgb&w=600",
                        alt: "card__image",
                        class: "card__image",
                        width: "600"
                      })
                    ]),
                    createVNode("div", { class: "card__body" }, [
                      createVNode("span", { class: "tag" }, "Events"),
                      createVNode("h4", null, "DJ Night"),
                      createVNode("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!")
                    ]),
                    createVNode("div", { class: "card__footer" }, [
                      createVNode("div", { class: "user" }, [
                        createVNode("img", {
                          src: "https://i.pravatar.cc/40?img=40",
                          alt: "user__image",
                          class: "user__image"
                        }),
                        createVNode("div", { class: "user__info" }, [
                          createVNode("h5", null, "User 4"),
                          createVNode("small", null, "2h ago")
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "card" }, [
                    createVNode("div", { class: "card__header" }, [
                      createVNode("img", {
                        src: "https://images.pexels.com/photos/2608512/pexels-photo-2608512.jpeg?auto=compress&cs=tinysrgb&w=600",
                        alt: "card__image",
                        class: "card__image",
                        width: "600"
                      })
                    ]),
                    createVNode("div", { class: "card__body" }, [
                      createVNode("span", { class: "tag" }, "Events"),
                      createVNode("h4", null, "Talk Show"),
                      createVNode("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!")
                    ]),
                    createVNode("div", { class: "card__footer" }, [
                      createVNode("div", { class: "user" }, [
                        createVNode("img", {
                          src: "https://i.pravatar.cc/40?img=50",
                          alt: "user__image",
                          class: "user__image"
                        }),
                        createVNode("div", { class: "user__info" }, [
                          createVNode("h5", null, "User 5"),
                          createVNode("small", null, "2h ago")
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "card" }, [
                    createVNode("div", { class: "card__header" }, [
                      createVNode("img", {
                        src: "https://images.pexels.com/photos/2774572/pexels-photo-2774572.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                        alt: "card__image",
                        class: "card__image",
                        width: "600"
                      })
                    ]),
                    createVNode("div", { class: "card__body" }, [
                      createVNode("span", { class: "tag tag-blue" }, "Events"),
                      createVNode("h4", null, "Motivational Talks"),
                      createVNode("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!")
                    ]),
                    createVNode("div", { class: "card__footer" }, [
                      createVNode("div", { class: "user" }, [
                        createVNode("img", {
                          src: "https://i.pravatar.cc/40?img=51",
                          alt: "user__image",
                          class: "user__image"
                        }),
                        createVNode("div", { class: "user__info" }, [
                          createVNode("h5", null, "User 6"),
                          createVNode("small", null, "2h ago")
                        ])
                      ])
                    ])
                  ])
                ])
              ]),
              createVNode("section", {
                class: "jobs",
                id: "jobs"
              }, [
                createVNode("div", { class: "titletext" }, [
                  createVNode("h1", null, [
                    createTextVNode("Available "),
                    createVNode("span", null, "Jobs")
                  ])
                ]),
                createVNode("div", { class: "container" }, [
                  createVNode("div", { class: "card" }, [
                    createVNode("div", { class: "card__header" }, [
                      createVNode("img", {
                        src: "https://images.pexels.com/photos/3862370/pexels-photo-3862370.jpeg?auto=compress&cs=tinysrgb&w=600",
                        alt: "card__image",
                        class: "card__image",
                        width: "600"
                      })
                    ]),
                    createVNode("div", { class: "card__body" }, [
                      createVNode("span", { class: "tag" }, "Jobs"),
                      createVNode("h4", null, "Civil Engineers"),
                      createVNode("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!")
                    ]),
                    createVNode("div", { class: "card__footer" }, [
                      createVNode("div", { class: "user" }, [
                        createVNode("img", {
                          src: "https://i.pravatar.cc/40?img=52",
                          alt: "user__image",
                          class: "user__image"
                        }),
                        createVNode("div", { class: "user__info" }, [
                          createVNode("h5", null, "User 1"),
                          createVNode("small", null, "2h ago")
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "card" }, [
                    createVNode("div", { class: "card__header" }, [
                      createVNode("img", {
                        src: "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=600",
                        alt: "card__image",
                        class: "card__image",
                        width: "600"
                      })
                    ]),
                    createVNode("div", { class: "card__body" }, [
                      createVNode("span", { class: "tag" }, "Jobs"),
                      createVNode("h4", null, "Data Analyst"),
                      createVNode("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!")
                    ]),
                    createVNode("div", { class: "card__footer" }, [
                      createVNode("div", { class: "user" }, [
                        createVNode("img", {
                          src: "https://i.pravatar.cc/40?img=53",
                          alt: "user__image",
                          class: "user__image"
                        }),
                        createVNode("div", { class: "user__info" }, [
                          createVNode("h5", null, "User 2"),
                          createVNode("small", null, "Yesterday")
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "card" }, [
                    createVNode("div", { class: "card__header" }, [
                      createVNode("img", {
                        src: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600",
                        alt: "card__image",
                        class: "card__image",
                        width: "600"
                      })
                    ]),
                    createVNode("div", { class: "card__body" }, [
                      createVNode("span", { class: "tag" }, "Jobs"),
                      createVNode("h4", null, "Web Designer"),
                      createVNode("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!")
                    ]),
                    createVNode("div", { class: "card__footer" }, [
                      createVNode("div", { class: "user" }, [
                        createVNode("img", {
                          src: "https://i.pravatar.cc/40?img=54",
                          alt: "user__image",
                          class: "user__image"
                        }),
                        createVNode("div", { class: "user__info" }, [
                          createVNode("h5", null, "User 3"),
                          createVNode("small", null, "2d ago")
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "card" }, [
                    createVNode("div", { class: "card__header" }, [
                      createVNode("img", {
                        src: "https://images.pexels.com/photos/7658352/pexels-photo-7658352.jpeg?auto=compress&cs=tinysrgb&w=600",
                        alt: "card__image",
                        class: "card__image",
                        width: "600"
                      })
                    ]),
                    createVNode("div", { class: "card__body" }, [
                      createVNode("span", { class: "tag" }, "Jobs"),
                      createVNode("h4", null, "Charted Accountant"),
                      createVNode("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!")
                    ]),
                    createVNode("div", { class: "card__footer" }, [
                      createVNode("div", { class: "user" }, [
                        createVNode("img", {
                          src: "https://i.pravatar.cc/40?img=55",
                          alt: "user__image",
                          class: "user__image"
                        }),
                        createVNode("div", { class: "user__info" }, [
                          createVNode("h5", null, "User 4"),
                          createVNode("small", null, "2h ago")
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "card" }, [
                    createVNode("div", { class: "card__header" }, [
                      createVNode("img", {
                        src: "https://images.pexels.com/photos/5669603/pexels-photo-5669603.jpeg?auto=compress&cs=tinysrgb&w=600",
                        alt: "card__image",
                        class: "card__image",
                        width: "600"
                      })
                    ]),
                    createVNode("div", { class: "card__body" }, [
                      createVNode("span", { class: "tag" }, "Jobs"),
                      createVNode("h4", null, "Company Secretary"),
                      createVNode("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!")
                    ]),
                    createVNode("div", { class: "card__footer" }, [
                      createVNode("div", { class: "user" }, [
                        createVNode("img", {
                          src: "https://i.pravatar.cc/40?img=56",
                          alt: "user__image",
                          class: "user__image"
                        }),
                        createVNode("div", { class: "user__info" }, [
                          createVNode("h5", null, "User 5"),
                          createVNode("small", null, "2h ago")
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "card" }, [
                    createVNode("div", { class: "card__header" }, [
                      createVNode("img", {
                        src: "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=600",
                        alt: "card__image",
                        class: "card__image",
                        width: "600"
                      })
                    ]),
                    createVNode("div", { class: "card__body" }, [
                      createVNode("span", { class: "tag tag-blue" }, "Jobs"),
                      createVNode("h4", null, "Data Engineer"),
                      createVNode("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!")
                    ]),
                    createVNode("div", { class: "card__footer" }, [
                      createVNode("div", { class: "user" }, [
                        createVNode("img", {
                          src: "https://i.pravatar.cc/40?img=1",
                          alt: "user__image",
                          class: "user__image"
                        }),
                        createVNode("div", { class: "user__info" }, [
                          createVNode("h5", null, "User 6"),
                          createVNode("small", null, "2h ago")
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home/Index.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Index$2 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-6af0e3fa"]]);
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index$2
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, modi? </div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Posts/AddOrUpdate.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const AddOrUpdate = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: AddOrUpdate
}, Symbol.toStringTag, { value: "Module" }));
const Index_vue_vue_type_style_index_0_scoped_d3480168_lang = "";
const _sfc_main$2 = {
  __name: "Index",
  __ssrInlineRender: true,
  setup(__props) {
    router.get("api/posts");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(Layout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="content-wrap" data-v-d3480168${_scopeId}><main class="main-posts-list" data-v-d3480168${_scopeId}><article class="article" data-v-d3480168${_scopeId}><div class="article-img-column" data-v-d3480168${_scopeId}><img class="article-img" src="https://netology-code.github.io/html-2-diploma/sources/images/last-post1.jpg" alt="Человек, идущий по берегу" data-v-d3480168${_scopeId}></div><div class="article-text-column" data-v-d3480168${_scopeId}><ul class="tab-list" data-v-d3480168${_scopeId}><li class="tab-item" data-v-d3480168${_scopeId}><a class="tab-link" href="#0" data-v-d3480168${_scopeId}>Travel</a></li><li class="tab-item" data-v-d3480168${_scopeId}><a class="tab-link" href="#0" data-v-d3480168${_scopeId}>Health</a></li></ul><h2 class="article-title" data-v-d3480168${_scopeId}><a class="article-title-link" href="#0" data-v-d3480168${_scopeId}>10 мест, ради которых стоит проснуться на рассвете</a></h2><time class="article-datetime" datetime="2019-06-10" data-v-d3480168${_scopeId}>10 июня 2019</time><cite class="article-author" data-v-d3480168${_scopeId}>Неизвестный автор</cite><div class="article-content" data-v-d3480168${_scopeId}><p data-v-d3480168${_scopeId}>Итак, вы в Питере. Раннее утро. Лед с рек и каналов уже ушел, запущены фонтаны города… Музеи еще закрыты. Что посмотреть?</p></div></div></article><article class="article" data-v-d3480168${_scopeId}><div class="article-img-column" data-v-d3480168${_scopeId}><img class="article-img" src="https://netology-code.github.io/html-2-diploma/sources/images/last-post2.jpg" alt="Йога" data-v-d3480168${_scopeId}></div><div class="article-text-column" data-v-d3480168${_scopeId}><ul class="tab-list" data-v-d3480168${_scopeId}><li class="tab-item" data-v-d3480168${_scopeId}><a class="tab-link" href="#0" data-v-d3480168${_scopeId}>Health</a></li><li class="tab-item" data-v-d3480168${_scopeId}><a class="tab-link" href="#0" data-v-d3480168${_scopeId}>Lifestyle</a></li></ul><h2 class="article-title" data-v-d3480168${_scopeId}><a class="article-title-link" href="#0" data-v-d3480168${_scopeId}>Йога для начинающих в домашних условиях</a></h2><time class="article-datetime" datetime="2019-06-10" data-v-d3480168${_scopeId}>10 июня 2019</time><cite class="article-author" data-v-d3480168${_scopeId}>Неизвестный автор</cite><div class="article-content" data-v-d3480168${_scopeId}><p data-v-d3480168${_scopeId}>Расскажем, какие упражнения выбрать и как сделать коврик для занятий йогой из того, что можно найти в шкафу.</p></div></div></article><article class="article" data-v-d3480168${_scopeId}><div class="article-img-column" data-v-d3480168${_scopeId}><img class="article-img" src="https://netology-code.github.io/html-2-diploma/sources/images/last-post3.jpg" alt="Музыкальный фестиваль" data-v-d3480168${_scopeId}></div><div class="article-text-column" data-v-d3480168${_scopeId}><ul class="tab-list" data-v-d3480168${_scopeId}><li class="tab-item" data-v-d3480168${_scopeId}><a class="tab-link" href="#" data-v-d3480168${_scopeId}>Music</a></li></ul><h2 class="article-title" data-v-d3480168${_scopeId}><a class="article-title-link" href="#0" data-v-d3480168${_scopeId}>Лучшие музыкальные фестивали этого лета</a></h2><time class="article-datetime" datetime="2019-06-10" data-v-d3480168${_scopeId}>10 июня 2019</time><cite class="article-author" data-v-d3480168${_scopeId}>Неизвестный автор</cite><div class="article-content" data-v-d3480168${_scopeId}><p data-v-d3480168${_scopeId}>Лето на носу, а с ним и музыкальные фестивали. На каком же из них вы разобьёте свою палатку?</p><p data-v-d3480168${_scopeId}>Мы составили список лучших летних фестивалей по всему миру.</p></div></div></article><article class="article" data-v-d3480168${_scopeId}><div class="article-img-column" data-v-d3480168${_scopeId}><img class="article-img" src="https://netology-code.github.io/html-2-diploma/sources/images/last-post4.jpg" alt="Стол с едой" data-v-d3480168${_scopeId}></div><div class="article-text-column" data-v-d3480168${_scopeId}><ul class="tab-list" data-v-d3480168${_scopeId}><li class="tab-item" data-v-d3480168${_scopeId}><a class="tab-link" href="#0" data-v-d3480168${_scopeId}>Lifestyle</a></li><li class="tab-item" data-v-d3480168${_scopeId}><a class="tab-link" href="#0" data-v-d3480168${_scopeId}>Food</a></li></ul><h2 class="article-title" data-v-d3480168${_scopeId}><a class="article-title-link" href="#0" data-v-d3480168${_scopeId}>Наукоёмкий подход к кулинарии</a></h2><time class="article-datetime" datetime="2019-06-10" data-v-d3480168${_scopeId}>10 июня 2019</time><cite class="article-author" data-v-d3480168${_scopeId}>Неизвестный автор</cite><div class="article-content" data-v-d3480168${_scopeId}><p data-v-d3480168${_scopeId}>Узнаем основы проектирования новых пищевых и около-пищевых опытов, вскроем физику, химию и микробиологию еды.</p></div></div></article><article class="article" data-v-d3480168${_scopeId}><div class="article-img-column" data-v-d3480168${_scopeId}><img class="article-img" src="https://netology-code.github.io/html-2-diploma/sources/images/last-post5.jpg" alt="Подушка с надписью &#39;Hang out spot&#39;" data-v-d3480168${_scopeId}></div><div class="article-text-column" data-v-d3480168${_scopeId}><ul class="tab-list" data-v-d3480168${_scopeId}><li class="tab-item" data-v-d3480168${_scopeId}><a class="tab-link" href="#0" data-v-d3480168${_scopeId}>Lifestyle</a></li><li class="tab-item" data-v-d3480168${_scopeId}><a class="tab-link" href="#0" data-v-d3480168${_scopeId}>Interior</a></li><li class="tab-item" data-v-d3480168${_scopeId}><a class="tab-link" href="#0" data-v-d3480168${_scopeId}>Art</a></li></ul><h2 class="article-title" data-v-d3480168${_scopeId}><a class="article-title-link" href="#0" data-v-d3480168${_scopeId}>Делаем модные принты на подушках для интерьера</a></h2><time class="article-datetime" datetime="2019-06-10" data-v-d3480168${_scopeId}>10 июня 2019</time><cite class="article-author" data-v-d3480168${_scopeId}>Неизвестный автор</cite><div class="article-content" data-v-d3480168${_scopeId}><p data-v-d3480168${_scopeId}>Подушки для дивана целесообразнее заказать в съемных чехлах на молнии, если потребуется чистка подушек, проще снять чехлы, чем везти подушку в химчистку</p></div></div></article><article class="article" data-v-d3480168${_scopeId}><div class="article-img-column" data-v-d3480168${_scopeId}><img class="article-img" src="https://netology-code.github.io/html-2-diploma/sources/images/last-post6.jpg" alt="Люди на вершине горы" data-v-d3480168${_scopeId}></div><div class="article-text-column" data-v-d3480168${_scopeId}><ul class="tab-list" data-v-d3480168${_scopeId}><li class="tab-item" data-v-d3480168${_scopeId}><a class="tab-link" href="#0" data-v-d3480168${_scopeId}>Travel</a></li><li class="tab-item" data-v-d3480168${_scopeId}><a class="tab-link" href="#0" data-v-d3480168${_scopeId}>Lifestyle</a></li></ul><h2 class="article-title" data-v-d3480168${_scopeId}><a class="article-title-link" href="#" data-v-d3480168${_scopeId}>Как первый раз отправиться в горы?</a></h2><time class="article-datetime" datetime="2019-06-10" data-v-d3480168${_scopeId}>10 июня 2019</time><cite class="article-author" data-v-d3480168${_scopeId}>Неизвестный автор</cite><div class="article-content" data-v-d3480168${_scopeId}><p data-v-d3480168${_scopeId}>Для начала нужно определиться, в каком формате пройдёт ваше путешествие. Это зависит от многих факторов, не только от ваших желаний и интересов.</p></div></div></article><article class="article" data-v-d3480168${_scopeId}><div class="article-img-column" data-v-d3480168${_scopeId}><img class="article-img" src="https://netology-code.github.io/html-2-diploma/sources/images/last-post4.jpg" alt="Стол с едой" data-v-d3480168${_scopeId}></div><div class="article-text-column" data-v-d3480168${_scopeId}><ul class="tab-list" data-v-d3480168${_scopeId}><li class="tab-item" data-v-d3480168${_scopeId}><a class="tab-link" href="#0" data-v-d3480168${_scopeId}>Lifestyle</a></li><li class="tab-item" data-v-d3480168${_scopeId}><a class="tab-link" href="#0" data-v-d3480168${_scopeId}>Food</a></li></ul><h2 class="article-title" data-v-d3480168${_scopeId}><a class="article-title-link" href="#0" data-v-d3480168${_scopeId}>Наукоёмкий подход к кулинарии</a></h2><time class="article-datetime" datetime="2019-06-10" data-v-d3480168${_scopeId}>10 июня 2019</time><cite class="article-author" data-v-d3480168${_scopeId}>Неизвестный автор</cite><div class="article-content" data-v-d3480168${_scopeId}><p data-v-d3480168${_scopeId}>Узнаем основы проектирования новых пищевых и около-пищевых опытов, вскроем физику, химию и микробиологию еды.</p></div></div></article></main><aside class="sidebar" data-v-d3480168${_scopeId}><section class="new-posts" data-v-d3480168${_scopeId}><h2 class="sidebar-title" data-v-d3480168${_scopeId}>Новые посты</h2><div class="new-posts-list" data-v-d3480168${_scopeId}><article class="new-posts-article" data-v-d3480168${_scopeId}><div class="post-img-column" data-v-d3480168${_scopeId}><img class="new-posts-image" src="https://netology-code.github.io/html-2-diploma/sources/images/2.jpg" alt="Человек, идущий по берегу" data-v-d3480168${_scopeId}></div><div class="post-text-column" data-v-d3480168${_scopeId}><time class="new-posts-datetime" datetime="2019-06-14" data-v-d3480168${_scopeId}>14 июня 2019</time><h3 class="new-posts-title" data-v-d3480168${_scopeId}><a class="new-posts-link" href="#0" data-v-d3480168${_scopeId}>10 мест, ради которых стоит проснуться</a></h3></div></article><article class="new-posts-article" data-v-d3480168${_scopeId}><div class="post-img-column" data-v-d3480168${_scopeId}><img class="new-posts-image" src="https://netology-code.github.io/html-2-diploma/sources/images/151.jpg" alt="Йога" data-v-d3480168${_scopeId}></div><div class="post-text-column" data-v-d3480168${_scopeId}><time class="new-posts-datetime" datetime="2019-06-14" data-v-d3480168${_scopeId}>14 июня 2019</time><h3 class="new-posts-title" data-v-d3480168${_scopeId}><a class="new-posts-link" href="#0" data-v-d3480168${_scopeId}>Йога для домашних</a></h3></div></article><article class="new-posts-article" data-v-d3480168${_scopeId}><div class="post-img-column" data-v-d3480168${_scopeId}><img class="new-posts-image" src="https://netology-code.github.io/html-2-diploma/sources/images/45.jpg" alt="Балкон" data-v-d3480168${_scopeId}></div><div class="post-text-column" data-v-d3480168${_scopeId}><time class="new-posts-datetime" datetime="2019-06-14" data-v-d3480168${_scopeId}>14 июня 2019</time><h3 class="new-posts-title" data-v-d3480168${_scopeId}><a class="new-posts-link" href="#0" data-v-d3480168${_scopeId}>Как мы превратили классное место в балкон</a></h3></div></article><article class="new-posts-article" data-v-d3480168${_scopeId}><div class="post-img-column" data-v-d3480168${_scopeId}><img class="new-posts-image" src="https://netology-code.github.io/html-2-diploma/sources/images/501.jpg" alt="Стол с едой" data-v-d3480168${_scopeId}></div><div class="post-text-column" data-v-d3480168${_scopeId}><time class="new-posts-datetime" datetime="2019-06-14" data-v-d3480168${_scopeId}>14 июня 2019</time><h3 class="new-posts-title" data-v-d3480168${_scopeId}><a class="new-posts-link" href="#0" data-v-d3480168${_scopeId}>Кулинарный подход к науке</a></h3></div></article><article class="new-posts-article" data-v-d3480168${_scopeId}><div class="post-img-column" data-v-d3480168${_scopeId}><img class="new-posts-image" src="https://netology-code.github.io/html-2-diploma/sources/images/7.jpg" alt="Прически" data-v-d3480168${_scopeId}></div><div class="post-text-column" data-v-d3480168${_scopeId}><time class="new-posts-datetime" datetime="2019-06-14" data-v-d3480168${_scopeId}>14 июня 2019</time><h3 class="new-posts-title" data-v-d3480168${_scopeId}><a class="new-posts-link" href="#0" data-v-d3480168${_scopeId}>Лучшие прически для распущенных волос</a></h3></div></article></div><form class="search" data-v-d3480168${_scopeId}><label class="visually-hidden" for="search" data-v-d3480168${_scopeId}>Поиск по блогу</label><input id="search" type="search" class="search-field" name="search" placeholder="Найти..." required data-v-d3480168${_scopeId}><button class="search-button" data-v-d3480168${_scopeId}><span class="visually-hidden" data-v-d3480168${_scopeId}>Найти</span></button></form></section><section class="subscription" data-v-d3480168${_scopeId}><h2 class="sidebar-title" data-v-d3480168${_scopeId}>Рассылка</h2><form class="subscription-form" data-v-d3480168${_scopeId}><label class="visually-hidden" for="email" data-v-d3480168${_scopeId}>Подписаться</label><input id="email" type="email" class="subscription-field" name="email" placeholder="Ваш email-адрес" required data-v-d3480168${_scopeId}><button class="subscription-button" data-v-d3480168${_scopeId}>Подписаться</button></form></section><section class="tags" data-v-d3480168${_scopeId}><h2 class="sidebar-title" data-v-d3480168${_scopeId}>Теги</h2><ul class="tags-list" data-v-d3480168${_scopeId}><li class="tags-item" data-v-d3480168${_scopeId}><a class="tags-link" href="#0" data-v-d3480168${_scopeId}>fashion</a></li><li class="tags-item" data-v-d3480168${_scopeId}><a class="tags-link" href="#0" data-v-d3480168${_scopeId}>music</a></li><li class="tags-item" data-v-d3480168${_scopeId}><a class="tags-link" href="#0" data-v-d3480168${_scopeId}>lifestyle</a></li><li class="tags-item" data-v-d3480168${_scopeId}><a class="tags-link" href="#0" data-v-d3480168${_scopeId}>art</a></li><li class="tags-item" data-v-d3480168${_scopeId}><a class="tags-link" href="#0" data-v-d3480168${_scopeId}>interior</a></li><li class="tags-item" data-v-d3480168${_scopeId}><a class="tags-link" href="#0" data-v-d3480168${_scopeId}>travel</a></li><li class="tags-item" data-v-d3480168${_scopeId}><a class="tags-link" href="#0" data-v-d3480168${_scopeId}>food</a></li><li class="tags-item" data-v-d3480168${_scopeId}><a class="tags-link" href="#0" data-v-d3480168${_scopeId}>health</a></li></ul></section><section class="categories" data-v-d3480168${_scopeId}><h2 class="sidebar-title" data-v-d3480168${_scopeId}>Темы</h2><ul class="category-list" data-v-d3480168${_scopeId}><li class="category-item" data-v-d3480168${_scopeId}><a class="category-link" href="#0" data-v-d3480168${_scopeId}>Красота<sup class="number" data-v-d3480168${_scopeId}>12</sup></a></li><li class="category-item" data-v-d3480168${_scopeId}><a class="category-link" href="#0" data-v-d3480168${_scopeId}>Здоровье<sup class="number" data-v-d3480168${_scopeId}>4</sup></a></li><li class="category-item" data-v-d3480168${_scopeId}><a class="category-link" href="#0" data-v-d3480168${_scopeId}>Образ жизни<sup class="number" data-v-d3480168${_scopeId}>145</sup></a></li><li class="category-item" data-v-d3480168${_scopeId}><a class="category-link" href="#0" data-v-d3480168${_scopeId}>Музыка<sup class="number" data-v-d3480168${_scopeId}>28</sup></a></li><li class="category-item" data-v-d3480168${_scopeId}><a class="category-link" href="#0" data-v-d3480168${_scopeId}>Спорт<sup class="number" data-v-d3480168${_scopeId}>62</sup></a></li><li class="category-item" data-v-d3480168${_scopeId}><a class="category-link" href="#0" data-v-d3480168${_scopeId}>Йога<sup class="number" data-v-d3480168${_scopeId}>8</sup></a></li></ul></section></aside></div>`);
          } else {
            return [
              createVNode("div", { class: "content-wrap" }, [
                createVNode("main", { class: "main-posts-list" }, [
                  createVNode("article", { class: "article" }, [
                    createVNode("div", { class: "article-img-column" }, [
                      createVNode("img", {
                        class: "article-img",
                        src: "https://netology-code.github.io/html-2-diploma/sources/images/last-post1.jpg",
                        alt: "Человек, идущий по берегу"
                      })
                    ]),
                    createVNode("div", { class: "article-text-column" }, [
                      createVNode("ul", { class: "tab-list" }, [
                        createVNode("li", { class: "tab-item" }, [
                          createVNode("a", {
                            class: "tab-link",
                            href: "#0"
                          }, "Travel")
                        ]),
                        createVNode("li", { class: "tab-item" }, [
                          createVNode("a", {
                            class: "tab-link",
                            href: "#0"
                          }, "Health")
                        ])
                      ]),
                      createVNode("h2", { class: "article-title" }, [
                        createVNode("a", {
                          class: "article-title-link",
                          href: "#0"
                        }, "10 мест, ради которых стоит проснуться на рассвете")
                      ]),
                      createVNode("time", {
                        class: "article-datetime",
                        datetime: "2019-06-10"
                      }, "10 июня 2019"),
                      createVNode("cite", { class: "article-author" }, "Неизвестный автор"),
                      createVNode("div", { class: "article-content" }, [
                        createVNode("p", null, "Итак, вы в Питере. Раннее утро. Лед с рек и каналов уже ушел, запущены фонтаны города… Музеи еще закрыты. Что посмотреть?")
                      ])
                    ])
                  ]),
                  createVNode("article", { class: "article" }, [
                    createVNode("div", { class: "article-img-column" }, [
                      createVNode("img", {
                        class: "article-img",
                        src: "https://netology-code.github.io/html-2-diploma/sources/images/last-post2.jpg",
                        alt: "Йога"
                      })
                    ]),
                    createVNode("div", { class: "article-text-column" }, [
                      createVNode("ul", { class: "tab-list" }, [
                        createVNode("li", { class: "tab-item" }, [
                          createVNode("a", {
                            class: "tab-link",
                            href: "#0"
                          }, "Health")
                        ]),
                        createVNode("li", { class: "tab-item" }, [
                          createVNode("a", {
                            class: "tab-link",
                            href: "#0"
                          }, "Lifestyle")
                        ])
                      ]),
                      createVNode("h2", { class: "article-title" }, [
                        createVNode("a", {
                          class: "article-title-link",
                          href: "#0"
                        }, "Йога для начинающих в домашних условиях")
                      ]),
                      createVNode("time", {
                        class: "article-datetime",
                        datetime: "2019-06-10"
                      }, "10 июня 2019"),
                      createVNode("cite", { class: "article-author" }, "Неизвестный автор"),
                      createVNode("div", { class: "article-content" }, [
                        createVNode("p", null, "Расскажем, какие упражнения выбрать и как сделать коврик для занятий йогой из того, что можно найти в шкафу.")
                      ])
                    ])
                  ]),
                  createVNode("article", { class: "article" }, [
                    createVNode("div", { class: "article-img-column" }, [
                      createVNode("img", {
                        class: "article-img",
                        src: "https://netology-code.github.io/html-2-diploma/sources/images/last-post3.jpg",
                        alt: "Музыкальный фестиваль"
                      })
                    ]),
                    createVNode("div", { class: "article-text-column" }, [
                      createVNode("ul", { class: "tab-list" }, [
                        createVNode("li", { class: "tab-item" }, [
                          createVNode("a", {
                            class: "tab-link",
                            href: "#"
                          }, "Music")
                        ])
                      ]),
                      createVNode("h2", { class: "article-title" }, [
                        createVNode("a", {
                          class: "article-title-link",
                          href: "#0"
                        }, "Лучшие музыкальные фестивали этого лета")
                      ]),
                      createVNode("time", {
                        class: "article-datetime",
                        datetime: "2019-06-10"
                      }, "10 июня 2019"),
                      createVNode("cite", { class: "article-author" }, "Неизвестный автор"),
                      createVNode("div", { class: "article-content" }, [
                        createVNode("p", null, "Лето на носу, а с ним и музыкальные фестивали. На каком же из них вы разобьёте свою палатку?"),
                        createVNode("p", null, "Мы составили список лучших летних фестивалей по всему миру.")
                      ])
                    ])
                  ]),
                  createVNode("article", { class: "article" }, [
                    createVNode("div", { class: "article-img-column" }, [
                      createVNode("img", {
                        class: "article-img",
                        src: "https://netology-code.github.io/html-2-diploma/sources/images/last-post4.jpg",
                        alt: "Стол с едой"
                      })
                    ]),
                    createVNode("div", { class: "article-text-column" }, [
                      createVNode("ul", { class: "tab-list" }, [
                        createVNode("li", { class: "tab-item" }, [
                          createVNode("a", {
                            class: "tab-link",
                            href: "#0"
                          }, "Lifestyle")
                        ]),
                        createVNode("li", { class: "tab-item" }, [
                          createVNode("a", {
                            class: "tab-link",
                            href: "#0"
                          }, "Food")
                        ])
                      ]),
                      createVNode("h2", { class: "article-title" }, [
                        createVNode("a", {
                          class: "article-title-link",
                          href: "#0"
                        }, "Наукоёмкий подход к кулинарии")
                      ]),
                      createVNode("time", {
                        class: "article-datetime",
                        datetime: "2019-06-10"
                      }, "10 июня 2019"),
                      createVNode("cite", { class: "article-author" }, "Неизвестный автор"),
                      createVNode("div", { class: "article-content" }, [
                        createVNode("p", null, "Узнаем основы проектирования новых пищевых и около-пищевых опытов, вскроем физику, химию и микробиологию еды.")
                      ])
                    ])
                  ]),
                  createVNode("article", { class: "article" }, [
                    createVNode("div", { class: "article-img-column" }, [
                      createVNode("img", {
                        class: "article-img",
                        src: "https://netology-code.github.io/html-2-diploma/sources/images/last-post5.jpg",
                        alt: "Подушка с надписью 'Hang out spot'"
                      })
                    ]),
                    createVNode("div", { class: "article-text-column" }, [
                      createVNode("ul", { class: "tab-list" }, [
                        createVNode("li", { class: "tab-item" }, [
                          createVNode("a", {
                            class: "tab-link",
                            href: "#0"
                          }, "Lifestyle")
                        ]),
                        createVNode("li", { class: "tab-item" }, [
                          createVNode("a", {
                            class: "tab-link",
                            href: "#0"
                          }, "Interior")
                        ]),
                        createVNode("li", { class: "tab-item" }, [
                          createVNode("a", {
                            class: "tab-link",
                            href: "#0"
                          }, "Art")
                        ])
                      ]),
                      createVNode("h2", { class: "article-title" }, [
                        createVNode("a", {
                          class: "article-title-link",
                          href: "#0"
                        }, "Делаем модные принты на подушках для интерьера")
                      ]),
                      createVNode("time", {
                        class: "article-datetime",
                        datetime: "2019-06-10"
                      }, "10 июня 2019"),
                      createVNode("cite", { class: "article-author" }, "Неизвестный автор"),
                      createVNode("div", { class: "article-content" }, [
                        createVNode("p", null, "Подушки для дивана целесообразнее заказать в съемных чехлах на молнии, если потребуется чистка подушек, проще снять чехлы, чем везти подушку в химчистку")
                      ])
                    ])
                  ]),
                  createVNode("article", { class: "article" }, [
                    createVNode("div", { class: "article-img-column" }, [
                      createVNode("img", {
                        class: "article-img",
                        src: "https://netology-code.github.io/html-2-diploma/sources/images/last-post6.jpg",
                        alt: "Люди на вершине горы"
                      })
                    ]),
                    createVNode("div", { class: "article-text-column" }, [
                      createVNode("ul", { class: "tab-list" }, [
                        createVNode("li", { class: "tab-item" }, [
                          createVNode("a", {
                            class: "tab-link",
                            href: "#0"
                          }, "Travel")
                        ]),
                        createVNode("li", { class: "tab-item" }, [
                          createVNode("a", {
                            class: "tab-link",
                            href: "#0"
                          }, "Lifestyle")
                        ])
                      ]),
                      createVNode("h2", { class: "article-title" }, [
                        createVNode("a", {
                          class: "article-title-link",
                          href: "#"
                        }, "Как первый раз отправиться в горы?")
                      ]),
                      createVNode("time", {
                        class: "article-datetime",
                        datetime: "2019-06-10"
                      }, "10 июня 2019"),
                      createVNode("cite", { class: "article-author" }, "Неизвестный автор"),
                      createVNode("div", { class: "article-content" }, [
                        createVNode("p", null, "Для начала нужно определиться, в каком формате пройдёт ваше путешествие. Это зависит от многих факторов, не только от ваших желаний и интересов.")
                      ])
                    ])
                  ]),
                  createVNode("article", { class: "article" }, [
                    createVNode("div", { class: "article-img-column" }, [
                      createVNode("img", {
                        class: "article-img",
                        src: "https://netology-code.github.io/html-2-diploma/sources/images/last-post4.jpg",
                        alt: "Стол с едой"
                      })
                    ]),
                    createVNode("div", { class: "article-text-column" }, [
                      createVNode("ul", { class: "tab-list" }, [
                        createVNode("li", { class: "tab-item" }, [
                          createVNode("a", {
                            class: "tab-link",
                            href: "#0"
                          }, "Lifestyle")
                        ]),
                        createVNode("li", { class: "tab-item" }, [
                          createVNode("a", {
                            class: "tab-link",
                            href: "#0"
                          }, "Food")
                        ])
                      ]),
                      createVNode("h2", { class: "article-title" }, [
                        createVNode("a", {
                          class: "article-title-link",
                          href: "#0"
                        }, "Наукоёмкий подход к кулинарии")
                      ]),
                      createVNode("time", {
                        class: "article-datetime",
                        datetime: "2019-06-10"
                      }, "10 июня 2019"),
                      createVNode("cite", { class: "article-author" }, "Неизвестный автор"),
                      createVNode("div", { class: "article-content" }, [
                        createVNode("p", null, "Узнаем основы проектирования новых пищевых и около-пищевых опытов, вскроем физику, химию и микробиологию еды.")
                      ])
                    ])
                  ])
                ]),
                createVNode("aside", { class: "sidebar" }, [
                  createVNode("section", { class: "new-posts" }, [
                    createVNode("h2", { class: "sidebar-title" }, "Новые посты"),
                    createVNode("div", { class: "new-posts-list" }, [
                      createVNode("article", { class: "new-posts-article" }, [
                        createVNode("div", { class: "post-img-column" }, [
                          createVNode("img", {
                            class: "new-posts-image",
                            src: "https://netology-code.github.io/html-2-diploma/sources/images/2.jpg",
                            alt: "Человек, идущий по берегу"
                          })
                        ]),
                        createVNode("div", { class: "post-text-column" }, [
                          createVNode("time", {
                            class: "new-posts-datetime",
                            datetime: "2019-06-14"
                          }, "14 июня 2019"),
                          createVNode("h3", { class: "new-posts-title" }, [
                            createVNode("a", {
                              class: "new-posts-link",
                              href: "#0"
                            }, "10 мест, ради которых стоит проснуться")
                          ])
                        ])
                      ]),
                      createVNode("article", { class: "new-posts-article" }, [
                        createVNode("div", { class: "post-img-column" }, [
                          createVNode("img", {
                            class: "new-posts-image",
                            src: "https://netology-code.github.io/html-2-diploma/sources/images/151.jpg",
                            alt: "Йога"
                          })
                        ]),
                        createVNode("div", { class: "post-text-column" }, [
                          createVNode("time", {
                            class: "new-posts-datetime",
                            datetime: "2019-06-14"
                          }, "14 июня 2019"),
                          createVNode("h3", { class: "new-posts-title" }, [
                            createVNode("a", {
                              class: "new-posts-link",
                              href: "#0"
                            }, "Йога для домашних")
                          ])
                        ])
                      ]),
                      createVNode("article", { class: "new-posts-article" }, [
                        createVNode("div", { class: "post-img-column" }, [
                          createVNode("img", {
                            class: "new-posts-image",
                            src: "https://netology-code.github.io/html-2-diploma/sources/images/45.jpg",
                            alt: "Балкон"
                          })
                        ]),
                        createVNode("div", { class: "post-text-column" }, [
                          createVNode("time", {
                            class: "new-posts-datetime",
                            datetime: "2019-06-14"
                          }, "14 июня 2019"),
                          createVNode("h3", { class: "new-posts-title" }, [
                            createVNode("a", {
                              class: "new-posts-link",
                              href: "#0"
                            }, "Как мы превратили классное место в балкон")
                          ])
                        ])
                      ]),
                      createVNode("article", { class: "new-posts-article" }, [
                        createVNode("div", { class: "post-img-column" }, [
                          createVNode("img", {
                            class: "new-posts-image",
                            src: "https://netology-code.github.io/html-2-diploma/sources/images/501.jpg",
                            alt: "Стол с едой"
                          })
                        ]),
                        createVNode("div", { class: "post-text-column" }, [
                          createVNode("time", {
                            class: "new-posts-datetime",
                            datetime: "2019-06-14"
                          }, "14 июня 2019"),
                          createVNode("h3", { class: "new-posts-title" }, [
                            createVNode("a", {
                              class: "new-posts-link",
                              href: "#0"
                            }, "Кулинарный подход к науке")
                          ])
                        ])
                      ]),
                      createVNode("article", { class: "new-posts-article" }, [
                        createVNode("div", { class: "post-img-column" }, [
                          createVNode("img", {
                            class: "new-posts-image",
                            src: "https://netology-code.github.io/html-2-diploma/sources/images/7.jpg",
                            alt: "Прически"
                          })
                        ]),
                        createVNode("div", { class: "post-text-column" }, [
                          createVNode("time", {
                            class: "new-posts-datetime",
                            datetime: "2019-06-14"
                          }, "14 июня 2019"),
                          createVNode("h3", { class: "new-posts-title" }, [
                            createVNode("a", {
                              class: "new-posts-link",
                              href: "#0"
                            }, "Лучшие прически для распущенных волос")
                          ])
                        ])
                      ])
                    ]),
                    createVNode("form", { class: "search" }, [
                      createVNode("label", {
                        class: "visually-hidden",
                        for: "search"
                      }, "Поиск по блогу"),
                      createVNode("input", {
                        id: "search",
                        type: "search",
                        class: "search-field",
                        name: "search",
                        placeholder: "Найти...",
                        required: ""
                      }),
                      createVNode("button", { class: "search-button" }, [
                        createVNode("span", { class: "visually-hidden" }, "Найти")
                      ])
                    ])
                  ]),
                  createVNode("section", { class: "subscription" }, [
                    createVNode("h2", { class: "sidebar-title" }, "Рассылка"),
                    createVNode("form", { class: "subscription-form" }, [
                      createVNode("label", {
                        class: "visually-hidden",
                        for: "email"
                      }, "Подписаться"),
                      createVNode("input", {
                        id: "email",
                        type: "email",
                        class: "subscription-field",
                        name: "email",
                        placeholder: "Ваш email-адрес",
                        required: ""
                      }),
                      createVNode("button", { class: "subscription-button" }, "Подписаться")
                    ])
                  ]),
                  createVNode("section", { class: "tags" }, [
                    createVNode("h2", { class: "sidebar-title" }, "Теги"),
                    createVNode("ul", { class: "tags-list" }, [
                      createVNode("li", { class: "tags-item" }, [
                        createVNode("a", {
                          class: "tags-link",
                          href: "#0"
                        }, "fashion")
                      ]),
                      createVNode("li", { class: "tags-item" }, [
                        createVNode("a", {
                          class: "tags-link",
                          href: "#0"
                        }, "music")
                      ]),
                      createVNode("li", { class: "tags-item" }, [
                        createVNode("a", {
                          class: "tags-link",
                          href: "#0"
                        }, "lifestyle")
                      ]),
                      createVNode("li", { class: "tags-item" }, [
                        createVNode("a", {
                          class: "tags-link",
                          href: "#0"
                        }, "art")
                      ]),
                      createVNode("li", { class: "tags-item" }, [
                        createVNode("a", {
                          class: "tags-link",
                          href: "#0"
                        }, "interior")
                      ]),
                      createVNode("li", { class: "tags-item" }, [
                        createVNode("a", {
                          class: "tags-link",
                          href: "#0"
                        }, "travel")
                      ]),
                      createVNode("li", { class: "tags-item" }, [
                        createVNode("a", {
                          class: "tags-link",
                          href: "#0"
                        }, "food")
                      ]),
                      createVNode("li", { class: "tags-item" }, [
                        createVNode("a", {
                          class: "tags-link",
                          href: "#0"
                        }, "health")
                      ])
                    ])
                  ]),
                  createVNode("section", { class: "categories" }, [
                    createVNode("h2", { class: "sidebar-title" }, "Темы"),
                    createVNode("ul", { class: "category-list" }, [
                      createVNode("li", { class: "category-item" }, [
                        createVNode("a", {
                          class: "category-link",
                          href: "#0"
                        }, [
                          createTextVNode("Красота"),
                          createVNode("sup", { class: "number" }, "12")
                        ])
                      ]),
                      createVNode("li", { class: "category-item" }, [
                        createVNode("a", {
                          class: "category-link",
                          href: "#0"
                        }, [
                          createTextVNode("Здоровье"),
                          createVNode("sup", { class: "number" }, "4")
                        ])
                      ]),
                      createVNode("li", { class: "category-item" }, [
                        createVNode("a", {
                          class: "category-link",
                          href: "#0"
                        }, [
                          createTextVNode("Образ жизни"),
                          createVNode("sup", { class: "number" }, "145")
                        ])
                      ]),
                      createVNode("li", { class: "category-item" }, [
                        createVNode("a", {
                          class: "category-link",
                          href: "#0"
                        }, [
                          createTextVNode("Музыка"),
                          createVNode("sup", { class: "number" }, "28")
                        ])
                      ]),
                      createVNode("li", { class: "category-item" }, [
                        createVNode("a", {
                          class: "category-link",
                          href: "#0"
                        }, [
                          createTextVNode("Спорт"),
                          createVNode("sup", { class: "number" }, "62")
                        ])
                      ]),
                      createVNode("li", { class: "category-item" }, [
                        createVNode("a", {
                          class: "category-link",
                          href: "#0"
                        }, [
                          createTextVNode("Йога"),
                          createVNode("sup", { class: "number" }, "8")
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Posts/Index.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Index$1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-d3480168"]]);
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index$1
}, Symbol.toStringTag, { value: "Module" }));
const Index_vue_vue_type_style_index_0_scoped_7a6ae98d_lang = "";
const _sfc_main$1 = {
  __name: "Index",
  __ssrInlineRender: true,
  setup(__props) {
    const props = ref(usePage().props);
    console.log(props.value);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title data-v-7a6ae98d${_scopeId}>Your page title</title><meta name="description" content="Your page description" data-v-7a6ae98d${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "Your page title"),
              createVNode("meta", {
                name: "description",
                content: "Your page description"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Layout, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="container-table100" data-v-7a6ae98d${_scopeId}><div class="wrap-table100" data-v-7a6ae98d${_scopeId}><h1 class="mt-5" data-v-7a6ae98d${_scopeId}>Testlar</h1><table class="table" data-v-7a6ae98d${_scopeId}><thead class="row header" data-v-7a6ae98d${_scopeId}><th class="cell" data-v-7a6ae98d${_scopeId}>Fan nomi</th><th class="cell" data-v-7a6ae98d${_scopeId}>Savollar soni</th><th class="cell" data-v-7a6ae98d${_scopeId}>Vaqti</th><th class="cell" data-v-7a6ae98d${_scopeId}>Harakatlar</th></thead><tbody data-v-7a6ae98d${_scopeId}><tr class="row" data-v-7a6ae98d${_scopeId}><td class="cell" data-title="Full Name" data-v-7a6ae98d${_scopeId}> Matematika </td><td class="cell" data-title="Age" data-v-7a6ae98d${_scopeId}>20</td><td class="cell" data-title="Job Title" data-v-7a6ae98d${_scopeId}> 60 daqiqa </td><td class="cell" data-title="Location" data-v-7a6ae98d${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              class: "btn btn-success",
              href: "/tests/matematika"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Boshlash`);
                } else {
                  return [
                    createTextVNode("Boshlash")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</td></tr><tr class="row" data-v-7a6ae98d${_scopeId}><div class="cell" data-title="Full Name" data-v-7a6ae98d${_scopeId}> Joseph Smith </div><div class="cell" data-title="Age" data-v-7a6ae98d${_scopeId}>27</div><div class="cell" data-title="Job Title" data-v-7a6ae98d${_scopeId}> Project Manager </div><div class="cell" data-title="Location" data-v-7a6ae98d${_scopeId}> Somerville, MA </div></tr><tr class="row" data-v-7a6ae98d${_scopeId}><div class="cell" data-title="Full Name" data-v-7a6ae98d${_scopeId}> Justin Black </div><div class="cell" data-title="Age" data-v-7a6ae98d${_scopeId}>26</div><div class="cell" data-title="Job Title" data-v-7a6ae98d${_scopeId}> Front-End Developer </div><div class="cell" data-title="Location" data-v-7a6ae98d${_scopeId}> Los Angeles </div></tr><tr class="row" data-v-7a6ae98d${_scopeId}><div class="cell" data-title="Full Name" data-v-7a6ae98d${_scopeId}> Sean Guzman </div><div class="cell" data-title="Age" data-v-7a6ae98d${_scopeId}>25</div><div class="cell" data-title="Job Title" data-v-7a6ae98d${_scopeId}> Web Designer </div><div class="cell" data-title="Location" data-v-7a6ae98d${_scopeId}> San Francisco </div></tr><tr class="row" data-v-7a6ae98d${_scopeId}><div class="cell" data-title="Full Name" data-v-7a6ae98d${_scopeId}> Keith Carter </div><div class="cell" data-title="Age" data-v-7a6ae98d${_scopeId}>20</div><div class="cell" data-title="Job Title" data-v-7a6ae98d${_scopeId}> Graphic Designer </div><div class="cell" data-title="Location" data-v-7a6ae98d${_scopeId}> New York, NY </div></tr><tr class="row" data-v-7a6ae98d${_scopeId}><div class="cell" data-title="Full Name" data-v-7a6ae98d${_scopeId}> Austin Medina </div><div class="cell" data-title="Age" data-v-7a6ae98d${_scopeId}>32</div><div class="cell" data-title="Job Title" data-v-7a6ae98d${_scopeId}> Photographer </div><div class="cell" data-title="Location" data-v-7a6ae98d${_scopeId}> New York </div></tr><tr class="row" data-v-7a6ae98d${_scopeId}><div class="cell" data-title="Full Name" data-v-7a6ae98d${_scopeId}> Vincent Williamson </div><div class="cell" data-title="Age" data-v-7a6ae98d${_scopeId}>31</div><div class="cell" data-title="Job Title" data-v-7a6ae98d${_scopeId}> iOS Developer </div><div class="cell" data-title="Location" data-v-7a6ae98d${_scopeId}> Washington </div></tr><tr class="row" data-v-7a6ae98d${_scopeId}><div class="cell" data-title="Full Name" data-v-7a6ae98d${_scopeId}> Joseph Smith </div><div class="cell" data-title="Age" data-v-7a6ae98d${_scopeId}>27</div><div class="cell" data-title="Job Title" data-v-7a6ae98d${_scopeId}> Project Manager </div><div class="cell" data-title="Location" data-v-7a6ae98d${_scopeId}> Somerville, MA </div></tr></tbody></table></div></div>`);
          } else {
            return [
              createVNode("div", { class: "container-table100" }, [
                createVNode("div", { class: "wrap-table100" }, [
                  createVNode("h1", { class: "mt-5" }, "Testlar"),
                  createVNode("table", { class: "table" }, [
                    createVNode("thead", { class: "row header" }, [
                      createVNode("th", { class: "cell" }, "Fan nomi"),
                      createVNode("th", { class: "cell" }, "Savollar soni"),
                      createVNode("th", { class: "cell" }, "Vaqti"),
                      createVNode("th", { class: "cell" }, "Harakatlar")
                    ]),
                    createVNode("tbody", null, [
                      createVNode("tr", { class: "row" }, [
                        createVNode("td", {
                          class: "cell",
                          "data-title": "Full Name"
                        }, " Matematika "),
                        createVNode("td", {
                          class: "cell",
                          "data-title": "Age"
                        }, "20"),
                        createVNode("td", {
                          class: "cell",
                          "data-title": "Job Title"
                        }, " 60 daqiqa "),
                        createVNode("td", {
                          class: "cell",
                          "data-title": "Location"
                        }, [
                          createVNode(unref(Link), {
                            class: "btn btn-success",
                            href: "/tests/matematika"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Boshlash")
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      createVNode("tr", { class: "row" }, [
                        createVNode("div", {
                          class: "cell",
                          "data-title": "Full Name"
                        }, " Joseph Smith "),
                        createVNode("div", {
                          class: "cell",
                          "data-title": "Age"
                        }, "27"),
                        createVNode("div", {
                          class: "cell",
                          "data-title": "Job Title"
                        }, " Project Manager "),
                        createVNode("div", {
                          class: "cell",
                          "data-title": "Location"
                        }, " Somerville, MA ")
                      ]),
                      createVNode("tr", { class: "row" }, [
                        createVNode("div", {
                          class: "cell",
                          "data-title": "Full Name"
                        }, " Justin Black "),
                        createVNode("div", {
                          class: "cell",
                          "data-title": "Age"
                        }, "26"),
                        createVNode("div", {
                          class: "cell",
                          "data-title": "Job Title"
                        }, " Front-End Developer "),
                        createVNode("div", {
                          class: "cell",
                          "data-title": "Location"
                        }, " Los Angeles ")
                      ]),
                      createVNode("tr", { class: "row" }, [
                        createVNode("div", {
                          class: "cell",
                          "data-title": "Full Name"
                        }, " Sean Guzman "),
                        createVNode("div", {
                          class: "cell",
                          "data-title": "Age"
                        }, "25"),
                        createVNode("div", {
                          class: "cell",
                          "data-title": "Job Title"
                        }, " Web Designer "),
                        createVNode("div", {
                          class: "cell",
                          "data-title": "Location"
                        }, " San Francisco ")
                      ]),
                      createVNode("tr", { class: "row" }, [
                        createVNode("div", {
                          class: "cell",
                          "data-title": "Full Name"
                        }, " Keith Carter "),
                        createVNode("div", {
                          class: "cell",
                          "data-title": "Age"
                        }, "20"),
                        createVNode("div", {
                          class: "cell",
                          "data-title": "Job Title"
                        }, " Graphic Designer "),
                        createVNode("div", {
                          class: "cell",
                          "data-title": "Location"
                        }, " New York, NY ")
                      ]),
                      createVNode("tr", { class: "row" }, [
                        createVNode("div", {
                          class: "cell",
                          "data-title": "Full Name"
                        }, " Austin Medina "),
                        createVNode("div", {
                          class: "cell",
                          "data-title": "Age"
                        }, "32"),
                        createVNode("div", {
                          class: "cell",
                          "data-title": "Job Title"
                        }, " Photographer "),
                        createVNode("div", {
                          class: "cell",
                          "data-title": "Location"
                        }, " New York ")
                      ]),
                      createVNode("tr", { class: "row" }, [
                        createVNode("div", {
                          class: "cell",
                          "data-title": "Full Name"
                        }, " Vincent Williamson "),
                        createVNode("div", {
                          class: "cell",
                          "data-title": "Age"
                        }, "31"),
                        createVNode("div", {
                          class: "cell",
                          "data-title": "Job Title"
                        }, " iOS Developer "),
                        createVNode("div", {
                          class: "cell",
                          "data-title": "Location"
                        }, " Washington ")
                      ]),
                      createVNode("tr", { class: "row" }, [
                        createVNode("div", {
                          class: "cell",
                          "data-title": "Full Name"
                        }, " Joseph Smith "),
                        createVNode("div", {
                          class: "cell",
                          "data-title": "Age"
                        }, "27"),
                        createVNode("div", {
                          class: "cell",
                          "data-title": "Job Title"
                        }, " Project Manager "),
                        createVNode("div", {
                          class: "cell",
                          "data-title": "Location"
                        }, " Somerville, MA ")
                      ])
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Quizzes/Index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-7a6ae98d"]]);
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index
}, Symbol.toStringTag, { value: "Module" }));
const SingleQuiz_vue_vue_type_style_index_0_scoped_33922923_lang = "";
const _sfc_main = {
  __name: "SingleQuiz",
  __ssrInlineRender: true,
  setup(__props) {
    const props = usePage().props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(Layout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`<main data-v-33922923${_scopeId}><div class="container" data-v-33922923${_scopeId}><h1 class="quiz-title text-uppercase" data-v-33922923${_scopeId}>${ssrInterpolate((_a = unref(props)) == null ? void 0 : _a.slug)}</h1><section class="question-section" data-v-33922923${_scopeId}><div class="question" data-v-33922923${_scopeId}><h2 class="question-num" data-v-33922923${_scopeId}>Question 11</h2><p class="question-text" data-v-33922923${_scopeId}> Which lifecycle method is called after a component is rendered for the first time? </p></div><div class="answer" data-v-33922923${_scopeId}><label class="answer-item" data-v-33922923${_scopeId}><input type="radio" name="option1" onchange="toggleParentClass(this)" id="" data-v-33922923${_scopeId}><span data-v-33922923${_scopeId}>componentDidMount</span></label><label class="answer-item" data-v-33922923${_scopeId}><input type="radio" name="option2" onchange="toggleParentClass(this)" id="" data-v-33922923${_scopeId}><span data-v-33922923${_scopeId}>componentDidUpdate</span></label><label class="answer-item" data-v-33922923${_scopeId}><input type="radio" name="option3" onchange="toggleParentClass(this)" id="" data-v-33922923${_scopeId}><span data-v-33922923${_scopeId}>componentWillMount</span></label><label class="answer-item" data-v-33922923${_scopeId}><input type="radio" name="option4" onchange="toggleParentClass(this)" id="" data-v-33922923${_scopeId}><span data-v-33922923${_scopeId}>componentWillUpdate</span></label></div><div class="action" data-v-33922923${_scopeId}><button class="btn" data-v-33922923${_scopeId}>Prev</button><button class="btn" data-v-33922923${_scopeId}>Next</button></div></section><section class="explanation-section" data-v-33922923${_scopeId}><h2 class="section-title" data-v-33922923${_scopeId}>Explanation</h2><p class="explanation-text" data-v-33922923${_scopeId}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p></section><section class="questions-nav-section" data-v-33922923${_scopeId}><p class="question-context" data-v-33922923${_scopeId}><a href="#" data-v-33922923${_scopeId}><span class="question-num" data-v-33922923${_scopeId}>Question 11/20</span></a><a href="#" data-v-33922923${_scopeId}><span class="question-help" data-v-33922923${_scopeId}>Need Help?</span></a></p><div class="d-flex" data-v-33922923${_scopeId}><ul class="question-nums-list" data-v-33922923${_scopeId}><li data-v-33922923${_scopeId}><a class="done" href="#" data-v-33922923${_scopeId}>1</a></li><li data-v-33922923${_scopeId}><a class="done" href="#" data-v-33922923${_scopeId}>2</a></li><li data-v-33922923${_scopeId}><a class="done" href="#" data-v-33922923${_scopeId}>3</a></li><li data-v-33922923${_scopeId}><a class="done" href="#" data-v-33922923${_scopeId}>4</a></li><li data-v-33922923${_scopeId}><a class="done" href="#" data-v-33922923${_scopeId}>5</a></li><li data-v-33922923${_scopeId}><a class="done" href="#" data-v-33922923${_scopeId}>6</a></li><li data-v-33922923${_scopeId}><a class="done" href="#" data-v-33922923${_scopeId}>7</a></li><li data-v-33922923${_scopeId}><a class="done" href="#" data-v-33922923${_scopeId}>8</a></li><li data-v-33922923${_scopeId}><a class="done" href="#" data-v-33922923${_scopeId}>9</a></li><li data-v-33922923${_scopeId}><a class="done" href="#" data-v-33922923${_scopeId}>10</a></li><li data-v-33922923${_scopeId}><a class="active" href="#" data-v-33922923${_scopeId}>11</a></li><li data-v-33922923${_scopeId}><a href="#" data-v-33922923${_scopeId}>12</a></li><li data-v-33922923${_scopeId}><a href="#" data-v-33922923${_scopeId}>13</a></li><li data-v-33922923${_scopeId}><a href="#" data-v-33922923${_scopeId}>14</a></li><li data-v-33922923${_scopeId}><a href="#" data-v-33922923${_scopeId}>15</a></li><li data-v-33922923${_scopeId}><a href="#" data-v-33922923${_scopeId}>16</a></li><li data-v-33922923${_scopeId}><a href="#" data-v-33922923${_scopeId}>17</a></li><li data-v-33922923${_scopeId}><a href="#" data-v-33922923${_scopeId}>18</a></li><li data-v-33922923${_scopeId}><a href="#" data-v-33922923${_scopeId}>19</a></li><li data-v-33922923${_scopeId}><a href="#" data-v-33922923${_scopeId}>20</a></li></ul></div></section></div></main>`);
          } else {
            return [
              createVNode("main", null, [
                createVNode("div", { class: "container" }, [
                  createVNode("h1", { class: "quiz-title text-uppercase" }, toDisplayString((_b = unref(props)) == null ? void 0 : _b.slug), 1),
                  createVNode("section", { class: "question-section" }, [
                    createVNode("div", { class: "question" }, [
                      createVNode("h2", { class: "question-num" }, "Question 11"),
                      createVNode("p", { class: "question-text" }, " Which lifecycle method is called after a component is rendered for the first time? ")
                    ]),
                    createVNode("div", { class: "answer" }, [
                      createVNode("label", { class: "answer-item" }, [
                        createVNode("input", {
                          type: "radio",
                          name: "option1",
                          onchange: "toggleParentClass(this)",
                          id: ""
                        }),
                        createVNode("span", null, "componentDidMount")
                      ]),
                      createVNode("label", { class: "answer-item" }, [
                        createVNode("input", {
                          type: "radio",
                          name: "option2",
                          onchange: "toggleParentClass(this)",
                          id: ""
                        }),
                        createVNode("span", null, "componentDidUpdate")
                      ]),
                      createVNode("label", { class: "answer-item" }, [
                        createVNode("input", {
                          type: "radio",
                          name: "option3",
                          onchange: "toggleParentClass(this)",
                          id: ""
                        }),
                        createVNode("span", null, "componentWillMount")
                      ]),
                      createVNode("label", { class: "answer-item" }, [
                        createVNode("input", {
                          type: "radio",
                          name: "option4",
                          onchange: "toggleParentClass(this)",
                          id: ""
                        }),
                        createVNode("span", null, "componentWillUpdate")
                      ])
                    ]),
                    createVNode("div", { class: "action" }, [
                      createVNode("button", { class: "btn" }, "Prev"),
                      createVNode("button", { class: "btn" }, "Next")
                    ])
                  ]),
                  createVNode("section", { class: "explanation-section" }, [
                    createVNode("h2", { class: "section-title" }, "Explanation"),
                    createVNode("p", { class: "explanation-text" }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ")
                  ]),
                  createVNode("section", { class: "questions-nav-section" }, [
                    createVNode("p", { class: "question-context" }, [
                      createVNode("a", { href: "#" }, [
                        createVNode("span", { class: "question-num" }, "Question 11/20")
                      ]),
                      createVNode("a", { href: "#" }, [
                        createVNode("span", { class: "question-help" }, "Need Help?")
                      ])
                    ]),
                    createVNode("div", { class: "d-flex" }, [
                      createVNode("ul", { class: "question-nums-list" }, [
                        createVNode("li", null, [
                          createVNode("a", {
                            class: "done",
                            href: "#"
                          }, "1")
                        ]),
                        createVNode("li", null, [
                          createVNode("a", {
                            class: "done",
                            href: "#"
                          }, "2")
                        ]),
                        createVNode("li", null, [
                          createVNode("a", {
                            class: "done",
                            href: "#"
                          }, "3")
                        ]),
                        createVNode("li", null, [
                          createVNode("a", {
                            class: "done",
                            href: "#"
                          }, "4")
                        ]),
                        createVNode("li", null, [
                          createVNode("a", {
                            class: "done",
                            href: "#"
                          }, "5")
                        ]),
                        createVNode("li", null, [
                          createVNode("a", {
                            class: "done",
                            href: "#"
                          }, "6")
                        ]),
                        createVNode("li", null, [
                          createVNode("a", {
                            class: "done",
                            href: "#"
                          }, "7")
                        ]),
                        createVNode("li", null, [
                          createVNode("a", {
                            class: "done",
                            href: "#"
                          }, "8")
                        ]),
                        createVNode("li", null, [
                          createVNode("a", {
                            class: "done",
                            href: "#"
                          }, "9")
                        ]),
                        createVNode("li", null, [
                          createVNode("a", {
                            class: "done",
                            href: "#"
                          }, "10")
                        ]),
                        createVNode("li", null, [
                          createVNode("a", {
                            class: "active",
                            href: "#"
                          }, "11")
                        ]),
                        createVNode("li", null, [
                          createVNode("a", { href: "#" }, "12")
                        ]),
                        createVNode("li", null, [
                          createVNode("a", { href: "#" }, "13")
                        ]),
                        createVNode("li", null, [
                          createVNode("a", { href: "#" }, "14")
                        ]),
                        createVNode("li", null, [
                          createVNode("a", { href: "#" }, "15")
                        ]),
                        createVNode("li", null, [
                          createVNode("a", { href: "#" }, "16")
                        ]),
                        createVNode("li", null, [
                          createVNode("a", { href: "#" }, "17")
                        ]),
                        createVNode("li", null, [
                          createVNode("a", { href: "#" }, "18")
                        ]),
                        createVNode("li", null, [
                          createVNode("a", { href: "#" }, "19")
                        ]),
                        createVNode("li", null, [
                          createVNode("a", { href: "#" }, "20")
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Quizzes/SingleQuiz.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SingleQuiz = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-33922923"]]);
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: SingleQuiz
}, Symbol.toStringTag, { value: "Module" }));
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/Home/Index.vue": __vite_glob_0_0, "./Pages/Posts/AddOrUpdate.vue": __vite_glob_0_1, "./Pages/Posts/Index.vue": __vite_glob_0_2, "./Pages/Quizzes/Index.vue": __vite_glob_0_3, "./Pages/Quizzes/SingleQuiz.vue": __vite_glob_0_4 });
      return pages[`./Pages/${name}.vue`];
    },
    setup({ App, props, plugin }) {
      return createSSRApp({
        render: () => h(App, props)
      }).use(plugin);
    }
  })
);
