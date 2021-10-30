import React, { useState } from 'react';
import tw, { styled } from 'twin.macro';
import { navigate } from 'gatsby';

const StyledH3 = styled.h3`
  ${tw`pt-5 text-4xl font-extrabold text-center light:text-dark`}
`;

const ContacthtmlForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function encode(data) {
    const encodedData = Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');
    console.log({ encodedData });
    return encodedData;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': event.target.getAttribute('name'),
        firstName,
        lastName,
        message,
      }),
    })
      .then(() => navigate('/success'))
      .catch((error) => alert(error));
  };
  return (
    <div tw="w-full max-w-lg mt-12 mx-auto">
      <StyledH3>Contact me</StyledH3>
      <form
        tw="w-full max-w-lg mt-12 mx-auto"
        method="POST"
        data-netlify="true"
        netlify="true"
        netlify-honeypot="true"
        onSubmit={handleSubmit}
        name="wildblendContacForm"
      >
        <div tw="flex flex-wrap -mx-3 mb-6">
          <p tw="hidden">
            <label>
              Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
          </p>
          <div tw="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              tw="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              First Name
            </label>
            <input
              tw="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="First name"
              name="firstName"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div tw="w-full md:w-1/2 px-3">
            <label
              tw="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Last Name
            </label>
            <input
              tw="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              name="lastName"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div tw="flex flex-wrap -mx-3 mb-6">
          <div tw="w-full px-3">
            <label
              tw="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              E-mail
            </label>
            <input
              tw="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              type="email"
              name="emailAddress"
              required
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div tw="flex flex-wrap -mx-3 mb-6">
          <div tw="w-full px-3">
            <label
              tw="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Message
            </label>
            <textarea
              tw=" appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
              id="message"
              placeholder="Your message here"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div tw="md:flex md:items-center">
          <div tw="md:w-1/3">
            <button
              tw="mx-auto shadow focus:outline-none text-white font-bold py-2 px-4 rounded bg-gradient-to-r from-purple-500 to-yellow-500 hover:shadow-xl"
              type="submit"
            >
              Send message
            </button>
          </div>
          <div tw="md:w-2/3"></div>
        </div>
      </form>{' '}
    </div>
  );
};

export default ContacthtmlForm;
