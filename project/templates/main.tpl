{include file='includes/header.tpl' title='Citysens Personenzählung'}
<script>
    $(function (){
        Main.init();
    });
</script>
<div id="map" class="pzmap">

    <div id="mapid"></div>

    <div id="header">
        <div class="content white-background">

            <div class="header-row headline-row">

                <div class="headline">
                    <h1>Besuchertrend<br>Ulmer Innenstadt</h1>
                </div>

                <div class="logos">
                    <div class="logo-row">
                        <div class="logo">
                            <a href="https://ulm.de">
                                <img src="/static/img/logo_ulm.svg" id="logoulm" class="logo-ulm">
                            </a>
                        </div>
                        <div class="logo">
                            <a href="https://www.bmi.bund.de">
                                <img src="/static/img/logo_bmi.svg" class="logo-bmi">
                            </a>
                        </div>
                        <div class="logo">
                            <a href="https://www.ulm.de/leben-in-ulm/digitale-stadt/ulm4clevercity">
                                <img src="/static/img/logo_clevercity.svg" class="logo-clevercity">
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <div id="info">
        <div class="info-content white-background">
            Münsterplatz
        </div>
    </div>

    <div id="footer">
        <div id="footer-content" class="white-background">

            <div class="legend">
                <h2>Erläuterung</h2>
                <div class="square-container">
                    <div class="square greenbg"></div>
                    <div>Alles im grünen Bereich</div>
                </div>
                <div class="square-container">
                    <div class="square yellowbg"></div>
                    <div>Aktuell einige Besucher*innen</div>
                </div>
            </div>

            <div class="disclaimer">
                {*<a href="#" id="overlay-link">Wichtige Hinweise zur Hygiene!</a>*}
            </div>

        </div>
    </div>

</div>

{include file='includes/footer.tpl'}
