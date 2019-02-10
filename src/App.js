import React, { Component } from 'react';

//styles
import './App.scss';
import './stylesheets/styles.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stateTester: true
    }
  }

  render() {
    // {/* MUSIC OPTIONS */}
    // {/* <iframe src="img/ominous.mp3" allow="autoplay" style="display:none"></iframe> */}
    // {/* <audio loop autoplay>
    // <source src="img/ominous.mp3" type="audio/mpeg">
    // Your browser does not support the audio element.
    // </audio> */}
    return (
      <div>
        <div class="splash">
          <pre id="goblinQuest">
            {`
                   ▄████  ▒█████   ▄▄▄▄    ██▓     ██▓ ███▄    █      █████   █    ██ ▓█████   ██████ ▄▄▄█████▓
                  ██▒ ▀█▒▒██▒  ██▒▓█████▄ ▓██▒    ▓██▒ ██ ▀█   █    ▒██▓  ██▒ ██  ▓██▒▓█   ▀ ▒██    ▒ ▓  ██▒ ▓▒
                 ▒██░▄▄▄░▒██░  ██▒▒██▒ ▄██▒██░    ▒██▒▓██  ▀█ ██▒   ▒██▒  ██░▓██  ▒██░▒███   ░ ▓██▄   ▒ ▓██░ ▒░
                 ░▓█  ██▓▒██   ██░▒██░█▀  ▒██░    ░██░▓██▒  ▐▌██▒   ░██  █▀ ░▓▓█  ░██░▒▓█  ▄   ▒   ██▒░ ▓██▓ ░ 
                 ░▒▓███▀▒░ ████▓▒░░▓█  ▀█▓░██████▒░██░▒██░   ▓██░   ░▒███▒█▄ ▒▒█████▓ ░▒████▒▒██████▒▒  ▒██▒ ░ 
                  ░▒   ▒ ░ ▒░▒░▒░ ░▒▓███▀▒░ ▒░▓  ░░▓  ░ ▒░   ▒ ▒    ░░ ▒▒░ ▒ ░▒▓▒ ▒ ▒ ░░ ▒░ ░▒ ▒▓▒ ▒ ░  ▒ ░░   
                   ░   ░   ░ ▒ ▒░ ▒░▒   ░ ░ ░ ▒  ░ ▒ ░░ ░░   ░ ▒░    ░ ▒░  ░ ░░▒░ ░ ░  ░ ░  ░░ ░▒  ░ ░    ░    
                 ░ ░   ░ ░ ░ ░ ▒   ░    ░   ░ ░    ▒ ░   ░   ░ ░       ░   ░  ░░░ ░ ░    ░   ░  ░  ░    ░      
                       ░     ░ ░   ░          ░  ░ ░           ░        ░       ░        ░  ░      ░           
            `}
          </pre>
          <pre id="borfPortrait">{`

                                        ░                                                                      
                   .
                    .       |         .    .
           .  *         -*-          *
                  \\        |         /   .
              .    .            .      /^\\     .              .    .
             *    |\\   /\\    /\\  / / \\ \\  /\\    /\\   /|    *
              .   .  |  \\ \\/ /\\ \\ / /     \\ \\ / /\\ \\/ /  | .     .
             \\ | _ _\\/_ _ \\_\\_ _ /_/_ _\\/_ _ \\_/
              \\  *  *  *   \\ \\/ /  *  *  *  /
                              \` ~ ~ ~ ~ ~  ~\\/~ ~ ~ ~ ~ ~ '                
                                       ,'                         ',                        
                                     ,'          ;       ;          ',                      
                        (           ;             ;     ;             ;     (               
                         )         ;              ;     ;              ;     )              
                        (         ;                ;   ;                ;   (               
                         )    ;   ;    ,,'\`\`\`',,,   ; ;   ,,,'\`\`\`',,    ;   ;               
                        (    ; ',;   '\`          \`',   ,'\`          \`'   ;,' ;              
                         )  ; ;\`,\`',  _--~~~~--__   ' '   __--~~~~--_  ,'\`,'; ;     )       
                        (    ; \`,' ; :  /       \\~~-___-~~/       \\  : ; ',' ;     (        
                   )     )   )',  ;   -_\\  o    /  '   '  \\    o  /_-   ;  ,'       )   (   
                  (     (   (   \`;      ~-____--~'       '~--____-~      ;'  )     (     )  
                   )     )   )   ;            ,\`;,,,   ,,,;',            ;  (       )   (   
                  (     (   (  .  ;        ,'\`  (__ '_' __)  \`',        ;  . )     (     )  
                   )     \\/ ,".). ';    ,'\`        ~~ ~~        \`',    ;  .(.", \\/  )   (   
                  (   , ,'|// / (/ ,;  '        _--~~-~~--_        '  ;, \\)    \\|', ,    )  
                  ,)  , \\/ \\|  \\\\,/  ;;       ,; |_| | |_| ;,       ;;  \\,//  |/ \\/ ,   ,   
                 ",   .| \\_ |\\/ |#\\_/;       ;_| : \`~'~' : |_;       ;\\_/#| \\/| _/ |.   ,"  
                 #(,'  )  \\\\\\#\\ \\##/)#;     :  \`\\/       \\/   :     ;#(\\##/ /#///  (  ',)# ,
                 || ) | \\ |/ /#/ |#( \\; ;     :               ;     ; ;/ )#| \\#\\ \\| / | ( |)
                 \\ |.\\\\ |\\_/#| /#),,\`   ;     ;./\\_     _/\\.;     ;   \`,,(#\\ |#\\_/| //.| / ,
                  \\\\_/# |#\\##/,,'\`       ;     ~~--|~|~|--~~     ;       \`',,\\##/#| #\\_// \\/
                   ##/#  #,,'\`            ;        ~~~~~        ;            \`',,#  #\\##  //
                 ####@,,'\`                 \`',               ,'\`                 \`',,@####|
                 #,,'\`                        \`',         ,'\`                        \`',,###
                 '                               ~~-----~~                               \`'


          `}</pre>
          <pre id="riseOfBorf">
            {`                          ███        ▄█    █▄       ▄████████         ▄████████  ▄█     ▄████████    ▄████████       ▄██████▄     ▄████████      ▀█████████▄   ▄██████▄     ▄████████    ▄████████
                      ▀█████████▄   ███    ███     ███    ███        ███    ███ ███    ███    ███   ███    ███      ███    ███   ███    ███        ███    ███ ███    ███   ███    ███   ███    ███
                        ▀███▀▀██   ███    ███     ███    █▀         ███    ███ ███▌   ███    █▀    ███    █▀       ███    ███   ███    █▀         ███    ███ ███    ███   ███    ███   ███    █▀
                      ███   ▀  ▄███▄▄▄▄███▄▄  ▄███▄▄▄           ▄███▄▄▄▄██▀ ███▌   ███         ▄███▄▄▄          ███    ███  ▄███▄▄▄           ▄███▄▄▄██▀  ███    ███  ▄███▄▄▄▄██▀  ▄███▄▄▄
                      ███     ▀▀███▀▀▀▀███▀  ▀▀███▀▀▀          ▀▀███▀▀▀▀▀   ███▌ ▀███████████ ▀▀███▀▀▀          ███    ███ ▀▀███▀▀▀          ▀▀███▀▀▀██▄  ███    ███ ▀▀███▀▀▀▀▀   ▀▀███▀▀▀
                   ███       ███    ███     ███    █▄       ▀███████████ ███           ███   ███    █▄       ███    ███   ███               ███    ██▄ ███    ███ ▀███████████   ███
                   ███       ███    ███     ███    ███        ███    ███ ███     ▄█    ███   ███    ███      ███    ███   ███               ███    ███ ███    ███   ███    ███   ███
                  ▄████▀     ███    █▀      ██████████        ███    ███ █▀    ▄████████▀    ██████████       ▀██████▀    ███             ▄█████████▀   ▀██████▀    ███    ███   ███
                                                        ███    ███                                                                                            ███    ███
            <br/>
            `}
          </pre>
         <button id="playNow" type="button">PLAY NOW</button>
         <div class="copyright">
           <p>&#169; 2018 LotharSoft Computer Games Inc.</p>
         </div>
        </div>
        <div class="container-fluid">
          {/*ROW 1*/}
          <div class="row picture">
            <div class="col-md-12 ">
            <pre id="borfCastle">{`
                   _                                                                                                                                                                  _
                  /#\\                                                                                                                                                                /#\\
                 /###\\     /\\                                                                           ^                                                                           /###\\     /\\
                /  ###\\   /##\\  /\\                                                                     / \\                                                                         /  ###\\   /##\\  /\\
               /      #\\ /####\\/##\\                                                               ^   _|.|_   ^                                                                   /      #\\ /####\\/##\\
              /  /      /   # /  ##\\             _       /\\                                     _|I|  |I .|  |.|_                                                                /  /      /   # /  ##\\
            // //  /\\  /    _/  /  #\\ _         /#\\    _/##\\    /\\                                \\II||~~| |~~||  /                           _       /\\                        // //  /\\  /    _/  /  #\\ _
            // /   /  \\     /   /    #\\ \\      _/###\\_ /   ##\\__/ _\\                               ~\\~|~~~~~~~|~/~                           /#\\    _/##\\    /\\                // /   /  \\     /   /    #\\ \\
            /  \\   / .. \\   / /   _   { \\ \\   _/       / //    /    \\\\                               \\|II I ..|/                           _/###\\_ /   ##\\__/ _\\              /  \\   / .. \\   / /   _   { \\ \\
            /\\     /    /\\  ...  \\_/   / / \\   } \\ | /  /\\  \\ /  _    /  /    \\ /\\              /\\    |II.    |    /\\                    _/       / //    /    \\\\     /\\     /    /\\  ...  \\_/   / / \\   } \\ |
            _ /  \\  /// / .\\  ..%:.  /... /\\ . \\ {:  \\\\   /. \\     / \\  /   ___   /  \\         /  \\  _|III .  |_  /  \\                  /  /\\  \\ /  _    /  /    \\ /\\  _ /  \\  /// / .\\  ..%:.  /... /\\ . \\ {:
            /.\\ .\\.\\// \\/... \\.::::..... _/..\\ ..\\:|:. .  / .. \\\\  /.. \\    /...\\ /  \\ \\       |-~| /(|I.I I  |)\\ |~-|              \\\\   /. \\     / \\  /   ___   /  \\/.\\ .\\.\\// \\/... \\.::::..... _/..\\ ..\\:|
            /...\\.../..:.\\. ..:::::::..:..... . ...\\{:... / %... \\\\/..%. \\  /./:..\\__   \\     _/(I | +-----------+ |. )\\_       /\\:. .  / .. \\\\  /.. \\    /...\\ /  \\ \\/...\\.../..:.\\. ..:::::::..:..... . ...\\
            .:..\\:..:::....:::;;;;;;::::::::.:::::.\\}.....::%.:. \\ .:::. \\/.%:::.:..\\    \\    \\~-----/____-~-____\\-----~/      / {:... / %... \\\\/..%. \\  /./:..\\__   \\.:..\\:..:::....:::;;;;;;::::::::.:::::.\\
            ::::...:::;;:::::;;;;;;;;;;;;;;:::::;;::{:::::::;;;:..  .:;:... ::;;::::..    \\    |I.III|  /(===)\\  |  .. |      /      }.....::%.:. \\ .:::. \\/.%:::.:..\\::::...:::;;:::::;;;;;;;;;;;;;;:::::;;::
            ;;;;:::;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;];;;;;;;;;;::::::;;;;:.::;;;;;;;;:..  \\   /~~~-----_________---~~~\\     /   ;];;;;;;;;;;::::::;;;;:.::;;;;;;;;:..;;;;:::;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
            ;;;;;;;;;;;;;;ii;;;;;;;;;;;;;;;;;;;;;;;;[;;;;;;;;;;;;;;;;;;;;;;:;;;;;;;;;;;;;:. \\ ##############!!!!!/~~-_%!!!!\\/    [;;;;;;;;;;;;;;;;;;;;;;:;;;;;;;;;;;;;;;;;;;;;;;;;;;ii;;;;;;;;;;;;;;;;;;;;;;;;
            ;;;;;;;;;;;;;;;;;;;iiiiiiii;;;;;;;;;;;;;;};;ii;;iiii;;;;i;;;;;;;;;;;;;;;ii;;;;;:;\\ ~)#################!!!!!/~~--\\_   ;};;ii;;iiii;;;;i;;;;;;;;;;;;;;;ii;;;;;;;;;;;;;;;;;;;;;;iiiiiiii;;;;;;;;;;;;;
            iiii;;;iiiiiiiiiiIIIIIIIIIIIiiiiiIiiiiii{iiIIiiiiiiiiiiiiiiii;;;;;iiiilliiiiiiiii /#####################%%!!!!/     /{iiIIiiiiiiiiiiiiiiii;;;;;iiiilliiiiiiiii;;;iiiiiiiiiiIIIIIIIIIIIiiiiiIiiiiii
            IIIiiIIllllllIIlllIIIIlllIIIlIiiIIIIIIIIIIIIlIIIIIllIIIIIIIIiiiiiiiillIIIllIIII\\,~\\-_____##############%%%!!!!\\     /IIIIlIIIIIllIIIIIIIIiiiiiiiillIIIllIIIIIiiIIllllllIIlllIIIIlllIIIlIiiIIIIIIII
            IIIiiilIIIIIIIllTIIIIllIIlIlIIITTTTlIlIlIIIlIITTTTTTTIIIIlIIllIlIlllIIIIIIITTT /!!!!\\ \\ \\~-_###########%%%!!!!\\      IIIlIITTTTTTTIIIIlIIllIlIlllIIIIIIITTIIIiiilIIIIIIIllTIIIIllIIlIlIIITTTTlIlIl
            IIIIilIIIIITTTTTTTIIIIIIIIIIIIITTTTTIIIIIIIIITTTTTTTTTTIIIIIIIIIlIIIIIIIITTTT /#####!!!!!!!\\~-_#######%%%!!!!!!\\_    IIIIITTTTTTTTTTIIIIIIIIIlIIIIIIIITTTTIIIIilIIIIITTTTTTTIIIIIIIIIIIIITTTTTIIII
            IIIIIIIIITTTTTTTTTTTTTIIIIIIIITTTTTTTTIIIIIITTTTTTTTTTTTTTIIIIIIIIIIIIIITTTTT/#############!!!\\#########%%%!!!!!!\\  IIIIITTTTTTTTTTTTTTIIIIIIIIIIIIIITTTTTIIIIIIIIITTTTTTTTTTTTTIIIIIIIITTTTTTTTII
            `}</pre>
              <pre id="innImage">{`
                         (   )
                          (    )
                           (    )
                          (    )
                            )  )
                           (  (                  /\\
                            (_)                 /  \\  /\\
                    ________[_]________      /\\/    \\/  \\
           /\\      /\\        ______    \\    /   /\\/\\  /\\/\\
          /  \\    //_\\       \\    /\\    \\  /\\/\\/    \\/    \\
   /\\    / /\\/\\  //___\\       \\__/  \\    \\/
  /  \\  /\\/    \\//_____\\       \\ |[]|     \\
 /\\/\\/\\/       //_______\\       \\|__|      \\
/      \\      /XXXXXXXXXX\\                  \\
        \\    /_I_II  I__I_\\__________________\\
               I_I|  I__I_____[]_|_[]_____I
               I_II  I__I_____[]_|_[]_____I
               I II__I  I     XXXXXXX     I
            ~~~~~"   "~~~~~~~~~~~~~~~~~~~~~~~~
              `}</pre>
              <pre id="placeHolder">



















              </pre>
              <pre id="forest">{`
                %%%;
              |  %%%;     %%%~%%%;                                                         %%%     %%%
              # |__/__%%%____/_/~%;%                                                      %%%;     %%%~%%%;  |
              ___%%;______%%;%                                                          ~%;% \\__%%%____\\_\\~%;%
              " " /~ %-//  \\ \\__%#%%_-%%;\`                                                    ~ %-// _____
              |  ~%-/_%\` \\ \\_/%%#%%\`                                                             ~%-/_%\`___
              #  | %%%#%     \\__/%%#%%;%\`,                                                       %%%#%      \\" "
              "| ;%%%;\`                                                                         ;%%%;\`       |
              |	 |                                                                                           |#
              | #|	                                                                    n	             |
              || |	                                                                   / \`\\              |  "
              |  |                                                                        (___:)             |  |
              #  |	                .-'~~~-.                                           """"              |
              "| |	              .'o  oOOOo\`.                                          ||               |#
              '  |	             :~~~-.oOo   o\`.                                        ||               |  "
              |	 |                    \`. \\ ~-.  oOOo.                                       ))	             |'
              "  |    ___             \`.; / ~.  OO:                                        //                | "
              |  |  // __\`\\  o o ~    .'  ;-- \`.o.'                                       ((                 |
              |  | ll ( .) l_) ) \`.  ,'  ; ~~--'~                                          \\\\                |
              ' #|  __\\\\ \\__/ /.    ;  ;                                                   ))                |' #
              '\\ _/_/________/^^. \\\\;_\\\\//___\\|/.  \\\\/ ._\\//_/__/  ,\\_//__\\\\/.   \\_//__/_  ||	\\\\//___\\|/. /
              """""                                  """"""""""""
              `}</pre>
              <pre id="throneRoom">{`
               /|     -_-                                             _-  |\\                   (    )              /|     -_-                                             _-  |\\     
              / |_-_- _                                         -_- _-   -| \\                 ((((()))            / |_-_- _                                         -_- _-   -| \\ 
                |                            _-  _--                      |                   |o\\ /o)|              |                            _-  _--                      |   
                |                            ,                            |.                  ( (  _’).             |                            ,                            |.  
                |      .-'\`\`\`\`\`\`\`\`'.        '(\`        .-'\`\`\`\`\`\`\`'-.      |.                   (._.  /\\__.          |      .-'\`\`\`\`\`\`\`\`'.        '(\`        .-'\`\`\`\`\`\`\`'-.      |.   
                |    .\` |           \`.      \`)'      .\` |           \`.    |                   ,\\___,/ '  ‘).        |    .\` |           \`.      \`)'      .\` |           \`.    |  
                |   /   |   ()        \\      U      /   |    ()       \\   |.    '.,_,,       (  .- .   .    ).      |   /   |   ()        \\      U      /   |    ()       \\   |.
                |  |    |    ;         | o   T   o |    |    ;         |  |.     \\   \\\\     ( '        )(    ).     |  |    |    ;         | o   T   o |    |    ;         |  |.
                |  |    |     ;        |  .  |  .  |    |    ;         |  |.      \\   \\\\    \\.  _.__ ____( .  |     |  |    |     ;        |  .  |  .  |    |    ;         |  |.
                |  |    |     ;        |   . | .   |    |    ;         |  |.       \\  /\\\\   .(   .'  /\\  '.  ).     |  |    |     ;        |   . | .   |    |    ;         |  |.
                |  |    |     ;        |    .|.    |    |    ;         |  |         \\(  \\\\.-' ( /    \\/    \\).      |  |    |     ;        |    .|.    |    |    ;         |  |
                |  |    |____;_________|     |     |    |____;_________|  |           '  ()) _’.-|/\\/\\/\\/\\/\\|.      |  |    |____;_________|     |     |    |____;_________|  | 
                |  |   /  __ ;   -     |     !     |   /     \`'() _ -  |  |.             '\\\\ .( |\\/\\/\\/\\/\\/|.       |  |   /  __ ;   -     |     !     |   /     \`'() _ -  |  |.   
                |  |  / __  ()        -|        -  |  /  __--      -   |  |                '((  \\    /\\    /.       |  |  / __  ()        -|        -  |  /  __--      -   |  |
                |  | /        __-- _   |   _- _ -  | /        __--_    |  |.               ((((  ‘.__\\/__.’).       |  | /        __-- _   |   _- _ -  | /        __--_    |  |.
                |__|/__________________|___________|/__________________|__|.                ((,) /   ((()   ).      |__|/__________________|___________|/__________________|__|.  
               /                                             _ -        lc \\                 "..-,  (()("   /.     /                                             _ -        lc \\
              /   -_- _ -             _- _---                       -_-  -_ \\                 _//.   ((() ."      /   -_- _ -             _- _---                       -_-  -_ \\ 
                                                                                          _ //,/"     ((( ', _.
                                                                                                       ((  ).
                                                                                                        / /.
                                                                                                      _/,/‘.
                                                                                                     /,/,"
              `}</pre>


            </div>
          </div>


          {/*ROW 2*/}
          <div class="row justify-content-xl-center">

            {/*STAT BAR COLUMN*/}
            <div class="col-md-auto">
              <div class="characterBar">
                <div>
                  <pre id="characterPortrait">
                    .----.
                   _/    \_
                  '---''---'
                   |\^_^/|
            \\_\    _)-( _
             '- \  /\ _ / \
               '/\/        \
               (___)|___| ) \
                    |_#_|(___)
                   /     \ ( (_
                   \/\/\/\) \\
                   | / \ |
                   |(   \|
                  _|_)__|_\_
                  )...()...(
                   | (   \ |
                .-'__,)  (  \
                          '\_-,
                  </pre>
                </div>
                <div class="characterStatsDisplay">
                  <p><span id="characterName"></span></p>
                  <p>Strength: <span id="strengthStat"></span></p>
                  <p>Agility: <span id="agilityStat"></span></p>
                  <p>Intelligence: <span id="intelligenceStat"></span></p>
                  <p>Charisma: <span id="charismaStat"></span></p>
                </div>
              </div>
            </div>

            <div class="col">
              {/*CHARACTER CREATION*/}
              <div id="createName">
                <label for="nameInput">Give us your name, warrior:
                  <input type="text" class="nameInput" />
                </label>
                <button id="nameButton" type="button">Submit</button>
              </div>

              <div id="createStats">

                <div id="statResultDisplay">

                </div>
                <div>
                  <span id="rollText"></span>
                </div>
                <div>
                  <button id="diceRollButton" type="button">Roll!</button>
                </div>

                <div class="startButton">
                  <button id="start" type="button">Begin!</button>
                </div>

              </div>

              <div class="printText">

              </div>
              <div class="testButton">

              </div>
              <div class="current-story">

              </div>

              {/*STORY RELATED CONTENT*/}
              <div class="hidden-story">
                <div id="1">
                  {/* Choose a companion */}
                  <p class="hidden">You find yourself in the town pub. You approach the barkeep and ask for a pint of grog. He passes you a frothy mug. You take a hefty swig. It helps, but it doesn’t heal the pain. You are mourning the loss of your true love. They were taken in the night. You know little of the mysterious circumstances surrounding their disappearance. The only clue you have is a piece of torn parchment that was left in their room. It is scribbled with a single word: Borf. You read the word aloud as you try to make sense of this tragedy.

                  A man appears beside you and startles you from your lament. He is a large, disheveled bloke who reeks of alcohol. “Why do you speak the name of the Goblin King?” he slurs. With sadness and confusion in your eyes, you show him the parchment. “Borf is the most evil creature in the land. There is a bounty for his head,” he declares as he brandishes a sword. “I plan to capture him myself!”

                  Another man overhears your conversation and interrupts. “No ordinary man stands a chance against the Goblin King,” he says. “He wields powers of darkness.” This character is a scholarly gentleman with an arm full of texts. “I’ve studied the ancient texts, and I know all about him. The key is his magic staff. I have developed a plan to acquire it.”

                  At that moment, a flaming arrow comes crashing through the window of the pub and lands on your table. Chaos erupts in the bar and you have to make a run for it. Both of these men have knowledge of the Goblin King, who may have had something to do with the disappearance of your love. You have nothing left to lose, so you decide to find this Borf. Which of these two adventurers will you follow on your new quest: The drunk who seeks a bounty or the scholar who seeks knowledge?</p>
                  <button type="button" class="a">Drunk</button> {/* go to page 2*/}
                  <button type="button" class="b">Scholar</button> {/* go to page 3*/}
                </div>
                <div id="2">
                  {/* Drunk Riddle */}
                  <p class="hidden">After a few more pints and shouting conversation the drunkard is finally ready to go. He picks up his giant frame and drags it away from the bar. You leave the pub with the drunkard by your side and embark on your adventure. He tells you once again that he will kill Borf and steal his treasure. He continues on at length about his plans to then buy a horse, to maybe buy a compass and to somehow attract a suitable partner. His motivations are simple and despite his intimidating demeanor he seems very good natured. He stops briefly beside the path to make sick in a bush.

                    As you approach the edge of town, you encounter an old hag. She prolly has had a very rough life, or she's like 200 years old. It seems she is blocking the path, but not with her sack of bones. With no provocation she says: "Good evening travelers. My name is Vurda. If you cannot solve my riddle something bad will happen." She recites the riddle with boredom. It seems this is not her first riddle rodeo.
                    "Lovely and round,
                    I shine with pale light,
                    grown in the darkness,
                    A lady's delight."

                    Which answer do you choose?</p>
                  <button type="button" class="a">Moon</button> {/* go to page 4 */}
                  <button type="button" class="b">Pearl</button> {/* go to page 9 */}
                </div>
                <div id="3">
                    {/* Scholar Riddle */}
                  <p class="hidden">You push through the panicked crowd as you hurry out of the pub in pursuit of the scholar. You barely make it out before the building erupts in flames. “Do you wish to join me on my quest?” the scholar asks. You nod. His knowledge could dispel the mystery of these tragic events. “Fantastic!” he exclaims. “These ancient scrolls tell of a castle in the forest where Borf resides. That is our destination.”

                      Intrigued by this new discovery, you follow the scholar out of town and toward the forest. As you approach the drawbridge that leads out of town, you encounter an old hermit. He is hunched over and draped in a dark cloak. “You may not pass unless you answer my riddle,” he says. You are in a hurry, but he seems harmless, so you agree.

                      *Riddle*
                      There are three apples and you take two. How many apples do you have?</p>
                  <button type="button" class="a">Two</button> {/* go to page 8*/}
                  <button type="button" class="b">One</button> {/* go to page 5*/}

                </div>

                <div id="4">
                  {/* Stats Test */}
                  <p class="hidden">You have answered the stupid riddle with the wrong choice. They seem equally viable but this old hag, er, Vurda only accepts the answer "Pearls". She cackles, as she would, and tells you that her big brother Borf will be delighted she prevented you from leaving town. At this point you realize you don't know the name of the drunkard. You have spent a few hours conversing about fate and it's cruel tricks; about life and the dreams you have. You have made a true friend that has a shared interest in defeating Borf. If you survive this encounter with Vurda (whomst'nt name no one needs to know ever, whomst've is a damned goblin related to Borf) you should maybe introduce yourself??
                    Well, I guess you need to push this old hag/goblin aside and continue on your journey, eh? You do so with ease and hear her mumbling something behind you. Shoot! She has cast a spell! (More cackles.) If you fail this charisma stat test your fate will be even less fortunate than usual lol.</p>
                  <button type="button" class="a">Fail</button> {/* go to page 7 */}
                  <button type="button" class="b">Pass</button> {/* go to page 5 */}
                </div>

                <div id="5">
                  {/* Stats Test */}
                  <p class="hidden">“Fools!” the hermit yells, as he rises from his crouched position. His cloak fall away to reveal the form of a demon. “You have chosen poorly! Now you shall perish!” says the demon as he makes his way toward you.

                    The outlook is grim. He is a massive, dark creature. Your only option is to run. Make an agility roll to run for your life!</p>
                  <button type="button" class="a">Pass</button> {/* go to page 8 */}
                  <button type="button" class="b">Fail</button> {/* go to page 7 */}
                </div>
                <div id="6">
                  {/* Death */}
                  <p class="hidden">Fortune does not smile upon thee. It has been a long journey and you have shown yourself to be a potentially excellent hero. Really. But you have just made a fatal error. It's over. It's done. Caput. Alas, you are...

                    ...NOW DEAD. Rest in Peace and Thanks for Playing! T_T

                    Give it another go?</p>
                  <button type="button" class="replay">Play Again?</button> {/* go to splash page */}
                </div>
                <div id="7">
                  {/* Death */}
                  <p class="hidden">Your speed is no match for the quickness of the dark fiend. A dark cloud envelopes you. You hear screams. You are unsure whether the voice belongs to you or the lost souls who came before you. You find it hard to breathe. The world begins to go dark. You can feel the grip of death closing in on you. Your final thought is that maybe you will see your beloved on the other side….

                    Game over.</p>
                    <button type="button" class="replay">Play Again?</button> {/* go to splash page */}
                  </div>
                  <div id="8">
                    {/* Outside Forest - Artemisia */}
                    <p class="hidden">You sprint across the bridge, leaving the hermit far behind. Departing the town, your sadness is replaced with determination. You are one step closer to finding out what happened to your lost love. You push forward through the evening mist until you happen upon a dark and scary forest. “Our destination is just beyond this forest,” Artemisia says as he checks the map. You shiver as you hear the unknown noises of the forest before you.</p>
                    <button type="button" class="a">Into the Forest</button> {/* go to page 10*/}

                  </div>
                  <div id="9">
                    {/* Outside Forest - Bootstrap */}
                    <p class="hidden">Leaving the town behind, your sadness is replaced with determination. You are one step closer to finding out what happened to your lost love. You push forward through the evening mist until you happen upon a dark and scary forest. “I know these woods well,” Bootstrap says as he takes a swig from his flask. You shiver as you hear the unknown noises of the forest before you. “The forest is treacherous, but it is the shortest way there."</p>
                    <button type="button" class="a">Into the Forest</button> {/* go to page 11*/}

                  </div>
                  <div id="10">
                    {/* Inside Forest - Artemisia */}
                    <p class="hidden">You make your way into the dimly-lit forest and immediately regret your decision. You can see menacing eyes looking at you from all around the wood. You pray these are just woodland creatures as you push further into the brush. All of the sudden, you hear a loud snarl that stops you in your tracks. Looking around, you see a pair of goblin sentries patrolling the woods. They are hideous, armored creatures wielding axes. “Stay very still,” Artemisia whispers. “I don’t think they’ve seen us. We should avoid confrontation.” If you duck and hide, you can lay low and wait until they pass, but who knows how long that will take. You’d like to leave this sinister place as soon as possible. If you stay very quiet, you may be able to sneak past them undetected. Do you choose to hide and wait for them to pass or choose to sneak around them?</p>
                    <button type="button" class="a">Hide</button> {/* go to page 19*/}
                    <button type="button" class="b">Sneak Away</button> {/* go to page 12*/}
                  </div>
                  <div id="11">
                    {/* Inside Forest - Bootstrap */}
                    <p class="hidden">You make your way into the dimly-lit forest and immediately regret your decision. You can see menacing eyes looking at you from all around the wood. You pray these are just woodland creatures as you push further into the brush. Bootstrap unsheathes his dagger and uses it to hack and slash through the foliage. All of the sudden, you hear a loud snarl that stops you in your tracks. Looking around, you see a pair of goblin sentries patrolling the woods. They are hideous, armored creatures wielding axes. “Goblins,” whispers Bootstrap. “Strong beasts, but not very bright. I say we take them down.” You aren’t looking for a fight. Lucky for you, they haven’t noticed you yet. If you duck and hide, you can lay low and wait until they pass, but who knows how long that will take. You’d like to leave this sinister place as soon as possible. If you stay very quiet, you may be able to sneak past them undetected. Do you choose to hide and wait for them to pass or choose to sneak around them?</p>
                    <button type="button" class="a">Hide</button> {/* go to page 20*/}
                    <button type="button" class="b">Sneak Away</button> {/* go to page 13*/}
                  </div>
                  <div id="12">
                    {/* Goblin Battle - Artemisia */}
                    <p class="hidden">*CRACK* You attempt to sneak away, but Artemisia steps on a branch. The sound of the twig snapping echoes through the forest. The goblins roar as they swing around to discover you there. They raise their weapons and begin advancing toward you. “We are done for! Gods save us!” Artemisia cries. Do you choose to stay and fight or attmept to run away?</p>
                    <button type="button" class="strength option1 stat" value="30">Fight</button> {/* success = page 15, fail = page 18*/}
                    <button type="button" class="agility option2 stat" value="20">Run</button> {/* success = page 14, fail = page 18 */}
                  </div>
                  <div id="13">
                    {/* Goblin Battle - Bootstrap */}
                    <p class="hidden">*CRACK* You attempt to sneak away, but Bootstrap clumsily steps on a branch. The sound of the twig snapping echoes through the forest. The goblins roar as they swing around to discover you there. They raise their weapons and begin advancing toward you. “Ay! I’ve been looking for a fight. These evil fiends will taste my blade!” Bootstrap cries. Do you choose to stay and fight or attempt to run away?</p>
                    <button type="button" class="strength option1 stat" value="30">Fight</button> {/* success = page 17, fail = page 18*/}
                    <button type="button" class="agility option2 stat" value="20">Run</button> {/* success = page 16, fail = page 18 */}
                  </div>
                  <div id="14">
                    {/* Battle Success - Run- Artemisia*/}
                    <p class="hidden">The goblins are strong and their size formidable. Without a weapon of your own, you fear certain death. You climb a nearby tree to escape their slimy grip. You breathe a sigh of relief as you find yourself well out of their reach. Thank goodness goblins cannot climb. The tree begins to shake and you hold on for dear life. Looking down, you see the goblins are hacking away at the tree with their axes. You begin to say your final prayers as the goblin’s axe makes a slicing blow to the tree. The tree falls to the forest floor with a deafening thud. You land in a bush, badly scratched and short of breath. In a glorious turn of fate, you rise to see that the tree has fallen and crushed your goblin adversaries. You thank the gods that the goblins were not nearly as smart as they were strong. You quickly move on through the forest.</p>
                    <button type="button" class="a">Continue</button> {/* go to page 49  */}
                  </div>
                  <div id="15">
                    {/* Battle Success - Fight - Artemisia*/}
                    <p class="hidden">You win the battle. You claim the spoils of victory as you strip them of their armor and weapons. After all, they won’t be needing it anymore. You quickly move on through the forest.</p>
                    <button type="button" class="a">Continue</button> {/* go to page 49*/}
                  </div>
                  <div id="16">
                    {/* Battle Success - Run- Bootstrap*/}
                    <p class="hidden">The goblins are strong and their size formidable. Without a weapon of your own, you fear certain death. You climb a nearby tree to escape their slimy grip. You breathe a sigh of relief as you find yourself well out of their reach. Thank goodness goblins cannot climb. The tree begins to shake and you hold on for dear life. Looking down, you see the goblins are hacking away at the tree with their axes. You begin to say your final prayers as the goblin’s axe makes a slicing blow to the tree. The tree falls to the forest floor with a deafening thud. You land in a bush, badly scratched and short of breath. In a glorious turn of fate, you rise to see that the tree has fallen and crushed your goblin adversaries. You thank the gods that the goblins were not nearly as smart as they were strong. You quickly move on through the forest.</p>
                    <button type="button" class="a">Continue</button> {/* go to page 21 */}
                  </div>
                  <div id="17">
                    {/* Battle Success - Fight - Bootstrap*/}
                    <p class="hidden">You win the battle. You claim the spoils of victory as you strip them of their armor and weapons. After all, they won’t be needing it anymore. You quickly move on through the forest.</p>
                    <button type="button" class="a">Continue</button> {/* go to drawbridge 21*/}
                  </div>
                  <div id="18">
                    {/* Battle Fail */}
                    <p class="hidden">The goblins are strong and their size formidable. There seems to be no escape, so you must turn and face them. Without a weapon of your own, you fear certain death. You frantically search around you for something to use in battle. You grab a large rock and attempt to hurl it at your foe. The stone glances off the heavily armored creature. Your feeble attack has only angered the goblins more. They lunge at your with their battle axes. The blade makes contact and slices into your shoulder. You cry out as the searing pain overtakes your body. You collapse to the ground as the goblins tower over you. You pray for a swift death as the goblins claws begin to rip into you. Your final thought is of your beloved. Did they suffer the same fate at the hands of the goblins? As the world goes black, you are comforted at the possibility of being with your beloved in the afterlife. Game over!</p>
                    <button type="button" class="replay">Play Again</button> {/* go to splash page */}
                  </div>
                  <div id="19">
                    {/* Hide Artemesia--*/}
                    <p class="hidden">You remain as quiet as possible as you duck in the underbrush. Unfortunately, you chose a hiding place that was also home to a nest of poisonous spiders. You stay still and bite your tongue while enduring the searing pain of the spider bites. After what seems like hours, the goblin sentries are finally out of sight. You have evaded danger for now, but the poison has taken a toll on your health. You wince through the pain as you continue through the forest.</p>
                    <button type="button" class="a">Continue</button> {/* go to page 41 */}
                  </div>
                  <div id="20">
                    {/* Hide Bootstrap*/}
                    <p class="hidden">You remain as quiet as possible as you duck in the underbrush. Unfortunately, you chose a hiding place that was also home to a nest of poisonous spiders. You stay still and bite your tongue while enduring the searing pain of the spider bites. After what seems like hours, the goblin sentries are finally out of sight. You have evaded danger for now, but the poison has taken a toll on your health. You wince through the pain as you continue through the forest.</p>
                    <button type="button" class="a">Continue</button> {/* go to page 30 */}
                  </div>
                  <div id="21">
                    <p class="hidden">You and Bootstrap emerge from the dense forest and the strange purple fog clears. You take a breath of air--naturally expecting the usual fresh, unpolluted breeze of this pre-industrial age--but a indescribable stench has taken it’s place. You follow the stench’s direction and a castle appears on the horizon, erupting from the landscape like a pimple. It's the magnificent and terrible castle of the Goblin King Borf. You and Bootstrap approach. The stench holds you back like a wall, but you plug your nose and push on. Bootstrap doesn’t seem bothered by it at all. A moat flows around the castle, but instead of water a brown sewage burbles slowly. Bootstrap pushes a branch out of the way to reveal a path to a large brown, stone chute emptying into the moat from underneath the castle where the sun dost ne'er shineth.
                      “It’s our only way in,” Bootstrap tells you, as if he’s been here before. You’ve heard tales of the diseased phantoms of goblin excrement, as putrid and potent as poison. Bootstrap dips his flask in it, and you don’t even want to imagine why. 

                      You think you may see another way. If you monkey climb across the beam under the drawbridge and swing up onto that stone there that seems to be poking out a bit, a small window on the other side could just barely fit your broad shoulders. 
                      Which path will you choose?</p>
                    <button type="button" class="stat agility option1" Value="41">Bridge</button> {/* go to page 23 */}
                    <button type="button" class="b">Sewer</button> {/* go to page 22*/}
                  </div>
                  <div id="22">
                    <p class="hidden">You realize you were kidding yourself that you could pull off such a stunt. And surely Bootstrap would not have followed.   

                      The sewer is not the worst place you’ve ever been. After all, at least it's not promising to be anything it's not. 

                      You slip and fall and slide a good twenty feet before scrambling back to your feet. You've been soiled. Oh well. After the loss of your love you now look on the outside like you feel on the inside. 

                      You journey deep into the sewer and find a set of holes several feet above you letting in light, just big enough to squeeze through.</p>
                    <button type="button" class="a">Climb up</button> {/* go to page 24 */}
                    <button type="button" class="b">Wait under hole</button> {/* go to page 25 */}
                  </div>
                  <div id="23">
                    <p class="hidden">You immediately fall into the moat of sewage. How did you ever think you could have pulled that off? Bootstrap laughs at you, but he's not spic and span either. You wallow over to him as best you can, and climb up to the sewer. You’re covered from head to toe, but after the loss of your love you now look on the outside like you feel on the inside. 

                      You journey deep into the sewer and find a set of holes several feet above you letting in light, just big enough to squeeze through.</p>
                    <button type="button" class="a">Climb up</button> {/* go to page 24*/}
                    <button type="button" class="b">Wait under hole</button> {/* go to page 25*/}
                  </div>
                  <div id="24">
                    <p class="hidden">You emerge to find a giant goblin with his pants down, getting ready to sit on your head. The goblin turns around with enraged frustration, and grabs you by the neck. You and Bootstrap are carried off and thrown into a dungeon cell. 

                      You are made to kneel, shackled with a rusty chain against the wall. Sharp bones of the previous inhabitant poke holes in your pants and lacerate your shins and your gluteus maximus. The guard somehow smells worse than the sewage, and is dozing off outside the cell. 

                      'Well, I guess it’s finally o’er,” Bootstrap says to you with glee as he prepares to drink from his flask. 

                      “Wait,” you say to him before he poisons himself. “There’s a way.”</p>
                    <button type="button" class="stat charisma option1" value = "25">Talk to guard</button> {/* go to page 34*/}
                    <button type="button" class="stat agility option2" value = "25">Squeeze out of shackles</button> {/* go to page 34*/}
                    <button type="button" class="stat intelligence option3" value = "25">Use bones to pick lock</button> {/* go to page 34*/}
                    <button type="button" class="stat strength option4" value = "25">Break Chains</button> {/* go to page 34*/}
                  </div>
                  <div id="25">
                    <p class="hidden">One of the holes above you darkens, and a rude noise is followed by a rush of waste which fills your eye sockets. You wipe your eyes and see the hole covered above you. What do you do?</p>
                    <button type="button" class="a">Stick sword in hole</button> {/* go to page 27*/}
                    <button type="button" class="b">Wait under hole</button> {/* go to page 28*/}
                  </div>
                  <div id="26">
                    <p class="hidden">A pair of goblin guards see you, drop their tankards of brown ale and they splatter and splash across the cobblestone hall, and they run after you at a surprising speed. They grab you by the hair and throw you in a cell. 

                      You are made to kneel, shackled with a rusty chain against the wall. Sharp bones of the previous inhabitant poke holes in your pants and lacerate your shins and your gluteus maximus. The guard somehow smells worse than the sewage, and is dozing off outside the cell. 

                      'Well, I guess it’s finally o’er,” Bootstrap says to you with glee as he prepares to drink from his flask. 

                      “Wait,” you say to him before he poisons himself. “There’s a way.”</p>
                    <button type="button" class="stat charisma option1" value = "25">Talk to guard</button> {/* go to page 34*/}
                    <button type="button" class="stat agility option2" value = "25">Squeeze out of shackles</button> {/* go to page 34*/}
                    <button type="button" class="stat intelligence option3" value = "25">Use bones to pick lock</button> {/* go to page 34*/}
                    <button type="button" class="stat strength option4" value = "25">Break Chains</button> {/* go to page 34*/}
                  </div>
                  <div id="27">
                    <p class="hidden">You hear a violent scream, and a sinewy arms reaches down and grabs you by the hair, yanking you up through the hole. You and Bootstrap are carried off and thrown into a dungeon cell.   

                      You are made to kneel, shackled with a rusty chain against the wall. Sharp bones of the previous inhabitant poke holes in your pants and lacerate your shins and your gluteus maximus. The guard somehow smells worse than the sewage, and is dozing off outside the cell. 

                      'Well, I guess it’s finally o’er,” Bootstrap says to you with glee as he prepares to drink from his flask. 

                      “Wait,” you say to him before he poisons himself. “There’s a way.”</p>
                    <button type="button" class="stat charisma option1" value = "25">Talk to guard</button> {/* go to page 34*/}
                    <button type="button" class="stat agility option2" value = "25">Squeeze out of shackles</button> {/* go to page 34*/}
                    <button type="button" class="stat intelligence option3" value = "25">Use bones to pick lock</button> {/* go to page 34*/}
                    <button type="button" class="stat strength option4" value = "25">Break Chains</button> {/* go to page 34*/}
                  </div>
                  <div id="28">
                    <p class="hidden">The goblin leaves, and the holes are once again clear. You climb up into the goblin latrine and peer out the door. You are free in Borf's halls. The hallway leads off in two directions.</p>
                    <button type="button" class="a">Left</button> {/* go to page 39*/}
                    <button type="button" class="b">Right</button> {/* go to page 40*/}
                  </div>
                  <div id="29">
                    <p class="hidden">You and Bootstrap emerge from the forest in full Goblin Armor and smeared with waste and dried blood, but even with the accoutrement you make a scrawny excuse for goblins. 

                      An invisible cloud of stench leads you down the road to the Goblin King Borf’s Castle, erupting out of the landscape like a pimple. 

                      The castle's drawbridge is down. A single goblin guard is playing checkers against himself. A fly becomes trapped in his ear wax. The goblin reaches up and pulls a few flies from his ear gunk and tosses 'em in his mouth like caramel corn. Bootstrap licks his hairy lips which makes bile creep up your throat. But your lost love is all that’s on your mind. 

                      The goblin looks up dumbly from his game. You must think quickly. What will you do? 

                      You could run past him, but he's blocking the way. 

                      You could fight him, but he looks quite strong. 

                      You could hide, but unless he's really as stupid as he looks he's probably seen you. 

                      You could talk to him and try to convince him you're goblins.  
                      Or you could just walk by casually as if your confidence alone could fool him.</p>
                    <button type="button" class="stat agility option1" value = "25">Dash through</button> {/* go to page true 26 for false 30 */}
                    <button type="button" class="stat strength option2" value = "25">Fight</button> {/* go to page 26 for true 31 false */}
                    <button type="button" class="stat intelligence option3" value = "25">Hide</button> {/* go to page go to page 26 for true 32 false */}
                    <button type="button" class="stat charisma option4" value = "25">Talk</button> {/* go to page go to page 26 for true 33 false */}
                    <button type="button" class="a">Walk by casually</button> {/* go to page stat charisma option 4 value <= 40*/}

                  </div>
                  <div id="30">
                    <p class="hidden">Your dash has failed. The goblin’s checkers scatter across the drawbridge, and he runs after you at a surprising speed. He grabs you by the hair and throws you in a cell. 

                      You are made to kneel, shackled with a rusty chain against the wall. Sharp bones of the previous inhabitant poke holes in your pants and lacerate your shins and your gluteus maximus. The guard smells worse than sewage, and is dozing off outside the cell.  
                      'Well, I guess it’s finally o’er,” Bootstrap says to you with glee as he prepares to drink from his flask. 

                      “Wait,” you say to him before he poisons himself. “There’s a way.”</p>
                    <button type="button" class="stat charisma option1" value = "25">Talk to guard</button> {/* go to page true 34 false 30 */}
                    <button type="button" class="stat agility option2" value = "25">Squeeze out of shackles</button> {/* go to page true 34 false 30 */}
                    <button type="button" class="stat intelligence option3" value = "25">Use bones to pick lock</button> {/* go to page true 34 false 30 */}
                    <button type="button" class="stat strength option4" value = "25">Break Chains</button> {/* go to page page true 34 false 30 */}
                  </div>
                  <div id="31">
                    <p class="hidden">You fail to defeat the guard. The goblin’s checkers scatter across the drawbridge, and he runs after you at a surprising speed. He grabs you by the hair and throws you in a cell. 

                      You are made to kneel, shackled with a rusty chain against the wall. Sharp bones of the previous inhabitant poke holes in your pants and lacerate your shins and your gluteus maximus. The guard smells worse than sewage, and is dozing off outside the cell.  
                    'Well, I guess it’s finally o’er,” Bootstrap says to you with glee as he prepares to drink from his flask. 

                    “Wait,” you say to him before he poisons himself. “There’s a way.”</p>
                    <button type="button" class="stat charisma option1" value = "25">Talk to guard</button> {/* go to page true 34 false 31 */}
                    <button type="button" class="stat agility option2" value = "25">Squeeze out of shackles</button> {/* go to page true 34 false 31 */}
                    <button type="button" class="stat intelligence option3" value = "25">Use bones to pick lock</button> {/* go to page true 34 false 31 */}
                    <button type="button" class="stat strength option4" value = "25">Break Chains</button> {/* go to page page true 34 false 31 */}
                  </div>
                  <div id="32">
                    <p class="hidden">The Goblin sees through your shoddy disguise. The goblin’s checkers scatter across the drawbridge, and he runs after you at a surprising speed. He grabs you by the hair and throws you in a cell. 

                      You are made to kneel, shackled with a rusty chain against the wall. Sharp bones of the previous inhabitant poke holes in your pants and lacerate your shins and your gluteus maximus. The guard smells worse than sewage, and is dozing off outside the cell.  
                      'Well, I guess it’s finally o’er,” Bootstrap says to you with glee as he prepares to drink from his flask. 

                    “Wait,” you say to him before he poisons himself. “There’s a way.”</p>
                    <button type="button" class="stat charisma option1" value = "25">Talk to guard</button> {/* go to page true 34 false 32 */}
                    <button type="button" class="stat agility option2" value = "25">Squeeze out of shackles</button> {/* go to page true 34 false 32 */}
                    <button type="button" class="stat intelligence option3" value = "25">Use bones to pick lock</button> {/* go to page true 34 false 32 */}
                    <button type="button" class="stat strength option4" value = "25">Break Chains</button> {/* go to page page true 34 false 32 */}
                  </div>
                  <div id="33">
                    <p class="hidden">You fail to convince the guard of your goblin hood. The goblin’s checkers scatter across the drawbridge, and he runs after you at a surprising speed. He grabs you by the hair and throws you in a cell. 

                      You are made to kneel, shackled with a rusty chain against the wall. Sharp bones of the previous inhabitant poke holes in your pants and lacerate your shins and your gluteus maximus. The guard smells worse than sewage, and is dozing off outside the cell. 

                      'Well, I guess it’s finally o’er,” Bootstrap says to you with glee as he prepares to drink from his flask. 

                      “Wait,” you say to him before he poisons himself. “There’s a way.”</p>
                    <button type="button" class="stat charisma option1" value = "25">Talk to guard</button> {/* go to page true 34 false 33 */}
                    <button type="button" class="stat agility option2" value = "25">Squeeze out of shackles</button> {/* go to page true 34 false 33 */}
                    <button type="button" class="stat intelligence option3" value = "25">Use bones to pick lock</button> {/* go to page true 34 false 33 */}
                    <button type="button" class="stat strength option4" value = "25">Break Chains</button> {/* go to page page true 34 false 3 */}
                  </div>
                  <div id="34">
                    <p class="hidden">You make it out of the shackles, and now you are loose in your cell.  
                      Among the pile of bones a huge goblin femur is cracked into a sharp weapon. 
                      Outside the guard snoozes, and his keys hang jangly from his belt, just within reach.  
                      In the upper corner of the cell, behind some cobwebs, a cryptic code has been scrawled in arcane mathematical symbols.</p>
                    <button type="button" class="stat charisma option1" value = "25">Talk to guard</button> {/* go to page true 38 false 34 */}
                    <button type="button" class="stat agility option2" value = "25">Steal keys</button> {/* go to page true 36 false 34 */}
                    <button type="button" class="stat intelligence option3" value = "25">Decipher code</button> {/* go to page true 37 false 34*/}
                    <button type="button" class="stat strength option4" value = "25">Stab guard</button> {/* go to page true 35 false 34*/}
                  </div>
                  <div id="35">
                    <p class="hidden">You use your strength to pierce the goblin’s chest from the back all the way out the front. He jumps up, but the bone gets stuck in the bars and the Goblin convulses and gurgles, eventually coming to sweet, sweet rest after a pitiful, pitiful life. You grab the keys and you and Bootstrap are free in the halls of Borf’s castle.  
                      Which way do you go?</p>
                    <button type="button" class="a">Left</button> {/* go to page 40*/}
                    <button type="button" class="b">Right</button> {/* go to page 39*/}
                  </div>
                  <div id="36">
                    <p class="hidden">You use your agile fingers to silently slip the ring of keys from the slumbering goblin’s belt. For a moment you imagine the punishment this goblin will receive for letting us go, and you don't feel sorry for him. His death would be a sweet, sweet relief from a pitiful, pitiful life.    
                      You insert the key with such supple delicacy your reminded of your lost love. “I like the way you use your hands,” Bootstrap whispers as he sucks in some drool. Your nimble fingers continue their magic and turn the key with nary a jangle.  
                      You and Bootstrap are free in the halls of Borf’s castle.  
                      Which way do you go?</p>
                    <button type="button" class="a">Left</button> {/* go to page 40*/}
                    <button type="button" class="b">Right</button> {/* go to page 39*/}
                  </div>
                  <div id="37">
                    <p class="hidden">Your advanced intelligence allows you to decrypt the hidden message. “Behind the fourth stone on the left lies a carved goblin bone capable of opening the door when inserted at a 16 degree angle.” 

                      You uncover the bone key and your huge brain estimates the correct angle. The lock clicks open, and the sleeping giant snorts, and falls back asleep. 

                      You and Bootstrap are free in the halls of Borf’s castle. 

                    Which way do you go?</p>
                    <button type="button" class="a">Left</button> {/* go to page 40*/}
                    <button type="button" class="b">Right</button> {/* go to page 39*/}
                  </div>
                  <div id="38">
                    <p class="hidden">You use your rugged worldliness on the simple Goblin. 
                      “There is more world out there than you know,” you tell the pitiful excuse for a creature who doesn't deserve any amount of anthropomorphizing. “Just do this one weird trick, and women will fawn over your huge Goblin strength.” 
                      “Tell me,” the Goblin begs and begs.  The only way you’ll tell him is if he leaves the key with you.  
                      “Every day you must do something you’re afraid of.  Ask someone out, even if you know they'll say no. And the more you fail the more you will succeed. Now go, find your future love slave.” 

                      The goblin runs off, and you use the key to open the cell door. 

                      You and Bootstrap are free in the halls of Borf’s castle. 

                      “Does that weird trick really work?” Bootstrap asks.  
                    Which way do you go?</p>
                    <button type="button" class="a">Left</button> {/* go to page 40*/}
                    <button type="button" class="b">Right</button> {/* go to page 39*/}
                  </div>
                  <div id="39">
                    <p class="hidden">You find the goblin armory. In the center of the room, elevated above all other gear, is a golden sword and shield, and a glistening suit of golden armor. “Hey, it’s just your size,” Bootstrap says, and helps it on. His hands are damp with sweat for no reason. 
                      You and Bootstrap rush off down the hallway, and you approach the giant door which will surely lead to the Goblin King Borf’s throne room.</p>
                    <button type="button" class="a">Enter Borf's Throne Room</button> {/* go to page 40 */}
                  </div>

                  <div id="40">
                    <p class="hidden">You emerge from the dense forest and the strange purple fog clears. You take a breath of air--naturally expecting the usual fresh, unpolluted breeze of this pre-industrial age--but a indescribable stench has taken it’s place. You follow the stench’s direction and a castle appears on the horizon, erupting from the landscape like a pimple. It's the magnificent and terrible castle of the Goblin King Borf. You and Artemesia approach.  The stench holds you back like a wall, but you plug your nose and push on. Artemesia ties a perfumed kerchief round his nose parts. A moat flows around the castle, but instead of water a brown sewage burbles slowly. Artemesia pushes a branch out of the way to reveal a path to a large brown, stone chute emptying into the moat from underneath the castle where the sun dost ne'er shineth.  
                      “It’s our only way in,” Artemesia tells you, as if he’s been here before. You’ve heard tales of the diseased phantoms of goblin excrement, as putrid and potent as poison. Artemesia saves a phial of the noxious sludge, perhaps to add to a potion in his alchemical laboratory.  
                      You think you may see another way. If you monkey climb across the beam under the drawbridge and swing up onto that stone that seems to be poking out a bit, a small window on the other side could just barely fit your broad shoulders.  
                      Which path will you choose?</p>
                    <button type="button" class="stat agility option1" Value="41">Bridge</button> {/* go to page */}
                    <button type="button" class="b">Sewer</button> {/* go to page */}
                  </div>
                  <div id="41">
                    <p class="hidden">You realize you were kidding yourself that you could pull off such a stunt. And surely Artemesia would not have followed.   

                      The sewer is not the worst place you’ve ever been. After all, at least it's not promising to be anything it's not. 

                      You slip and fall and slide a good twenty feet before scrambling back to your feet. You've been soiled. Oh well. After the loss of your love you now look on the outside like you feel on the inside. 

                    You journey deep into the sewer and find a set of holes several feet above you letting in light, just big enough to squeeze through.</p>
                    <button type="button" class="a">Climb up</button> {/* go to page */}
                    <button type="button" class="b">Wait under hole</button> {/* go to page */}
                  </div>
                  <div id="42">
                    <p class="hidden">You immediately fall into the moat of sewage. How did you ever think you could have pulled that off? Artemesia snickers at you, but he's not spic and span either. You wallow over to him as best you can, and climb up to the sewer. You’re covered from head to toe, but after the loss of your love you now look on the outside like you feel on the inside. 

                    You journey deep into the sewer and find a set of holes several feet above you letting in light, just big enough to squeeze through.</p>
                    <button type="button" class="a">Climb up</button> {/* go to page */}
                    <button type="button" class="b">Wait under hole</button> {/* go to page */}
                  </div>
                  <div id="43">
                    <p class="hidden">You emerge to find a giant goblin with his pants down, getting ready to sit on your head. The goblin turns around with enraged frustration, and grabs you by the neck. You and Artemesia are carried off and thrown into a dungeon cell. 

                    You are made to kneel, shackled with a rusty chain against the wall. Sharp bones of the previous inhabitant poke holes in your pants and lacerate your shins and your gluteus maximus. The guard somehow smells worse than the sewage, and is dozing off outside the cell. 

                    “This is all your fault,” Artemesia says unfairly.</p>
                    <button type="button" class="stat charisma option1" value = "25">Talk to guard</button> {/* go to page */}
                    <button type="button" class="stat agility option2" value = "25">Squeeze out of shackles</button> {/* go to page */}
                    <button type="button" class="stat intelligence option3" value = "25">Use bones to pick lock</button> {/* go to page */}
                    <button type="button" class="stat strength option4" value = "25">Break Chains</button> {/* go to page */}
                  </div>
                  <div id="44">
                    <p class="hidden">One of the holes above you darkens, and a rude noise is followed by a rush of waste which fills your eye sockets. You wipe your eyes and see the hole covered above you. What do you do? 

                    Artemesia’s judgmental eyes wait for your stupid decision.</p>
                    <button type="button" class="a">Stick word in hole</button> {/* go to page */}
                    <button type="button" class="b">Wait under hole</button> {/* go to page */}
                  </div>
                  <div id="45">
                    <p class="hidden">A pair of goblin guards see you, drop their tankards of brown ale and they splatter and splash across the cobblestone hall, and they run after you at a surprising speed. They grab you by the hair and throw you in a cell. 

                    You are made to kneel, shackled with a rusty chain against the wall. Sharp bones of the previous inhabitant poke holes in your pants and lacerate your shins and your gluteus maximus. The guard somehow smells worse than the sewage, and is dozing off outside the cell.  
                    “This is all your fault,” Artemesia says unfairly.</p>
                    <button type="button" class="stat charisma option1" value = "25">Talk to guard</button> {/* go to page */}
                    <button type="button" class="stat agility option2" value = "25">Squeeze out of shackles</button> {/* go to page */}
                    <button type="button" class="stat intelligence option3" value = "25">Use bones to pick lock</button> {/* go to page */}
                    <button type="button" class="stat strength option4" value = "25">Break Chains</button> {/* go to page */}
                  </div>
                  <div id="46">
                    <p class="hidden">You hear a violent scream, and a sinewy arms reaches down and grabs you by the hair, yanking you up through the hole. You and Artemesia are carried off and thrown into a dungeon cell.  

                    You are made to kneel, shackled with a rusty chain against the wall. Sharp bones of the previous inhabitant poke holes in your pants and lacerate your shins and your gluteus maximus. The guard somehow smells worse than the sewage, and is dozing off outside the cell.  
                    “This is all your fault,” Artemesia says unfairly.</p>
                    <button type="button" class="stat charisma option1" value = "25">Talk to guard</button> {/* go to page */}
                    <button type="button" class="stat agility option2" value = "25">Squeeze out of shackles</button> {/* go to page */}
                    <button type="button" class="stat intelligence option3" value = "25">Use bones to pick lock</button> {/* go to page */}
                    <button type="button" class="stat strength option4" value = "25">Break Chains</button> {/* go to page */}
                  </div>
                  <div id="47">
                    <p class="hidden">The goblin leaves, and the holes are once again clear. You climb up into the goblin latrine and peer out the door. You are free in Borf's halls. The hallway leads off in two directions.</p>
                    <button type="button" class="a">Left</button> {/* go to page */}
                    <button type="button" class="b">Right</button> {/* go to page */}
                  </div>
                  <div id="48">
                    <p class="hidden">You and Artemesia emerge from the forest in full Goblin Armor and smeared with waste and dried blood, but even with the accoutrement you make a scrawny excuse for goblins. 

                    An invisible cloud of stench leads you down the road to the Goblin King Borf’s Castle, erupting out of the landscape like a pimple.  
                    The castle's drawbridge is down. A single goblin guard is playing checkers against himself. A fly becomes trapped in his ear wax. The goblin reaches up and pulls a few flies from his ear gunk and tosses 'em in his mouth like caramel corn. 

                    Artemesia makes a sound of pain, as though he has seen something his huge brain will never let him forget. 

                    The goblin looks up dumbly from his game. You must think quickly. What will you do?  
                    You could run past him, but he's blocking the way.  
                    You could fight him, but he looks quite strong.  
                    You could hide, but unless he's really as stupid as he looks he's probably seen you.  
                    You could talk to him and try to convince him you're goblins.  
                    Or you could just walk by casually as if your confidence alone could fool him. 

                    Artemesia’s judgmental eyes wait for your stupid decision.</p>
                    <button type="button" class="stat agility option1" value = "25">Dash through</button> {/* go to page */}
                    <button type="button" class="stat strength option2" value = "25">Fight</button> {/* go to page */}
                    <button type="button" class="stat intelligence option3" value = "25">Hide</button> {/* go to page */}
                    <button type="button" class="stat charisma option4" value = "25">Talk</button> {/* go to page */}
                    <button type="button" class="a">Walk by casually</button>

                  </div>
                  <div id="49">
                    <p class="hidden">Your dash has failed. The goblin’s checkers scatter across the drawbridge, and he runs after you at a surprising speed. He grabs you by the hair and throws you in a cell.  
                    You are made to kneel, shackled with a rusty chain against the wall. Sharp bones of the previous inhabitant poke holes in your pants and lacerate your shins and your gluteus maximus. The guard smells worse than sewage, and is dozing off outside the cell.  
                    “This is all your fault,” Artemesia says unfairly.</p>
                    <button type="button" class="stat charisma option1" value = "25">Talk to guard</button> {/* go to page */}
                    <button type="button" class="stat agility option2" value = "25">Squeeze out of shackles</button> {/* go to page */}
                    <button type="button" class="stat intelligence option3" value = "25">Use bones to pick lock</button> {/* go to page */}
                    <button type="button" class="stat strength option4" value = "25">Break Chains</button> {/* go to page */}
                  </div>
                  <div id="50">
                    <p class="hidden">You fail to defeat the guard. The goblin’s checkers scatter across the drawbridge, and he runs after you at a surprising speed. He grabs you by the hair and throws you in a cell. 

                    You are made to kneel, shackled with a rusty chain against the wall. Sharp bones of the previous inhabitant poke holes in your pants and lacerate your shins and your gluteus maximus. The guard smells worse than sewage, and is dozing off outside the cell.  
                    “This is all your fault,” Artemesia says unfairly.</p>
                    <button type="button" class="stat charisma option1" value = "25">Talk to guard</button> {/* go to page */}
                    <button type="button" class="stat agility option2" value = "25">Squeeze out of shackles</button> {/* go to page */}
                    <button type="button" class="stat intelligence option3" value = "25">Use bones to pick lock</button> {/* go to page */}
                    <button type="button" class="stat strength option4" value = "25">Break Chains</button> {/* go to page */}
                  </div>
                  <div id="51">
                    <p class="hidden">The Goblin sees through your shoddy disguise. The goblin’s checkers scatter across the drawbridge, and he runs after you at a surprising speed. He grabs you by the hair and throws you in a cell. 

                    You are made to kneel, shackled with a rusty chain against the wall. Sharp bones of the previous inhabitant poke holes in your pants and lacerate your shins and your gluteus maximus. The guard smells worse than sewage, and is dozing off outside the cell.  
                    “This is all your fault,” Artemesia says unfairly.</p>
                    <button type="button" class="stat charisma option1" value = "25">Talk to guard</button> {/* go to page */}
                    <button type="button" class="stat agility option2" value = "25">Squeeze out of shackles</button> {/* go to page */}
                    <button type="button" class="stat intelligence option3" value = "25">Use bones to pick lock</button> {/* go to page */}
                    <button type="button" class="stat strength option4" value = "25">Break Chains</button> {/* go to page */}
                  </div>
                  <div id="52">
                    <p class="hidden">You fail to convince the guard of your goblinhood. The goblin’s checkers scatter across the drawbridge, and he runs after you at a surprising speed. He grabs you by the hair and throws you in a cell. 
                    You are made to kneel, shackled with a rusty chain against the wall. Sharp bones of the previous inhabitant poke holes in your pants and lacerate your shins and your gluteus maximus. The guard smells worse than sewage, and is dozing off outside the cell. 

                    “This is all your fault,” Artemesia says unfairly.</p>
                    <button type="button" class="stat charisma option1" value = "25">Talk to guard</button> {/* go to page */}
                    <button type="button" class="stat agility option2" value = "25">Squeeze out of shackles</button> {/* go to page */}
                    <button type="button" class="stat intelligence option3" value = "25">Use bones to pick lock</button> {/* go to page */}
                    <button type="button" class="stat strength option4" value = "25">Break Chains</button> {/* go to page */}
                  </div>
                  <div id="53">
                    <p class="hidden">You make it out of the shackles, and now you are loose in your cell.  
                    Among the pile of bones a huge goblin femur is cracked into a sharp weapon. 

                    Outside the guard snoozes, and his keys hang jangly from his belt, just within reach. 

                    In the upper corner of the cell, behind some cobwebs, a cryptic code has been scrawled in arcane mathematical symbols.</p>
                    <button type="button" class="stat charisma option1" value = "25">Talk to guard</button> {/* go to page */}
                    <button type="button" class="stat agility option2" value = "25">Steal keys</button> {/* go to page */}
                    <button type="button" class="stat intelligence option3" value = "25">Decipher code</button> {/* go to page */}
                    <button type="button" class="stat strength option4" value = "25">Stab guard</button> {/* go to page */}
                  </div>
                  <div id="54">
                    <p class="hidden">You use your strength to pierce the goblin’s chest from the back all the way out the front. He jumps up, but the bone gets stuck in the bars and the Goblin convulses and gurgles, eventually coming to sweet rest after a pitiful, pitiful life. You grab the keys and you and your companion are free in the halls of Borf’s castle. 

                    Which way do you go?</p>
                    <button type="button" class="a">Left</button> {/* go to page */}
                    <button type="button" class="b">Right</button> {/* go to page */}
                  </div>
                  <div id="55">
                    <p class="hidden">You use your agile fingers to silently slip the ring of keys from the slumbering goblin’s belt. For a moment you imagine the punishment this goblin will recieve for letting us go, and you don't feel sorry for him. His death would be a sweet, sweet relief from a pitiful, pitiful life.  

                    You insert the key with such supple delicacy your reminded of your lost love. Your nimble fingers continue their magic and turn the key with nary a jangle. 
                    You and Artemesia are free in the halls of Borf’s castle. 

                    Which way do you go?</p>
                    <button type="button" class="a">Left</button> {/* go to page */}
                    <button type="button" class="b">Right</button> {/* go to page */}
                  </div>
                  <div id="56">
                    <p class="hidden">Your advanced intelligence allows you to decrypt the hidden message. “Behind the fourth stone on the left lies a carved goblin bone capable of opening the door when inserted at a 16 degree angle.” 

                    You uncover the bone key and your huge brain estimates the correct angle. The lock clicks open, and the sleeping giant snorts, and falls back asleep. 

                    Artemesia appraises you with a newfound appreciation. He will remember this. 

                    You and Artemesia are free in the halls of Borf’s castle. 

                    Which way do you go?</p>
                    <button type="button" class="a">Left</button> {/* go to page */}
                    <button type="button" class="b">Right</button> {/* go to page */}
                  </div>
                  <div id="57">
                    <p class="hidden">You use your rugged worldliness on the simple Goblin. 
                      “There is more world out there than you know,” you tell the pitiful excuse for a creature who doesn't deserve any amount of anthropomorphizing. “Just do this one weird trick, and women will fawn over your huge Goblin strength.”  
                      “Tell me,” the Goblin begs and begs. The only way you’ll tell him is if he leaves the key with you.  
                      “Every day you must do something you’re afraid of. Ask someone out, even if you know they'll say no. And the more you fail the more you will succeed. Now go, find your future love slave.” 

                      The goblin runs off, and you use the key to open the cell door. 

                      Artemesia appraises you with a newfound disapproval. He will remember this.  
                      You and Artemesia are free in the halls of Borf’s castle.  
                      Which way do you go?</p>
                    <button type="button" class="a">Left</button> {/* go to page */}
                    <button type="button" class="b">Right</button> {/* go to page */}
                  </div>
                  <div id="58">
                    <p class="hidden">You find the goblin armory. In the center of the room, elevated above all other gear, is a golden sword and shield, and a glistening suit of golden armor. “It’s approximately your size,” Artemesia says, and helps it on.  
                    You and Artemesia rush off down the hallway, and you approach the giant door which will surely lead to the Goblin King Borf’s throne room.</p>
                    <button type="button" class="a">Enter Borf's Throne Room</button> {/* go to page */}
                  </div>
                  <div id="59">
                    <p class="hidden">From here the disgusting rumbling of The Goblin King Borf's belly can be heard. Bootstrap seems like he could use something to eat as well. You progress through the castle corridors towards Borf's lair. It seems eerily quiet. The throne room door is ajar... should you enter the throne room or just go back to the pub?</p>
                    <button type="button" class="a">Enter</button> {/* go to page-62 */}
                    <button type="button" class="b">Go Back</button> {/* go to page-60 */}
                  </div>
                  <div id="60">
                    <p class="hidden">You are paralyzed with fear and decide to go back to the pub and just hope for the best. Unless you overcome your fear now and face Borf this is the end of your quest and your designation as a hero.
                      Do you go back to the pub or continue the quest?</p>
                    <button type="button" class="a">Pub</button> {/* go to 61*/}
                    <button type="button" class="b">Continue</button> {/* go to page 62 */}
                  </div>
                  <div id="61">
                    <p class="hidden">You have decided to waste all of this time and just give up. Congrats or something?</p>
                    <button type="button" class="replay">Replay</button> {/* go to splash page */}
                  </div>
                  <div id="62">
                    <p class="hidden">You quietly approach the door to Borf's lair. It smells like burnt toast and soured ranch dressing. As you push the door open the hinge creaks, announcing your arrival. Borf sits upon his throne, glaring at you and Bootstrap. You feel like you've been waiting your whole life for this one moment. With the lights low and the curtains open you fear you may be on the verge of just blowing it.
                    You look around the room and notice your dead lover Jaime on a ritual table. Enraged, you find the strength to push forward. Borf declares he will resurrect Jaime and unleash unknown horrors upon the earth. There is literally a bucket of ranch dressing and a pile of toast nearby on the floor. Should you feed Bootstrap a snack now?</p>
                    <button type="button" class="a">Yeah</button> {/* go to page 63 */}
                    <button type="button" class="b">No!</button> {/* go to page 64 */}
                  </div>
                  <div id="63">
                    <p class="hidden">While Bootstrap holds Borf's gaze you snatch up a piece of toast and dip it deeply into the ranch dressing. You hand the snack to your companion. Not because you are about to fight Borf but because Bootstrap Buckles is a drunkard he consumes the thing in one bite, smearing ranch dressing from his lips with his forearm. He is ready now.
                    </p> {/*Bootstrap gains toast/ranch stat boost*/}
                    <button type="button" class="a">Continue</button> {/* go to page 65 */}
                  </div>
                  <div id="64">
                    <p class="hidden">You are in too much of a pickle to help Bootstrap snack right now. He can fight with an empty belly.</p>
                    <button type="button" class="a">Continue</button> {/* go to page 65 */}

                  </div>
                  <div id="65">
                    <p class="hidden">Borf gets up from the throne and points his staff your direction. His eyes turn red with fury. He yells "Now you die!!!" You and Bootstrap sense there is danger incoming and step aside just as a fireball soars past. Bootstrap seems braced to attack, awaiting your next move. Do you launch the bucket of ranch dressing at Borf or lead the charge and attack?</p>
                    <button type="button" class="a">Ranch</button> {/* go to page 66 */}
                    <button type="button" class="b">Attack</button> {/* go to page 67 */}
                  </div>
                  <div id="66">
                    <p class="hidden">In one swift movement you swipe up the ranch dressing and hurl it at Borf's head. The Goblin King is amused with your decision and hits it back your way with his staff. You have been covered with cool ranch dressing. Bootstrap attacks the sidetracked Borf and lands a direct hit.</p> {/*stat check to determine if Borf is dead*/}
                    <button type="button" class="stat strength option1" value="20">Continue</button> {/* go to page 68 */}
                  </div>
                  <div id="67">
                    <p class="hidden">You do not have time for a food fight. This is serious business here. You lead the attack with the loyal Bootstrap by your side. </p>{/*stat check to determine if Borf is dead from Bootstrap and heros stats*/}
                    <button type="button" class="stat strength option1" value="20">Continue</button> {/* go to page-68 */}
                  </div>
                  <div id="68">
                    <p class="hidden">Borf withstands the attack though his flaming eyes of fury have been cooled. His staff cannot be used magically yet but he can and does hit you in the face with it. </p>{/*Strength and Intelligence roll to withstand it(reduce Strength and Intelligence stat if fail)*/}
                    <button type="button" class="stat strength option1" value="20">Continue</button> {/* go to page-69 */}
                  </div>
                  <div id="69">
                    <p class="hidden">You survive the attack and have no choice now but to attack Borf again. With no small amount of emotion you scream "Let's buckle this thing, Bootstrap!!!"</p> {/*stat check to determine if Borf is dead from Bootstrap and heros stats
                      -repeat 68-69 until resolution*/}
                    <button type="button" class="stat strength option1" value="20">Kill Borf!</button> {/* go to page 70, fail 68 */}
                  </div>
                  <div id="70">
                    <p class="hidden">You have defeated the terrible Goblin King Borf. His gross behavior can no longer unleash terror upon the earth. His foul plan to resurrect Jaime and open the doors to the underworld will die with him. He manages to utter one last menacing threat: "You haven't seen the last of me..." and then hands you a glamor shot of his likeness and expires.
                      Bootstrap Buckles gathers enough treasure to live comfortably for a while. His dream of owning a horse and finding a partner seem within close reach. In another life, another time, he could be a cowboy.
                      Tear in eye you take one last look at Jaime Jquiria. They would have made a lovely undead Goblin Royalty. They made a wonderful normal-alive-human-true-love partner. Alas, that ship has sailed.
                      You gather a small fortune in treasure and light the castle on fire as you leave. Tossing Borf's glamor shot in the fire you laugh out loud. The hero's journey has many branches and you have walked the path to victory. Fortune smiles upon thee. {`<3`}</p>
                    <button type="button" class="replay">Play Again!</button> {/* go to page splash page */}
                  </div>
                  <div id="72">
                    <p class="hidden">From here the disgusting rumbling of The Goblin King Borf's belly can be heard. Artemisia seems like he knows the way. You wonder how he knows so much. He really has studied some very esoteric knowledge. You progress through the castle corridors towards Borf's lair. It seems eerily quiet. The throne room door is ajar... should you enter the throne room or just leave?</p>
                    <button type="button" class="a">Enter</button> {/* go to page 74 */}
                    <button type="button" class="b">Leave</button> {/* go to page 73 */}
                  </div>
                  <div id="73">
                    <p class="hidden">You are paralyzed with fear and decide to go back to the pub and just hope for the best. Unless you overcome your fear now and face Borf this is the end of your quest and your designation as a hero.
                      Do you go back to the pub or continue the quest?</p>
                    <button type="button" class="a">Continue</button> {/* go to page 74 */}
                    <button type="button" class="b">Pub</button> {/* go to page 61 */}
                  </div>
                  <div id="74">
                    <p class="hidden">You quietly approach the door to Borf's lair. It smells like burnt toast and soured ranch dressing. As you push the door open the hinge creaks, announcing your arrival. Borf sits upon his throne, glaring at you and Artemisia. You feel like you've been waiting your whole life for this one moment. With the lights low and the curtains open you fear you may be on the verge of just blowing it.
                      You look around the room and notice your dead lover Jaime on a ritual table. Enraged, you find the strength to push forward. Borf declares he will resurrect Jaime and unleash unknown horrors upon the earth. There is literally a bucket of ranch dressing and a pile of toast nearby on the floor.
                      Borf gets up from the throne and points his staff your direction. His eyes turn red with fury. He yells "Now you die!!!" You and Artemisia sense there is danger incoming and step aside just as a fireball soars past. Artemisia says "Now is our chance!" and awaits your next move. Do you launch the bucket of ranch dressing at Borf or lead the charge and attack?</p>
                    <button type="button" class="a">Ranch</button> {/* go to page 75 */}
                    <button type="button" class="b">Attack</button> {/* go to page 76 */}
                  </div>
                  <div id="75">
                    <p class="hidden">In one swift movement you swipe up the ranch dressing and hurl it at Borf's head. The Goblin King is amused with your decision and hits it back your way with his staff. You have been covered with cool ranch dressing. Artemisia attacks the sidetracked Borf and lands a direct hit.</p> {/*stat check to determine if Borf is dead*/}
                    <button type="button" class="stat strength option1" value="50">Continue</button> {/* go to page 77*/}
                  </div>
                  <div id="76">
                    <p class="hidden">You do not have time for a food fight. This is serious business here. You lead the attack with Artemisia by your side. </p>{/*stat check to determine if Borf is dead from Artemisia and heros stats*/}
                    <button type="button" lass="stat strength option1" value="50">Attack</button> {/* go to page 77*/}
                  </div>
                  <div id="77">
                    <p class="hidden">Borf withstands the attack though his flaming eyes of fury have cooled. Artemisia whispers "He will not be able to cast a fireball until his eyes are red again." He can however hit you in the face with it directly. Borf swings his magic staff at your head. </p>{/*Agility roll to determine if the hero gets hit with staff -if hit: Strength and Intelligence roll to withstand it(reduce strength and intelligence stat if fail)
                    */}
                    <button type="button" class="stat agility option1" value="20">Dodge?</button> {/* go to page- true 78 fail 79*/}
                  </div>
                  <div id="78">
                    <p class="hidden">You withstand the attack and are confused. Artemisia is again waiting for you to attack. It seems like he is afraid or something. Do you lead the attack or tell Artemisia to "Do something!"?</p>
                    <button type="button" class="stat strength option1" value="20">Attack</button> {/* go to page 80 */}
                    <button type="button" class="stat intelligence option2" value="20">Artemisia!</button> {/* go to page 81 */}
                  </div>
                  <div id="79">
                    <p class="hidden">You gracefully dodge the staff attack from Borf. Do you lead the attack or tell Artemisia to "Do something!"?</p>
                    <button type="button" class="stat strength option1" value="20">Attack</button> {/* go to page 80 */}
                    <button type="button" class="stat intelligence option2" value="20">Artemisia!</button> {/* go to page 81 */}
                  </div>

                  <div id="80">
                    <p class="hidden">You lead the attack with Artemisia!</p> {/*dice roll to determine if Borf is dead. go to 84 true, 81*/}
                    <button type="button" class="stat agility option1" value="20">Attack</button> {/* go to page-7 */}
                  </div>
                  <div id="81">
                    <p class="hidden">You turn to your companion, Artemisia, and yell "DO SOMETHING!!" Artemisia attacks first!</p> {/*dice roll to determine if Borf is dead*/}
                    <button type="button"  class="stat agility option1" value="20">Attack</button> {/* go to 84, 82 */}
                  </div>
                  <div id="82">
                    <p class="hidden">The Goblin King survives the attack and has rekindled his flaming eyes of fury. He points his staff your direction and casts a fireball at your head. You could see this one coming from, like 10 feet away. You hit the deck as the fireball sours over.</p>{/*dice roll to dodge*/}
                    <button type="button" class="stat agility option1" value="20">Dodge</button> {/* go to 83 */}
                  </div>
                  <div id="83">
                    <p class="hidden">Artemisia leads the return attack with you following close behind.</p> {/*dice roll to determine if Borf is dead*/}
                    <button type="button" class="stat agility option1" value="20">Attack</button> {/* go to page 84, 81 */}
                  </div>
                  <div id="84">
                    <p class="hidden">You have defeated the terrible Goblin King Borf. His gross behavior can no longer unleash terror upon the earth. He manages to utter one last menacing threat: "You haven't seen the last of me..." and then hands you a glamor shot of his likeness and expires. His foul plan to resurrect Jaime and open the doors to the underworld will die with him... so it would seem.
                    Artemisia snatches up the magic staff. He turns to you and with a wry smile says "Hey, buddy. Thanks for helping me acquire the magic staff. I'm going to kill you and resurrect Jaime myself. With your undead lost lover by my side I will complete the ritual to open the doors to the underworld and unleash unknown horrors upon the earth. I'm not a goblin but I promise you I can be an excellent Goblin King!!! Now you die!"
                    Artemisia attempts to cast a fireball but instead the magic staff lobs a glob of ranch dressing at you. That's where that stuff comes from!? You have been covered in cool ranch dressing. Attack Artemisia or fling ranch dressing at them?</p>
                    <button type="button" class="a">Ranch</button> {/* go to page 85 */}
                    <button type="button" class="b">Attack</button> {/* go to page 86 */}
                  </div>
                  <div id="85">
                    <p class="hidden">You scoop a handful of cool ranch dressing from your face and hurl it at your worthy adversary. Artemisia is hit in the face with cool ranch dressing and is confused.</p>
                    <button type="button" class="a">Attack</button> {/* go to page 86 */}
                  </div>
                  <div id="86">
                    <p class="hidden">You attack and kill Artemisia with ease! You are truly the stuff heroes are made of.
                      Tear in eye you take one last look at Jaime Jquiria. They would have made a lovely undead Goblin Royalty. They made a wonderful normal alive-human-true-love partner. Alas, that ship has sailed.
                      You gather a small fortune in treasure and light the castle on fire as you leave. Tossing Borf's glamor shot in the fire you laugh out loud. The hero's journey has many branches and you have walked the path to victory. Fortune smiles upon thee. {`<3`}</p>
                    <button type="button" class="replay">Play Again</button> {/* go to splash page */}
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
