package com.java.service;

import static javax.mail.Message.RecipientType.*;

import java.util.Date;
import java.util.Properties;

import javax.mail.Authenticator;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage; 

public class SendMail {

	/*
	private static void SendMail() throws AddressException, MessagingException, IOException{
		 Properties props = new Properties(); 
         //smptサーバに関する設定 
         props.setProperty("mail.smtp.host", "smtp.naver.com"); 
         props.setProperty("mail.smtp.port", "587"); 
         props.setProperty("mail.smtp.auth", "true"); 
 
 
         //タイムアウトも一応 
         props.setProperty("mail.smtp.connectiontimeout", "5000"); 
         props.setProperty("mail.smtp.timeout", "5000"); 
         //サーバとの会話内容を出力してくれる！ 
         props.setProperty("mail.debug", "true"); 
 
 
         //パスワードを保持するクラスを作る必要がある？ 
         class PasswordAuthenticatior extends Authenticator{ 
               private String username; 
               private String password; 
 
 
               PasswordAuthenticatior(String username, String password) { 
                 this.username = username; 
                 this.password = password; 
               } 
 
 
               @Override 
               public PasswordAuthentication getPasswordAuthentication() { 
                 return new PasswordAuthentication(username, password); 
             } 
         } 
 
 
         //パスワード認証つきのセッションを作成 
         Session session = Session.getDefaultInstance( 
                         props, 
                         new PasswordAuthenticatior("stylea1201","dlckddn1") 
         ); 
 
 
         MimeMessage msg = new MimeMessage(session); 
 
 
         msg.setFrom(new InternetAddress("stylea1201@naver.com")); 
        // msg.setSender(new InternetAddress("wkwkwk@naver.com")); 
         //TOを設定。CCとBCCも設定できるよ☆ 
         msg.setRecipient(TO, new InternetAddress("wwklcw@naver.com")); 
 
 
         msg.setSubject("メールを送った件について", "utf-8");
         msg.setText("メールを送りました！"); 
 
 
         //メッセージをストリームに書き出すメソッド。ソースが見れるぜ？ 
         msg.writeTo(System.out); 
 
 
         Transport.send(msg); 
	}*/



	public void inquiry(String companyname, String companynamekatakana, String name, String namekatakana, String mail,
			String phone, String fax, String addressno, String kenn, String addressnumber, String apt , String message) {
		
		String title = "お問い合わせ";
		String txt = "";
		
		txt = "<html>"
        		+ "<head>"
        		+ "<title>HTML | Table</title>"
        		+ "<style>"
        		+ "table {width: 50%; margin:auto; text-align: center; font-size: 1.2em; color: #808080;}"
        		+ "table,th{ border: 1px solid #bcbcbc; color: #808080;}"
        		+ "td{border: 1px solid #bcbcbc; color: #000000; text-align: center;}style1{color: #555555; }</style>"
        		+ "</head>"
        		+ "<body>"
        		+ "<table><caption>"+title+"</caption><thead><tr>"
        		+ "<th width='20%'>company</th><td width='80%'>"+companyname+"</td></tr></thead>"
        		+ "<tbody>"
        		+ "<tr><th>companykana</th><td><center>"+companynamekatakana+"<center/></td></tr>"
        		+ "<tr><th>companykana</th><td>"+name+"</td></tr>"
        		+ "<tr><th>companykana</th><td>"+namekatakana+"</td></tr>"
        		+ "<tr><th>companykana</th><td>"+mail+"</td></tr>"
        		+ "<tr><th>companykana</th><td>"+phone+"</td></tr>"
        		+ "<tr><th>companykana</th><td>"+fax+"</td></tr>"
        		+ "<tr><th>companykana</th><td>"+addressno+""+kenn+""+addressnumber+""+apt+"</td></tr>"
        		+ "</tbody>"
        		+ "<tfoot><tr><th>内容</th><td>"+message+"</td></tr></tfoot></table>"
        		+ "</body></html>";
		send(title, txt);
		System.out.println(txt);
		
	}

	public void order(String companyname, String companynamekatakana, String name, String namekatakana, String mail,
			String phone, String fax, String addressno, String kenn, String addressnumber, String apt, String message)  {
		System.out.println("companyname : "+companyname);
		System.out.println("companynamekatakana : "+companynamekatakana);
		System.out.println("name : "+name);
		System.out.println("name(カタカナ) : "+namekatakana);
		System.out.println("mail : "+mail);
		System.out.println("phone : "+phone);
		System.out.println("addressno : "+addressno);
		System.out.println("kenn : "+kenn);
		System.out.println("addressnumber : "+addressnumber);
		System.out.println("apt : "+apt);
		System.out.println("massage : "+message);
		String title = "order";
		String  txt = "";
		txt += "\n御社名【お名前】:: "+companyname;
		txt += "\n担当者名 :: "+name;
		txt += "\n担当者名カナ :: "+namekatakana;
		txt += "\nメール :: "+mail;
		txt += "\n電話 :: "+phone;
		txt += "\nFAX :: "+fax;
		txt += "\n住所 :: "+addressno+""+kenn+""+addressnumber+""+apt+"";
		txt += "\nオーダー内容\n ::"+message;
		send(title, txt);
		System.out.println(txt);
	}

