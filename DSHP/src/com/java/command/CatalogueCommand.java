package com.java.command;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.java.service.SendMail;

public class CatalogueCommand implements MCommand {

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
		// TODO Auto-generated method stub
		String companyname = request.getParameter("companyname");
		String companynamekatakana = request.getParameter("companynamekatakana");
		String name = request.getParameter("name");
		String namekatakana = request.getParameter("namekatakana");
		String mail = request.getParameter("mail");
		String phone = request.getParameter("phone");
		String fax = request.getParameter("fax");
		String addressno1= request.getParameter("addressno1");
		String addressno2= request.getParameter("addressno2");
		String kenn = request.getParameter("kenn");
		String addressnumber = request.getParameter("addressnumber");
		String apt = request.getParameter("apt");
		String addressno = addressno1+" - "+addressno2;
		SendMail SM = new SendMail();
		SM.catalogue(companyname, companynamekatakana, name, namekatakana, mail, phone, fax, addressno, kenn, addressnumber, apt);

	}

}
