# ⏱️ Documentazione del Cronometro Avanzato

Il **Cronometro Avanzato** è un'applicazione web che offre funzionalità complete per la misurazione del tempo con la possibilità di registrare giri parziali, salvare sessioni e analizzare le prestazioni.

## 🚀 Caratteristiche principali

### ⚙️ Funzionalità base

* ▶️ **Avvio/Arresto**: Misurazione del tempo con precisione al centesimo di secondo
* 🔁 **Reset**: Azzeramento completo del cronometro
* 🏁 **Giri**: Registrazione di tempi parziali durante la misurazione

### 💡 Funzionalità avanzate

* 💾 **Salvataggio sessioni**: Memorizzazione permanente delle sessioni cronometrate
* 📊 **Analisi giri**: Identificazione automatica del giro più veloce e più lento
* ⌨️ **Tasti rapidi**: Controllo da tastiera per un uso più efficiente
* 📱 **Responsive design**: Adattamento a diverse dimensioni dello schermo

## 🧱 Struttura del codice

### 1. 📝 HTML (`index.html`)

Contiene la struttura base dell'applicazione con:

* Display principale del tempo
* Pulsanti di controllo
* Aree per visualizzare giri e sessioni salvate

### 2. 🎨 CSS (`styles.css`)

Organizzato in sezioni:

* 🎛️ **Variabili globali**: Per colori e stili comuni
* 🧭 **Layout generale**: Struttura della pagina
* 🧩 **Stili dei componenti**: Pulsanti, liste, display
* 📐 **Media queries**: Per la responsività

### 3. 🧠 JavaScript (`script.js`)

Suddiviso in:

* 🧮 **Gestione dello stato**: Variabili del cronometro
* 🔄 **Funzioni principali**: Logica del cronometro
* 🖥️ **Funzioni di rendering**: Aggiornamento dell’interfaccia
* 🧲 **Gestione eventi**: Listener e tasti rapidi

## 📚 API e Funzioni principali

### ⏰ Funzioni del cronometro

| ⚙️ Funzione    | 📄 Descrizione                              |
| -------------- | ------------------------------------------- |
| `startTimer()` | Avvia il cronometro                         |
| `stopTimer()`  | Ferma il cronometro                         |
| `resetTimer()` | Resetta completamente il cronometro         |
| `lapTimer()`   | Registra un giro parziale                   |
| `saveTime()`   | Salva la sessione corrente con tutti i giri |

### 🧰 Funzioni di supporto

| ⚙️ Funzione            | 📄 Descrizione                                                         |
| ---------------------- | ---------------------------------------------------------------------- |
| `formatTime(time)`     | Formatta il tempo in `hh:mm:ss.cc`                                     |
| `renderLaps()`         | Visualizza tutti i giri con evidenziazione del più veloce/lento        |
| `renderSavedTimes()`   | Mostra la lista delle sessioni salvate                                 |
| `updateButtonStates()` | Gestisce lo stato dei pulsanti in base al funzionamento del cronometro |

## ⌨️ Tasti rapidi

| 🖱️ Tasto | ⌛ Funzione                                |
| --------- | ----------------------------------------- |
| Spazio    | Avvia/Ferma il cronometro                 |
| `L`       | Registra un giro (durante la misurazione) |
| `R`       | Resetta il cronometro (quando fermo)      |

## 💽 Persistenza dei dati

L'applicazione utilizza il `localStorage` del browser per salvare:

* 📅 Tutte le sessioni cronometrate complete di:

  * Data e ora della sessione
  * Tempo totale
  * Tutti i giri registrati

I dati persistono tra diversi accessi all'applicazione.

## 🎨 Personalizzazione

È possibile personalizzare l’aspetto modificando le variabili CSS nella sezione `:root`:

```css
:root {
    --primary-color: #4361ee;
    --secondary-color: #3f37c9;
    --success-color: #4cc9f0;
    --danger-color: #f72585;
    /* Altre variabili... */
}
```

## 🌐 Browser supportati

Compatibile con tutti i browser moderni:

* 🟢 Chrome (ultime 3 versioni)
* 🟠 Firefox (ultime 3 versioni)
* 🔵 Safari (ultime 3 versioni)
* 🟣 Edge (ultime 3 versioni)

## ⚠️ Limitazioni note

1. I dati sono salvati solo nel browser corrente
2. Precisione limitata a centesimi di secondo
3. Numero massimo di giri visualizzati: 1000 (limite pratico)

## 🔮 Possibili miglioramenti futuri

1. 🔗 Sincronizzazione con un backend remoto
2. 📤 Esportazione dati in formato CSV/JSON
3. 📩 Funzionalità di condivisione sessioni
4. 📈 Grafici delle prestazioni nel tempo
5. 🌍 Supporto multi-lingua

## 🛠️ Installazione

Non è richiesta alcuna installazione particolare. Basta:

1. 📥 Scaricare i tre file (`index.html`, `styles.css`, `script.js`)
2. 📁 Posizionarli nella stessa cartella
3. 🌐 Aprire `index.html` con un browser web

## 📄 Licenza

Questo progetto è rilasciato sotto **licenza MIT**.
È possibile utilizzarlo, modificarlo e distribuirlo liberamente.
Ma se ti ha salvato una gara... almeno un gelato 🍦 offrimelo 😄

---
