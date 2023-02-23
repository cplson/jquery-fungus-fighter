/*
Handle click events:

When you click an attack button:

update state variable(s) to make the Freaky Fungus lose hit points (HP), and to reduce your attack points (AP).
See Attacks below, for the AP and HP values of each attack
State may be held in one our more variables of your choosing
HP and AP values may not be negative (set to zero, if they would otherwise be negative)
Render state changes to the DOM

Update the text above the attack buttons (eg, "100 AP")
Update the text above the enemy fungus (eg, "100 HP")
If the Freaky Fungus runs out of HP, the monster is dead and you win! Replace the walk class with a dead class on the freaky-fungus element, to make them fall over and die.
If you run out of AP, the monster wins and humanity is doomed 😢 Replace the walk class with a jump class on the freaky-fungus element, to make them jump for the glory of the fungal race.
You may no longer attack, if AP is 0. Give all of the attack buttons a disabled attribute, so they may no longer be used.
*/

$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

// GLOBAL VARIABLES
let enemyHP = 100;
let myAP = 100;
let attackType;

function onReady() {
    
    // Listener to check when the user clicks on an attack button
    $('.attack-btn').on('click', makeAttack);
    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}

// Function that runs when the user clicks on an attack button
function makeAttack(){
    // Test function runs
    console.log('Entered makeAttack function');
    
    // sets the state and renders depending on the attack
    if($(this).hasClass('dragon-blade')){
        console.log('Attack: dragon-blade');
        setState(47, 38);
        //renderPage();
    }
    else if($(this).hasClass('entangle')){
        console.log('Attack: entangle');
        setState(9, 23);
        //renderPage();
    }
    else if($(this).hasClass('arcane-sceptre')){
        console.log('Attack: arcane-sceptre');
        setState(14, 12);
        //renderPage();
    }
    else{
        console.log('Attack: star-fire');
        setState(25, 33);
        //renderPage();
    }
}

/*
TO-DO: 
    set attack points
    set enemy HP
*/
function setState(damage, attackCost){
    enemyHP -= damage;
    console.log('enemyHP:', enemyHP);
    myAP -= attackCost;
    console.log('myAP:', myAP);
}

/*
Arcane Scepter
AP Cost: 12
HP Damage: 14
entangle Entangle
AP Cost: 23
HP Damage: 9
dragon blade Dragon Blade
AP Cost: 38
HP Damage: 47
star fire Star Fire
AP Cost: 33
HP Damage: 25
*/