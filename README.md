# Swag Labs Automated Test Suite

End-to-End (E2E) Testprojekt für die Demo-E-Commerce-Anwendung [SauceDemo (Swag Labs)](https://www.saucedemo.com/).

Das Projekt dient dazu, praktische Erfahrung mit **Playwright**, **TypeScript** und automatisierten Softwaretests aufzubauen. Dabei werden verschiedene reale Testszenarien umgesetzt und die Testsuite schrittweise erweitert.

Der aktuelle Stand umfasst unter anderem Login- und Validierungstests, negative Tests, Edge Cases sowie die Verarbeitung und Überprüfung von Daten aus dem DOM.

## Aktuell abgedeckte Test-Szenarien

| Testdatei                 | Beschreibung                                                                                                                                                                | Bereich                       |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| `login.spec.ts`           | Prüft den erfolgreichen Login mit `standard_user` und die anschließende Weiterleitung auf die Inventar-Seite.                                                               | **Auth / Core**               |
| `wrong-password.spec.ts`  | Prüft, dass bei einem falschen Passwort die entsprechende Fehlermeldung angezeigt wird.                                                                                     | **Auth / Negative**           |
| `empty-password.spec.ts`  | Prüft die Validierung, wenn das Passwortfeld leer bleibt (`"Epic sadface: Password is required"`).                                                                          | **Auth / Validation**         |
| `login-all-users.spec.ts` | Testet den Login für mehrere gültige Benutzer aus einem Array und führt anschließend einen Logout durch. Der `locked_out_user` wird dabei ausgeschlossen.                   | **Auth / Bulk**               |
| `problem-user.spec.ts`    | Validiert das bekannte Fehlverhalten von `problem_user`, indem der Warenkorb-Counter nach dem Hinzufügen von drei Artikeln überprüft wird.                                  | **Edge Case / Bug Detection** |

Die Testsuite wird aktuell weiter ausgebaut und um zusätzliche Szenarien ergänzt.

## Tech Stack

* **Test Framework:** [Playwright](https://playwright.dev/)
* **Sprache:** TypeScript
* **Assertions:** Playwright `expect`
* **CI/CD:** GitHub Actions
* **Testanwendung:** SauceDemo (Swag Labs)

## Quickstart

### Voraussetzungen

* [Node.js](https://nodejs.org/) 18 oder höher
* Git

### Installation

Repository klonen:

```bash
git clone https://github.com/marvin-c-john/swaglabs.git
cd swaglabs
```

Abhängigkeiten installieren:

```bash
npm install
```

Playwright Browser installieren:

```bash
npx playwright install
```

## Tests ausführen

Alle Tests headless ausführen:

```bash
npx playwright test
```

Tests im interaktiven UI-Modus ausführen:

```bash
npx playwright test --ui
```

Tests mit sichtbarem Browser ausführen:

```bash
npx playwright test --headed
```

Eine einzelne Testdatei ausführen:

```bash
npx playwright test tests/login.spec.ts
```

## Testberichte

Nach einem Testlauf kann der von Playwright erzeugte HTML-Testbericht geöffnet werden:

```bash
npx playwright show-report
```

## CI/CD

Die Testsuite ist über **GitHub Actions** in eine CI-Pipeline eingebunden. Dadurch können die Tests automatisiert ausgeführt und Fehler bei Änderungen am Projekt frühzeitig erkannt werden.

## Projektstruktur

```text
├── .github/
│   └── workflows/
│       └── playwright.yml
├── tests/
│   ├── empty-password.spec.ts
│   ├── login-all-users.spec.ts
│   ├── problem-user.spec.ts
│   ├── login.spec.ts
│   └── wrong-password.spec.ts
├── .gitignore
├── package.json
├── playwright.config.ts
└── README.md
```

## Status

Das Projekt befindet sich aktuell in Entwicklung. Weitere Testfälle und Szenarien werden schrittweise ergänzt, während ich meine Kenntnisse in Playwright und Testautomatisierung vertiefe.
