/*
 * Mathematik & Statistik – Aufgabenmodus (keine klassischen Karteikarten).
 * NEUE Übungsaufgaben mit eigenen Zahlen – gleiche Aufgabentypen wie in Julians
 * Mitschrift „2. Finanzmathematik“, aber nicht dieselben Aufgaben. Alle Ergebnisse nachgerechnet.
 *
 * Aufgabe: { id, q, hint, steps: [...], a, important }
 * Formeln in $...$ (KaTeX). String.raw, damit Backslashes nicht doppelt nötig sind.
 */
(function () {
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
        description: "Neue Übungsaufgaben: Restwert, Abschreibungssatz, Laufzeit, Mehrphasen",
        cards: [
          {
            id: "na01",
            q: R`Typ: Restwerttabelle
Ein Gabelstapler kostet $A = 24.000$ € und wird jährlich mit $15\,\%$ degressiv abgeschrieben. Erstelle die Tabelle (Abschreibung und Restwert) für die Jahre 1 bis 3.`,
            hint: R`$q = 1 - \frac{p}{100}$. Abgeschrieben wird immer vom Restwert des Vorjahres.`,
            steps: [
              R`$q = 1 - \frac{15}{100} = 0{,}85$`,
              R`Jahr 1: Abschreibung $24.000 \cdot 0{,}15 = 3.600$ € → $R_1 = 24.000 \cdot 0{,}85 = 20.400$ €`,
              R`Jahr 2: Abschreibung $20.400 \cdot 0{,}15 = 3.060$ € → $R_2 = 17.340$ €`,
              R`Jahr 3: Abschreibung $17.340 \cdot 0{,}15 = 2.601$ € → $R_3 = 14.739$ €`,
              R`Kontrolle mit Formel: $R_3 = 24.000 \cdot 0{,}85^3 = 14.739$ €`
            ],
            a: R`$R_1 = 20.400$ €, $R_2 = 17.340$ €, $R_3 = 14.739$ €`
          },
          {
            id: "na02",
            q: R`Typ: Restwert in % des Anschaffungswertes
Auf wie viel % seines Anschaffungswertes ist ein Produkt bei $12\,\%$ jährlicher degressiver Abschreibung nach $8$ Jahren abgeschrieben?`,
            hint: R`Gesucht ist $\frac{R_8}{A} = q^8$ – der Anschaffungswert kürzt sich weg.`,
            steps: [
              R`$q = 1 - \frac{12}{100} = 0{,}88$`,
              R`$\frac{R_8}{A} = 0{,}88^8$`,
              R`$0{,}88^8 \approx 0{,}3596$`
            ],
            a: R`Restwert ≈ $35{,}96\,\%$ des Anschaffungswertes (abgeschrieben wurden ≈ 64,04 %)`,
            important: true
          },
          {
            id: "na03",
            q: R`Typ: Abschreibungssatz $p$ gesucht
Wie viel % muss jährlich degressiv abgeschrieben werden, damit der Restwert nach $6$ Jahren nur noch $25\,\%$ des Anschaffungswertes beträgt?`,
            hint: R`Setze $A = 100$ und $R_6 = 25$, dann die 6. Wurzel ziehen.`,
            steps: [
              R`$25 = 100 \cdot q^6$ $\quad | :100$`,
              R`$q^6 = 0{,}25$ $\quad | \sqrt[6]{\ }$`,
              R`$q = \sqrt[6]{0{,}25} \approx 0{,}7937$`,
              R`$\frac{p}{100} = 1 - 0{,}7937 = 0{,}2063$`
            ],
            a: R`$p \approx 20{,}63\,\%$ pro Jahr`,
            important: true
          },
          {
            id: "na04",
            q: R`Typ: Laufzeit $n$ gesucht
Nach wie vielen Jahren ist eine Verpackungsanlage mit $A = 60.000$ € auf einen Restwert von $5.000$ € abgeschrieben, wenn jährlich mit $22\,\%$ degressiv abgeschrieben wird?`,
            hint: R`$n$ im Exponenten → durch $A$ teilen, dann $\ln$ auf beiden Seiten.`,
            steps: [
              R`$q = 1 - \frac{22}{100} = 0{,}78$`,
              R`$5.000 = 60.000 \cdot 0{,}78^n$ $\quad | :60.000$`,
              R`$0{,}08\overline{3} = 0{,}78^n$ $\quad | \ln$`,
              R`$\ln(0{,}08\overline{3}) = n \cdot \ln(0{,}78)$`,
              R`$-2{,}4849 = n \cdot (-0{,}2485)$`,
              R`$n = \frac{-2{,}4849}{-0{,}2485} \approx 10{,}0$`
            ],
            a: R`$n \approx 10$ Jahre`,
            important: true
          },
          {
            id: "na05",
            q: R`Typ: Erstes volles Jahr unter einer Grenze
Ein Transporter kostet $36.000$ € und wird jährlich mit $30\,\%$ degressiv abgeschrieben. In welchem Jahr fällt der Restwert erstmals unter $5.000$ €?`,
            hint: R`Erst $n$ ausrechnen, dann prüfen, welche volle Jahreszahl die Bedingung erfüllt.`,
            steps: [
              R`$q = 0{,}7$`,
              R`$5.000 = 36.000 \cdot 0{,}7^n$ → $n = \frac{\ln(5.000/36.000)}{\ln 0{,}7} \approx 5{,}53$`,
              R`Kontrolle: $R_5 = 36.000 \cdot 0{,}7^5 \approx 6.050{,}52$ € (noch drüber)`,
              R`$R_6 = 36.000 \cdot 0{,}7^6 \approx 4.235{,}36$ € (drunter)`
            ],
            a: R`Im 6. Jahr (am Ende von Jahr 6: $R_6 \approx 4.235{,}36$ €)`
          },
          {
            id: "na06",
            q: R`Typ: Abschreibungsbetrag in einem bestimmten Jahr
Eine Maschine kostet $45.000$ € und wird mit $18\,\%$ degressiv abgeschrieben. Wie hoch ist der Abschreibungsbetrag im 3. Jahr?`,
            hint: R`Abschreibung im Jahr 3 $= R_2 \cdot \frac{p}{100}$ (oder $R_2 - R_3$).`,
            steps: [
              R`$q = 0{,}82$`,
              R`$R_2 = 45.000 \cdot 0{,}82^2 = 30.258$ €`,
              R`Abschreibung Jahr 3 $= 30.258 \cdot 0{,}18 = 5.446{,}44$ €`,
              R`Kontrolle: $R_3 = 45.000 \cdot 0{,}82^3 = 24.811{,}56$ € → $30.258 - 24.811{,}56 = 5.446{,}44$ €`
            ],
            a: R`$5.446{,}44$ €`
          },
          {
            id: "na07",
            q: R`Typ: Mehrphasen-Abschreibung (mit Zahlen)
Ein Kran kostet $A = 200.000$ €. Er wird 3 Jahre mit $30\,\%$, danach 2 Jahre mit $20\,\%$ und danach mit $10\,\%$ degressiv abgeschrieben. Wie viele Jahre dauert Phase 3, bis der Restwert $30.000$ € beträgt?`,
            hint: R`Erst den Restwert nach Phase 1 und 2 ausrechnen – das ist der „Startwert“ für Phase 3.`,
            steps: [
              R`Nach Phase 1 und 2: $R_5 = 200.000 \cdot 0{,}7^3 \cdot 0{,}8^2 = 43.904$ €`,
              R`Phase 3: $30.000 = 43.904 \cdot 0{,}9^{n_3}$ $\quad | :43.904$`,
              R`$0{,}6833 = 0{,}9^{n_3}$ $\quad | \ln$`,
              R`$n_3 = \frac{\ln(0{,}6833)}{\ln(0{,}9)} = \frac{-0{,}3808}{-0{,}1054} \approx 3{,}61$`,
              R`Gesamtlaufzeit: $3 + 2 + 3{,}61 = 8{,}61$ Jahre`
            ],
            a: R`$n_3 \approx 3{,}61$ Jahre (insgesamt ≈ 8,61 Jahre)`,
            important: true
          },
          {
            id: "na08",
            q: R`Typ: Mehrphasen-Formel umstellen
Ein Gut wird in drei Phasen degressiv abgeschrieben ($n_1$ mit $p_1$, $n_2$ mit $p_2$, $n_3$ mit $p_3$).
Stelle die allgemeine Formel für $R_n$ nach $n_2$ (die mittlere Phase!) um.`,
            hint: R`Diesmal musst du durch zwei bekannte Teile teilen: Phase 1 UND Phase 3.`,
            steps: [
              R`$R_n = A \cdot \left(1-\frac{p_1}{100}\right)^{n_1} \cdot \left(1-\frac{p_2}{100}\right)^{n_2} \cdot \left(1-\frac{p_3}{100}\right)^{n_3}$`,
              R`Durch alles Bekannte teilen: $\frac{R_n}{A \cdot \left(1-\frac{p_1}{100}\right)^{n_1} \cdot \left(1-\frac{p_3}{100}\right)^{n_3}} = \left(1-\frac{p_2}{100}\right)^{n_2}$`,
              R`$\ln$ anwenden: $\ln\left[\ldots\right] = n_2 \cdot \ln\left(1-\frac{p_2}{100}\right)$`,
              R`Durch $\ln\left(1-\frac{p_2}{100}\right)$ teilen.`
            ],
            a: R`$n_2 = \dfrac{\ln\left(\dfrac{R_n}{A\left(1-\frac{p_1}{100}\right)^{n_1}\left(1-\frac{p_3}{100}\right)^{n_3}}\right)}{\ln\left(1-\frac{p_2}{100}\right)}$`,
            important: true
          }
        ],
        quiz: []
      },
      // ------------------------------------------------------------------
      {
        id: "m-zinseszins",
        name: "2.1.2 Zinseszinsrechnung",
        description: "Neue Übungsaufgaben: Endkapital, Laufzeit, Zinssatz, Startkapital, Bankvergleich",
        cards: [
          {
            id: "nz01",
            q: R`Typ: Laufzeit bis Vervielfachung
Nach wie vielen Jahren hat sich ein Kapital bei $4\,\%$ Zinsen p. a. verdreifacht?`,
            hint: R`$3 K_0 = K_0 \cdot q^n$ – $K_0$ kürzen, dann $\ln$.`,
            steps: [
              R`$3 = 1{,}04^n$ $\quad | \ln$`,
              R`$\ln 3 = n \cdot \ln 1{,}04$`,
              R`$n = \frac{1{,}0986}{0{,}03922} \approx 28{,}01$`
            ],
            a: R`$n \approx 28{,}01$ Jahre`,
            important: true
          },
          {
            id: "nz02",
            q: R`Typ: Mehrphasen-Verzinsung
$K_0 = 40.000$ € werden angelegt: 3 Jahre zu $1{,}8\,\%$, dann 4 Jahre zu $2{,}2\,\%$, dann 3 Jahre zu $3\,\%$. Wie hoch ist das Endkapital?`,
            hint: R`Faktoren der Phasen multiplizieren; Gesamtlaufzeit $3+4+3 = 10$ Jahre.`,
            steps: [
              R`$K_{10} = 40.000 \cdot 1{,}018^3 \cdot 1{,}022^4 \cdot 1{,}03^3$`,
              R`$= 40.000 \cdot 1{,}05498 \cdot 1{,}09095 \cdot 1{,}09273$`,
              R`$\approx 50.305{,}86$ €`
            ],
            a: R`$K_{10} \approx 50.305{,}86$ €`,
            important: true
          },
          {
            id: "nz03",
            q: R`Typ: Zinssatz und Startkapital aus zwei Kontoständen
Ein Konto zeigt nach 3 Jahren $K_3 = 21.854{,}54$ € und nach 8 Jahren $K_8 = 25.335{,}40$ €. Berechne $p$ und $K_0$.`,
            hint: R`Zwischen Jahr 3 und 8 liegen 5 Jahre: $K_8 = K_3 \cdot q^5$.`,
            steps: [
              R`$q^5 = \frac{25.335{,}40}{21.854{,}54} \approx 1{,}15927$`,
              R`$q = \sqrt[5]{1{,}15927} \approx 1{,}03$ → $p = 3\,\%$`,
              R`$K_0 = \frac{K_3}{q^3} = \frac{21.854{,}54}{1{,}03^3} = \frac{21.854{,}54}{1{,}092727}$`
            ],
            a: R`$p = 3\,\%$, $K_0 = 20.000$ €`,
            important: true
          },
          {
            id: "nz04",
            q: R`Typ: Bankvergleich (Vielfaches)
Bank 1 zahlt $1{,}5\,\%$, Bank 2 zahlt $4{,}5\,\%$ (gleiches $K_0$). Nach wie vielen Jahren ist das Guthaben bei Bank 2 doppelt so hoch wie bei Bank 1? Stelle zuerst die allgemeine Formel auf.`,
            hint: R`Ansatz: $2 \cdot K_0 \cdot q_1^n = K_0 \cdot q_2^n$`,
            steps: [
              R`$2 \cdot q_1^n = q_2^n$ $\quad | \ln$`,
              R`$\ln 2 + n \ln q_1 = n \ln q_2$`,
              R`Allgemein: $n = \frac{\ln 2}{\ln q_2 - \ln q_1}$`,
              R`Einsetzen: $\ln 1{,}045 - \ln 1{,}015 = 0{,}04402 - 0{,}01489 = 0{,}02913$`,
              R`$n = \frac{0{,}6931}{0{,}02913} \approx 23{,}8$`
            ],
            a: R`$n = \frac{\ln 2}{\ln q_2 - \ln q_1} \approx 23{,}8$ Jahre`,
            important: true
          },
          {
            id: "nz05",
            q: R`Typ: Startkapital gesucht (Abzinsen)
Wie viel muss man heute anlegen, um bei $3{,}5\,\%$ Zinsen p. a. in 12 Jahren $50.000$ € zu haben?`,
            hint: R`$K_0 = \frac{K_n}{q^n}$`,
            steps: [
              R`$1{,}035^{12} \approx 1{,}51107$`,
              R`$K_0 = \frac{50.000}{1{,}51107}$`
            ],
            a: R`$K_0 \approx 33.089{,}16$ €`
          },
          {
            id: "nz06",
            q: R`Typ: Zinssatz gesucht
$8.000$ € wachsen in 9 Jahren auf $11.000$ €. Wie hoch war der jährliche Zinssatz?`,
            hint: R`$q = \sqrt[n]{\frac{K_n}{K_0}}$, dann $p = (q-1) \cdot 100$`,
            steps: [
              R`$\frac{11.000}{8.000} = 1{,}375$`,
              R`$q = \sqrt[9]{1{,}375} \approx 1{,}03602$`,
              R`$p = 0{,}03602 \cdot 100$`
            ],
            a: R`$p \approx 3{,}60\,\%$`
          }
        ],
        quiz: []
      },
      // ------------------------------------------------------------------
      {
        id: "m-unterjaehrig",
        name: "2.2 Unterjährige & stetige Verzinsung",
        description: "Neue Übungsaufgaben: m Verzinsungen pro Jahr, Umstellen nach n und p, effektiver Jahreszins, stetig",
        cards: [
          {
            id: "nu01",
            q: R`Typ: Vergleich verschiedener $m$
$K_0 = 30.000$ €, $p = 4\,\%$, $n = 5$ Jahre. Berechne $K_5$ bei jährlicher, vierteljährlicher und monatlicher Verzinsung.`,
            hint: R`$K_n = K_0 \cdot \left(1 + \frac{p}{m \cdot 100}\right)^{m \cdot n}$`,
            steps: [
              R`$m = 1$: $30.000 \cdot 1{,}04^5 \approx 36.499{,}59$ €`,
              R`$m = 4$: $30.000 \cdot \left(1 + \frac{4}{400}\right)^{20} = 30.000 \cdot 1{,}01^{20} \approx 36.605{,}70$ €`,
              R`$m = 12$: $30.000 \cdot \left(1 + \frac{4}{1200}\right)^{60} \approx 36.629{,}90$ €`
            ],
            a: R`36.499,59 € · 36.605,70 € · 36.629,90 €`,
            important: true
          },
          {
            id: "nu02",
            q: R`Typ: Mehrphasen mit unterschiedlichem $m$
$K_0 = 12.000$ €: 3 Jahre vierteljährlich mit $2{,}4\,\%$, dann 2 Jahre monatlich mit $3\,\%$, dann 4 Jahre täglich mit $1{,}8\,\%$. Endkapital?`,
            hint: R`Jede Phase: $\left(1+\frac{p}{m \cdot 100}\right)^{m \cdot n}$ – alles multiplizieren.`,
            steps: [
              R`Phase 1: $\left(1+\frac{2{,}4}{400}\right)^{12} \approx 1{,}07442$`,
              R`Phase 2: $\left(1+\frac{3}{1200}\right)^{24} \approx 1{,}06176$`,
              R`Phase 3: $\left(1+\frac{1{,}8}{36000}\right)^{1440} \approx 1{,}07465$`,
              R`$K_9 = 12.000 \cdot 1{,}07442 \cdot 1{,}06176 \cdot 1{,}07465$`
            ],
            a: R`$K_9 \approx 14.711{,}28$ €`,
            important: true
          },
          {
            id: "nu03",
            q: R`Typ: Laufzeit bei unterjähriger Verzinsung
Wie lange dauert es, bis $20.000$ € bei monatlicher Verzinsung mit $3\,\%$ auf $30.000$ € angewachsen sind?`,
            hint: R`$n = \frac{\ln(K_n/K_0)}{m \cdot \ln\left(1+\frac{p}{100m}\right)}$`,
            steps: [
              R`$\frac{K_n}{K_0} = 1{,}5$ → $\ln 1{,}5 = 0{,}40547$`,
              R`$\ln\left(1 + \frac{3}{1200}\right) = \ln 1{,}0025 = 0{,}0024969$`,
              R`$n = \frac{0{,}40547}{12 \cdot 0{,}0024969}$`
            ],
            a: R`$n \approx 13{,}53$ Jahre`,
            important: true
          },
          {
            id: "nu04",
            q: R`Typ: Zinssatz bei unterjähriger Verzinsung
$15.000$ € wachsen bei vierteljährlicher Verzinsung in 6 Jahren auf $18.000$ €. Wie hoch ist der nominelle Jahreszins $p$?`,
            hint: R`$p = \left(\sqrt[m \cdot n]{\frac{K_n}{K_0}} - 1\right) \cdot 100 \cdot m$ mit $m \cdot n = 24$`,
            steps: [
              R`$\frac{K_n}{K_0} = 1{,}2$`,
              R`$\sqrt[24]{1{,}2} \approx 1{,}0076257$`,
              R`$p = 0{,}0076257 \cdot 100 \cdot 4$`
            ],
            a: R`$p \approx 3{,}05\,\%$`,
            important: true
          },
          {
            id: "nu05",
            q: R`Typ: Effektiver Jahreszins
Berechne den effektiven Jahreszins $p^*$ für
a) $6\,\%$ bei monatlicher Verzinsung
b) $4{,}8\,\%$ bei vierteljährlicher Verzinsung`,
            hint: R`$p^* = \left[\left(1+\frac{p}{100m}\right)^m - 1\right] \cdot 100$`,
            steps: [
              R`a) $\left(1+\frac{6}{1200}\right)^{12} = 1{,}005^{12} \approx 1{,}061678$`,
              R`$p^* = 0{,}061678 \cdot 100 \approx 6{,}17\,\%$`,
              R`b) $\left(1+\frac{4{,}8}{400}\right)^{4} = 1{,}012^4 \approx 1{,}048871$`,
              R`$p^* \approx 4{,}89\,\%$`
            ],
            a: R`a) $p^* \approx 6{,}17\,\%$ · b) $p^* \approx 4{,}89\,\%$`,
            important: true
          },
          {
            id: "nu06",
            q: R`Typ: Bankvergleich mit unterschiedlichem $m$
Bank 1 verzinst halbjährlich mit $2{,}5\,\%$, Bank 2 vierteljährlich mit $4\,\%$. Nach wie vielen Jahren ist das Guthaben bei Bank 2 dreimal so hoch? (allgemeine Formel + Zahl)`,
            hint: R`Ansatz: $3 \cdot K_0\left(1+\frac{p_1}{200}\right)^{2n} = K_0\left(1+\frac{p_2}{400}\right)^{4n}$`,
            steps: [
              R`$K_0$ kürzen, $\ln$: $\ln 3 + 2n \ln\left(1+\frac{p_1}{200}\right) = 4n \ln\left(1+\frac{p_2}{400}\right)$`,
              R`$n = \frac{\ln 3}{4\ln\left(1+\frac{p_2}{400}\right) - 2\ln\left(1+\frac{p_1}{200}\right)}$`,
              R`Zahlen: $4 \ln 1{,}01 = 0{,}03980$, $\;2 \ln 1{,}0125 = 0{,}02485$`,
              R`$n = \frac{1{,}0986}{0{,}03980 - 0{,}02485} = \frac{1{,}0986}{0{,}01496}$`
            ],
            a: R`$n \approx 73{,}5$ Jahre`,
            important: true
          },
          {
            id: "nu07",
            q: R`Typ: Formel umstellen
Stelle die Formel der unterjährigen Verzinsung $K_n = K_0 \cdot \left(1 + \frac{p}{m \cdot 100}\right)^{m \cdot n}$ nach $K_0$ um. Wie viel muss man anlegen, um bei $2{,}4\,\%$ (monatlich) nach 10 Jahren $25.000$ € zu haben?`,
            hint: R`Durch den Klammer-Ausdruck teilen.`,
            steps: [
              R`$K_0 = \frac{K_n}{\left(1 + \frac{p}{m \cdot 100}\right)^{m \cdot n}}$`,
              R`$\left(1 + \frac{2{,}4}{1200}\right)^{120} = 1{,}002^{120} \approx 1{,}27094$`,
              R`$K_0 = \frac{25.000}{1{,}27094}$`
            ],
            a: R`$K_0 = \frac{K_n}{(1+\frac{p}{100m})^{mn}} \approx 19.670{,}41$ €`
          },
          {
            id: "ns01",
            q: R`Typ: Stetige Verzinsung – Laufzeit
Nach wie vielen Jahren verdoppelt sich ein Kapital bei $6\,\%$ stetiger Verzinsung?`,
            hint: R`$K_n = K_0 \cdot e^{\frac{n p}{100}}$ und $\ln(e^x) = x$`,
            steps: [
              R`$2 K_0 = K_0 \cdot e^{0{,}06 n}$ $\quad | :K_0$`,
              R`$2 = e^{0{,}06 n}$ $\quad | \ln$`,
              R`$\ln 2 = 0{,}06 n$`,
              R`$n = \frac{0{,}6931}{0{,}06}$`
            ],
            a: R`$n \approx 11{,}55$ Jahre`,
            important: true
          },
          {
            id: "ns02",
            q: R`Typ: Stetige Verzinsung – Endkapital + Vergleich
$25.000$ € werden 8 Jahre stetig mit $4{,}5\,\%$ verzinst. Wie hoch ist das Endkapital – und wie viel mehr ist das als bei jährlicher Verzinsung?`,
            hint: R`Stetig: $K_0 \cdot e^{\frac{np}{100}}$, jährlich: $K_0 \cdot q^n$`,
            steps: [
              R`Stetig: $25.000 \cdot e^{0{,}36} = 25.000 \cdot 1{,}43333 \approx 35.833{,}24$ €`,
              R`Jährlich: $25.000 \cdot 1{,}045^8 = 25.000 \cdot 1{,}42210 \approx 35.552{,}52$ €`,
              R`Differenz: $35.833{,}24 - 35.552{,}52$`
            ],
            a: R`Stetig $\approx 35.833{,}24$ €, das sind $\approx 280{,}72$ € mehr als bei jährlicher Verzinsung`
          },
          {
            id: "ns03",
            q: R`Typ: Stetige Verzinsung – Zinssatz gesucht
Bei stetiger Verzinsung wachsen $10.000$ € in 7 Jahren auf $15.000$ €. Wie hoch ist $p$?`,
            hint: R`$1{,}5 = e^{\frac{7p}{100}}$ → $\ln$ anwenden.`,
            steps: [
              R`$15.000 = 10.000 \cdot e^{\frac{7p}{100}}$ $\quad | :10.000$`,
              R`$\ln 1{,}5 = \frac{7p}{100}$`,
              R`$p = \frac{100 \cdot \ln 1{,}5}{7} = \frac{100 \cdot 0{,}40547}{7}$`
            ],
            a: R`$p \approx 5{,}79\,\%$`
          },
          {
            id: "ns04",
            q: R`Typ: Effektiver Jahreszins bei stetiger Verzinsung
Welchem effektiven Jahreszins entsprechen $7\,\%$ stetige Verzinsung?`,
            hint: R`$p^* = \left(e^{\frac{p}{100}} - 1\right) \cdot 100$`,
            steps: [
              R`$e^{0{,}07} \approx 1{,}072508$`,
              R`$p^* = (1{,}072508 - 1) \cdot 100$`
            ],
            a: R`$p^* \approx 7{,}25\,\%$`
          }
        ],
        quiz: []
      }
    ]
  });
})();
