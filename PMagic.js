// My Magic App Code
'use strict';

// Declaring Global variables and my firebase DataBase
var magicDB = [];
var currentprofile, holder;

	// Making my constructor function
	function MagicPlayer(name, username, email, password) {

		// Declaring properties of my constructor function
		this.name = name;
		this.username = username;
		this.email = email;
		this.password = password;
		this.collection = [];
		this.wishlist = [];
		this.decks = [];

		// Testing the properties for differnt results
		if (name !== undefined) {
			this.name = name;
	}
		else{
		 	this.name = 'Guest';
	}
		if (username) {
			this.username = username;
	}
		else {
			this.username = 'Guest';
	}	
		if (email) {
			this.email = email;
	}
		else {
			this.email = 'Guest@Guest.com';
	}	
		if (password) {
			this.password = password;
	}
		else {
			this.password = 'P@ssw0rd';
	}	
}

		
	// Making my constructor function
	function MagicDecksInfo(create, deck, format) {

		// Declaring properties of my constructor function
		this.create = create;
		this.deck = deck;
		this.format = format;
		this.deck1 = [];
		
		
	}

	function MyDeck(decklist) {

		this.decklist = decklist;
		this.mydeck = [];

	}

	// Making my constructor function
	function MagicWishInfo(wlist) {

		// Declaring properties of my constructor function	
		this.wlist = wlist;

	}

	// Making my constructor function
	function MagicCollectionInfo(clist) {

		// Declaring properties of my constructor function	
		this.clist = clist;
		
	}

// Loading tables of data as call functions
loadMagicTable();

	
	
	// Making a method that search for Magic player profile
	MagicPlayer.prototype.get_profile = function(username, password) {
		for (var i = 0; i < magicDB.length; i++) {
			if (username === magicDB[i].username && password === magicDB[i].password) {
			    
			    currentprofile = magicDB[i];
				// console.log(currentprofile);
			}
		}
	}

	MagicPlayer.prototype.get_profile1 = function(currentprofile) {
		for (var i = 0; i < magicDB.length; i++) {
			if (currentprofile.username === magicDB[i].username && currentprofile.password === magicDB[i].password) {
			    
			    currentprofile = magicDB[i];
				// console.log(currentprofile);
			}
		}
	}


// Making a method that save and overwrite the Magic player profile
	MagicPlayer.prototype.overwrite_profile = function(currentprofile) {
		for (var i = 0; i < magicDB.length; i++) {
			if (currentprofile.username === magicDB[i].username && currentprofile.password === magicDB[i].password) {
			    
			    magicDB[i] = currentprofile;
				// console.log(magicDB[i]);
			}
		}
	}
	
	// Making a method that will hold Deck info
	MagicDecksInfo.prototype.hold = function(MagicDecksInfo) {

				holder = MagicDecksInfo;
				// console.log(holder);
				
    }

// Making a method that will get the deck info the set unknown
	MagicPlayer.prototype.get_deck = function(currentprofile) {

		for (var i = 0; i < magicDB.length; i++) {
			if (currentprofile.decks[i].deckname === magicDB.decks[i].deckname) {

				holder = currentprofile;
		    }
	   }		
    }

    // Making a method that will check if the username exists
	MagicPlayer.prototype.check_name = function(username) {
		
		for (var i = 0; i < magicDB.length; i++) {
			if (username === magicDB[i].username) {
			    
			   alert("This name already exist please choose another name. ");
			}
		}

			

	}

	// Making a method that will add the deck and sideboard to MagicDecksInfo's decks array
	MyDeck.prototype.add_card = function(MyDeck) {
		
		

			this.mydeck.push(this.decklist);

	}

	// Making a method that will add the deck and sideboard to MagicDecksInfo's decks array
	MagicDecksInfo.prototype.add_deck = function(MyDeck) {
		
		

			this.deck1.push(this.mydeck);

	}


// Making a method that will add the deck and sideboard to MagicDecksInfo's decks array
	MagicPlayer.prototype.add_deckinfo = function(MagicDecksInfo) {
		
		

			this.decks.push(MagicDecksInfo);

	}
	// Making a method that will add the cards to MagicDecksInfo's collection array
	MagicPlayer.prototype.add_collection = function(MagicCollectionInfo) {
		
		

				this.collection.push(MagicCollectionInfo);

	}

	// Making a method that will add the cards to MagicDecksInfo's wishlist array
	MagicPlayer.prototype.add_wishlist = function(MagicWishInfo) {
		
		

				this.wishlist.push(MagicWishInfo);

		
	} 

	
	// Making a method that will add the Player profile acct to the Database
	MagicPlayer.prototype.add_Database = function(MagicPlayer) {
		
		magicDB.push(MagicPlayer);
		/*for (var i = 0; i < magicDB.length; i++) {
		 	console.log(magicDB[i]);

		}	*/
	}

