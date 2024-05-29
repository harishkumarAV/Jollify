import React from 'react';
import './FAQ.css'; 

export default function FAQ() {
  const faqData = [
    {
      question: 'What is Jollify?',
      answer: 'Jollify is a birthday party organizer app designed to simplify the process of planning and managing birthday celebrations.'
    },
    {
      question: 'How can I download Jollify?',
      answer: 'You can download Jollify from the App Store for iOS devices or the Google Play Store for Android devices.'
    },
    {
      question: 'Is Jollify available for free?',
      answer: 'Yes, Jollify is available for free download. However, certain premium features may require a subscription or in-app purchase.'
    },
    {
      question: 'How do I create an account on Jollify?',
      answer: 'To create an account on Jollify, simply click on the "Sign Up" button and follow the prompts to fill in your details.'
    },
    {
      question: 'Can I plan multiple birthday parties using Jollify?',
      answer: 'Yes, Jollify allows you to plan and manage multiple birthday parties simultaneously, making it easy to stay organized.'
    },
    {
      question: 'How do I invite guests to my party through Jollify?',
      answer: 'You can easily invite guests to your party by creating and customizing digital invitations within the Jollify app.'
    },
    {
      question: 'Is there a feature for tracking RSVPs on Jollify?',
      answer: 'Yes, Jollify provides a feature for tracking RSVPs, allowing you to keep track of guest responses and manage your guest list efficiently.'
    },
    {
      question: 'Can I set up a budget for my party on Jollify?',
      answer: 'Yes, Jollify offers budget management tools that enable you to set a budget for your party and track expenses throughout the planning process.'
    },
    {
      question: 'How do I find and book venues through Jollify?',
      answer: 'Jollify provides a venue search feature that allows you to browse and compare venues based on your preferences, making it easy to find the perfect location for your party.'
    },
    {
      question: 'Is there a feature for creating a party timeline on Jollify?',
      answer: 'Yes, Jollify offers a feature for creating a party timeline, helping you plan and organize the various activities and events scheduled for your celebration.'
    },
    {
      question: 'How can I customize decorations for my party on Jollify?',
      answer: 'Jollify offers customization options for decorations, allowing you to personalize the decor to match your party theme and preferences.'
    },
    {
      question: 'Can I order supplies and party favors through Jollify?',
      answer: 'Yes, Jollify provides options for ordering supplies and party favors directly through the app, making it convenient to purchase everything you need for your celebration.'
    },
    {
      question: 'How do I handle last-minute changes to my party plans on Jollify?',
      answer: 'Jollify offers flexibility for managing last-minute changes to your party plans, allowing you to update details and communicate changes with guests and vendors.'
    },
    {
      question: 'Is there a feature for creating and sharing a party itinerary on Jollify?',
      answer: 'Yes, Jollify allows you to create and share a party itinerary with guests, providing them with a schedule of events and activities for the celebration.'
    },
    {
      question: 'How can I contact Jollify support for assistance?',
      answer: 'You can contact Jollify support for assistance by accessing the "Support" section within the app and reaching out to our customer support team.'
    }
  ];

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div className="faq-item" key={index}>
            <div className="question">{item.question}</div>
            <div className="answer">{item.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
