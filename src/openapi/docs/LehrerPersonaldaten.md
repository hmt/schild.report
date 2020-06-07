# SvwsOpenApi.LehrerPersonaldaten

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | die ID des Lehrers | 
**identNrTeil1** | **String** | Der vordere Teil der NRW-weit eindeutigen Ident-Nummer - setzt sich normalerweise aus Geburtsdatum und Geschlecht (3/4) zusammen, kann in Einzelfällen aber von diesem Schema abweichen | [optional] 
**identNrTeil2SerNr** | **String** | Der hintere Teil der Ident-Nummer – wird üblicherweise NRW-weit fortlaufend vergeben | [optional] 
**personalaktennummer** | **String** | Die Personalaktennummer des Lehrers für den Export zu GPC | [optional] 
**lbvPersonalnummer** | **String** | Die Personalnummer des LBV | [optional] 
**lbvVerguetungsschluessel** | **String** | Der zur Personalnummer gehörige Vergütungsschlüssel | [optional] 
**zugangsdatum** | **String** | Das Datum, wann der Lehrer an die Schule gekommen ist | [optional] 
**zugangsgrund** | **String** | Der Grund für den Zugang des Lehrers - siehe Statistik-Katalog | [optional] 
**abgangsdatum** | **String** | Das Datum, wann der Lehrer an die Schule verlassen hat | [optional] 
**abgangsgrund** | **String** | Der Grund für den Abgang des Lehrers - siehe Statistik-Katalog | [optional] 
**leitungsfunktion** | **String** | Die Leitungsfunktion innerhalb der Schule - siehe Statistik-Katalog | [optional] 
**pflichtstundensoll** | **Number** | Das Pflichtstundensoll des Lehrers | [optional] 
**rechtsverhaeltnis** | **String** | Das Rechtsverhältnis unter welchem der Lehrer beschäftigt ist (z.B. Beamter auf Lebenszeit) - siehe Statistik-Katalog | [optional] 
**beschaeftigungsart** | **String** | Die Art der Beschäftigung (Vollzeit, Teilzeit, etc.) - siehe Statistik-Katalog | [optional] 
**einsatzstatus** | **String** | Der Einsatzstatus (z.B. Stammschule, nur hier tätig) - siehe Statistik-Katalog | [optional] 
**stammschulnummer** | **String** | Die Schulnummer der Stammschule, sofern diese abweicht | [optional] 
**masernImpfnachweis** | **Boolean** | Gibt an, ob ein Nachweis über die Masern-Impfung erbracht wurde | [optional] 


