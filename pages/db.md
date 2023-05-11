---
transition: slide-up
---

# Database

Un database è un archivio di dati che permette di organizzare, gestire e recuperare informazioni.

### Tipologie di database
- <mdi-database /> SQL - Relazionale
- <ph-graph-bold />  NOSQL - Non relazionale 
<br />
<img src="https://cdn-3.backendless.com/wp-content/uploads/2021/12/SQL-vs-NoSQL-database-flexibility-1200x266.png"/>

<style>
  img {
    -webkit-filter: invert(70%);
    filter: invert(70%) saturate(100%);
  }
</style>

---
transition: slide-up
level: 2
---

# SQL - Structured Query Language
SQL è un linguaggio standardizzato per interrogare e gestire i dati contenuti in un database relazionale.

## PHP

In PHP è possibile utilizzare la libreria MySQLi per connettersi ad un database MySQL.

```php
$conn = new mysqli($servername, $username, $password, $dbname);

$stmt = $conn->prepare("SELECT nome FROM Utenti WHERE cognome=?");
$stmt->bind_param("s", $lastname);

$nome = "";
$lastname = "Rossi";
$stmt->execute();

$stmt->bind_result($nome);

$stmt->close();
$conn->close();
```
---
transition: slide-up
level: 2
---

# NoSQL - Not Only SQL
NoSql è un tipo di database che permette di archiviare e recuperare dati senza dover definire la struttura dei dati stessi.

### Vantaggi

- Maggiore flessibilità per i dati non normalizzati
- Scalabilità per elevate quantità di dati
- Semplicità di gestione (es. attraverso REST API)

<br />

### Svantaggi

- Mancanza di standardizzazione
- Mancanza di integrità referenziale
- Ogni database ha la sua sintassi
- Non è possibile effettuare JOIN tra entità 

---
transition: slide-left
level: 2
---

# Esempio di tabella SQL e documento NoSQL

### SQL

```sql
CREATE TABLE Utenti (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(50) NOT NULL,
  cognome VARCHAR(50) NOT NULL,
  indirizzo VARCHAR(100) NOT NULL
);
```
<br />

### NoSQL

```json
{
  "nome": "Mario",
  "cognome": "Rossi",
  "indirizzo": {
    "via": "Via Roma",
    "civico": "1",
    "città": "Milano"
  }
}
``` 