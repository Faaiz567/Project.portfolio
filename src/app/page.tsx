import Hero from './components/Hero';
import Services from './components/Services';
import WhyNext from './components/WhyNext';
import ContactForm from './components/ContactForm';
import About from './components/About';

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <WhyNext />
      <About/>
      <ContactForm />
      
    </div>
  );
}
