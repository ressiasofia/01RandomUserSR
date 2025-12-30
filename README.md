# Documentation of Random User Generator

Sofia Ressia - Classe 4BINF, IIS G.Vallauri

## First page

La prima pagina visualizzata è la pagina principale nominata `firstPage.html` a cui sono linkati un css e un js.
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

Al centro della pagina è presente un contenitore suddiviso in due grandi box: `cardbox` contenete le carte e i loro dettagli e `castumizeBox` contenete i pulsanti per la visualizzazione personalizzata degli utenti.

## Card

Ogni carta viene generata tramite la funzione principale `loadCard` che è resa generale anche per la personalizzazione degli utenti. Ogni carta presenta una parte frontale e una posteriore, nella prima viene visualizzata una foto e il nome completo dell'utente e inoltre contiene in alto a destra anche un pulsante (stellina) che al click rende un "preferito" l'utente.

Nella parte posteriore invece troviamo una piccola navbar sul basso che al click permette di visualizzare le informazioni principali (come da randomUser) dell'utente, in alto a destra un pulsante (informazioni) che al click apre un modal contenente ulteriori informazioni riguardanti l'utente

30/12/2025
