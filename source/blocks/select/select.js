$(document).ready(function() {
	const minValue = 0;
	var selectGueststext = [];
	var selectRoomstext = [];
	const itemGuests = [
	{
		item: 'guests',
		words: ['',' гость',' гостя', ' гостей']
	},
	
	{
		item:'babies',
		words: ['',' младенец',' младенца',' младенцев']
	}	
]
	
	const itemsRooms = [
		{
			item: 'bedrooms',
			words: ['',' спальня',' спальни',' спален'] 
		},
		{
			item: 'beds',
			words: ['',' кровать',' кровати',' кроватей']
		},
		{
			item: 'bathrooms',
			words: ['',' ванная комната',' ванные комнаты',' кроватей']
		}
	]

	$('.select').each(function(index,element){ //инициализация select при загрузке страницы
		const select = $(this);
		selectInit(select);
	});

	function selectInit(select){
		var selectType = $(select).data('type');
		var selectText = $(select).find('.select__text');
		let sum=0;
		let notBabies=0;
		if(selectType == 'guests') {
			$(select).find('.list__group').each(function(index,element){
				let listGroup = $(element);
				let listType = $(listGroup).data('item');
				let value = $(listGroup).find('.item__count').text();
				if(listType == 'guests'){
					sum +=+ value;
					writeSelectText(selectType,listType,selectText,sum,selectGueststext);
				}else if(listType == 'babies') {
					notBabies +=+ value;
					writeSelectText(selectType,listType,selectText,notBabies,selectGueststext);
				}
			})
		}else if(selectType == 'rooms') {
			$(select).find('.list__group').each(function(index,element){
				let listGroup = $(element);
				let listType = $(listGroup).data('item');
				let value = $(listGroup).find('.item__count').text();

				writeSelectText(selectType,listType,selectText,value,selectRoomstext);
			})
		}
	};
			

	function writeSelectText(selectType,listType,selectText,value,stringSelectText) {
		if(selectType == 'guests'){
			let editButtons= $(selectText).parent('.select__body').find('.edit-buttons');
			if(value>minValue){
				$(editButtons).addClass('active');
			}
			for( let i =0; i< itemGuests.length;i++){
				if(itemGuests[i].item == listType){
					var temp1;
					if(value==0){
						temp1=itemGuests[i].words[0];
					}else if(value==1){
						temp1=value  + itemGuests[i].words[1];
					}else if(value<=4){
						temp1=value  + itemGuests[i].words[2];
					}else {
						temp1 =value  + itemGuests[i].words[3];
					}
					stringSelectText[i] = temp1;
					break;
				}
				
			}
			let text='';
			for (let i=0; i<stringSelectText.length; i++) {
				if (text.length+stringSelectText.length>=19){
				  text+='...'
				  break
				}
				if (i!=0&&text!=''&&stringSelectText[i]!=''){
				  text+=', ';
				};
				text+=stringSelectText[i];
			  }
			  if (text=='') text='Сколько гостей'; 
			  $(selectText).text(text);
				
		} else if(selectType == 'rooms') {
			for( let i =0; i< itemsRooms.length;i++){	
				if(itemsRooms[i].item == listType){
					var temp2;
					if(value==0){
						temp2 = itemsRooms[i].words[0];
					}else if(value==1){
						temp2 = value  + itemsRooms[i].words[1];
					}else if(value<=4){
						temp2 = value  + itemsRooms[i].words[2];
					}else {
						temp2 = value   + itemsRooms[i].words[3];
					}
					stringSelectText[i] = temp2;
					break;
				}
			}
			let text='';
			for (let i=0; i<stringSelectText.length; i++) {
				if (text.length+stringSelectText.length>=19){
				  text+='...'
				  break
				}
				if (i!=0&&text!=''&&stringSelectText[i]!=''){
				  text+=', ';
				};
				text+=stringSelectText[i];
			  }
			  if (text=='') text='Выберите комнаты'; 
			  $(selectText).text(text);
		}		
	};

	$('.select .select__text').click(function (event){
		var selectDropdown = $(this).parent('.select__body').parent('.select');
		selectDropdown.toggleClass('active');
	});
	$('.edit__clear').click(function (event){
		var clearButton = $(this);
		var editButtons = $(clearButton).parent('.edit-buttons');
		var selectBar = $(this).parent('.edit-buttons').parent('.select__bar');
		var selectText = $(selectBar).parent('.select__body').find('.select__text');
		var select = $(selectText).parent('.select__body').parent('.select');
		var selectType = $(select).data('type');
		if( selectType =='guests'){
			let text = 'Сколько гостей';
			$(selectText).text(text);
		} 
		$(select).find('.button__minus').each(function(){
			$(this).removeClass('active');
		});
		$(select).find('.item__count').each(function(){
			$(this).text(minValue);
		});
		$(editButtons).removeClass('active');
	});
	$('.edit__accept').click(function(event){
		var acceptButton = $(this);
		var selectClose = $(acceptButton).parent('.edit-buttons').parent('.select__bar').parent('.select__body').parent('.select');
		$(selectClose).toggleClass('active');
	});

	$('.select .buttons__group button').click(function (event) {
		var buttonsGroup = $(this).parent('.buttons__group');
		var itemsCount = $(buttonsGroup).find('.item__count');
		var listGroup = $(buttonsGroup).parent('.list__group');
		var listType = $(listGroup).data('item');
		var menuSelect = $(buttonsGroup).parent('.list__group').parent('.select__list').parent('.select__bar');
		var select = $(menuSelect).parent('.select__body').parent('.select');
		var selectText = $(select).find('.select__text');
		var selectType = $(select).data('type');
		var editButtons = $(menuSelect).find('.edit-buttons');
		let val = $(itemsCount).text();
		let numberOfGuests=0;
		let notBabies = 0;
		if (this.innerHTML=='+'){
		  val++;
		  $(itemsCount).text(val);
		  $(editButtons).addClass('active');
		   if(val==minValue+1) {
			$(buttonsGroup).find('.button__minus').addClass('active'); 
		  }
		}else {
			val--;
			if (val<=minValue) {
				$(itemsCount).text(minValue); 
				$(buttonsGroup).find('.button__minus').removeClass('active'); 				
			}else { 
				$(itemsCount).text(val); 	  
			}
		}
		if(selectType == 'rooms') {
			$(select).find('.list__group').each(function(index,element){
				let listGroup = $(element);
				let listType = $(listGroup).data('item');
				let value = $(listGroup).find('.item__count').text();

				writeSelectText(selectType,listType,selectText,value,selectRoomstext);
			})	
		}else {
			$(select).find('.list__group').each(function(index,element){
				let listGroup = $(element);
				let listType = $(listGroup).data('item');
				let value = $(listGroup).find('.item__count').text();
				if(listType == 'guests'){
					numberOfGuests +=+ value;
					writeSelectText(selectType,listType,selectText,numberOfGuests,selectGueststext);
				}else if(listType == 'babies') {
					notBabies +=+ value;
					writeSelectText(selectType,listType,selectText,notBabies,selectGueststext);
				}
			})
		}
				if(numberOfGuests + notBabies == 0) {
					$(editButtons).removeClass('active');
				}else{
					$(editButtons).addClass('active');
				}
	  });
	});
	

	
