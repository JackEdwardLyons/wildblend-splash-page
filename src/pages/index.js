import React from 'react';

import { Layout, Seo } from '../components';
import ContactForm from '../components/ContactForm';
import Hero from '../components/home/Hero';

export default function IndexPage() {
  return (
    <Layout>
      <Seo description="Home page for a Gatsby Starter, featuring Emotion and Tailwind css" />
      <Hero />

      <ContactForm />
    </Layout>
  );
}
