
	myapp.controller("listCtrl", ListController);
        
        function ListController($scope){
        	var vm=this;
            
			vm.data = turtleData;
			vm.activeTurtle = {};
			vm.changeActiveTurtle = changeActiveTurtle;
			vm.search = "";
			vm.quizActive=false;
			vm.activateQuiz = activateQuiz;

			function changeActiveTurtle(index){
				vm.activeTurtle = index;
			}

			function activateQuiz(){
				vm.quizActive = true;
			}
        }


    var turtleData =[
    	{
    		type:"INDIA",
    	    image_url:"./images/1.jpg",
			locations:"kkd",
			size:"large",
    	    diet:"herbivore",
			lifespan:"65years",
			description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
			
    	},{
    		type:"Africa",
    	    image_url:"./images/1.jpg",
			locations:"kkd",
			size:"large",
    	    diet:"herbivore",
			lifespan:"65years",
			description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
			
    	}, {
    		type:"America",
    	    image_url:"./images/1.jpg",
			locations:"kkd",
			size:"large",
    	    diet:"herbivore",
			lifespan:"65years",
			description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
			
    	}, {
    		type:"Europe",
    	    image_url:"./images/1.jpg",
			locations:"kkd",
			size:"large",
    	    diet:"herbivore",
			lifespan:"65years",
			description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
			
    	}, {
    		type:"China",
    	    image_url:"./images/1.jpg",
			locations:"kkd",
			size:"large",
    	    diet:"herbivore",
			lifespan:"65years",
			description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
			
    	}, {
    		type:"Japan",
    	    image_url:"./images/1.jpg",
			locations:"kkd",
			size:"large",
    	    diet:"herbivore",
			lifespan:"65years",
			description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
			
    	}



    ]

    