$('button.btn.btn-success').on('click', function() {
     // Get values from input fields
     var nameValue = $('#name').val();
     var userValue = $('#user').val();
     var emailValue = $('#email').val();
     var cemailValue = $('#cemail').val();
     var passValue = $('#pass').val();
     var cpassValue = $('#cpass').val();
   
     var player = new MagicPlayer(nameValue, userValue, emailValue, passValue);
     
     	player.check_name(userValue);
       	player.add_Database(player);
       	player.get_profile(userValue, passValue);
       	alert("Welcome to The Deck Box " + currentprofile.name + " or better known as " + currentprofile.username + "!!!!!");
       	// console.log(magicDB);

     	updateMagicTable(currentprofile);
		

    
});

$('button.btn.btn-success1').on('click', function() {
     // Get values from input fields
     var user1Value = $('#user1').val();
     var pass1Value = $('#pass1').val();
        
   
      for (var i = 0;i < magicDB.length; i++) {
       	if (user1Value === magicDB[i].username && pass1Value === magicDB[i].password) {
			
			currentprofile = magicDB[i];
       		alert("Hello " + currentprofile.name + " or better known as " + currentprofile.username + "!!!!!");
       	}
}
      // 	updateMagicTable(currentprofile);
		

    
});

$('button.btn.btn-success2').on('click', function() {
     // Get values from input fields
     var createValue = $('#create').val();
     var deckValue = $('#deck').val();
     var formatValue = $('#format').val();
            
     var MDI = new MagicDecksInfo(createValue, deckValue, formatValue);
     
     MDI.hold(MDI);

        
});

$('button.btn.btn-success3').on('click', function() {
     // Get values from input fields
     var decklistValue = $('#decklist').val();
     var newdeck = new MyDeck(decklistValue);            
      
      newdeck.add_card(decklistValue);
      var choose = prompt("Player are you finished?");
      if (choose.toLowerCase() === 'yes') {

      	holder.add_deck(newdeck);
      	currentprofile.add_deckinfo(holder);

      }

       //updateMagicTable(currentprofile);
	   //updateMagicTable1(holder);

    
});

$('button.btn.btn-success5').on('click', function() {
     // Get values from input fields
     var clistValue = $('#clist').val();

     var MCI = new MagicCollectionInfo(clistValue);            
      
       currentprofile.add_collection(MCI);
       currentprofile.overwrite_profile(currentprofile);

	
       //updateMagicTable(currentprofile);
	   //updateMagicTable1(holder);

    
});

$('button.btn.btn-success4').on('click', function() {
     // Get values from input fields
     var wlistValue = $('#wlist').val();

     var MWI = new MagicWishInfo(wlistValue); 
       
       currentprofile.add_wishlist(MWI);
       currentprofile.overwrite_profile(currentprofile);
       

       //updateMagicTable(currentprofile);
	  // updateMagicTable1(holder);

    
});


$('button.btn.btn-success6').on('click', function() {
     //Load Data to page
      updateMagicTable(currentprofile);
	  // updateMagicTable1(holder);

    
});

function loadMagicTable() { 
    var currentPlayer;
    var magicTableRow;

    // Display Magic data to UI
    for (var i = 0; i < magicDB.length; i++) {
        currentPlayer = magicDB[i];

        // if the object exists, write it to the DOM
        if (currentPlayer) {
            magicTableRow = '<tr>' +
                                    '<td>' + currentPlayer.name + '</td>' +
                                    '<td>' + currentPlayer.username + '</td>' +
                                    '<td>' + currentPlayer.email+ '</td>' +
                                    '</tr>';

            $('tbody').append(magicTableRow);
        }
    }
}

function updateMagicTable(currentprofile) {
    var magicTableRow = '<tr>' +
                            '<td>' + currentprofile.name + '</td>' +
                            '<td>' + currentprofile.username + '</td>' +
                            '<td>' + currentprofile.email + '</td>' +
                            '<td>' + currentprofile.decks + '</td>' +
                            '<td>' + currentprofile.collection + '</td>' +
                            '<td>' + currentprofile.wishlist + '</td>' +
                            '</tr>';

    $('tbody').append(magicTableRow);
}

