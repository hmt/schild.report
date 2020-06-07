# SvwsOpenApi.SchuelerStammdaten

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | die ID | 
**foto** | **String** | ggf. das Foto des Schülers (jpg, Base64-kodiert) | 
**nachname** | **String** | der Nachname | 
**zusatzNachname** | **String** | ggf. ein Zusatz zum Nachnamen | 
**vorname** | **String** | der Vorname | 
**alleVornamen** | **String** | alle Vornamen, sofern es mehrere gibt, sonst erfolgt der Zugriff nur auf Vorname | 
**geschlecht** | **String** | das Geschlecht | 
**geburtsdatum** | **String** | das Geburtsdatum | 
**geburtsort** | **String** | der Geburtsort | [optional] 
**geburtsname** | **String** | ggf. der Geburtsname | 
**strasse** | **String** | ggf. die Straße im Wohnort | [optional] 
**wohnortID** | **Number** | ggf. die ID des Wohnortes | [optional] 
**ortsteilID** | **Number** | ggf. die ID des Ortsteils im Wohnort | [optional] 
**telefon** | **String** | ggf. die Telefonnummer | [optional] 
**telefonMobil** | **String** | ggf. die Mobilnummer | [optional] 
**emailPrivat** | **String** | ggf. die private Email-Adresse | [optional] 
**emailSchule** | **String** | ggf. die schulische Email-Adresse | [optional] 
**staatsangehoerigkeitID** | **String** | die ID der Staatsangehörigkeit | [optional] 
**staatsangehoerigkeit2ID** | **String** | ggf. die ID einer zweiten Staatsangehörigkeit | [optional] 
**religionID** | **Number** | ggf. die ID der Religion | [optional] 
**druckeKonfessionAufZeugnisse** | **Boolean** | gibt an, ob die Konfession des Schülers auf dem Zeugnis erscheinen soll oder nicht. | 
**religionabmeldung** | **String** | das Datum der Religionsabmeldung | 
**religionanmeldung** | **String** | das Datum der Religionsanmeldung | 
**hatMigrationshintergrund** | **Boolean** | gibt an, ob ein Migrationshintergrund vorhanden ist | 
**zuzugsjahr** | **String** | ggf. das Zuzugsjahr | 
**geburtsland** | **String** | ggf. das Geburtsland | 
**verkehrspracheFamilie** | **String** | ggf. die in der Familie hauptsächlich gesprochen Sprache | 
**geburtslandVater** | **String** | ggf. das Geburtsland des Vaters | 
**geburtslandMutter** | **String** | ggf. das Geburtsland der Mutter | 
**foerderschwerpunktID** | **Number** | ggf. die ID eines sonderpädagogischen Förderschwerpunnktes | 
**foerderschwerpunkt2ID** | **Number** | ggf. die ID eines zweiten sonderpädagogischen Förderschwerpunnktes | 
**istAOSF** | **Boolean** | gibt an, ob eine sonderpädagogische Förderung nach AOSF vorliegt oder nicht | 
**istLernenZieldifferent** | **Boolean** | gibt an, ob zieldifferentes Lernen vorliegt oder nicht | 
**status** | **String** | der aktuelle Schülerstatus | 
**fahrschuelerArtID** | **Number** | ggf. die ID der Art des Fahrschülers | 
**haltestelleID** | **Number** | ggf. die ID der Haltestelle, ab der der Schüler das Transportmittel nimmt | 
**anmeldedatum** | **String** | das Anmeldedatum | 
**aufnahmedatum** | **String** | das Aufnahmedatum | 
**istVolljaehrig** | **Boolean** | gibt an, ob der Schüler volljährig ist oder nicht | 
**istSchulpflichtErfuellt** | **Boolean** | gibt an, ob der Schüler die Schulpflicht erfüllt hat oder nicht | 
**istBerufsschulpflichtErfuellt** | **Boolean** | gibt an, ob der Schüler die Berufsschulpflicht erfüllt hat oder nicht | 
**hatMasernimpfnachweis** | **Boolean** | gibt an, ob der Schüler einen Nachweis über die Maserimpfpflicht erbracht hat | 
**keineAuskunftAnDritte** | **Boolean** | gibt an, ob über den Schüler eine Auskunft an dritte erteilt werden darf oder dies unter allen Umständen vermieden werden sollte. | 
**erhaeltSchuelerBAFOEG** | **Boolean** | gibt an, ob der Schüler BAFÖG erhält oder nicht. | 
**erhaeltMeisterBAFOEG** | **Boolean** | gibt an, ob der Schüler Meister-BAFÖG erhält oder nicht. | 
**istDuplikat** | **Boolean** | gibt an, ob es sich bei dem Schülerdatensatz um ein Duplikat handelt oder nicht. | 
**bemerkungen** | **String** | ggf. Bermerkungen | 



## Enum: GeschlechtEnum


* `M` (value: `"M"`)

* `W` (value: `"W"`)

* `D` (value: `"D"`)

* `OHNE_ANGABE` (value: `"OHNE_ANGABE"`)





## Enum: StatusEnum


* `NEUAUFNAHME` (value: `"NEUAUFNAHME"`)

* `WARTELISTE` (value: `"WARTELISTE"`)

* `AKTIV` (value: `"AKTIV"`)

* `BEURLAUBT` (value: `"BEURLAUBT"`)

* `EXTERN` (value: `"EXTERN"`)

* `ABSCHLUSS` (value: `"ABSCHLUSS"`)

* `ABGAENGER` (value: `"ABGAENGER"`)




