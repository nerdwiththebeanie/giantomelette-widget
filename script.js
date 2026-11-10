/**
 * | Giant Omelette Widget |
 * To be modified into a generic lootbox widget
 */

/** _Manual Fallbacks_
 *  In case I break something */
let defaultCommand = "!giantomelette";
let defaultInstructionText = "Hungry? Type [command] to take a slice.";
let defaultLoadingText = "[username] is approaching...";
let defaultRewardText = "[usename] manages to grab a(n) [omelettereward] slice!";
let defaultWarningText = "Sorry, you've already taken a [omelettereward] today."

/** _Manual Function for Timing Config_
 * To make a field later
 */
(function() {
    const CONFIG = {
        shakeDurationLootbox: 500,
        warningDurationText: 2200,
        revealDurationText: 3500
    };
// _Rarity Tiers Lookup_
const rarityTiers = {
    "legendary": { name: "Legendary", color: "#FF8000", weight: 0.25 },
    "mystic": { name: "Mystic", color: "#A335EE", weight: 0.5 },
    "rare": { name: "Rare", color: "#0070DD", weight: 1 },
    "uncommon": { name: "Uncommon", color: "#1EFF00", weight: 2.5 }, 
    "common": { name: "Common", color: "#ffffff", weight: 3.3 }
}

// _Flavor Tier Lookup_
const flavorTiers = {
    "delicious": { name: "Delicious", color: "#1EFF00" }
    "digusting": { name: "Digusting", color: "#ff3333"}
    "strange": { name: "Strange", color: "#A335EE" }
    "questionable": { name: "Questionable", color: "#FF8000" }
    "boring:": { name: "Boring", color: "#ffffff" }
}

/** _List of Rewards_
 * See if this can be sourced through a cvs
 * This chunk of code is way too long
 */
const defaultRewards = [
    { 
        name: "Apple and Brie Omelette",
        url: "assets\omelettepng\1om_applebrie.png",
        rarity: rarityTiers["legendary"],
        flavor: flavorTiers["delicious"],
    },
    { 
        name: "Bacon Omelette",
        url: "assets\omelettepng\2om_bacon.png",
        rarity: rarityTiers["uncommon"],
        flavor: flavorTiers["strange"],
    },
    { 
        name: "Bacon and Brocolli Omelette",
        url: "assets\omelettepng\3om_bacon_broccoli.png",
        rarity: rarityTiers["mystic"],
        flavor: flavorTiers["delicious"],
    },
    { 
        name: "BBQ Sauce Omelette",
        url: "assets\omelettepng\4om_bbqsauce.png",
        rarity: rarityTiers["mystic"],
        flavor: flavorTiers["delicious"],
    },
    { 
        name: "Black Current Omelette",
        url: "assets\omelettepng\5om_blackcurrant.png",
        rarity: rarityTiers["legendary"],
        flavor: flavorTiers["delicious"],
    },
    { 
        name: "Carrot and Pea Omelette",
        url: "assets\omelettepng\6om_carrotpea.png",
        rarity: rarityTiers["legendary"],
        flavor: flavorTiers["delicious"],
    },
    { 
        name: "Cheese Omelette",
        url: "assets\omelettepng\7om_cheese.png",
        weight: 4,
        rarity: rarityTiers["common"],
        flavor: flavorTiers["delicious"],
    },
    { 
        name: "Cheese and Gravy Omelette",
        url: "assets\omelettepng\8om_cheeseonion.png",
        rarity: rarityTiers["umcommon"],
        flavor: flavorTiers["delicious"],
    },
    { 
        name: "Chives and Gravy Omelette",
        url: "assets\omelettepng\9om_chivesgravy.png",
        rarity: rarityTiers["rare"],
        flavor: flavorTiers["delicious"],
    },
    { 
        name: "Chocolate Omelette",
        url: "assets\omelettepng\10om_chocolate.png",
        rarity: rarityTiers["common"],
        flavor: flavorTiers["strange"],
    },
    { 
        name: "Chokato Omelette",
        url: "assets\omelettepng\11om_chokato.png",
        rarity: rarityTiers["common"],
        flavor: flavorTiers["strange"],
    },
    { 
        name: "Clay Omelette",
        url: "assets\omelettepng\12om_clay.png",
        rarity: rarityTiers["rare"],
        flavor: flavorTiers["disgusting"],
    },
    { 
        name: "Fresh Fruit Surprise Omelette",
        url: "assets\omelettepng\13om_fruitsurprise.png",
        rarity: rarityTiers["rare"],
        flavor: flavorTiers["strange"],
    },
    { 
        name: "Green Pepper Omelette",
        url: "assets\omelettepng\14om_greenpeppers.png",
        rarity: rarityTiers["uncommon"],
        flavor: flavorTiers["delicious"],
    },
    { 
        name: "Grey Ham and Cheese Omelette",
        url: "assets\omelettepng\15om_gryhamcheese.png",
        rarity: rarityTiers["mystic"],
        flavor: flavorTiers["disgusting"],
    },
    { 
        name: "Grey Meat Feast Omelette",
        url: "assets\omelettepng\16om_grymeatfeast.png",
        rarity: rarityTiers["mystic"],
        flavor: flavorTiers["disgusting"],
    },
    { 
        name: "Ham and Cheese Omelette",
        url: "assets\omelettepng\17om_hamcheese.png",
        rarity: rarityTiers["common"],
        flavor: flavorTiers["delicious"],
    },
    { 
        name: "Honey Blossom Omelette",
        url: "assets\omelettepng\18om_honeyblossom.png",
        rarity: rarityTiers["umcommon"],
        flavor: flavorTiers["delicious"],
    },
    { 
        name: "Hot Tyrannian Pepper Omelette",
        url: "assets\omelettepng\19om_htpeppers.png",
        rarity: rarityTiers["common"],
        flavor: flavorTiers["delicious"],
    },
    { 
        name: "Juppie Omelette",
        url: "assets\omelettepng\20om_juppie.png",
        rarity: rarityTiers["uncommon"],
        flavor: flavorTiers["disgusting"],
    },
    { 
        name: "Little Fishy Omelette",
        url: "assets\omelettepng\21om_lilfishy.png",
        rarity: rarityTiers["common"],
        flavor: flavorTiers["strange"],
    },
    { 
        name: "Marshmallow Omelette",
        url: "assets\omelettepng\22om_marshmallow.png",
        weight: 3.4,
        rarity: rarityTiers["common"],
        flavor: flavorTiers["strange"],
    },
    { 
        name: "Meat Feast Omelette",
        url: "assets\omelettepng\23om_meatfeast.png",
        rarity: rarityTiers["rare"],
        flavor: flavorTiers["delicious"],
    },
    { 
        name: "Mushroom Omelette",
        url: "assets\omelettepng\24om_mushroom.png",
        rarity: rarityTiers["common"],
        flavor: flavorTiers["delicious"],
    },
    { 
        name: "Pizza Omelette",
        url: "assets\omelettepng\25om_pizza.png",
        rarity: rarityTiers["common"],
        flavor: flavorTiers["delicious"],
    },
    { 
        name: "Plain Omelette",
        url: "assets\omelettepng\26om_plain.png",
        weight: 4,
        rarity: rarityTiers["common"],
        flavor: flavorTiers["boring"],
    },
    { 
        name: "Pteri Egg Omelette",
        url: "assets\omelettepng\27om_pteriegg.png",
        rarity: rarityTiers["common"],
        flavor: flavorTiers["delicious"],
    },
    { 
        name: "Rice Omelette",
        url: "assets\omelettepng\28om_rice.png",
        rarity: rarityTiers["common"],
        flavor: flavorTiers["delicious"],
    },
    { 
        name: "Rotten Omelette",
        url: "assets\omelettepng/29om_rotten.png",
        rarity: rarityTiers["legendary"],
        flavor: flavorTiers["disgusting"],
    },
    { 
        name: "Sausage Omelette",
        url: "assets\omelettepng\30om_sausage.png",
        rarity: rarityTiers["uncommon"],
        flavor: flavorTiers["delicious"],
    },
    { 
        name: "Sausage and Pepperoni Omelette",
        url: "assets\omelettepng\31om_sausagepepperoni.png",
        rarity: rarityTiers["uncommon"],
        flavor: flavorTiers["delicious"],
    },
    { 
        name: "Slightly Trampled Omelette",
        url: "assets\omelettepng\32om_slightlytrampled.png",
        rarity: rarityTiers["rare"],
        flavor: flavorTiers["questionable"],
    },
    { 
        name: "Spicy Red Pepper Omelette",
        url: "assets\omelettepng\33om_redpeppers.png",
        rarity: rarityTiers["common"],
        flavor: flavorTiers["delicious"],
    },
    { 
        name: "Spinach Feta Omelette",
        url: "assets\omelettepng\34om_spinachfeta.png",
        rarity: rarityTiers["uncommon"],
        flavor: flavorTiers["delicious"],
    },
    { 
        name: "Strawberry Omelette",
        url: "assets\omelettepng\35om_strawberry.png",
        rarity: rarityTiers["common"],
        flavor: flavorTiers["strange"],
    },
    { 
        name: "Tangy Tigersquash Omelette",
        url: "assets\omelettepng\36om_tigersquash.png",
        rarity: rarityTiers["common"],
        flavor: flavorTiers["strange"],
    },
    { 
        name: "Tomato Omelette",
        url: "assets\omelettepng\37om_tomato.png",
        rarity: rarityTiers["common"],
        flavor: flavorTiers["delicious"],
    },
    { 
        name: "Tomato and Pepper Omelette",
        url: "assets\omelettepng\38om_tomatopepper.png",
        rarity: rarityTiers["common"],
        flavor: flavorTiers["delicious"],
    },
    { 
        name: "Twirly Fruit Omelette",
        url: "assets\omelettepng\39om_twirlyfruit.png",
        rarity: rarityTiers["common"],
        flavor: flavorTiers["strange"],
    },
    { 
        name: "Ugga Melon Omelette",
        url: "assets\omelettepng\40om_uggamelon.png",
        rarity: rarityTiers["common"],
        flavor: flavorTiers["strange"],
    },
    { 
        name: "Veggie Delight Omelette",
        url: "assets\omelettepng\41om_veggiedelight.png",
        rarity: rarityTiers["common"],
        flavor: flavorTiers["delicious"],
    },
]:

let isProcessing = false;
  const eventQueue = [];

  window.addEventListener('onWidgetLoad', (obj) => {
    const fieldData = obj.detail?.fieldData;
    if (fieldData?.chatCommand) triggerCommand = fieldData.chatCommand.trim().toLowerCase();
    if (fieldData?.flavorTemplate) flavorTemplate = fieldData.flavorTemplate;
    showIdlePrompt();
  });

  window.addEventListener('onEventReceived', (obj) => {
    const listener = obj.detail?.listener;
    const event = obj.detail?.event;

    if (listener === "message") {
      const messageData = event?.data || event;
      const rawText = messageData?.text || "";
      const message = rawText.trim();
      const username = messageData?.nick || messageData?.displayName || messageData?.username;

      if (!username || message.toLowerCase() !== triggerCommand) return;

      eventQueue.push({ username });
      processQueue();
    }
  });

  function getRandomWeightedReward(items) {
    const totalWeight = items.reduce((sum, item) => sum + (item.weight ?? item.rarity.weight), 0);
    let randomNum = Math.random() * totalWeight;

    for (const item of items) {
      const itemWeight = item.weight ?? item.rarity.weight;
      if (randomNum < itemWeight) return item;
      randomNum -= itemWeight;
    }
    return items[0];
  }

  function processQueue() {
    if (isProcessing || eventQueue.length === 0) return;
    isProcessing = true;
    const currentEvent = eventQueue.shift();
    triggerOmeletteAnimation(currentEvent.username);
  }

  function updateBoxLabel(announcementHtml, rewardHtml) {
    const boxLabel = document.getElementById('boxLabel');
    if (!boxLabel) return;
    if (rewardHtml !== undefined) {
      boxLabel.innerHTML = `<span class="announcement-text">${announcementHtml}</span><span>${rewardHtml}</span>`;
    } else {
      boxLabel.innerHTML = `<span class="announcement-text">${announcementHtml}</span>`;
    }
  }

  function showIdlePrompt() {
    const promptText = initialLabelTemplate.replace(/\[command\]/gi, triggerCommand);
    updateBoxLabel(promptText);
  }

  function triggerOmeletteAnimation(username) {
    const omeletteImg = document.getElementById('giantOmeletteImg');
    const rewardContainer = document.getElementById('rewardContainer');
    const rewardImage = document.getElementById('rewardImage');
    const rewardName = document.getElementById('rewardName');
    const rewardRarity = document.getElementById('rewardRarity');
    const rewardFlavor = document.getElementById('rewardFlavor');

    const approachingText = approachingTemplate.replace(/\[username\]/gi, username);
    updateBoxLabel(approachingText);
    
    rewardContainer.style.display = 'none';
    if (omeletteImg) omeletteImg.classList.add('shake');

    setTimeout(() => {
      if (omeletteImg) omeletteImg.classList.remove('shake');

      const randomReward = getRandomWeightedReward(rewards);
      rewardImage.src = randomReward.url;
      
      const coloredRewardName = `<span style="color: ${randomReward.rarity.color};">${randomReward.name}</span>`;
      const parts = flavorTemplate.split('[omelettereward]');
      const announcementPart = parts[0].replace(/\[username\]/gi, username).trim();

      updateBoxLabel(announcementPart, coloredRewardName);
      
      rewardName.textContent = randomReward.name;
      rewardRarity.textContent = randomReward.rarity.name;
      rewardRarity.style.color = randomReward.rarity.color;
      rewardRarity.style.borderColor = randomReward.rarity.color;

      rewardFlavor.textContent = randomReward.flavor.name;
      rewardFlavor.style.color = randomReward.flavor.color;
      rewardFlavor.style.borderColor = randomReward.flavor.color;

      rewardContainer.style.display = 'flex';

      setTimeout(() => {
        showIdlePrompt();
        isProcessing = false;
        processQueue(); 
      }, CONFIG.revealDuration);

    }, CONFIG.shakeDuration);
  }
})();
