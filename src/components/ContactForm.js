import React from 'react';
import tw, { styled } from 'twin.macro';

const StyledH3 = styled.h3`
  ${tw`text-4xl font-extrabold light:text-dark pt-5 text-center`}
`;

const ContactForm = () => (
  <div tw="w-full max-w-lg mt-12 mx-auto">
    <StyledH3>Contact me</StyledH3>
    <form
      tw="w-full max-w-lg mt-12 mx-auto"
      method="POST"
      data-netlify="true"
      netlify
    >
      <div tw="flex flex-wrap -mx-3 mb-6">
        <div tw="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            tw="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            First Name
          </label>
          <input
            tw="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="First name"
            required
          />
        </div>
        <div tw="w-full md:w-1/2 px-3">
          <label
            tw="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Last Name
          </label>
          <input
            tw="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder="Last name"
          />
        </div>
      </div>
      <div tw="flex flex-wrap -mx-3 mb-6">
        <div tw="w-full px-3">
          <label
            tw="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-password"
          >
            E-mail
          </label>
          <input
            tw="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="email"
            type="email"
            required
            placeholder="Your email"
          />
        </div>
      </div>
      <div tw="flex flex-wrap -mx-3 mb-6">
        <div tw="w-full px-3">
          <label
            tw="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-password"
          >
            Message
          </label>
          <textarea
            tw=" appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
            id="message"
            placeholder="Your message here"
          ></textarea>
        </div>
      </div>
      <div tw="md:flex md:items-center">
        <div tw="md:w-1/3">
          <button
            tw="mx-auto shadow focus:outline-none text-white font-bold py-2 px-4 rounded bg-gradient-to-r from-purple-500 to-yellow-500 hover:shadow-xl"
            type="button"
          >
            Send message
          </button>
        </div>
        <div tw="md:w-2/3"></div>
      </div>
    </form>{' '}
  </div>
);

export default ContactForm;
