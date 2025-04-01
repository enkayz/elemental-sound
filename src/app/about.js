import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function About() {
  const team = [
    {
      name: "Alex Rivera",
      title: "Founder & CEO",
      description: "Former platinum-selling producer who founded Elemental Sound in 2010. Drives the company's strategic vision and innovation initiatives.",
      image: "/images/team-alex.jpg"
    },
    {
      name: "Maya Johnson",
      title: "Chief Operations Officer",
      description: "Audio engineer with MBA, bringing 12 years of operational expertise from major studios to our expanding service ecosystem.",
      image: "/images/team-maya.jpg"
    },
    {
      name: "James Wilson",
      title: "Technical Director",
      description: "Acclaimed audio engineer with 15+ years of experience across studio and location recording environments.",
      image: "/images/team-james.jpg"
    },
    {
      name: "Dr. Alicia Martinez",
      title: "Education Director",
      description: "Former conservatory professor with a PhD in music technology who developed our comprehensive education platform.",
      image: "/images/team-alicia.jpg"
    }
  ];

  const values = [
    {
      title: "Uncompromising Quality",
      description: "We believe that exceptional audio quality should be accessible to all, not just those with unlimited budgets. Every service we offer maintains the highest standards of technical excellence."
    },
    {
      title: "Continuous Innovation",
      description: "The audio landscape is constantly evolving, and so are we. We embrace new technologies, workflows, and business models to better serve our community."
    },
    {
      title: "Authentic Inclusivity",
      description: "We actively work to make audio production accessible across socioeconomic boundaries, creating pathways for diverse voices to be heard."
    },
    {
      title: "Knowledge Sharing",
      description: "We believe in breaking down the walls of 'industry secrets.' Our educational approach emphasizes transparency and practical skills development."
    },
    {
      title: "Community Building",
      description: "Audio creation thrives in collaborative environments. We foster connections between creators, facilitating relationships that enhance creative outcomes."
    },
    {
      title: "Sustainable Growth",
      description: "We build business models that create lasting value for our clients while supporting the long-term health of our organization and the broader creative ecosystem."
    }
  ];

  return (
    <>
      <div className="relative py-24 bg-cover bg-center" style={{ backgroundImage: 'url(/images/hero-about.jpg)' }}>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative container mx-auto px-4 z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white text-shadow">
            About Elemental Sound
          </h1>
          <p className="text-xl text-white max-w-3xl text-shadow">
            Our story, vision, and the people behind the innovation
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6 text-primary-DEFAULT" id="story">Our Story</h2>
            <p className="text-lg mb-4">
              Elemental Sound began in 2010 as a traditional recording studio founded by Alex Rivera, 
              a veteran music producer with over 15 years of experience in the industry. 
              What started as a single-room recording space has evolved into a comprehensive audio 
              ecosystem serving creators across multiple disciplines.
            </p>
            <p className="text-lg mb-4">
              Our journey of transformation began in 2019 when we recognized the limitations of the traditional 
              studio model. While we had built a reputation for quality and technical excellence, we also saw 
              how the changing audio landscape was creating new challenges and opportunities for creators.
            </p>
            <p className="text-lg mb-4">
              Instead of competing in an increasingly crowded market, we decided to reimagine what an audio production 
              company could be. We expanded beyond the physical constraints of our studio walls to develop a model 
              that combines access to premium equipment, education, and community-building to serve creators at every stage of their journey.
            </p>
            <p className="text-lg">
              Today, Elemental Sound has evolved into a multifaceted audio ecosystem that empowers creators through 
              membership programs, equipment rental, educational offerings, and mobile recording services—all designed 
              to make professional audio accessible to more people in more places.
            </p>
          </div>
          <div className="relative h-[400px] lg:h-auto rounded-lg overflow-hidden">
            <Image 
              src="/images/studio-a.jpg" 
              alt="Elemental Sound studio" 
              fill 
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-primary-DEFAULT text-white rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4" id="mission">Our Mission</h2>
            <p className="text-lg">
              To democratize access to professional audio production capabilities, enabling creators 
              of all backgrounds to realize their sonic vision without compromise.
            </p>
          </div>
          <div className="bg-secondary-DEFAULT rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4 text-dark-DEFAULT" id="vision">Our Vision</h2>
            <p className="text-lg text-dark-DEFAULT">
              A world where technical and financial barriers no longer limit creative expression, 
              where every creator has access to the tools, knowledge, and community needed to bring 
              their audio projects to life.
            </p>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-primary-DEFAULT" id="values">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3 text-primary-DEFAULT">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-primary-DEFAULT" id="team">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-64 relative">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-primary-DEFAULT">{member.name}</h3>
                  <p className="text-accent-DEFAULT font-semibold text-sm mb-3">{member.title}</p>
                  <p className="text-gray-700">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-100 rounded-lg p-8 mb-20" id="contact">
          <h2 className="text-3xl font-bold mb-8 text-primary-DEFAULT">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-3 text-primary-DEFAULT">Visit Our Studio</h3>
              <p className="text-gray-700 mb-4">
                Unit 10-12, 45 Ladner St<br />
                O'Connor, WA<br />
                Australia
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3 text-primary-DEFAULT">Contact Information</h3>
              <p className="text-gray-700 mb-1">Email: info@elementalsound.com</p>
              <p className="text-gray-700 mb-1">Phone: 1800 ELEMENTAL</p>
              <p className="text-gray-700 mb-4">Hours: Mon-Fri 9am-6pm, Sat 10am-4pm</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3 text-primary-DEFAULT">Connect With Us</h3>
              <p className="text-gray-700 mb-4">
                Follow us on social media for updates, behind-the-scenes content, and community events.
              </p>
              <div className="flex space-x-4">
                <Button variant="secondary">Instagram</Button>
                <Button variant="secondary">Twitter</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 