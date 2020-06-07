# SvwsOpenApi.Abiturdaten

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schuelerId** | **Number** | Die eindeutige ID des Schülers. | 
**schuljahrAbitur** | **Number** | Das Schuljahr, in dem der Schüler sein Abitur ablegt bzw. ablegen wird. | 
**fachbelegungen** | [**[AbiturFachbelegung]**](AbiturFachbelegung.md) |  | 
**sprachenfolge** | [**Sprachenfolge**](Sprachenfolge.md) |  | [optional] 
**bilingualeSprache** | **String** | Das einstellige Kürzel der Sprache des bilingualen Bildungsganges, falls der Schüler an einem solchen teilnimmt. | [optional] 
**sek1Fremdsprache2ManuellGeprueft** | **Boolean** | Gibt an, ob die zweite Fremdsprache in der Sekundarstufe I manuell geprüft wurde und vorhanden ist. Bei einer Belegprüfung muss diese dann nicht anhand der Sprachenfolge geprüft werden. | [optional] [default to false]
**muttersprachenpruefungEndeEF** | **Boolean** | Gibt an, ob am Ende der EF eine Muttersprachliche Prüfung erfolgen wird bzw. erfolgt ist. | [optional] [default to false]
**latinum** | **Boolean** | Gibt an, ob das Latinum erworben wurde. | [optional] [default to false]
**kleinesLatinum** | **Boolean** | Gibt an, ob das kleine Latinum erworben wurde. | [optional] [default to false]
**graecum** | **Boolean** | Gibt an, ob das Graecum erworben wurde. | [optional] [default to false]
**hebraicum** | **Boolean** | Gibt an, ob das Hebraicum erworben wurde. | [optional] [default to false]
**block1FehlstundenGesamt** | **Number** | Die Anzahl der Fehlstunden in der gesamten Qualifikationsphase. | [optional] [default to 0]
**block1FehlstundenUnentschuldigt** | **Number** | Die Anzahl der unentschuldigten Fehlstunden in der gesamten Qualifikationsphase. | [optional] [default to 0]
**projektKursThema** | **String** | Das Projektkursthema, sofern ein Projektkurs belegt wurde. | [optional] 
**projektkursLeitfach1Kuerzel** | **String** | Das Kürzel des ersten Leitfaches des belegten Projektkurs, sofern einer belegt wurde. | [optional] 
**projektkursLeitfach2Kuerzel** | **String** | Das Kürzel des zweiten Leitfaches des belegten Projektkurs, sofern einer belegt wurde und ein zweites Leitfach für diesen festgelegt wurde. | [optional] 
**besondereLernleistung** | **String** | Gibt an, ob eine besondere Lernleistung vorliegt (K - keine, P - in einem Projektkurs, E - extern). | [optional] [default to &#39;K&#39;]
**besondereLernleistungPunkte** | **String** | Gibt ggf. die Note einer externen besonderen Lernleistung an. | [optional] 
**besondereLernleistungThema** | **String** | Gibt das Thema der Besonderen Lernleistung an. | [optional] 
**block1AnzahlKurse** | **Number** | Gibt die Anzahl der Kurse in der Qualifikationsphase an. | [optional] 
**block1DefiziteGesamt** | **Number** | Gibt die Anzahl der Gesamtdefizite in der Qualifikationsphase an. | [optional] 
**block1DefiziteLK** | **Number** | Gibt die Anzahl der Defizite im LK-Bereich in der Qualifikationsphase an. | [optional] 
**block1PunktSummeGK** | **Number** | Gibt die Punktsumme aller Grundkurse in der Qualifikationsphase an. | [optional] 
**block1PunktSummeLK** | **Number** | Gibt die Punktsumme aller Leistungskurse in der Qualifikationsphase an. | [optional] 
**block1PunktSummeNormiert** | **Number** | Gibt die normierte Punktsumme aller Kurse in der Qualifikationsphase an. | [optional] 
**block1NotenpunkteDurchschnitt** | **Number** | Gibt den Durchschnitt der Notenpunkte von allen Kursen der Qualifikationsphase an. | [optional] 
**block1Zulassung** | **Boolean** | Gibt an, ob die Zulassung erreicht wurde oder nicht - sofern diese schon geprüft wurde. | [optional] 
**freiwilligerRuecktritt** | **Boolean** | Gibt an, ob freiwillig von der Abiturprüfung zurückgetreten wurde. | [default to false]
**block2DefiziteGesamt** | **Number** | Gibt die Anzahl der Gesamtdefizite im Abiturbereich (Block II) an. | [optional] 
**block2DefiziteLK** | **Number** | Gibt die Anzahl der Leistungskurs-Defizite im Abiturbereich (Block II) an. | [optional] 
**block2PunktSumme** | **Number** | Gibt die Punktsumme im Abiturbereich (Block II) an. | [optional] 
**gesamtPunkte** | **Number** | Gibt die erreichte Gesamtpunktzahl in der Qualifikation und im Abiturbereich (Block I und II) an. | [optional] 
**gesamtPunkteVerbesserung** | **Number** | Gibt die Gesamtpunktzahl an, ab der sich die Abiturnote verbessern würde. | [optional] 
**gesamtPunkteVerschlechterung** | **Number** | Gibt die Gesamtpunktzahl an, ab der sich die Abiturnote verschlechtern würde. | [optional] 
**pruefungBestanden** | **Boolean** | Gibt an, ob die Abiturprüfung bestanden wurde oder nicht - sofern das Prüfungsverfahren schon abgeschlossen wurde. | [optional] 
**note** | **String** | Die Abiturnote einer bestandenen Abiturprüfung - sofern das Prüfungsverfahren schon abgeschlossen wurde. | [optional] 



## Enum: BesondereLernleistungEnum


* `K` (value: `"K"`)

* `P` (value: `"P"`)

* `E` (value: `"E"`)





## Enum: BesondereLernleistungPunkteEnum


* `1P` (value: `"1P"`)

* `1` (value: `"1"`)

* `1M` (value: `"1M"`)

* `2P` (value: `"2P"`)

* `2` (value: `"2"`)

* `2M` (value: `"2M"`)

* `3P` (value: `"3P"`)

* `3` (value: `"3"`)

* `3M` (value: `"3M"`)

* `4P` (value: `"4P"`)

* `4` (value: `"4"`)

* `4M` (value: `"4M"`)

* `5P` (value: `"5P"`)

* `5` (value: `"5"`)

* `5M` (value: `"5M"`)

* `6` (value: `"6"`)

* `E1` (value: `"E1"`)

* `E2` (value: `"E2"`)

* `E3` (value: `"E3"`)

* `AT` (value: `"AT"`)

* `AM` (value: `"AM"`)

* `NB` (value: `"NB"`)

* `NT` (value: `"NT"`)

* `NE` (value: `"NE"`)

* `LM` (value: `"LM"`)

* `empty` (value: `""`)




