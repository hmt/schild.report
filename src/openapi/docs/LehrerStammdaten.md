# SvwsOpenApi.LehrerStammdaten

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | die ID des Lehrers | 
**kuerzel** | **String** | das Kürzel | 
**personalTyp** | **String** | die Typ des Personals | 
**anrede** | **String** | ggf. die Anrede | [optional] 
**titel** | **String** | ggf. ein akademischer Grad | [optional] 
**amtsbezeichnung** | **String** | ggf. die Amtsbezeichnung | [optional] 
**nachname** | **String** | der Nachname | 
**vorname** | **String** | der Vorname | 
**geschlecht** | **String** | das Geschlecht | 
**geburtsdatum** | **String** | das Geburtsdatum | 
**staatsangehoerigkeitID** | **String** | ggf. die ID für die Staatsangehörigkeit | [optional] 
**strasse** | **String** | ggf. die Straße im Wohnort | [optional] 
**wohnortID** | **Number** | ggf. die ID des Wohnortes | [optional] 
**ortsteilID** | **Number** | ggf. die ID des Ortsteils im Wohnort | [optional] 
**telefon** | **String** | ggf. die Telefonnummer | [optional] 
**telefonMobil** | **String** | ggf. die Mobilnummer | [optional] 
**emailPrivat** | **String** | ggf. die private Email-Adresse | [optional] 
**emailDienstlich** | **String** | ggf. die dienstliche Email-Adresse | [optional] 
**foto** | **String** | ggf. das Foto des Lehrers (jpg, Base64-kodiert) | 



## Enum: PersonalTypEnum


* `LEHRKRAFT` (value: `"LEHRKRAFT"`)

* `SEKRETARIAT` (value: `"SEKRETARIAT"`)

* `PERSONAL` (value: `"PERSONAL"`)

* `EXTERN` (value: `"EXTERN"`)

* `SONSTIGE` (value: `"SONSTIGE"`)





## Enum: GeschlechtEnum


* `M` (value: `"M"`)

* `W` (value: `"W"`)

* `D` (value: `"D"`)

* `OHNE_ANGABE` (value: `"OHNE_ANGABE"`)




