# Aava IPTV Windows 0.4.5

Aava kokoaa oman IPTV-palvelusi kanavat, elokuvat ja sarjat samaan sovellukseen.
Mukana ovat haku, ryhmät, suosikit sekä ääni- ja tekstitysvalinnat.

- Sisäinen VLC-toisto; erillistä VLC-asennusta ei tarvita.
- PiP-pienoisikkuna, koko näyttö, toisto/tauko ja kanavanvaihto.
- Videon omat raidat, SRT/VTT-tuonti ja OpenSubtitles-haku omalla API-avaimella.
- Rauhallinen Aava-avaus ja kokonaisina näkyvät kanavalogot.

## Lataaminen ja käynnistäminen

Windows 10 (2004) / Windows 11, **x64**. Tämä on esiversio, joka jaetaan ZIP-pakettina.

1. Lataa `Aava-Windows-0.4.5-standalone.zip` tämän julkaisun liitteistä.
2. Pura ZIP kokonaan omaan kansioon. Säilytä mukana tulevat tiedostot ja alikansiot.
3. Käynnistä `Aava.exe`. Lisää oma Xtream Codes- tai M3U-lähteesi sovellukseen.

Microsoft Edge WebView2 Runtime tarvitaan. Tarvittaessa asenna se
[Microsoftin viralliselta sivulta](https://developer.microsoft.com/en-us/microsoft-edge/webview2/).
Windows-paketilla ei vielä ole julkaisijan Authenticode-allekirjoitusta.
`SHA256SUMS` sisältää ZIP:n tarkistussumman.

Aava on soitin. Se ei sisällä kanavia, elokuvia tai IPTV-tilausta.
Esimerkkikirjasto käyttää Aavan omaa demovideota. Jakelussa ei ole palvelutunnuksia.

## Testit ja tunnetut rajat

17 JavaScript-/selainkoetta, 6 palvelukoetta ja 6 WPF-ikkunakoetta ajetaan ennen julkaisua.
Windowsin näkyvässä sovelluksessa on aiemmin testattu toistoa, ääntä, raitavalintoja,
PiP:tä ja ohjainten palautumista. Kaikkien palveluiden kanavia ja muotoja ei ole testattu.
AirPlay/Chromecast, moninäkymä, profiilit/PIN ja oikea XMLTV-opas eivät vielä kuulu tähän Windows-versioon.

Mac käyttää erillistä macOS-pakettia. Windows-ZIP ei toimi Macissa.
Tuki ja täydet tarkistukset: [Windows/README.md](https://github.com/Siitospastori/Aava-iptv-downloads/blob/main/WINDOWS.md).
