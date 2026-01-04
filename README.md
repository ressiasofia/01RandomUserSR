# Documentation of Random User Generator

Sofia Ressia - Classe 4BINF, IIS G.Vallauri

## First page

La prima pagina visualizzata è la pagina principale nominata `firstPage.html` a cui sono linkati un CSS e un JS.
La pagina presenta un titolo principale con alcune animazioni per rendelo più interattivo e un click su l'intera pagina che permette di accedere all' `index.html`.

Per questa pagina viene utilizzato un font specifico presente nella cartella font del progetto, inoltre è stata sempre utilizzata una palette di colori tendente dal color crema al viola scuro.

![palette di colori](./01randomUserRESSIA/img/palette.png)
Ricavata da https://coolors.co

# Funzionalità e specifiche tecniche del progetto

La pagina `index.html` presenta all'avvio 6 users generati casualmente, ancora privi di modifiche da parte dell'utente.

## Navbar e i suoi elmenti

La navbar presenta un logo, due pulsanti utilizzati il primo per fare un semplice refresh della pagina e il secondo permette di visualizzare le foto degli utenti.
La textbox viene invece utilizzata per una ricerca sulla base del nome dell'utente, che viene eseguita su tutti gli utenti resi disponibili da randomUser (5000 in totale) ed è questo il motivo per cui è molto pesante.

Al click sull' `All user photos` vengono visualizzate 100 immagini di utenti casuali, solamente 100 per evitare di appesantire unteriormente la funzione. Un particolare dettaglio si nota al click sulla foto dove viene aperto un modal che visualizza i dettagli della persona desiderata.

## Main

Al centro della pagina è presente un contenitore suddiviso in due grandi box: `cardbox` contenete le carte e i loro dettagli e `customizeBox` contenete i pulsanti per la visualizzazione personalizzata degli utenti.

## Card

Ogni carta viene generata tramite la funzione principale `loadCard` che è resa generale anche per la personalizzazione degli utenti. Ogni carta presenta una parte frontale e una posteriore, nella prima viene visualizzata una foto e il nome completo dell'utente e inoltre contiene in alto a destra anche un pulsante (stellina) che al click rende un "preferito" l'utente oppure se ricliccata rimuove l'utente dai preferiti.

Nella parte posteriore invece troviamo una piccola navbar sul basso che al click permette di visualizzare le informazioni principali (come da randomUser) dell'utente, in alto a destra un pulsante (informazioni) che al click apre un modal contenente ulteriori informazioni riguardanti l'utente

## Customize bar

Di finaco al contenitore card è presente un'altra piccola navbar composta da 3 pulsanti che permettono la visualizzazione e personalizzazione degli utenti.
Andando per ordine troviamo
| Nome punsante | Funzionalità |
| :--- | :---|
| `Generate` | Al click vengono semplicemente rigenerati 6 users casuali, utilizzato per uscire dalla zona dei preferiti o per annullare in modo veloce le personalizzazioni. |
| `Customize` | Al click apre un modal contenente diverse modalità di personalizzazione, uno slider per la quantità di utenti, una listbox per selezionare `male or female` e infine una griglia di div che assumendo il comportamento delle normali checkbox permettono di selezionare una o più nazioni come desiderato. Al fondo due pulsanti permettobo di chiudere il modal senza effettuare modifiche oppure salvare e apportare le evenutali personalizzazioni scelte |
| `Stars` | Al click permette di visualizzare gli utenti salvati tra i preferiti, viene utilizzato il `localStorage` per occuparsi di recuperare e mantenere gli utenti |

Da notare come il comportamento delle card rimane invariato qualunche visualizzazione sia attivata.

## Footer

Il footer si presenta molto semplice e lineare con un link al mio profilo su GitHub e un link al profilo Instagram. Anche nella qui come nella navbar è stato inserito il logo.

# Responsive

Il responsive è stato gestito tramite Bootstrap e CSS utilizzando le mediaQuery.

Quando si visualizza il sito su schermi più piccoli come un tablet o un telefono , rimanono invariati il comportamento di Navbar e Footer ma il `main` cambia disposizione inserendo le card una in coda all'altra utilizzando `dispaly:block` e la sezione Customize viene visualizzata sotto alle carte come dei pulsanti di navigazione.
Il comportamento dei pulsanti e della visualizzazione delle carte rimane invariato qualunque sia la modalità utilizzata.

La visualizzazione dello User photos si dimensiona in base alla grandezza dello schermo ma permettendo sempre le stesse funzionalità

30/12/2025
