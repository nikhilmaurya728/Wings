songs = ["audio/chapter1.mp3", "song2.mp3", "song3.mp3"];
var data = {
 "Names of Animals": {
  "Domestic Animals": '<div class="page"> <div class="a4page"><div class="tablediv"><h2>Domestic Animal Names</h2><div id="table1" class="tablediv"><button class= "auto-click-btn" onclick="generateTable(DomesticAnimals,\'#table1\')">Show Table</button></div></div></div></div>',

  "Wild Animals": '<div class="page"> <div class="a4page"><div class="tablediv"><h2>Wild Animal Names</h2><div id="table2" class="tablediv"><button class= "auto-click-btn" onclick="generateTable(WildAnimals,\'#table2\')">Show Table</button></div></div></div></div>',

  "Marine Animals": '<div class="page"> <div class="a4page"><div class="tablediv"><h2>Marine Animal Names</h2><div id="table3" class="tablediv"><button class= "auto-click-btn" onclick="generateTable(MarineAnimals,\'#table3\')">Show Table</button></div></div></div></div>',

  "Hybrid Animals": '<div class="page"> <div class="a4page"><div class="tablediv"><h2>Hybrid Animal Names</h2><div id="table4" class="tablediv"><button class= "auto-click-btn" onclick="generateTable(HybridAnimals,\'#table4\')">Show Table</button></div></div></div></div>',
},




"List of Food Items":{
"Fruit Names": '<div class="page"> <div class="a4page"><div class="tablediv"><h2>Fruit Names</h2><div id="table1" class="tablediv"><button class= "auto-click-btn" onclick="generateTable(Fruits,\'#table1\')">Show Table</button></div></div></div></div>',

"Vegetable Names": '<div class="page"> <div class="a4page"><div class="tablediv"><h2>Vegetable Names</h2><div id="table2" class="tablediv"><button class= "auto-click-btn" onclick="generateTable(VegetableNames,\'#table2\')">Show Table</button></div></div></div></div>',

"Dry Fruit Names": '<div class="page"> <div class="a4page"><div class="tablediv"><h2>DryFruit Names</h2><div id="table3" class="tablediv"><button class= "auto-click-btn" onclick="generateTable(DryFruitNames,\'#table3\')">Show Table</button></div></div></div></div>',

"Grains & Cereals ": '<div class="page"> <div class="a4page"><div class="tablediv"><h2>Grains And Cereals Names</h2><div id="table4" class="tablediv"><button class= "auto-click-btn" onclick="generateTable(GrainsAndCereals,\'#table4\')">Show Table</button></div></div></div></div>',

"Edible seeds": '<div class="page"> <div class="a4page"><div class="tablediv"><h2>EdibleSeeds Names</h2><div id="table5" class="tablediv"><button class= "auto-click-btn" onclick="generateTable(EdibleSeeds,\'#table5\')">Show Table</button></div></div></div></div>',

"Spices & Herbs": '<div class="page"> <div class="a4page"><div class="tablediv"><h2>Spices And Herbs Names</h2><div id="table6" class="tablediv"><button class= "auto-click-btn" onclick="generateTable(SpicesAndHerbs,\'#table6\')">Show Table</button></div></div></div></div>',

"Cooked food": '<div class="page"> <div class="a4page"><div class="tablediv"><h2>Cooked food Names</h2><div id="table7" class="tablediv"><button class= "auto-click-btn" onclick="generateTable(Cookedfoods,\'#table7\')">Show Table</button></div></div></div></div>',

"Dairy & Meats": '<div class="page"> <div class="a4page"><div class="tablediv"><h2>Dairy And Meats</h2><div id="table8" class="tablediv"><button class= "auto-click-btn" onclick="generateTable(DairyAndMeats,\'#table8\')">Show Table</button></div></div></div></div>',

"Sweets & Snacks": '<div class="page"> <div class="a4page"><div class="tablediv"><h2>Sweets And Snacks Items</h2><div id="table9" class="tablediv"><button class= "auto-click-btn" onclick="generateTable(SweetsAndSnacks,\'#table9\')">Show Table</button></div></div></div></div>',

"Street Food": '<div class="page"> <div class="a4page"><div class="tablediv"><h2>Street Food Items</h2><div id="table10" class="tablediv"><button class= "auto-click-btn" onclick="generateTable(StreetFoods,\'#table10\')">Show Table</button></div></div></div></div>',

"Beverages Drinks": '<div class="page"> <div class="a4page"><div class="tablediv"><h2>Beverages Drinks Items</h2><div id="table11" class="tablediv"><button class= "auto-click-btn" onclick="generateTable(Beverages,\'#table11\')">Show Table</button></div></div></div></div>',
},


"Names of Body Parts":{
"Human Body (Ex..) ": '<div class="page"> <div class="a4page"><div class="tablediv"><h2>External Body Parts</h2><div id="table1" class="tablediv"><button class= "auto-click-btn" onclick="generateTable(ExternalBodyParts,\'#table1\')">Show Table</button></div></div></div></div>',

"Human Body (In..) ": '<div class="page"> <div class="a4page"><div class="tablediv"><h2>Internal Body Parts</h2><div id="table2" class="tablediv"><button class= "auto-click-btn" onclick="generateTable(InternalBodyParts,\'#table2\')">Show Table</button></div></div></div></div>',

"Tree Body Parts": '<div class="page"> <div class="a4page"><div class="tablediv"><h2>Tree Body Parts</h2><div id="table3" class="tablediv"><button class= "auto-click-btn" onclick="generateTable(TreeBodyParts,\'#table3\')">Show Table</button></div></div></div></div>',

"Animal Body Parts": '<div class="page"> <div class="a4page"><div class="tablediv"><h2>Animal Body Parts</h2><div id="table4" class="tablediv"><button class= "auto-click-btn" onclick="generateTable(AnimalBodyParts,\'#table4\')">Show Table</button></div></div></div></div>',

"Computer Parts": '<div class="page"> <div class="a4page"><div class="tablediv"><h2>Computer Body Parts</h2><div id="table5" class="tablediv"><button class= "auto-click-btn" onclick="generateTable(ComputerParts,\'#table5\')">Show Table</button></div></div></div></div>',

"Vehicle/Machine": '<div class="page"> <div class="a4page"><div class="tablediv"><h2>Vehicle and Machine Parts</h2><div id="table6" class="tablediv"><button class= "auto-click-btn" onclick="generateTable(VehicleMachineParts,\'#table6\')">Show Table</button></div></div></div></div>',

"House Parts": '<div class="page"> <div class="a4page"><div class="tablediv"><h2>House Parts </h2><div id="table7" class="tablediv"><button class= "auto-click-btn" onclick="generateTable(HouseParts,\'#table7\')">Show Table</button></div></div></div></div>',
},




"Color Names":{
"Painting Colors":'<div class="page"> <div class="a4page"><div class="tablediv"><h2>Painting Color Names</h2><div id="table1" class="tablediv"><button class= "auto-click-btn" onclick="generateTable(ColorNames,\'#table1\')">Show Table</button></div></div></div></div>',

"Color Combinations":'<div class="page"> <div class="a4page"><div class="tablediv"><h2>Color Combinations</h2><div id="table2" class="tablediv"><button class= "auto-click-btn" onclick="generateTable(ColorCombinations,\'#table2\')">Show Table</button></div></div></div></div>',
},


"Day And Month":{
"Day Names":'<div class="page"> <div class="a4page"><div class="tablediv"><h2>7 Day Names</h2><div id="table1" class="tablediv"><button class= "auto-click-btn" onclick="generateTable(DayNames,\'#table1\')">Show Table</button></div></div></div></div>',

"Month Names":'<div class="page"> <div class="a4page"><div class="tablediv"><h2>12 Month Names</h2><div id="table2" class="tablediv"><button class= "auto-click-btn" onclick="generateTable(MonthNames,\'#table2\')">Show Table</button></div></div></div></div>',


"Festival Names":'<div class="page"> <div class="a4page"><div class="tablediv"><h2>Festival Names</h2><div id="table3" class="tablediv"><button class= "auto-click-btn" onclick="generateTable(festivalNames,\'#table3\')">Show Table</button></div></div></div></div>',


"Importent Dates":'<div class="page"> <div class="a4page"><div class="tablediv"><h2>Important Dates</h2><div id="table4" class="tablediv"><button class= "auto-click-btn" onclick="generateTable(importantDates,\'#table4\')">Show Table</button></div></div></div></div>',
},




"Kitchen":{
  "Cooking Utensils":'<div class="page"> <div class="a4page"><div class="tablediv"><h2>Cooking Utensils रसोई के बर्तन </h2><div id="table1" class="tablediv"><button class= "auto-click-btn" onclick="generateTable(cookingUtensils,\'#table1\')">Show Table</button></div></div></div></div>',


  "Kitchen Appliances":'<div class="page"> <div class="a4page"><div class="tablediv"><h2>Kitchen Appliances</h2><div id="table2" class="tablediv"><button class= "auto-click-btn" onclick="generateTable(kitchenAppliances,\'#table2\')">Show Table</button></div></div></div></div>',


  "Storage Items":'<div class="page"> <div class="a4page"><div class="tablediv"><h2>Kitchen Storage Items</h2><div id="table3" class="tablediv"><button class= "auto-click-btn" onclick="generateTable(kitchenStorageItems,\'#table3\')">Show Table</button></div></div></div></div>',


  "Cooking Methods":'<div class="page"> <div class="a4page"><div class="tablediv"><h2>Cooking Methods</h2><div id="table4" class="tablediv"><button class= "auto-click-btn" onclick="generateTable(cookingMethods,\'#table4\')">Show Table</button></div></div></div></div>',


  "Cleaning Items":'<div class="page"> <div class="a4page"><div class="tablediv"><h2>Kitchen Cleaning Items</h2><div id="table5" class="tablediv"><button class= "auto-click-btn" onclick="generateTable(kitchenCleaningItems,\'#table5\')">Show Table</button></div></div></div></div>',


  "Home Appliances":'<div class="page"> <div class="a4page"><div class="tablediv"><h2>Home Appliances </h2><div id="table6" class="tablediv"><button class= "auto-click-btn" onclick="generateTable(homeAppliances,\'#table6\')">Show Table</button></div></div></div></div>',
},




"Farm":{
"Farm tools":'<div class="page"> <div class="a4page"><div class="tablediv"><h2>Farm Tools </h2><div id="table1" class="tablediv"><button class= "auto-click-btn" onclick="generateTable(farmTools,\'#table1\')">Show Table</button></div></div></div></div>',


"Seeds & Fertilizers":'<div class="page"> <div class="a4page"><div class="tablediv"><h2>Seeds & Fertilizers</h2><div id="table2" class="tablediv"><button class= "auto-click-btn" onclick="generateTable(seedsAndFertilizers,\'#table2\')">Show Table</button></div></div></div></div>',


"Work Name":'<div class="page"> <div class="a4page"><div class="tablediv"><h2>Farm Work Names</h2><div id="table3" class="tablediv"><button class= "auto-click-btn" onclick="generateTable(farmWorkNames,\'#table3\')">Show Table</button></div></div></div></div>',
},


"Schools":{
  "Teacher":'<div class="page"> <div class="a4page"><div class="tablediv"><h2>Teacher Releted Words</h2><div id="table1" class="tablediv"><button class= "auto-click-btn" onclick="generateTable(teacherWords,\'#table1\')">Show Table</button></div></div></div></div>',

  
  "Student":'<div class="page"> <div class="a4page"><div class="tablediv"><h2>Student Releted Words</h2><div id="table2" class="tablediv"><button class= "auto-click-btn" onclick="generateTable(studentWords,\'#table2\')">Show Table</button></div></div></div></div>',
},


"Hospitals":{
  "Hospital Personnel":'<div class="page"> <div class="a4page"><div class="tablediv"><h2>Hospital Personnel Words</h2><div id="table1" class="tablediv"><button class= "auto-click-btn" onclick="generateTable(hospitalPersonnel,\'#table1\')">Show Table</button></div></div></div></div>',

  "Hospital Departments":'<div class="page"> <div class="a4page"><div class="tablediv"><h2>Hospital Departments</h2><div id="table2" class="tablediv"><button class= "auto-click-btn" onclick="generateTable(hospitalDepartments,\'#table2\')">Show Table</button></div></div></div></div>',

  "Medical Terms":'<div class="page"> <div class="a4page"><div class="tablediv"><h2>Medical Terms</h2><div id="table3" class="tablediv"><button class= "auto-click-btn" onclick="generateTable(medicalTerms,\'#table3\')">Show Table</button></div></div></div></div>',
},

};




generateSidebar();
