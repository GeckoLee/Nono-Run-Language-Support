const languages = [
  'English',
  'German',
  'Russian',
  'French',
  'Spanish',
  'Italian',
  'Japanese'
]

language = Gespeicherte_Daten[0].Sprache;
if (typeof language === 'undefined' || language === null) {language='English';}

string_values =[
  { // 0
    'English':  'Main Menu',
    'German':   'Hauptmenü',
    'Russian':  '',
    'French':   '',
    'Spanish':  '',
    'Italian':  '',
    'Japanese': ''
  },
  { // 1
    'English':  'Mode',
    'German':   'Modus',
    'Russian':  '',
    'French':   '',
    'Spanish':  '',
    'Italian':  '',
    'Japanese': ''
  },
  { // 2
    'English':  'Settings',
    'German':   'Einstellungen',
    'Russian':  '',
    'French':   '',
    'Spanish':  '',
    'Italian':  '',
    'Japanese': ''
  },
  { // 3
    'English':  'Backgrounds',
    'German':   'Hintergründe',
    'Russian':  '',
    'French':   '',
    'Spanish':  '',
    'Italian':  '',
    'Japanese': ''
  },
  { // 4
    'English':  'Credits',
    'German':   'Verfasser',
    'Russian':  '',
    'French':   '',
    'Spanish':  '',
    'Italian':  '',
    'Japanese': ''
  },
  { // 5
    'English':  'Back',
    'German':   'Zurück',
    'Russian':  '',
    'French':   '',
    'Spanish':  '',
    'Italian':  '',
    'Japanese': ''
  },
  { // 6
    'English':  'Random',
    'German':   'Zufall',
    'Russian':  '',
    'French':   '',
    'Spanish':  '',
    'Italian':  '',
    'Japanese': ''
  },
  { // 7
    'English':  'Mode Select',
    'German':   'Modusauswahl',
    'Russian':  '',
    'French':   '',
    'Spanish':  '',
    'Italian':  '',
    'Japanese': ''
  },
  { // 8
    'English':  'Classic',
    'German':   'Klassisch',
    'Russian':  '',
    'French':   '',
    'Spanish':  '',
    'Italian':  '',
    'Japanese': ''
  },
  { // 9
    'English':  'Color',
    'German':   'Farbe',
    'Russian':  '',
    'French':   '',
    'Spanish':  '',
    'Italian':  '',
    'Japanese': ''
  },
  { // 10
    'English':  'Play',
    'German':   'Spielen',
    'Russian':  '',
    'French':   '',
    'Spanish':  '',
    'Italian':  '',
    'Japanese': ''
  },
  { // 11
    'English':  'Stats',
    'German':   'Statistiken',
    'Russian':  '',
    'French':   '',
    'Spanish':  '',
    'Italian':  '',
    'Japanese': ''
  },
  { // 12
    'English':  'Stats for ',
    'German':   'Statistiken für ',
    'Russian':  '',
    'French':   '',
    'Spanish':  '',
    'Italian':  '',
    'Japanese': ''
  },
  { // 13
    'English':  'Classic 5x5 ',
    'German':   'Klassisch 5x5 ',
    'Russian':  '',
    'French':   '',
    'Spanish':  '',
    'Italian':  '',
    'Japanese': ''
  },
  { // 14
    'English':  'Classic 7x7 ',
    'German':   'Klassisch 7x7 ',
    'Russian':  '',
    'French':   '',
    'Spanish':  '',
    'Italian':  '',
    'Japanese': ''
  },
  { // 15
    'English':  'Color 8x8 ',
    'German':   'Farbe 8x8 ',
    'Russian':  '',
    'French':   '',
    'Spanish':  '',
    'Italian':  '',
    'Japanese': ''
  },
  { // 16
    'English':  'Random 25 Levels ',
    'German':   'Zufällige 25 Level ',
    'Russian':  '',
    'French':   '',
    'Spanish':  '',
    'Italian':  '',
    'Japanese': ''
  },
  { // 17
    'English':  ' of ',
    'German':   ' von ',
    'Russian':  '',
    'French':   '',
    'Spanish':  '',
    'Italian':  '',
    'Japanese': ''
  },
  { // 18 part of sentence, plural
    'English':  ' levels ',
    'German':   ' Level ',
    'Russian':  '',
    'French':   '',
    'Spanish':  '',
    'Italian':  '',
    'Japanese': ''
  },
  { // 19
    'English':  ' completed.',
    'German':   ' beendet.',
    'Russian':  '',
    'French':   '',
    'Spanish':  '',
    'Italian':  '',
    'Japanese': ''
  },
  { // 20
    'English':  ' times completed.',
    'German':   ' Mal beendet.',
    'Russian':  '',
    'French':   '',
    'Spanish':  '',
    'Italian':  '',
    'Japanese': ''
  },
  { // 21
    'English':  'Mode not finished, yet.',
    'German':   'Modus noch nicht beendet.',
    'Russian':  '',
    'French':   '',
    'Spanish':  '',
    'Italian':  '',
    'Japanese': ''
  },
  { // 22
    'English':  'Total time:',
    'German':   'Deine Gesamtzeit:',
    'Russian':  '',
    'French':   '',
    'Spanish':  '',
    'Italian':  '',
    'Japanese': ''
  },
  { // 23
    'English':  'Worldwide Highscore',
    'German':   'Weltweite Highscore',
    'Russian':  '',
    'French':   '',
    'Spanish':  '',
    'Italian':  '',
    'Japanese': ''
  },
  { // 24
    'English':  'Ad',
    'German':   'Werbung',
    'Russian':  '',
    'French':   '',
    'Spanish':  '',
    'Italian':  '',
    'Japanese': ''
  },
  { // 25 noun, singular
    'English':  'level',
    'German':   'Level',
    'Russian':  '',
    'French':   '',
    'Spanish':  '',
    'Italian':  '',
    'Japanese': ''
  },
  { // 26
    'English':  'Fastest time: ',
    'German':   'Bestzeit: ',
    'Russian':  '',
    'French':   '',
    'Spanish':  '',
    'Italian':  '',
    'Japanese': ''
  },
  { // 27
    'English':  'Languages',
    'German':   'Sprachen',
    'Russian':  '',
    'French':   '',
    'Spanish':  '',
    'Italian':  '',
    'Japanese': ''
  },
  { // 28
    'English':  'Upload Highscore',
    'German':   'Highscore hochladen',
    'Russian':  '',
    'French':   '',
    'Spanish':  '',
    'Italian':  '',
    'Japanese': ''
  },
  { //29
    'English':  'Player Statistics',
    'German':   'Spielerstatistik',
    'Russian':  '',
    'French':   '',
    'Spanish':  '',
    'Italian':  '',
    'Japanese': ''
  },
  { // 30
    'English':  'Completed Games',
    'German':   'Beendete Spiele',
    'Russian':  '',
    'French':   '',
    'Spanish':  '',
    'Italian':  '',
    'Japanese': ''
  },
  { // 31 Part of sentence, completion screen
    'English':  'Level ',
    'German':   'Level ',
    'Russian':  '',
    'French':   '',
    'Spanish':  '',
    'Italian':  '',
    'Japanese': ''
  },
  { // 32
    'English':  'Your time: ',
    'German':   'Deine Zeit: ',
    'Russian':  '',
    'French':   '',
    'Spanish':  '',
    'Italian':  '',
    'Japanese': ''
  },
  { // 33
    'English':  ' mistakes were made adding ',
    'German':   ' Fehler wurden gemacht, welche ',
    'Russian':  '',
    'French':   '',
    'Spanish':  '',
    'Italian':  '',
    'Japanese': ''
  },
  { // 34
    'English':  ' seconds to your total.',
    'German':   ' Sekunden zu deiner Gesamtzeit hinzugefügt haben.',
    'Russian':  '',
    'French':   '',
    'Spanish':  '',
    'Italian':  '',
    'Japanese': ''
  },
  { // 35
    'English':  'New Record!',
    'German':   'Neuer Rekord!',
    'Russian':  '',
    'French':   '',
    'Spanish':  '',
    'Italian':  '',
    'Japanese': ''
  },
  { // 36
    'English':  'Congratulations!',
    'German':   'Herzlichen Glückwunsch!',
    'Russian':  '',
    'French':   '',
    'Spanish':  '',
    'Italian':  '',
    'Japanese': ''
  },
  { // 37
    'English':  'Old highscore: ',
    'German':   'Vorheriger Rekord: ',
    'Russian':  '',
    'French':   '',
    'Spanish':  '',
    'Italian':  '',
    'Japanese': ''
  },
  { // 38
    'English':  ' mistake was made adding ',
    'German':   ' Fehler wurde gemacht, welcher ',
    'Russian':  '',
    'French':   '',
    'Spanish':  '',
    'Italian':  '',
    'Japanese': ''
  },
  { // 39
    'English':  'You have finished all levels!',
    'German':   'Du hast alle Level beendet!',
    'Russian':  '',
    'French':   '',
    'Spanish':  '',
    'Italian':  '',
    'Japanese': ''
  },
  { // 40
    'English':  ' finished in ',
    'German':   ' beendet in ',
    'Russian':  '',
    'French':   '',
    'Spanish':  '',
    'Italian':  '',
    'Japanese': ''
  },
  { // 41 Difference in German singular expression.
    'English':  ' seconds to your total.',
    'German':   ' Sekunden zu deiner Gesamtzeit hinzugefügt hat.',
    'Russian':  '',
    'French':   '',
    'Spanish':  '',
    'Italian':  '',
    'Japanese': ''
  },
  { // 42
    'English':  'Editor',
    'German':   'Editor',
    'Russian':  '',
    'French':   '',
    'Spanish':  '',
    'Italian':  '',
    'Japanese': ''
  },
  { // 43
    'English':  'Latest user generated levels.',
    'German':   'Die neuesten benutzergenerierten Level.',
    'Russian':  '',
    'French':   '',
    'Spanish':  '',
    'Italian':  '',
    'Japanese': ''
  },
  { // 44
    'English':  'Play these levels!',
    'German':   'Spiele diese Level!',
    'Russian':  '',
    'French':   '',
    'Spanish':  '',
    'Italian':  '',
    'Japanese': ''
  },
  { // 45
    'English':  'New',
    'German':   'Neu',
    'Russian':  '',
    'French':   '',
    'Spanish':  '',
    'Italian':  '',
    'Japanese': ''
  },
  { // 46
    'English':  'Use the editor to create new levels! The best levels will be added here, soon.',
    'German':   'Erstelle neue Level mit dem Editor! Eure besten Level werden hier demnächst hinzugefügt.',
    'Russian':  '',
    'French':   '',
    'Spanish':  '',
    'Italian':  '',
    'Japanese': ''
  },
  { // 47
    'English':  'No camera found or accessible.',
    'German':   'Keine Kamera vorhanden oder verfügbar.',
    'Russian':  '',
    'French':   '',
    'Spanish':  '',
    'Italian':  '',
    'Japanese': ''
  },
  { // 48
    'English':  'Using the camera deletes your current drawing. Are you sure you want to use the camera?',
    'German':   'Beim Starten der Kamera wird das aktuelle Bild überschrieben. Soll die Kamera benutzt werden?',
    'Russian':  '',
    'French':   '',
    'Spanish':  '',
    'Italian':  '',
    'Japanese': ''
  },
  { // 49
    'English':  'Uploading locks your picture. You won\'t be able to make changes anymore. Do not upload pictures that infringe upon copyrights or any law in your country.',
    'German':   'Nach dem Hochladen wird dein Bild gesperrt und kann nicht mehr verändert werden. Lade keine Bilder hoch, welches urheberrechtlich geschützt ist oder gegen geltendes Recht verstößt.',
    'Russian':  '',
    'French':   '',
    'Spanish':  '',
    'Italian':  '',
    'Japanese': ''
  },
  { // 50
    'English':  'Your uploads.',
    'German':   'Deine hochgeladenen Level.',
    'Russian':  '',
    'French':   '',
    'Spanish':  '',
    'Italian':  '',
    'Japanese': ''
  },
  { // 51
    'English':  'Refresh levels',
    'German':   'Aktualisiere Benutzerlevel',
    'Russian':  '',
    'French':   '',
    'Spanish':  '',
    'Italian':  '',
    'Japanese': ''
  },
  { // 52
    'English':  'Player name',
    'German':   'Spielername',
    'Russian':  '',
    'French':   '',
    'Spanish':  '',
    'Italian':  '',
    'Japanese': ''
  }

];