	public void catalogue(String companyname, String companynamekatakana, String name, String namekatakana, String mail,
			String phone, String fax, String addressno, String kenn, String addressnumber, String apt)  {
		
		System.out.println("companyname : "+companyname);
		System.out.println("companynamekatakana : "+companynamekatakana);
		System.out.println("name : "+name);
		System.out.println("name(カタカナ) : "+namekatakana);
		System.out.println("mail : "+mail);
		System.out.println("phone : "+phone);
		System.out.println("addressno : "+addressno);
		System.out.println("kenn : "+kenn);
		System.out.println("addressnumber : "+addressnumber);
		System.out.println("apt : "+apt);
		String title = "カタログ請求";
		String  txt = "";
		txt += "\n御社名【お名前】:: "+companyname;
		txt += "\n担当者名 :: "+name;
		txt += "\n担当者名カナ :: "+namekatakana;
		txt += "\nメール :: "+mail;
		txt += "\n電話 :: "+phone;
		txt += "\nFAX :: "+fax;
		txt += "\n住所 :: "+addressno+""+kenn+""+addressnumber+""+apt+"";
		send(title, txt);
	}

	private void send(String title, String txt) {
		Properties props = new Properties(); 
        //smptサーバに関する設定 
        props.setProperty("mail.smtp.host", "smtp.naver.com"); 
        props.setProperty("mail.smtp.port", "587"); 
        props.setProperty("mail.smtp.auth", "true"); 
        //タイムアウトも一応 
        props.setProperty("mail.smtp.connectiontimeout", "5000"); 
        props.setProperty("mail.smtp.timeout", "5000"); 
        //サーバとの会話内容を出力してくれる！ 
        props.setProperty("mail.debug", "true"); 
        //?????
        class PasswordAuthenticatior extends Authenticator{ 
              private String username; 
              private String password; 

              PasswordAuthenticatior(String username, String password) { 
                this.username = username; 
                this.password = password; 
              } 

              @Override 
              public PasswordAuthentication getPasswordAuthentication() { 
                return new PasswordAuthentication(username, password); 
            } 
        } 
        //パスワード認証つきのセッションを作成 
        Session session = Session.getDefaultInstance( 
                        props, 
                        new PasswordAuthenticatior("wwklcw","dlckddn1201") 
        ); 

        MimeMessage msg = new MimeMessage(session); 

        try{
	        msg.setFrom(new InternetAddress("wwklcw@naver.com")); 
	       // msg.setSender(new InternetAddress("wkwkwk@naver.com")); 
	        //TOを設定。CCとBCCも設定できるよ☆ 
	        msg.setRecipient(TO, new InternetAddress("stylea1201@naver.com")); 
	
	
	        //msg.setSubject(title, "utf-8");
	        //msg.setText(""+txt); 
	        msg.setSubject(title, "iso-2022-jp");
	        msg.setHeader("Content-Type", "text/html; charset=iso-2022-jp");
	        msg.setContent(txt, "text/html; charset=iso-2022-jp");
	        msg.setSentDate(new Date());

	        //msg.writeTo(System.out); 
	
	        Transport.send(msg); 
        }catch(Exception e){
        	e.printStackTrace();
        }
	}
	
	/*sample html
	private void sendhtml() {
		try {
            Properties props = System.getProperties();
            props.setProperty("mail.smtp.host", "smtp.naver.com"); 
            props.setProperty("mail.smtp.port", "587"); 
            props.setProperty("mail.smtp.auth", "true"); 
            Session session = Session.getDefaultInstance(props, null);
            MimeMessage mimeMessage = new MimeMessage(session);
            // x-windows-iso2022jp
            mimeMessage.setFrom(new InternetAddress("wwklcw@naver.com", "lee", "iso-2022-jp"));
            mimeMessage.setRecipients(Message.RecipientType.TO, "stylea1201@naver.com");
            // x-windows-iso2022jp
            mimeMessage.setSubject("title", "iso-2022-jp");
            // x-windows-iso2022jp
            mimeMessage.setHeader("Content-Type", "text/html; charset=iso-2022-jp");
            mimeMessage.setContent("<html><body><a href=\"http://www.ibm.com/\">ibm.com</a></body></html>", "text/html; charset=iso-2022-jp");
            mimeMessage.setSentDate(new Date());
            Transport tp = session.getTransport("smtp");
            tp.connect(null, "wwklcw", "dlckddn1201");
            tp.sendMessage(mimeMessage, mimeMessage.getFrom());
        } catch (Exception e) {
            e.printStackTrace();
        }

	}
	*/
	
}