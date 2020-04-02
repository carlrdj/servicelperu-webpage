var header = document.getElementById("header")
var footer = document.getElementById("footer")

header.innerHTML = `
        <div class="header-area ">
            <div id="sticky-header" class="main-header-area">
                <div class="container-fluid p-0">
                    <div class="row align-items-center no-gutters">
                        <div class="col-xl-2 col-lg-2">
                            <div class="logo-img">
                                <a href="index.html">
                                    <img src="./assets/img/logo.png" alt="" style=" filter: brightness(0) invert(1); ">
                                </a>
                            </div>
                        </div>
                        <div class="col-xl-8 col-md-8 col-lg-8">
                            <div class="main-menu  d-none d-lg-block text-center">
                                <nav>
                                    <ul id="navigation">
                                        <li class="mx-2"><a class="active" href="index.html">Inicio</a></li>
                                        <li class="mx-2"><a class="active" href="index.html">Categorías</a>
                                        
                                            <ul class="submenu">

                                                <li ><a href="#"><i class="fa fa-laptop"></i>  Laptop</a></li>
                                                <li ><a href="#"><i class="fa fa-tablet"></i>  Tablet</a></li>
                                                <li ><a href="#"><i class="fa fa-desktop"></i>  Desktop</a></li>
                                                <li ><a href="#"><i class="fa fa-television"></i>  Monitor</a></li>
                                                <li ><a href="#"><i class="fa fa-print"></i>  Impresoras</a></li>
                                                <li ><a href="#"><i class="fa fa-headphones"></i>  Auriculares</a></li>
                                                <li ><a href="#"><i class="fa fa-keyboard-o"></i>  Teclados</a></li>
                                                <li ><a href="#"><i class="fa fa-cubes"></i>  Software</a></li>
                                                
                                            </ul>

                                        </li>
                                        <li class="mx-2"><a href="#">Tienda</a></li>
                                        <li class="mx-2"><a href="#">Zona Gamer</a></li>
                                        <li class="mx-2"><a href="#">Noticias</a></li>

                                        <li class="mx-2" ><a href="#">Servicios </a>
                                            <ul class="submenu">

                                                <li ><a href="#">Redes</a>
                                                    <ul class="submenu2 submenu submenuredes">
                                                        <li><a href="redes.html">¿Problemas de conexión?</a></li>
                                                        <li><a href="redes.html">Cableado estructurado</a></li>
                                                        <li><a href="redes.html">Access point</a></li>
                                                        <li><a href="redes.html">Impresoras IP</a></li>
                                                        <li><a href="redes.html">VoIP</a></li>
                                                        <li><a href="redes.html">Servidores</a></li>
                                                        
                                                    </ul>
                                                </li>

                                                <li ><a href="#">Desarrollo</a>
                                                    <ul class="submenu2 submenu ">
                                                        <li><a href="venta.html">Puntos de venta</a></li>
                                                        <li><a href="web.html">Diseño web</a></li>
                                                        <li><a href="web.html">Posicionamiento web</a></li>
                                                        
                                                    </ul>
                                                </li>

                                                <li ><a href="#">Servicio Técnico</a>
                                                    <ul class="submenu2 submenu submenuservicio">
                                                        <p>Optimize y mejore el tiempo de vida de tus equipos de computo</p>
                                                        <!-- <li><a href="portfolio_details.html">Portfolio details</a></li> -->
                                                        <!-- <li><a href="about.html">about</a></li> -->
                                                        <li><a href="tecnico.html">Ir al servicio técnico</a></li> 
                                                        
                                                    </ul>
                                                </li>
                                                
                                            </ul>
                                        </li>

                                        <li class="mx-2"><a href="index.html#nosotros-seccion"  >Nosotros</a></li>
                                        <li class="mx-2"><a href="index.html#contacto-seccion"  >Contacto</a></li>
                                        <li class="mx-2"><a class="active" href="#"><i class="fa fa-search"></i></a>
                                        
                                            <ul class="submenu inputsearch">

                                                <div class="input-group">
                                                    <input type="text" class="form-control" placeholder="Buscar.." aria-label="Buscar.." aria-describedby="button-addon2">
                                                    <div class="input-group-append">
                                                      <button class="btn btn-outline-secondary" type="button" id="button-addon2"><i class="fa fa-search"></i></button>
                                                    </div>
                                                  </div>
                                                <!-- <li ><a href="#"><i class="fa fa-laptop"></i>  Laptop</a></li>
                                                <li ><a href="#"><i class="fa fa-tablet"></i>  Tablet</a></li>
                                                <li ><a href="#"><i class="fa fa-desktop"></i>  Desktop</a></li>
                                                <li ><a href="#"><i class="fa fa-television"></i>  Monitor</a></li>
                                                <li ><a href="#"><i class="fa fa-print"></i>  Impresoras</a></li>
                                                <li ><a href="#"><i class="fa fa-headphones"></i>  Auriculares</a></li>
                                                <li ><a href="#"><i class="fa fa-keyboard-o"></i>  Teclados</a></li>
                                                <li ><a href="#"><i class="fa fa-cubes"></i>  Software</a></li> -->
                                                
                                            </ul>

                                        </li>
                                        <!-- <li><a href="Portfolio.html">Portfolio</a></li> -->
                                        <!-- <li><a href="#">pages <i class="ti-angle-down"></i></a>
                                            <ul class="submenu">
                                                <li><a href="portfolio_details.html">Portfolio details</a></li>
                                                <li><a href="about.html">about</a></li>
                                                <li><a href="elements.html">elements</a></li>
                                            </ul>
                                        </li>

                                        <li><a href="#">blog <i class="ti-angle-down"></i></a>
                                            <ul class="submenu">
                                                <li><a href="blog.html">blog</a></li>
                                                <li><a href="single-blog.html">single-blog</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="contact.html">Contact</a></li> -->
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div class="col-lg-2 d-none d-lg-block">
                            <div class="log_chat_area d-flex align-items-end">
                                <a href="#" data-scroll-nav="0" class="say_hi">Say Hello</a>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="mobile_menu d-block d-lg-none"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    footer.innerHTML = `<div class="footer_top">
    <div class="container">
        <div class="row align-items-center d-flex justify-content-between">
            <div class="col-lg-2 col-md-3">
                <div class="footer_logo wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s">
                    <a href="index.html">
                        <img src="./assets/img/logo.png" alt="" style=" filter: brightness(0) invert(1); " width="100">
                    </a>
                </div>
            </div>
            
            <div class="col-lg-3 col-md-12">
                <div class="socail_links">
                    <ul>
                        <li><a class="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s" href="https://www.facebook.com/servicelperusac" target="_blank"> <i class="fa fa-facebook"></i> </a></li>
                        <li><a class="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s" href="https://twitter.com/servicelperusac" target="_blank"> <i class="fa fa-twitter"></i> </a></li>
                        <li><a class="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s" href="https://www.linkedin.com/company/servicel-peru-sac" target="_blank"> <i class="fa fa-linkedin"></i> </a></li>
                        <li><a class="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s" href="https://plus.google.com/+Servicelperu" target="_blank"> <i class="fa fa-google-plus"></i> </a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>`;

/*
<div class="col-xl-7 col-lg-7 col-md-9">
                <div class="menu_links">
                    <ul>
                        <li><a class="wow fadeInDown" data-wow-duration="1s" data-wow-delay=".2s" href="#">About</a class="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s"></li>
                        <li><a class="wow fadeInDown" data-wow-duration="1s" data-wow-delay=".4s" href="#">Services</a></li>
                        <li><a class="wow fadeInDown" data-wow-duration="1s" data-wow-delay=".6s" href="#">Portfolio</a></li>
                        <li><a class="wow fadeInDown" data-wow-duration="1s" data-wow-delay=".8s" href="#">Pages</a></li>
                        <li><a class="wow fadeInDown" data-wow-duration="1s" data-wow-delay="1s" href="#">Blog</a></li>
                        <li><a class="wow fadeInDown" data-wow-duration="1s" data-wow-delay="1.1s" href="#">Contact</a></li>
                    </ul>
                </div>
            </div>
*/