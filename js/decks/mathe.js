/*
 * Mathematik & Statistik – Aufgabenmodus (keine klassischen Karteikarten).
 * Quelle: Julians Mitschrift „2. Finanzmathematik“ (degressive Abschreibung,
 * Zinseszins, unterjährige und stetige Verzinsung). Alle Ergebnisse nachgerechnet.
 *
 * Aufgabe: { id, q, hint, steps: [...], a, important }
 * Formeln in $...$ (KaTeX). String.raw, damit Backslashes nicht doppelt nötig sind.
 */
const R = String.raw;

window.BUILTIN_FOLDERS.push({
  id: "mathe",
  type: "math",
  name: "Mathematik & Statistik",
  emoji: "🧮",
  color: "#e4572e",
  decks: [
    // ------------------------------------------------------------------
    {
      id: "m-abschreibung",
      name: "2.1.1 Degressive Abschreibung",
      description: "Restwert, Abschreibungssatz und Laufzeit berechnen – $R_n = A \\cdot q^n$",
      cards: [
        {
          id: "ab01",
          q: R`Ein Produkt hat einen Anschaffungswert von $A = 10.000$ €. Es wird jährlich mit $p = 10\,\%$ degressiv abgeschrieben.
Berechne Abschreibung und Restwert für die Jahre 1 bis 3 (Tabelle).`,
          hint: R`Abschreibungsfaktor $q = 1 - \frac{p}{100}$. Abgeschrieben wird immer vom Restwert des Vorjahres.`,
          steps: [
            R`Abschreibungsfaktor: $q = 1 - \frac{10}{100} = 0{,}9$`,
            R`Jahr 1: Abschreibung $10.000 \cdot 0{,}1 = 1.000$ € → $R_1 = 10.000 \cdot 0{,}9 = 9.000$ €`,
            R`Jahr 2: Abschreibung $9.000 \cdot 0{,}1 = 900$ € → $R_2 = 9.000 \cdot 0{,}9 = 8.100$ €`,
            R`Jahr 3: Abschreibung $8.100 \cdot 0{,}1 = 810$ € → $R_3 = 8.100 \cdot 0{,}9 = 7.290$ €`,
            R`⚠️ Achtung: In deiner Mitschrift steht bei Jahr 1 ein Restwert von 8.000 € – richtig ist 9.000 € (10.000 − 1.000).`
          ],
          a: R`$R_1 = 9.000$ €, $R_2 = 8.100$ €, $R_3 = 7.290$ €`
        },
        {
          id: "ab02",
          q: R`Leite die allgemeine Formel für den Restwert $R_n$ nach $n$ Jahren degressiver Abschreibung her.`,
          hint: R`Schreibe $R_1$, $R_2$, $R_3$ hintereinander auf und erkenne das Muster.`,
          steps: [
            R`$R_1 = A \cdot q$`,
            R`$R_2 = R_1 \cdot q = A \cdot q \cdot q = A \cdot q^2$`,
            R`$R_3 = R_2 \cdot q = A \cdot q^2 \cdot q = A \cdot q^3$`,
            R`Muster: Pro Jahr kommt ein Faktor $q$ dazu.`
          ],
          a: R`$R_n = A \cdot q^n = A \cdot \left(1 - \frac{p}{100}\right)^n$`,
          important: true
        },
        {
          id: "ab03",
          q: R`Auf wie viel % seines Anschaffungswertes ist ein Produkt bei $15\,\%$ jährlicher degressiver Abschreibung nach $10$ Jahren abgeschrieben?`,
          hint: R`Gesucht ist $\frac{R_{10}}{A} = q^{10}$. Du brauchst $A$ gar nicht!`,
          steps: [
            R`Gegeben: $n = 10$, $p = 15$ → $q = 1 - \frac{15}{100} = 0{,}85$`,
            R`$R_{10} = A \cdot 0{,}85^{10}$`,
            R`$\frac{R_{10}}{A} = 0{,}85^{10} \approx 0{,}1969$`,
            R`⚠️ In deiner Mitschrift steht 13,68 % – nachrechnen: $0{,}85^{10} = 0{,}1969$, also 19,69 %.`
          ],
          a: R`Der Restwert beträgt ca. $19{,}69\,\%$ des Anschaffungswertes (es wurden also ca. 80,31 % abgeschrieben).`,
          important: true
        },
        {
          id: "ab04",
          q: R`Wie viel % muss jährlich degressiv abgeschrieben werden, damit der Restwert eines Produkts nach $10$ Jahren genau $10\,\%$ des Anschaffungswertes beträgt?`,
          hint: R`Setze $A = 100$ und $R_{10} = 10$ (Verhältnis 10 : 1), löse nach $q$ auf (10. Wurzel).`,
          steps: [
            R`$10 = 100 \cdot q^{10}$ $\quad | :100$`,
            R`$q^{10} = \frac{1}{10}$ $\quad | \sqrt[10]{\ }$`,
            R`$q = \sqrt[10]{0{,}1} \approx 0{,}7943$`,
            R`$q = 1 - \frac{p}{100}$ → $\frac{p}{100} = 1 - 0{,}7943 = 0{,}2057$`
          ],
          a: R`$p \approx 20{,}57\,\%$ pro Jahr`,
          important: true
        },
        {
          id: "ab05",
          q: R`Nach wie vielen Jahren ist ein Produkt mit dem Anschaffungswert $A = 125.000$ € auf einen Restwert von $4.000$ € abgeschrieben, wenn jährlich mit $19{,}5\,\%$ degressiv abgeschrieben wird?`,
          hint: R`$n$ steht im Exponenten → logarithmieren: $\ln(a \cdot b^n) = \ln a + n \cdot \ln b$`,
          steps: [
            R`$q = 1 - \frac{19{,}5}{100} = 0{,}805$`,
            R`$4.000 = 125.000 \cdot 0{,}805^n$ $\quad | :125.000$`,
            R`$0{,}032 = 0{,}805^n$ $\quad | \ln$`,
            R`$\ln(0{,}032) = n \cdot \ln(0{,}805)$`,
            R`$-3{,}442 = n \cdot (-0{,}2169)$ $\quad | :(-0{,}2169)$`,
            R`$n = \frac{-3{,}442}{-0{,}2169} \approx 15{,}87$`,
            R`⚠️ In deiner Mitschrift steht $\ln(0{,}805) = -0{,}088$ – richtig ist $-0{,}2169$. Deshalb kam dort ein anderes $n$ raus.`
          ],
          a: R`$n \approx 15{,}87$ Jahre (also nach knapp 16 Jahren)`,
          important: true
        },
        {
          id: "ab06",
          q: R`Eine Maschine kostet $A = 50.000$ € und wird jährlich mit $20\,\%$ degressiv abgeschrieben. Nach wie vielen vollen Jahren liegt der Restwert erstmals unter $10.000$ €?`,
          hint: R`Gleichung $10.000 = 50.000 \cdot 0{,}8^n$ lösen und auf volle Jahre aufrunden.`,
          steps: [
            R`$q = 1 - \frac{20}{100} = 0{,}8$`,
            R`$10.000 = 50.000 \cdot 0{,}8^n$ → $0{,}2 = 0{,}8^n$`,
            R`$n = \frac{\ln(0{,}2)}{\ln(0{,}8)} = \frac{-1{,}6094}{-0{,}2231} \approx 7{,}21$`,
            R`Nach 7 Jahren: $50.000 \cdot 0{,}8^7 \approx 10.486$ € (noch drüber). Nach 8 Jahren: $\approx 8.389$ €.`
          ],
          a: R`Nach 8 Jahren liegt der Restwert erstmals unter 10.000 € ($n \approx 7{,}21$).`
        },
        {
          id: "ab07",
          q: R`Warum kann ein Produkt bei degressiver Abschreibung nie auf einen Restwert von genau $0$ € abgeschrieben werden? Was passiert, wenn man $0 = A \cdot q^n$ mit dem Logarithmus lösen will?`,
          hint: R`Was ist $\ln(0)$?`,
          steps: [
            R`$q^n$ ist für $0 < q < 1$ immer größer als 0 – es wird nur immer kleiner.`,
            R`Logarithmieren: $\ln(0) = \ln(A) + n \cdot \ln(q)$ – aber $\ln(0)$ ist nicht definiert.`,
            R`Trick aus der Vorlesung: Statt 0 einen sehr kleinen Wert nehmen, z. B. $R_n = 0{,}01$ €.`,
            R`Beispiel $A = 10.000$, $q = 0{,}9$: $n = \frac{\ln(0{,}01) - \ln(10.000)}{\ln(0{,}9)} = \frac{-4{,}605 - 9{,}210}{-0{,}105} \approx 131$ Jahre.`
          ],
          a: R`Bei degressiver Abschreibung nähert sich der Restwert nur der 0 an (Grenzwert), erreicht sie aber nie – $\ln(0)$ existiert nicht.`
        },
        {
          id: "ab08",
          q: R`Ein Produkt wird in drei Phasen degressiv abgeschrieben: Phase 1 $n_1$ Jahre mit $p_1$, Phase 2 $n_2$ Jahre mit $p_2$, Phase 3 $n_3$ Jahre mit $p_3$.
1) Gib eine allgemeine Formel für $R_n$ an.
2) Stelle die Formel nach $n_3$ um.`,
          hint: R`Die Faktoren der einzelnen Phasen werden einfach multipliziert. Zum Umstellen: alles außer der 3. Klammer auf die andere Seite, dann $\ln$.`,
          steps: [
            R`1) $R_n = A \cdot \left(1-\frac{p_1}{100}\right)^{n_1} \cdot \left(1-\frac{p_2}{100}\right)^{n_2} \cdot \left(1-\frac{p_3}{100}\right)^{n_3}$ mit $n = n_1 + n_2 + n_3$`,
            R`2) Durch den bekannten Teil teilen: $\frac{R_n}{A \cdot \left(1-\frac{p_1}{100}\right)^{n_1} \cdot \left(1-\frac{p_2}{100}\right)^{n_2}} = \left(1-\frac{p_3}{100}\right)^{n_3}$`,
            R`$\ln$ anwenden: $\ln\left[\ldots\right] = n_3 \cdot \ln\left(1-\frac{p_3}{100}\right)$`,
            R`Durch $\ln\left(1-\frac{p_3}{100}\right)$ teilen.`
          ],
          a: R`$n_3 = \dfrac{\ln\left(\dfrac{R_n}{A\left(1-\frac{p_1}{100}\right)^{n_1}\left(1-\frac{p_2}{100}\right)^{n_2}}\right)}{\ln\left(1-\frac{p_3}{100}\right)}$`,
          important: true
        },
        {
          id: "ab09",
          q: R`Ein Lkw kostet $80.000$ € und wird mit $25\,\%$ degressiv abgeschrieben. Wie hoch ist der Restwert nach 4 Jahren und wie viel wurde im 4. Jahr abgeschrieben?`,
          hint: R`$R_4 = A \cdot q^4$. Abschreibung im 4. Jahr $= R_3 - R_4$.`,
          steps: [
            R`$q = 0{,}75$`,
            R`$R_3 = 80.000 \cdot 0{,}75^3 = 33.750$ €`,
            R`$R_4 = 80.000 \cdot 0{,}75^4 = 25.312{,}50$ €`,
            R`Abschreibung Jahr 4: $33.750 - 25.312{,}50 = 8.437{,}50$ €`
          ],
          a: R`Restwert $R_4 = 25.312{,}50$ €; Abschreibung im 4. Jahr $= 8.437{,}50$ €`
        }
      ],
      quiz: []
    },
    // ------------------------------------------------------------------
    {
      id: "m-zinseszins",
      name: "2.1.2 Zinseszinsrechnung",
      description: "Endkapital, Laufzeit, Zinssatz und Startkapital – $K_n = K_0 \\cdot q^n$",
      cards: [
        {
          id: "zz01",
          q: R`Ein Startkapital von $K_0 = 1.000$ € wird jährlich mit $10\,\%$ verzinst (Zinseszins). Berechne Zinsen und Endwert für die Jahre 1 bis 3 und leite die allgemeine Formel ab.`,
          hint: R`Verzinsungsfaktor $q = 1 + \frac{p}{100}$`,
          steps: [
            R`$q = 1 + \frac{10}{100} = 1{,}1$`,
            R`Jahr 1: Zinsen 100 € → $K_1 = 1.100$ €`,
            R`Jahr 2: Zinsen 110 € → $K_2 = 1.210$ €`,
            R`Jahr 3: Zinsen 121 € → $K_3 = 1.331$ €`,
            R`Muster: $K_n = K_0 \cdot q^n$`
          ],
          a: R`$K_1 = 1.100$ €, $K_2 = 1.210$ €, $K_3 = 1.331$ €; allgemein $K_n = K_0 \cdot \left(1+\frac{p}{100}\right)^n$`,
          important: true
        },
        {
          id: "zz02",
          q: R`Vergleiche die Formeln der degressiven Abschreibung und der Zinseszinsrechnung. Was ist gleich, was ist anders?`,
          hint: R`Schau auf den Faktor $q$.`,
          steps: [
            R`Degressive Abschreibung: $R_n = A \cdot q^n$ mit $q = 1 - \frac{p}{100}$ (Wert wird kleiner, $q < 1$)`,
            R`Zinseszins: $K_n = K_0 \cdot q^n$ mit $q = 1 + \frac{p}{100}$ (Wert wird größer, $q > 1$)`,
            R`Aufbau und Rechenwege (Umstellen nach $n$, $p$, Startwert) sind identisch.`
          ],
          a: R`Gleiche Struktur $\text{Endwert} = \text{Startwert} \cdot q^n$ – nur $q = 1 - \frac{p}{100}$ (Abschreibung) bzw. $q = 1 + \frac{p}{100}$ (Zinsen).`
        },
        {
          id: "zz03",
          q: R`Nach wie vielen Jahren hat sich ein Startkapital verdoppelt, wenn es jährlich mit $2{,}5\,\%$ verzinst wird?`,
          hint: R`Verdoppeln heißt $K_n = 2 \cdot K_0$ – das $K_0$ kürzt sich weg.`,
          steps: [
            R`$2 \cdot K_0 = K_0 \cdot 1{,}025^n$ $\quad | :K_0$`,
            R`$2 = 1{,}025^n$ $\quad | \ln$`,
            R`$\ln(2) = n \cdot \ln(1{,}025)$`,
            R`$n = \frac{\ln 2}{\ln 1{,}025} = \frac{0{,}6931}{0{,}02469} \approx 28{,}07$`
          ],
          a: R`$n \approx 28{,}07$ Jahre`,
          important: true
        },
        {
          id: "zz04",
          q: R`$K_0 = 125.000$ € wird angelegt:
Phase 1: 4 Jahre mit $2{,}5\,\%$ p. a.
Phase 2: 3 Jahre mit $2{,}75\,\%$ p. a.
Phase 3: 2 Jahre mit $2{,}85\,\%$ p. a.
Wie hoch ist das Endkapital?`,
          hint: R`Die Faktoren der Phasen multiplizieren. Gesamtlaufzeit $4 + 3 + 2 = 9$ Jahre.`,
          steps: [
            R`$K_9 = 125.000 \cdot 1{,}025^4 \cdot 1{,}0275^3 \cdot 1{,}0285^2$`,
            R`$= 125.000 \cdot 1{,}10381 \cdot 1{,}08478 \cdot 1{,}05781$`,
            R`$\approx 158.328{,}67$ €`,
            R`Hinweis: In der Mitschrift steht $K_8$ – es sind aber $4+3+2 = 9$ Jahre, also $K_9$.`
          ],
          a: R`$K_9 \approx 158.328{,}67$ €`,
          important: true
        },
        {
          id: "zz05",
          q: R`Ein Kapital beträgt nach 4 Jahren $K_4 = 82.125{,}16$ € und nach 7 Jahren $K_7 = 88.413{,}43$ €. Berechne den Zinssatz $p$ und das Startkapital $K_0$.`,
          hint: R`Zwischen $K_4$ und $K_7$ liegen 3 Jahre: $K_7 = K_4 \cdot q^3$.`,
          steps: [
            R`$88.413{,}43 = 82.125{,}16 \cdot q^3$ $\quad | :82.125{,}16$`,
            R`$q^3 = \frac{88.413{,}43}{82.125{,}16} \approx 1{,}07657$ $\quad | \sqrt[3]{\ }$`,
            R`$q = \sqrt[3]{1{,}07657} \approx 1{,}0249$ → $p \approx 2{,}49\,\% \approx 2{,}5\,\%$`,
            R`Startkapital: $K_0 = \frac{K_4}{q^4} = \frac{82.125{,}16}{1{,}0249^4} \approx 74.431$ €`,
            R`⚠️ In der Mitschrift steht $q = 1{,}0287$ – nachrechnen: $\sqrt[3]{1{,}0766} = 1{,}0249$.`
          ],
          a: R`$p \approx 2{,}5\,\%$, $K_0 \approx 74.431$ €`,
          important: true
        },
        {
          id: "zz06",
          q: R`Bank 1 und Bank 2: gleiches Startkapital $K_0$, gleiche Laufzeit $n$, aber $p_1 < p_2$.
Wie lange dauert es, bis der Endbetrag der besseren Bank dreimal so groß ist wie der der schlechteren? (allgemeine Formel für $n$)`,
          hint: R`Ansatz: $3 \cdot K_0 \cdot q_1^n = K_0 \cdot q_2^n$ – dann $K_0$ kürzen und logarithmieren.`,
          steps: [
            R`$3 \cdot K_0 \cdot q_1^n = K_0 \cdot q_2^n$ $\quad | :K_0$`,
            R`$3 \cdot q_1^n = q_2^n$ $\quad | \ln$`,
            R`$\ln 3 + n \cdot \ln q_1 = n \cdot \ln q_2$ $\quad | - n \ln q_1$`,
            R`$\ln 3 = n \cdot (\ln q_2 - \ln q_1)$ $\quad | :(\ln q_2 - \ln q_1)$`
          ],
          a: R`$n = \dfrac{\ln 3}{\ln q_2 - \ln q_1}$`,
          important: true
        },
        {
          id: "zz07",
          q: R`Setze Zahlen in die Bank-Formel ein: Bank 1 zahlt $2\,\%$, Bank 2 zahlt $5\,\%$. Nach wie vielen Jahren ist das Guthaben bei Bank 2 dreimal so hoch wie bei Bank 1?`,
          hint: R`$n = \frac{\ln 3}{\ln q_2 - \ln q_1}$ mit $q_1 = 1{,}02$ und $q_2 = 1{,}05$`,
          steps: [
            R`$\ln 3 = 1{,}0986$`,
            R`$\ln 1{,}05 - \ln 1{,}02 = 0{,}04879 - 0{,}01980 = 0{,}02899$`,
            R`$n = \frac{1{,}0986}{0{,}02899} \approx 37{,}9$`
          ],
          a: R`$n \approx 37{,}9$ Jahre`
        },
        {
          id: "zz08",
          q: R`Welches Startkapital muss man heute anlegen, um bei $4\,\%$ Zinsen p. a. nach 5 Jahren $20.000$ € zu haben?`,
          hint: R`Nach $K_0$ umstellen: $K_0 = \frac{K_n}{q^n}$ (Abzinsen)`,
          steps: [
            R`$20.000 = K_0 \cdot 1{,}04^5$`,
            R`$1{,}04^5 \approx 1{,}21665$`,
            R`$K_0 = \frac{20.000}{1{,}21665} \approx 16.438{,}54$ €`
          ],
          a: R`$K_0 \approx 16.438{,}54$ €`
        },
        {
          id: "zz09",
          q: R`$10.000$ € wachsen in 8 Jahren auf $13.685{,}69$ €. Wie hoch war der jährliche Zinssatz?`,
          hint: R`$q = \sqrt[n]{\frac{K_n}{K_0}}$`,
          steps: [
            R`$\frac{K_8}{K_0} = \frac{13.685{,}69}{10.000} = 1{,}368569$`,
            R`$q = \sqrt[8]{1{,}368569} \approx 1{,}04$`,
            R`$p = (q - 1) \cdot 100 = 4$`
          ],
          a: R`$p = 4\,\%$ p. a.`
        }
      ],
      quiz: []
    },
    // ------------------------------------------------------------------
    {
      id: "m-unterjaehrig",
      name: "2.2 Unterjährige & stetige Verzinsung",
      description: "m Verzinsungen pro Jahr, effektiver Jahreszins, stetige Verzinsung mit e",
      cards: [
        {
          id: "uj01",
          q: R`Wie lautet die Formel für unterjährige Verzinsung mit $m$ Verzinsungszeitpunkten pro Jahr? Welche Werte kann $m$ typischerweise annehmen?`,
          hint: R`Der Jahreszins wird auf $m$ Perioden aufgeteilt, dafür gibt es $m \cdot n$ Verzinsungen.`,
          steps: [
            R`Zinssatz pro Periode: $\frac{p}{m}$ → Faktor $1 + \frac{p}{m \cdot 100}$`,
            R`Anzahl der Verzinsungen in $n$ Jahren: $m \cdot n$`,
            R`$m = 1$ jährlich, $2$ halbjährlich, $4$ vierteljährlich, $12$ monatlich, $360$ täglich`,
            R`Beispiel: 3 Jahre vierteljährlich → $4 \cdot 3 = 12$ Verzinsungen: $K_3 = K_0 \cdot \left(1+\frac{p}{4 \cdot 100}\right)^{12}$`
          ],
          a: R`$K_n = K_0 \cdot \left(1 + \frac{p}{m \cdot 100}\right)^{m \cdot n}$`,
          important: true
        },
        {
          id: "uj02",
          q: R`$K_0 = 50.000$ €, $p = 3{,}5\,\%$, $n = 10$ Jahre. Berechne $K_{10}$ bei jährlicher ($m=1$), monatlicher ($m=12$) und täglicher ($m=360$) Verzinsung.`,
          hint: R`$K_{10} = 50.000 \cdot \left(1 + \frac{3{,}5}{m \cdot 100}\right)^{m \cdot 10}$`,
          steps: [
            R`$m = 1$: $50.000 \cdot 1{,}035^{10} \approx 70.529{,}94$ €`,
            R`$m = 12$: $50.000 \cdot \left(1 + \frac{3{,}5}{1200}\right)^{120} \approx 70.917{,}24$ €`,
            R`$m = 360$: $50.000 \cdot \left(1 + \frac{3{,}5}{36000}\right)^{3600} \approx 70.952{,}17$ €`,
            R`Je öfter verzinst wird, desto höher der Endwert – aber der Zuwachs wird immer kleiner.`
          ],
          a: R`70.529,94 € (jährlich) · 70.917,24 € (monatlich) · 70.952,17 € (täglich)`,
          important: true
        },
        {
          id: "uj03",
          q: R`Stelle die Formel der unterjährigen Verzinsung $K_n = K_0 \cdot \left(1 + \frac{p}{m \cdot 100}\right)^{m \cdot n}$ nach $n$ um.`,
          hint: R`Erst durch $K_0$ teilen, dann $\ln$, dann durch $m \cdot \ln(\ldots)$ teilen.`,
          steps: [
            R`$\frac{K_n}{K_0} = \left(1 + \frac{p}{100m}\right)^{m \cdot n}$ $\quad | \ln$`,
            R`$\ln\left(\frac{K_n}{K_0}\right) = m \cdot n \cdot \ln\left(1 + \frac{p}{100m}\right)$`,
            R`$\quad | : m \quad | : \ln\left(1 + \frac{p}{100m}\right)$`
          ],
          a: R`$n = \dfrac{\ln\left(\frac{K_n}{K_0}\right)}{m \cdot \ln\left(1 + \frac{p}{100m}\right)}$`,
          important: true
        },
        {
          id: "uj04",
          q: R`Stelle die Formel der unterjährigen Verzinsung nach $p$ um.`,
          hint: R`Erst durch $K_0$, dann die $(m \cdot n)$-te Wurzel ziehen.`,
          steps: [
            R`$\frac{K_n}{K_0} = q^{m \cdot n}$ $\quad | \sqrt[m \cdot n]{\ }$`,
            R`$1 + \frac{p}{100m} = \sqrt[m \cdot n]{\frac{K_n}{K_0}}$ $\quad | -1$`,
            R`$\frac{p}{100m} = \sqrt[m \cdot n]{\frac{K_n}{K_0}} - 1$ $\quad | \cdot 100m$`
          ],
          a: R`$p = \left(\sqrt[m \cdot n]{\dfrac{K_n}{K_0}} - 1\right) \cdot 100 \cdot m$`,
          important: true
        },
        {
          id: "uj05",
          q: R`$K_0 = 18.500$ € wird angelegt:
Phase 1: 2 Jahre tägliche Verzinsung mit $2\,\%$
Phase 2: 3 Jahre halbjährliche Verzinsung mit $2{,}5\,\%$
Phase 3: 3 Jahre monatliche Verzinsung mit $3\,\%$
Wie hoch ist das Endkapital nach 8 Jahren?`,
          hint: R`Jede Phase mit ihrem eigenen $m$ und $n$ – die Faktoren werden multipliziert.`,
          steps: [
            R`Phase 1: $\left(1+\frac{2}{360 \cdot 100}\right)^{360 \cdot 2}$`,
            R`Phase 2: $\left(1+\frac{2{,}5}{2 \cdot 100}\right)^{2 \cdot 3}$`,
            R`Phase 3: $\left(1+\frac{3}{12 \cdot 100}\right)^{12 \cdot 3}$`,
            R`$K_8 = 18.500 \cdot \left(1+\frac{2}{36000}\right)^{720} \cdot \left(1+\frac{2{,}5}{200}\right)^{6} \cdot \left(1+\frac{3}{1200}\right)^{36}$`
          ],
          a: R`$K_8 \approx 22.696{,}08$ €`,
          important: true
        },
        {
          id: "uj06",
          q: R`Bank 1 verzinst halbjährlich mit $p_1$, Bank 2 monatlich mit $p_2$ (gleiches $K_0$ und $n$, $p_1 < p_2$). Nach wie vielen Jahren hat Bank 2 doppelt so viel Guthaben wie Bank 1? (allgemeine Formel)`,
          hint: R`Ansatz: $2 \cdot K_0\left(1+\frac{p_1}{200}\right)^{2n} = K_0\left(1+\frac{p_2}{1200}\right)^{12n}$`,
          steps: [
            R`$K_0$ kürzen und $\ln$: $\ln 2 + 2n \cdot \ln\left(1+\frac{p_1}{200}\right) = 12n \cdot \ln\left(1+\frac{p_2}{1200}\right)$`,
            R`$n$-Terme auf eine Seite: $\ln 2 = n \cdot \left[12 \ln\left(1+\frac{p_2}{1200}\right) - 2\ln\left(1+\frac{p_1}{200}\right)\right]$`,
            R`Durch die eckige Klammer teilen.`,
            R`Zahlenbeispiel $p_1 = 3\,\%$, $p_2 = 4\,\%$: $n = \frac{0{,}6931}{0{,}03993 - 0{,}02978} \approx 68{,}2$ Jahre`
          ],
          a: R`$n = \dfrac{\ln 2}{12 \cdot \ln\left(1+\frac{p_2}{1200}\right) - 2 \cdot \ln\left(1+\frac{p_1}{200}\right)}$`,
          important: true
        },
        {
          id: "uj07",
          q: R`Was ist der effektive Jahreszins $p^*$? Berechne ihn für $50.000$ € bei täglicher Verzinsung mit $3{,}5\,\%$ über 10 Jahre ($K_{10} = 70.952{,}17$ €).`,
          hint: R`$p^*$ ist der Zinssatz, der bei jährlicher Verzinsung zum selben Endwert führen würde.`,
          steps: [
            R`Der effektive Jahreszins dient zum Vergleich zwischen jährlicher und unterjähriger Verzinsung.`,
            R`Ansatz: $K_0 \cdot \left(1+\frac{p^*}{100}\right)^{10} = 70.952{,}17$`,
            R`$\left(1+\frac{p^*}{100}\right)^{10} = \frac{70.952{,}17}{50.000} = 1{,}41904$`,
            R`$p^* = \left(\sqrt[10]{1{,}41904} - 1\right) \cdot 100 \approx 3{,}56$`,
            R`Kurzformel (ohne $K_0$, $n$): $p^* = \left[\left(1+\frac{p}{100m}\right)^m - 1\right] \cdot 100 = \left[\left(1+\frac{3{,}5}{36000}\right)^{360} - 1\right] \cdot 100$`
          ],
          a: R`$p^* \approx 3{,}56\,\%$ – tägliche Verzinsung mit 3,5 % entspricht 3,56 % bei jährlicher Verzinsung.`,
          important: true
        },
        {
          id: "uj08",
          q: R`Was ist stetige Verzinsung und wie lautet die Formel?`,
          hint: R`Was passiert mit $K_0\left(1+\frac{p}{m \cdot 100}\right)^{m \cdot n}$, wenn $m \to \infty$?`,
          steps: [
            R`Der „theoretisch“ kundenfreundlichste Endwert entsteht, wenn unendlich oft verzinst wird: $m \to \infty$.`,
            R`$K_n = \lim_{m \to \infty} K_0 \cdot \left(1+\frac{p}{m \cdot 100}\right)^{m \cdot n}$`,
            R`Der Grenzwert führt auf die Eulersche Zahl $e \approx 2{,}718$.`
          ],
          a: R`$K_n = K_0 \cdot e^{\frac{n \cdot p}{100}}$`,
          important: true
        },
        {
          id: "uj09",
          q: R`Nach wie vielen Jahren hat sich ein Startkapital bei $p = 10\,\%$ stetiger Verzinsung verzehnfacht?`,
          hint: R`$10 K_0 = K_0 \cdot e^{\frac{10 n}{100}}$ – und $\ln(e^x) = x$.`,
          steps: [
            R`$10 \cdot K_0 = K_0 \cdot e^{0{,}1 n}$ $\quad | :K_0$`,
            R`$10 = e^{0{,}1 n}$ $\quad | \ln$`,
            R`$\ln 10 = 0{,}1 \cdot n$ (weil $\ln e = 1$)`,
            R`$n = \frac{\ln 10}{0{,}1} = \frac{2{,}3026}{0{,}1} \approx 23{,}03$`,
            R`💡 Dein erster Versuch in der Mitschrift ist durchgestrichen – der Fehler war, $\ln(100)$ und $\ln(10)$ für Kapitalwerte einzusetzen. Mit $K_0$ kürzen geht's direkt.`
          ],
          a: R`$n \approx 23{,}03$ Jahre`,
          important: true
        },
        {
          id: "uj10",
          q: R`$10.000$ € werden 10 Jahre lang stetig mit $5\,\%$ verzinst. Wie hoch ist das Endkapital? Wie hoch ist der effektive Jahreszins?`,
          hint: R`$K_n = K_0 \cdot e^{\frac{n p}{100}}$ und $p^* = \left(e^{\frac{p}{100}} - 1\right) \cdot 100$`,
          steps: [
            R`$K_{10} = 10.000 \cdot e^{\frac{10 \cdot 5}{100}} = 10.000 \cdot e^{0{,}5}$`,
            R`$e^{0{,}5} \approx 1{,}64872$ → $K_{10} \approx 16.487{,}21$ €`,
            R`Effektiver Jahreszins: $p^* = (e^{0{,}05} - 1) \cdot 100 \approx 5{,}127\,\%$`
          ],
          a: R`$K_{10} \approx 16.487{,}21$ €, $p^* \approx 5{,}13\,\%$`
        },
        {
          id: "uj11",
          q: R`$5.000$ € werden 4 Jahre lang monatlich mit $3\,\%$ verzinst. Berechne das Endkapital.`,
          hint: R`$m = 12$, $m \cdot n = 48$`,
          steps: [
            R`$K_4 = 5.000 \cdot \left(1+\frac{3}{12 \cdot 100}\right)^{12 \cdot 4}$`,
            R`$= 5.000 \cdot 1{,}0025^{48}$`,
            R`$1{,}0025^{48} \approx 1{,}12733$`
          ],
          a: R`$K_4 \approx 5.636{,}64$ €`
        }
      ],
      quiz: []
    }
  ]
});
