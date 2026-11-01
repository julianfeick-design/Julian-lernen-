/*
 * Lektionen Mathematik (Finanzmathematik) – erst verstehen, dann rechnen.
 * Formeln in $...$ (KaTeX). String.raw, damit Backslashes nicht doppelt nötig sind.
 * Alle Beispielzahlen sind nachgerechnet und bewusst andere als in den Übungsaufgaben.
 * check: o[0] ist immer die richtige Antwort (wird beim Anzeigen gemischt).
 */
(function () {
  window.LESSONS = window.LESSONS || {};
  const R = String.raw;

  Object.assign(window.LESSONS, {
    "mathe/m-abschreibung": {
      title: "Degressive Abschreibung verstehen",
      min: 8,
      goals: [
        "Verstehen, warum degressiv immer **vom Restwert** abgeschrieben wird",
        R`Die Formel $R_n = A \cdot q^n$ mit $q = 1 - \frac{p}{100}$ anwenden`,
        "Restwert-Tabellen aufstellen und Restwerte in % angeben",
        R`Nach $p$ (Wurzel) und nach $n$ (Logarithmus) umstellen`,
        "Mehrphasen-Abschreibungen berechnen"
      ],
      s: [
        { t: "intro", x: "Ein neuer Lkw verliert im **ersten Jahr** am meisten an Wert, später immer weniger. Genau das bildet die **degressive Abschreibung** ab: Jedes Jahr wird **derselbe Prozentsatz** abgeschrieben – aber immer vom **aktuellen Restwert**, nicht vom Anschaffungswert. Darum wird der Abschreibungsbetrag jedes Jahr kleiner." },
        { t: "table", h: "Ein Beispiel durchgerechnet: Lkw für 100.000 €, 20 % pro Jahr", head: ["Jahr", "Wert am Jahresanfang", "Abschreibung (20 %)", "Restwert am Jahresende"], rows: [
          ["1", "100.000 €", "20.000 €", "80.000 €"],
          ["2", "80.000 €", "16.000 €", "64.000 €"],
          ["3", "64.000 €", "12.800 €", "51.200 €"],
          ["4", "51.200 €", "10.240 €", "40.960 €"]
        ], cap: "Die Abschreibung sinkt jedes Jahr (20.000 → 16.000 → 12.800 → 10.240 €), weil 20 % von einem immer **kleineren** Restwert genommen werden. **Linear** wäre es jedes Jahr gleich viel." },
        { t: "formula", h: "Die Formel", tex: R`R_n = A \cdot q^n \qquad \text{mit} \quad q = 1 - \frac{p}{100}`, items: [
          R`$A$ = Anschaffungswert, $R_n$ = Restwert nach $n$ Jahren`,
          R`$p$ = Abschreibungssatz in %, $q$ = **Restwertfaktor** – der Anteil, der jedes Jahr **übrig bleibt**`,
          R`Beispiel: $p = 20\,\%$ → $q = 0{,}8$ → $R_4 = 100.000 \cdot 0{,}8^4 = 40.960$ €`
        ] },
        { t: "merke", h: "Warum „hoch n“?", x: R`Schreibt man 20 % ab, **bleiben 80 % übrig** → jedes Jahr wird der Wert **mit 0,8 malgenommen**. Nach 4 Jahren also $0{,}8 \cdot 0{,}8 \cdot 0{,}8 \cdot 0{,}8 = 0{,}8^4$. Deshalb steht $n$ im **Exponenten**.` },
        { t: "ex", h: "Restwert in % – der Anschaffungswert kürzt sich weg", x: R`Frage: Wie viel % des Anschaffungswerts sind bei 20 % Abschreibung nach 4 Jahren noch übrig?
$\frac{R_4}{A} = q^4 = 0{,}8^4 = 0{,}4096$ → Restwert **40,96 %** (abgeschrieben: 59,04 %).
➜ Du brauchst **keinen** Anschaffungswert. Tipp: Setz zur Not $A = 100$ – dann ist der Restwert direkt in %.` },
        { t: "flow", h: R`Rezept: Abschreibungssatz $p$ gesucht`, steps: [
          [R`Durch $A$ teilen`, R`$\displaystyle \frac{R_n}{A} = q^n$`],
          [R`$n$-te Wurzel ziehen`, R`$\displaystyle q = \sqrt[n]{\frac{R_n}{A}}$`],
          [R`$p$ ausrechnen`, R`$p = (1 - q) \cdot 100$`]
        ], cap: R`Beispiel: Nach 5 Jahren sind noch 32,768 % übrig → $q = \sqrt[5]{0{,}32768} = 0{,}8$ → $p = (1 - 0{,}8) \cdot 100 = 20\,\%$.` },
        { t: "flow", h: R`Rezept: Laufzeit $n$ gesucht ($n$ steht im Exponenten)`, steps: [
          [R`Durch $A$ teilen`, R`$\displaystyle \frac{R_n}{A} = q^n$`],
          [R`$\ln$ auf beiden Seiten`, R`$\displaystyle \ln\frac{R_n}{A} = n \cdot \ln q$`, "Logarithmus-Regel"],
          [R`Durch $\ln q$ teilen`, R`$\displaystyle n = \frac{\ln(R_n / A)}{\ln q}$`]
        ], cap: R`Beide $\ln$-Werte sind **negativ** (weil $\frac{R_n}{A} < 1$ und $q < 1$) → minus durch minus = **plus**. Wird nach dem **ersten vollen Jahr** gefragt, rundest du **auf**.` },
        { t: "merke", h: "Die eine Logarithmus-Regel, die du brauchst", x: R`$\ln(q^n) = n \cdot \ln q$ – der Logarithmus holt den Exponenten **nach vorne**. Nur so bekommst du $n$ aus dem Exponenten heraus.` },
        { t: "ex", h: "Beispiel: Wann ist der Lkw weniger als 20.000 € wert?", x: R`$20.000 = 100.000 \cdot 0{,}8^n$ $\quad | :100.000$
$0{,}2 = 0{,}8^n$ $\quad | \ln$
$\ln 0{,}2 = n \cdot \ln 0{,}8$
$n = \frac{-1{,}6094}{-0{,}2231} \approx 7{,}21$ Jahre
➜ Nach 7 Jahren ist er noch 20.971,52 € wert, nach 8 Jahren 16.777,22 € → **im 8. Jahr** fällt er unter 20.000 €.` },
        { t: "formula", h: "Mehrphasen-Abschreibung", tex: R`R_n = A \cdot q_1^{\,n_1} \cdot q_2^{\,n_2} \cdot q_3^{\,n_3}`, items: [
          R`Jede Phase hat ihren eigenen Faktor $q_i = 1 - \frac{p_i}{100}$ und ihre Dauer $n_i$`,
          "Die Faktoren werden einfach **hintereinander multipliziert**",
          R`Gesucht ist meist die Dauer einer Phase: **alles Bekannte** auf die andere Seite teilen, dann $\ln$`
        ] },
        { t: "ex", h: "Beispiel: zwei Phasen", x: R`Maschine $A = 50.000$ €: 2 Jahre mit 25 %, danach mit 10 %. Wie lange dauert Phase 2, bis der Restwert 15.000 € beträgt?
Nach Phase 1: $50.000 \cdot 0{,}75^2 = 28.125$ €
Phase 2: $15.000 = 28.125 \cdot 0{,}9^{n_2}$ → $n_2 = \frac{\ln(15.000 / 28.125)}{\ln 0{,}9} = \frac{-0{,}6286}{-0{,}1054} \approx 5{,}97$ Jahre
➜ Insgesamt ≈ 7,97 Jahre.` },
        { t: "check", q: R`Wie groß ist der Restwertfaktor $q$ bei $p = 25\,\%$?`, o: ["0,75", "1,25", "0,25", "25"], why: R`$q = 1 - \frac{25}{100} = 0{,}75$ – es **bleiben** 75 % übrig.` },
        { t: "check", q: R`$A = 10.000$ €, $p = 10\,\%$ degressiv. Wie hoch ist der Restwert $R_2$?`, o: ["8.100 €", "8.000 €", "9.000 €", "1.900 €"], why: R`$10.000 \cdot 0{,}9^2 = 8.100$ €. 8.000 € wäre **linear** (2 × 1.000 € vom Anschaffungswert).` },
        { t: "check", q: R`Mit welchem Schritt holst du $n$ aus dem Exponenten?`, o: [R`$\ln$ auf beiden Seiten`, R`die $n$-te Wurzel ziehen`, R`durch $q$ teilen`, "beide Seiten quadrieren"], why: R`Mit $\ln(q^n) = n \cdot \ln q$ kommt $n$ nach vorne. Die Wurzel brauchst du, wenn $p$ gesucht ist.` },
        { t: "check", q: "Warum sinkt der Abschreibungsbetrag jedes Jahr?", o: ["Er wird vom kleineren Restwert berechnet", "Der Prozentsatz sinkt jedes Jahr", "Die Maschine wird weniger genutzt", "Der Anschaffungswert wird kleiner"], why: "Der **Prozentsatz bleibt gleich** – aber er wird jedes Jahr vom **gesunkenen Restwert** genommen." }
      ]
    },

    "mathe/m-zinseszins": {
      title: "Zinseszins: Geld wächst exponentiell",
      min: 8,
      goals: [
        "Einfache Verzinsung und Zinseszins unterscheiden",
        R`$K_n = K_0 \cdot q^n$ mit $q = 1 + \frac{p}{100}$ anwenden`,
        R`Abzinsen: $K_0$ aus $K_n$ berechnen`,
        R`Nach $p$ (Wurzel) und nach $n$ (Logarithmus) umstellen`,
        "Mehrphasen-Aufgaben und Bankvergleiche lösen"
      ],
      s: [
        { t: "intro", x: R`Beim Zinseszins bekommst du Zinsen **auf deine Zinsen**. Deshalb wächst Geld nicht gleichmäßig, sondern immer schneller – **exponentiell**. Das Gute: Es ist **genau dieselbe Mathematik** wie bei der degressiven Abschreibung – nur mit $q > 1$ statt $q < 1$.` },
        { t: "table", h: "Einfache Verzinsung vs. Zinseszins (10.000 € zu 10 %)", head: ["Jahr", "Einfach: Zinsen nur aufs Startkapital", "Zinseszins: Zinsen auch auf Zinsen"], rows: [
          ["0", "10.000 €", "10.000 €"],
          ["1", "11.000 €", "11.000 €"],
          ["2", "12.000 €", "12.100 €"],
          ["3", "13.000 €", "13.310 €"],
          ["10", "20.000 €", "**25.937,42 €**"]
        ], cap: "Im 2. Jahr gibt es beim Zinseszins 10 % auf **11.000 €** (= 1.100 €) – nicht nur auf 10.000 €. Der Unterschied wird jedes Jahr größer." },
        { t: "formula", h: "Die Zinseszinsformel", tex: R`K_n = K_0 \cdot q^n \qquad \text{mit} \quad q = 1 + \frac{p}{100}`, items: [
          R`$K_0$ = Startkapital, $K_n$ = Endkapital nach $n$ Jahren`,
          R`$q$ = **Zinsfaktor**: bei 4 % ist $q = 1{,}04$`,
          R`Vergleich: Abschreibung $q = 1 - \frac{p}{100}$ (schrumpft) · Zins $q = 1 + \frac{p}{100}$ (wächst)`
        ] },
        { t: "table", h: "Vier Größen – vier Umstellungen", head: ["Gesucht", "Formel", "Rechenweg"], rows: [
          [R`$K_n$ (aufzinsen)`, R`$K_n = K_0 \cdot q^n$`, "einsetzen"],
          [R`$K_0$ (abzinsen)`, R`$\displaystyle K_0 = \frac{K_n}{q^n}$`, R`durch $q^n$ teilen`],
          [R`$p$`, R`$\displaystyle p = \left(\sqrt[n]{\frac{K_n}{K_0}} - 1\right) \cdot 100$`, R`durch $K_0$ teilen → $n$-te Wurzel → minus 1 → mal 100`],
          [R`$n$`, R`$\displaystyle n = \frac{\ln(K_n / K_0)}{\ln q}$`, R`durch $K_0$ teilen → $\ln$ → durch $\ln q$ teilen`]
        ] },
        { t: "ex", h: "Beispiel: Wann hat sich das Kapital bei 5 % verdoppelt?", x: R`$2 K_0 = K_0 \cdot 1{,}05^n$ $\quad | :K_0$ – das Startkapital **kürzt sich weg**!
$2 = 1{,}05^n$ $\quad | \ln$
$n = \frac{\ln 2}{\ln 1{,}05} = \frac{0{,}6931}{0{,}04879} \approx 14{,}21$ Jahre` },
        { t: "ex", h: "Beispiel: Abzinsen", x: R`Du willst in 5 Jahren 10.000 € haben, der Zins beträgt 3 %. Wie viel musst du heute anlegen?
$K_0 = \frac{10.000}{1{,}03^5} = \frac{10.000}{1{,}159274} \approx 8.626{,}09$ €` },
        { t: "merke", h: "Profi-Tipp: die 72er-Regel zum Überprüfen", x: R`Ein Kapital verdoppelt sich ungefähr nach $\frac{72}{p}$ Jahren. Bei 4 % also nach ≈ 18 Jahren (exakt: 17,67). Damit prüfst du in der Klausur in Sekunden, ob dein Ergebnis **plausibel** ist. (Nur zur Kontrolle – rechnen musst du mit $\ln$.)` },
        { t: "formula", h: "Mehrphasen-Verzinsung", tex: R`K_n = K_0 \cdot q_1^{\,n_1} \cdot q_2^{\,n_2} \cdot q_3^{\,n_3}`, items: [
          "Wie bei der Abschreibung: Faktoren **hintereinander multiplizieren**",
          R`Beispiel: 10.000 € erst 2 Jahre zu 2 %, dann 3 Jahre zu 3 %: $10.000 \cdot 1{,}02^2 \cdot 1{,}03^3 \approx 11.368{,}73$ €`
        ] },
        { t: "text", h: "Bankvergleich – der Trick mit dem ln", x: R`Frage: Wann ist das Guthaben bei Bank 2 **doppelt so hoch** wie bei Bank 1?
Ansatz: $2 \cdot K_0 \cdot q_1^n = K_0 \cdot q_2^n$ → $K_0$ kürzen → $\ln$ auf beiden Seiten:
$\ln 2 + n \cdot \ln q_1 = n \cdot \ln q_2$ → $n = \frac{\ln 2}{\ln q_2 - \ln q_1}$
**Merke:** Beim $\ln$ wird aus „mal“ ein „plus“: $\ln(a \cdot b) = \ln a + \ln b$.` },
        { t: "check", q: R`Wie groß ist der Zinsfaktor $q$ bei $p = 2{,}5\,\%$?`, o: ["1,025", "0,975", "1,25", "2,5"], why: R`$q = 1 + \frac{2{,}5}{100} = 1{,}025$.` },
        { t: "check", q: "5.000 € werden 2 Jahre mit 10 % verzinst (Zinseszins). Wie hoch ist das Endkapital?", o: ["6.050 €", "6.000 €", "5.500 €", "6.100 €"], why: R`$5.000 \cdot 1{,}1^2 = 5.000 \cdot 1{,}21 = 6.050$ €. 6.000 € wäre einfache Verzinsung.` },
        { t: "check", q: R`Gesucht ist der Zinssatz $p$. Was kommt nach dem Teilen durch $K_0$?`, o: [R`die $n$-te Wurzel ziehen`, R`$\ln$ anwenden`, R`mit $q^n$ multiplizieren`, "durch 100 teilen"], why: R`$q = \sqrt[n]{\frac{K_n}{K_0}}$, danach $p = (q - 1) \cdot 100$. Den $\ln$ brauchst du, wenn $n$ gesucht ist.` },
        { t: "check", q: "„Wann hat sich das Kapital verdreifacht?“ – Was passiert mit dem Startkapital?", o: ["Es kürzt sich weg", "Man muss es schätzen", "Man setzt 1.000 € ein", R`Ohne $K_0$ geht es nicht`], why: R`$3 K_0 = K_0 \cdot q^n$ → durch $K_0$ teilen → $3 = q^n$. Das Startkapital spielt **keine Rolle**.` }
      ]
    },

    "mathe/m-unterjaehrig": {
      title: "Unterjährige & stetige Verzinsung, effektiver Jahreszins",
      min: 9,
      goals: [
        R`Verstehen, was $m$ bedeutet und warum häufigeres Verzinsen mehr bringt`,
        R`$K_n = K_0 \left(1 + \frac{p}{100 m}\right)^{m n}$ anwenden und umstellen`,
        R`Den effektiven Jahreszins $p^*$ berechnen und Angebote vergleichen`,
        R`Stetig verzinsen mit $e$ und $\ln$`
      ],
      s: [
        { t: "intro", x: "Bisher gab es Zinsen **einmal pro Jahr**. Viele Banken verzinsen aber **monatlich** oder **vierteljährlich**: Dann gibt es jeden Monat ein Zwölftel des Zinses – und ab dem nächsten Monat Zinsen auf diese Zinsen. Folge: Am Jahresende hast du **etwas mehr**, als der Nominalzins verspricht." },
        { t: "table", h: "Was bedeutet m? (Beispiel: 12 % nominal)", head: ["Verzinsung", "m", "Zins pro Periode", "Perioden in n Jahren"], rows: [
          ["jährlich", "1", "12 %", R`$n$`],
          ["halbjährlich", "2", "6 %", R`$2n$`],
          ["vierteljährlich", "4", "3 %", R`$4n$`],
          ["monatlich", "12", "1 %", R`$12n$`],
          ["täglich", "360", "≈ 0,0333 %", R`$360n$`]
        ], cap: R`**Zwei Änderungen** gegenüber der normalen Formel: Der Zins wird durch $m$ **geteilt**, die Anzahl der Perioden mit $m$ **multipliziert**.` },
        { t: "formula", h: "Die Formel der unterjährigen Verzinsung", tex: R`K_n = K_0 \cdot \left(1 + \frac{p}{100 \cdot m}\right)^{m \cdot n}`, items: [
          R`$m$ = Verzinsungen pro Jahr (2, 4, 12 oder 360)`,
          R`$\frac{p}{m}$ = Zinssatz **pro Periode**, $m \cdot n$ = **Anzahl** der Perioden`,
          R`Für $m = 1$ ist das wieder die normale Zinseszinsformel`
        ] },
        { t: "table", h: "Beispiel: 10.000 € zu 8 % für 1 Jahr", head: ["Verzinsung", "Rechnung", "Endkapital"], rows: [
          ["jährlich", R`$10.000 \cdot 1{,}08$`, "10.800,00 €"],
          ["vierteljährlich", R`$10.000 \cdot 1{,}02^4$`, "10.824,32 €"],
          ["monatlich", R`$10.000 \cdot \left(1 + \frac{8}{1200}\right)^{12}$`, "10.830,00 €"],
          ["stetig", R`$10.000 \cdot e^{0{,}08}$`, "10.832,87 €"]
        ], cap: "Je öfter verzinst wird, desto mehr – aber der Zuwachs wird immer kleiner. Die Obergrenze ist die **stetige** Verzinsung." },
        { t: "merke", h: "Effektiver Jahreszins", x: R`Der **effektive Jahreszins** $p^*$ beantwortet: Welcher **jährliche** Zins würde dasselbe bringen? Im Beispiel bringen 8 % mit monatlicher Verzinsung so viel wie **8,30 %** jährlich. Damit kannst du Angebote mit unterschiedlichem $m$ **fair vergleichen**.` },
        { t: "formula", h: "Effektiven Jahreszins berechnen", tex: R`p^* = \left[\left(1 + \frac{p}{100 \cdot m}\right)^{m} - 1\right] \cdot 100`, items: [
          R`Beispiel: 8 % monatlich → $\left(1 + \frac{8}{1200}\right)^{12} \approx 1{,}0830$ → $p^* \approx 8{,}30\,\%$`,
          R`Immer gilt: $p^* \geq p$ (gleich nur bei $m = 1$)`
        ] },
        { t: "flow", h: R`Rezept: Laufzeit $n$ gesucht`, steps: [
          [R`Durch $K_0$ teilen`, R`$\displaystyle \frac{K_n}{K_0} = \left(1+\frac{p}{100m}\right)^{mn}$`],
          [R`$\ln$ anwenden`, R`$\displaystyle \ln\frac{K_n}{K_0} = m \cdot n \cdot \ln\left(1+\frac{p}{100m}\right)$`],
          [R`Durch $m \cdot \ln(\ldots)$ teilen`, R`$\displaystyle n = \frac{\ln(K_n / K_0)}{m \cdot \ln\left(1+\frac{p}{100m}\right)}$`]
        ], cap: R`Beispiel: 10.000 € → 12.000 € bei 6 % monatlich: $n = \frac{\ln 1{,}2}{12 \cdot \ln 1{,}005} \approx 3{,}05$ Jahre.` },
        { t: "flow", h: R`Rezept: Zinssatz $p$ gesucht`, steps: [
          [R`Durch $K_0$ teilen`, R`$\displaystyle \frac{K_n}{K_0} = \left(1+\frac{p}{100m}\right)^{mn}$`],
          [R`$(m \cdot n)$-te Wurzel ziehen`, R`$\displaystyle 1 + \frac{p}{100m} = \sqrt[mn]{\frac{K_n}{K_0}}$`],
          [R`Nach $p$ auflösen`, R`$\displaystyle p = \left(\sqrt[mn]{\frac{K_n}{K_0}} - 1\right) \cdot 100 \cdot m$`]
        ], cap: R`Beispiel: 10.000 € → 11.000 € in 4 Jahren bei vierteljährlicher Verzinsung ($m \cdot n = 16$): $p = \left(\sqrt[16]{1{,}1} - 1\right) \cdot 400 \approx 2{,}39\,\%$.` },
        { t: "text", h: "Stetige Verzinsung – unendlich oft verzinsen", x: R`Lässt man $m$ immer größer werden (jede Stunde, jede Sekunde …), nähert sich der Wachstumsfaktor der **Eulerschen Zahl** $e \approx 2{,}71828$. Daraus wird die Formel der **stetigen Verzinsung**. Das Schöne: Umstellen ist hier **leichter**, weil der $\ln$ das $e$ einfach aufhebt: $\ln(e^x) = x$.` },
        { t: "formula", h: "Stetige Verzinsung", tex: R`\begin{aligned} K_n &= K_0 \cdot e^{\frac{p \cdot n}{100}} \\[6pt] p^* &= \left(e^{\frac{p}{100}} - 1\right) \cdot 100 \end{aligned}`, items: [
          R`Verdopplung bei 5 % stetig: $2 = e^{0{,}05 n}$ → $\ln 2 = 0{,}05 n$ → $n = \frac{\ln 2}{0{,}05} \approx 13{,}86$ Jahre`,
          R`Effektivzins bei 8 % stetig: $p^* = (e^{0{,}08} - 1) \cdot 100 \approx 8{,}33\,\%$`
        ] },
        { t: "table", h: "Welche Formel wann?", head: ["Stichwort in der Aufgabe", "Formel"], rows: [
          ["„jährlich“ oder keine Angabe", R`$K_n = K_0 \cdot q^n$`],
          ["„halbjährlich, vierteljährlich, monatlich, täglich“", R`$K_n = K_0 \left(1+\frac{p}{100m}\right)^{mn}$`],
          ["„stetig“", R`$K_n = K_0 \cdot e^{\frac{pn}{100}}$`],
          ["„effektiv“ oder „Angebote vergleichen“", R`$p^*$ berechnen`]
        ] },
        { t: "check", q: "Vierteljährliche Verzinsung mit 4 % über 3 Jahre: Wie groß ist der Exponent?", o: ["12", "3", "4", "0,75"], why: R`$m \cdot n = 4 \cdot 3 = 12$ Perioden zu je $\frac{4}{4} = 1\,\%$.` },
        { t: "check", q: "Monatliche Verzinsung mit 6 % – wie hoch ist der Zins **pro Monat**?", o: ["0,5 %", "6 %", "0,6 %", "72 %"], why: R`$\frac{6\,\%}{12} = 0{,}5\,\%$ pro Monat.` },
        { t: "check", q: R`Der effektive Jahreszins $p^*$ ist bei monatlicher Verzinsung …`, o: ["etwas höher als der Nominalzins", "genauso hoch wie der Nominalzins", "etwas niedriger als der Nominalzins", "zwölfmal so hoch wie der Nominalzins"], why: R`Durch den Zinseszins **innerhalb** des Jahres ist $p^*$ etwas höher – z. B. 8 % monatlich → 8,30 % effektiv.` },
        { t: "check", q: R`Wie löst du $3 = e^{0{,}04 n}$ nach $n$ auf?`, o: [R`$n = \frac{\ln 3}{0{,}04}$`, R`$n = \frac{3}{\ln 0{,}04}$`, R`$n = \sqrt[0{,}04]{3}$`, R`$n = 3 \cdot 0{,}04$`], why: R`$\ln$ anwenden: $\ln 3 = 0{,}04 n$ → $n = \frac{\ln 3}{0{,}04} \approx 27{,}47$ Jahre.` }
      ]
    }
  });
})();
