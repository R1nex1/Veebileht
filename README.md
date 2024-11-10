# Reisiguuru - Veebileht

## Projekti Ülevaade

Reisiguuru on interaktiivne veebileht, mis pakub kasutajatele teavet erinevate riikide kohta. Kasutajad saavad kaardilt valida riigi ja vaadata selle kohta teave. Lisaks on igal riigil oma alaleht, kus on esitatud täiendavad faktid ja külastussoovitused.

## Projekti Struktuur

- **HTML Failid**: 
  - `reisiguuru.html`: Peamine leht, mis sisaldab kaarti ja riikide valikut.
  - `eesti.html`, `lati.html`, `leedu.html`: Eraldi lehed iga riigi kohta, kus on esitatud detailsem teave ja külastussoovitused.

- **CSS Failid**:
  - `reisiguuru.css`: Stiilileht, mis määrab peamise lehe kujunduse.
  - `riikide.css`: Stiilileht, mis määrab riikide alalehtede kujunduse.

- **JavaScript Fail**:
  - `reisiguuru.js`: Skript, mis haldab kaardi interaktiivsust ja riikide teabe kuvamist.

- **JSON Fail**:
  - `info.json`: Andmefail, mis sisaldab riikide teavet, mida kasutatakse JavaScripti skriptis.

## Kuidas Alustada

1. **Kloonige Repositoorium**:
   ```bash
   git clone <repository-url>
   ```

2. **Avage Projekt**:
   Avage projekt oma lemmik koodiredaktoris.

3. **Käivitage Veebileht**:
   Avage `reisiguuru.html` oma veebibrauseris, et näha kaarti ja alustada riikide avastamist.

## Kasutamine

- **Kaardi Kasutamine**: Liigutage hiirt kaardil, et näha riikide nimesid. Klõpsake riigil, et minna vastava riigi alalehele.
- **Alalehed**: Iga riigi alaleht pakub täiendavat teavet ja soovitusi, mida külastada.

## Litsents

See projekt on litsentseeritud MIT litsentsi alusel - vaadake [LICENSE](LICENSE) lisateabe saamiseks.
