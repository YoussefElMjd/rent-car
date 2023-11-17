package com.rentalcaremirats.app.utils;

import java.util.Properties;

import javax.mail.Authenticator;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

public class EmailUtil {

    public static void sendConfirmationEmail(String to, String subject, String body) throws MessagingException {
        // Set up mail server properties
        Properties properties = new Properties();
        properties.put("mail.smtp.host", "smtp.gmail.com");
        properties.put("mail.smtp.port", "587");
        properties.put("mail.smtp.auth", "true");
        properties.put("mail.smtp.starttls.enable", "true");

        // Set up the session
        Session session = Session.getInstance(properties, new Authenticator() {
            @Override
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication("Youssef.ElMajdoul@gmail.com", "vwzg jbyb asuv rdwq");
            }
        });

        // Create the message
        Message message = new MimeMessage(session);
        message.setFrom(new InternetAddress("Youssef.ElMajdoul@gmail.com"));
        message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(to));
        message.setSubject(subject);
        message.setContent(body, "text/html");

        // Send the message
        Transport.send(message);
        System.out.println("Successfully sent mail!");
    }

}
