function sendIt(){
	if(document.f.companyname.value==""　|| document.f.companyname.value==undefined　|| document.f.companyname.value=="null")
	 {
	  alert("御社名を入力してください")
	  document.f.companyname.focus();
	  return false;
	 }
	 //name-katakana
	if(document.f.companynamekatakana.value==""　|| document.f.companynamekatakana.value==undefined || document.f.companynamekatakana.value=="null")
	 {
	  alert("御社名カナを入力してください")
	  document.f.companynamekatakana.focus();
	  return false;
	 }
	//name
	if(document.f.name.value==""　|| document.f.name.value==undefined　|| document.f.name.value=="null")
	 {
	  alert("担当者名を入力してください")
	  document.f.name.focus();
	  return false;
	 }
	 //name-katakana
	if(document.f.namekatakana.value==""　|| document.f.namekatakana.value==undefined || document.f.namekatakana.value=="null")
	 {
		alert("担当者名カナを入力してください")
	  document.f.namekatakana.focus();
	  return false;
	 }
	 //mail
	if(document.f.mail.value==""　|| document.f.mail.value==undefined || document.f.mail.value=="null")
	 {
	  alert("メールを入力してください")
	  document.f.mail.focus();
	  return false;
	 }
	 //mail-check
	if(document.f.mail2.value==""　|| document.f.mail2.value==undefined || document.f.mail2.value=="null")
	 {
	  alert("メール確認を入力してください")
	  document.f.mail2.focus();
	  return false;
	 }
	 var exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
	if(exptext.test(document.f.mail.value)==false ){
		 alert("E-mailの形式が正しくありません.");
		 document.f.mail.focus();
		 exit;
	}
	if(exptext.test(document.f.mail2.value)==false ){
		 alert("E-mailの形式が正しくありません.");
		 document.f.mail2.focus();
		 exit;
	}
	if(document.f.mail.value!=document.f.mail2.value){
		 //비밀번호와 비밀번호확인의 값이 다를 경우
		 
		 alert("メールが一致しません.");
		 document.f.mail.focus();
		 return false;
		 
	}

	 //phone
	if(document.f.phone.value==""　|| document.f.phone.value==undefined || document.f.phone.value=="null")
	 {
	  alert("電話番号を入力してください")
	  document.f.phone.focus();
	  return false;
	 }
	
	//住所チェック
	
	if(document.f.addressno1.value==""　|| document.f.addressno1.value==undefined || document.f.addressno1.value=="null")
	 {
	  alert("郵便番号を入力してください")
	  document.f.addressno1.focus();
	  return false;
	 }
	if(document.f.addressno2.value==""　|| document.f.addressno2.value==undefined || document.f.addressno2.value=="null")
	 {	
	  alert("郵便番号を入力してください")
	  document.f.addressno2.focus();
	  return false;
	 }
	
	//県check
	if(document.f.kenn.value==0　|| document.f.kenn.value==undefined || document.f.kenn.value=="null")
	 {
	  alert("県")
	  document.f.kenn.focus();
	  return false;
	 }
	
	
	if(document.f.addressnumber.value==""　|| document.f.addressnumber.value==undefined || document.f.addressnumber.value=="null")
	 {
	  alert("住所を入力してください")
	  document.f.addressnumber.focus();
	  return false;
	 }
	if(document.f.apt.value==""　|| document.f.apt.value==undefined || document.f.apt.value=="null")
	 {
	  alert("住所を入力してください")
	  document.f.ATP.focus();
	  return false;
	 }
	
	
	
	
	if(document.f.message.value==""　|| document.f.message.value==undefined　|| document.f.message.value=="null")
	 {
	  alert("お問い合わせの内容を入力してください。")
	  document.f.message.focus();
	  return false;
	 }
	
	
	document.f.submit();
 } 



function sendIt2(){
	if(document.f.companyname.value==""　|| document.f.companyname.value==undefined　|| document.f.companyname.value=="null")
	 {
	  alert("御社名を入力してください")
	  document.f.companyname.focus();
	  return false;
	 }
	 //name-katakana
	if(document.f.companynamekatakana.value==""　|| document.f.companynamekatakana.value==undefined || document.f.companynamekatakana.value=="null")
	 {
	  alert("御社名カナを入力してください")
	  document.f.companynamekatakana.focus();
	  return false;
	 }
	//name
	if(document.f.name.value==""　|| document.f.name.value==undefined　|| document.f.name.value=="null")
	 {
	  alert("担当者名を入力してください")
	  document.f.name.focus();
	  return false;
	 }
	 //name-katakana
	if(document.f.namekatakana.value==""　|| document.f.namekatakana.value==undefined || document.f.namekatakana.value=="null")
	 {
		alert("担当者名カナを入力してください")
	  document.f.namekatakana.focus();
	  return false;
	 }
		 //mail
		if(document.f.mail.value==""　|| document.f.mail.value==undefined || document.f.mail.value=="null")
		 {
		  alert("メールを入力してください")
		  document.f.mail.focus();
		  return false;
		 }
		 //mail-check
		if(document.f.mail2.value==""　|| document.f.mail2.value==undefined || document.f.mail2.value=="null")
		 {
		  alert("メール確認を入力してください")
		  document.f.mail2.focus();
		  return false;
		 }
		 var exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
		if(exptext.test(document.f.mail.value)==false ){
			 alert("E-mailの形式が正しくありません.");
			 document.f.mail.focus();
			 exit;
		}
		if(exptext.test(document.f.mail2.value)==false ){
			 alert("E-mailの形式が正しくありません.");
			 document.f.mail2.focus();
			 exit;
		}
		if(document.f.mail.value!=document.f.mail2.value){
			 //비밀번호와 비밀번호확인의 값이 다를 경우
			 
			 alert("メールが一致しません.");
			 document.f.mail.focus();
			 return false;
			 
		}
		 //phone
		if(document.f.phone.value==""　|| document.f.phone.value==undefined || document.f.phone.value=="null")
		 {
		  alert("電話番号を入力してください")
		  document.f.phone.focus();
		  return false;
		 }
		
		//住所チェック
		
		if(document.f.addressno1.value==""　|| document.f.addressno1.value==undefined || document.f.addressno1.value=="null")
		 {
		  alert("郵便番号を入力してください")
		  document.f.addressno1.focus();
		  return false;
		 }
		if(document.f.addressno2.value==""　|| document.f.addressno2.value==undefined || document.f.addressno2.value=="null")
		 {
		  alert("郵便番号を入力してください")
		  document.f.addressno2.focus();
		  return false;
		 }
		
		//県check
		if(document.f.kenn.value==0　|| document.f.kenn.value==undefined || document.f.kenn.value=="null")
		 {
		  alert("県")
		  document.f.kenn.focus();
		  return false;
		 }
		
		
		if(document.f.addressnumber.value==""　|| document.f.addressnumber.value==undefined || document.f.addressnumber.value=="null")
		 {
		  alert("住所を入力してください")
		  document.f.addressnumber.focus();
		  return false;
		 }
		if(document.f.apt.value==""　|| document.f.apt.value==undefined || document.f.apt.value=="null")
		 {
		  alert("住所を入力してください")
		  document.f.ATP.focus();
		  return false;
		 }
		
		
		document.f.submit();
	 } 


function sendIt3(){
	if(document.f.companyname.value==""　|| document.f.companyname.value==undefined　|| document.f.companyname.value=="null")
	 {
	  alert("御社名を入力してください")
	  document.f.companyname.focus();
	  return false;
	 }
	 //name-katakana
	if(document.f.companynamekatakana.value==""　|| document.f.companynamekatakana.value==undefined || document.f.companynamekatakana.value=="null")
	 {
	  alert("御社名カナを入力してください")
	  document.f.companynamekatakana.focus();
	  return false;
	 }
	//name
	if(document.f.name.value==""　|| document.f.name.value==undefined　|| document.f.name.value=="null")
	 {
	  alert("担当者名を入力してください")
	  document.f.name.focus();
	  return false;
	 }
	 //name-katakana
	if(document.f.namekatakana.value==""　|| document.f.namekatakana.value==undefined || document.f.namekatakana.value=="null")
	 {
		alert("担当者名カナを入力してください")
	  document.f.namekatakana.focus();
	  return false;
	 }
		 //mail
		if(document.f.mail.value==""　|| document.f.mail.value==undefined || document.f.mail.value=="null")
		 {
		  alert("メールを入力してください")
		  document.f.mail.focus();
		  return false;
		 }
		 //mail-check
		if(document.f.mail2.value==""　|| document.f.mail2.value==undefined || document.f.mail2.value=="null")
		 {
		  alert("メール確認を入力してください")
		  document.f.mail2.focus();
		  return false;
		 }
		 var exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
		if(exptext.test(document.f.mail.value)==false ){
			 alert("E-mailの形式が正しくありません.");
			 document.f.mail.focus();
			 exit;
		}
		if(exptext.test(document.f.mail2.value)==false ){
			 alert("E-mailの形式が正しくありません.");
			 document.f.mail2.focus();
			 exit;
		}

		 //phone
		if(document.f.phone.value==""　|| document.f.phone.value==undefined || document.f.phone.value=="null")
		 {
		  alert("電話番号を入力してください")
		  document.f.phone.focus();
		  return false;
		 }
		
		//住所チェック
		
		if(document.f.addressno1.value==""　|| document.f.addressno1.value==undefined || document.f.addressno1.value=="null")
		 {
		  alert("郵便番号を入力してください")
		  document.f.addressno1.focus();
		  return false;
		 }
		if(document.f.addressno2.value==""　|| document.f.addressno2.value==undefined || document.f.addressno2.value=="null")
		 {
		  alert("郵便番号を入力してください")
		  document.f.addressno2.focus();
		  return false;
		 }
		
		//県check
		if(document.f.kenn.value==0　|| document.f.kenn.value==undefined || document.f.kenn.value=="null")
		 {
		  alert("県")
		  document.f.kenn.focus();
		  return false;
		 }
		
		
		if(document.f.addressnumber.value==""　|| document.f.addressnumber.value==undefined || document.f.addressnumber.value=="null")
		 {
		  alert("住所を入力してください")
		  document.f.addressnumber.focus();
		  return false;
		 }
		if(document.f.apt.value==""　|| document.f.apt.value==undefined || document.f.apt.value=="null")
		 {
		  alert("住所を入力してください")
		  document.f.ATP.focus();
		  return false;
		 }
		if(document.f.message.value==""　|| document.f.message.value==undefined　|| document.f.message.value=="null")
		 {
		  alert("商品名および数量を入力してください")
		  document.f.message.focus();
		  return false;
		 }
		if(document.f.mail.value!=document.f.mail2.value){
			 //비밀번호와 비밀번호확인의 값이 다를 경우
			 
			 alert("メールが一致しません.");
			 document.f.mail.focus();
			 return false;
			 
		}
		
		
		
		document.f.submit();
	 } 

