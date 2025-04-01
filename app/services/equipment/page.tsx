'use client';

import React from 'react';
import Link from 'next/link';

export default function EquipmentRentalPage() {
  const equipmentCategories = [
    {
      name: 'Microphones & Preamps',
      image: '/images/mic-collection.jpg',
      description: 'High-quality microphones and preamps for studio and location recording',
      equipment: [
        {
          name: 'Neumann U87 Ai',
          description: 'Legendary large-diaphragm condenser microphone',
          dailyRate: 75,
          weeklyRate: 300,
          memberDiscount: '10-25%',
          image: '/images/mic-neumann.jpg',
          availability: 'In stock'
        },
        {
          name: 'Neve 1073 Preamp',
          description: 'Classic microphone preamplifier with EQ',
          dailyRate: 85,
          weeklyRate: 340,
          memberDiscount: '10-25%',
          availability: 'Limited availability'
        },
        {
          name: 'Shure SM7B',
          description: 'Dynamic microphone ideal for vocals and broadcast',
          dailyRate: 35,
          weeklyRate: 140,
          memberDiscount: '10-25%',
          availability: 'In stock'
        },
        {
          name: 'Universal Audio 610',
          description: 'Tube microphone preamplifier',
          dailyRate: 65,
          weeklyRate: 260,
          memberDiscount: '10-25%',
          availability: 'In stock'
        }
      ]
    },
    {
      name: 'Portable Recorders & Field Kits',
      image: '/images/mobile-recording.jpg',
      description: 'Professional recording equipment for location and mobile production',
      equipment: [
        {
          name: 'Sound Devices MixPre-6 II',
          description: '6-channel portable audio recorder/mixer',
          dailyRate: 65,
          weeklyRate: 260,
          memberDiscount: '10-25%',
          availability: 'In stock'
        },
        {
          name: 'Podcast Field Kit',
          description: 'Complete mobile recording setup for podcasts (2 SM7Bs, MixPre-3, stands, cables)',
          dailyRate: 95,
          weeklyRate: 380,
          memberDiscount: '10-25%',
          availability: 'In stock'
        },
        {
          name: 'Zoom F8n',
          description: '8-channel professional field recorder',
          dailyRate: 55,
          weeklyRate: 220,
          memberDiscount: '10-25%',
          availability: 'Limited availability'
        }
      ]
    },
    {
      name: 'Outboard Processors',
      image: '/images/gear-1176.jpg',
      description: 'Premium analog processing equipment for recording and mixing',
      equipment: [
        {
          name: 'Universal Audio 1176LN',
          description: 'Classic FET compressor',
          dailyRate: 70,
          weeklyRate: 280,
          memberDiscount: '10-25%',
          availability: 'In stock'
        },
        {
          name: 'Empirical Labs Distressor',
          description: 'Versatile compressor/limiter',
          dailyRate: 65,
          weeklyRate: 260,
          memberDiscount: '10-25%',
          availability: 'In stock'
        },
        {
          name: 'Tube-Tech CL 1B',
          description: 'Optical tube compressor',
          dailyRate: 85,
          weeklyRate: 340,
          memberDiscount: '10-25%',
          availability: 'Limited availability'
        }
      ]
    },
    {
      name: 'Monitoring Systems',
      description: 'Professional monitoring solutions for tracking and mixing',
      equipment: [
        {
          name: 'Genelec 8040B Pair',
          description: 'Professional studio monitors with stands',
          dailyRate: 80,
          weeklyRate: 320,
          memberDiscount: '10-25%',
          availability: 'In stock'
        },
        {
          name: 'Sennheiser HD650',
          description: 'Open-back reference headphones',
          dailyRate: 30,
          weeklyRate: 120,
          memberDiscount: '10-25%',
          availability: 'In stock'
        },
        {
          name: 'Audeze LCD-X',
          description: 'Planar magnetic reference headphones',
          dailyRate: 55,
          weeklyRate: 220,
          memberDiscount: '10-25%',
          availability: 'In stock'
        }
      ]
    },
    {
      name: 'Instruments & Amplifiers',
      description: 'Quality instruments and amplifiers for recording sessions',
      equipment: [
        {
          name: 'Fender Deluxe Reverb',
          description: 'Classic tube guitar amplifier',
          dailyRate: 65,
          weeklyRate: 260,
          memberDiscount: '10-25%',
          availability: 'In stock'
        },
        {
          name: 'Nord Stage 3',
          description: 'Professional keyboard/synthesizer',
          dailyRate: 85,
          weeklyRate: 340,
          memberDiscount: '10-25%',
          availability: 'Limited availability'
        },
        {
          name: 'Moog Subsequent 37',
          description: 'Analog synthesizer',
          dailyRate: 70,
          weeklyRate: 280,
          memberDiscount: '10-25%',
          availability: 'In stock'
        }
      ]
    }
  ];

  const rentalBenefits = [
    {
      title: 'Try Before You Buy',
      description: 'Test professional gear in your own environment before making investment decisions',
      icon: '🧪'
    },
    {
      title: 'No Capital Investment',
      description: 'Access high-end equipment without the upfront cost of purchasing',
      icon: '💰'
    },
    {
      title: 'Technical Support',
      description: 'Get expert advice on equipment selection and setup for your specific project',
      icon: '🛠️'
    },
    {
      title: 'Expand Capabilities',
      description: 'Take on projects requiring specialized equipment without permanent acquisition',
      icon: '📈'
    },
    {
      title: 'Flexible Duration',
      description: 'Rent for exactly the time you need, from one day to multiple weeks',
      icon: '🗓️'
    },
    {
      title: 'Member Discounts',
      description: 'Substantial savings for membership holders across all equipment categories',
      icon: '🏷️'
    }
  ];

  const rentalProcess = [
    {
      title: 'Browse Inventory',
      description: 'Explore our complete equipment catalog online or in person',
      icon: '🔍'
    },
    {
      title: 'Reserve Equipment',
      description: 'Book online, by phone, or in person with flexible scheduling options',
      icon: '📝'
    },
    {
      title: 'Technical Consultation',
      description: 'Optional consultation to ensure you select the right tools for your project',
      icon: '💬'
    },
    {
      title: 'Pickup or Delivery',
      description: 'Collect from our facility or have equipment delivered (additional fee)',
      icon: '🚚'
    },
    {
      title: 'Create With Confidence',
      description: 'Use professional equipment with available technical support',
      icon: '🎵'
    },
    {
      title: 'Easy Return',
      description: 'Return to our facility or schedule a pickup when your rental period ends',
      icon: '↩️'
    }
  ];

  const bundles = [
    {
      name: 'Podcast Production Kit',
      price: '$120/day',
      description: 'Complete setup for professional podcast recording with 1-3 participants',
      contents: [
        '2x Shure SM7B Microphones',
        'Universal Audio Apollo Twin Interface',
        'Stands, Headphones, and Cables',
        'Portable Acoustical Treatment',
        'Optional: Field Recorder for Backup (+$30)'
      ]
    },
    {
      name: 'Field Recording Package',
      price: '$180/day',
      description: 'Professional location recording setup for interviews, field recordings, and events',
      contents: [
        'Sound Devices MixPre-6 II Recorder',
        'Sennheiser MKH-416 Shotgun Microphone',
        'DPA 4060 Lavalier Microphones (2x)',
        'Boom Pole and Windshield Kit',
        'Headphones, Cables, and Accessories',
        'Portable Battery System'
      ]
    },
    {
      name: 'Vocal Chain Premium',
      price: '$235/day',
      description: 'High-end vocal recording chain for professional studio quality',
      contents: [
        'Neumann U87 Ai Microphone',
        'Neve 1073 Preamp',
        'Universal Audio 1176LN Compressor',
        'Pop Filter and Reflection Filter',
        'Premium Microphone Stand and Cables',
        'Optional: Interface for Direct Recording (+$45)'
      ]
    }
  ];

  const rentalFAQs = [
    {
      question: 'What is required to rent equipment?',
      answer: 'First-time renters need a valid ID, credit card, and signed rental agreement. We may require a security deposit for certain equipment. Membership holders enjoy streamlined rental processes.'
    },
    {
      question: 'Do you offer delivery?',
      answer: 'Yes, we offer delivery within a 25-mile radius for an additional fee based on distance and equipment volume. Delivery is free for Studio Partners and discounted for Professional Pass holders.'
    },
    {
      question: 'Can I extend my rental period?',
      answer: 'Yes, you can extend your rental if the equipment isn\'t booked by another client. Contact us at least 24 hours before your return date to check availability and arrange extension.'
    },
    {
      question: 'What if I\'m not sure what equipment I need?',
      answer: 'Our technical consultation service can help you select the right equipment for your project. This service is free for members and available to non-members for a small fee.'
    },
    {
      question: 'What happens if equipment is damaged?',
      answer: 'Renters are responsible for equipment during the rental period. We offer an optional damage waiver that limits liability for an additional 10% of the rental fee. All equipment is tested before and after rental.'
    }
  ];

  const categorySummaries = [
    {
      title: "Microphone Collection",
      description: "Premium microphones for every recording scenario, from vintage tube classics to modern precision dynamics.",
      image: '/images/mic-collection.jpg',
      count: "50+ microphones",
      rentalExample: "Neumann U87 - $75/day"
    },
    {
      title: "Outboard Processing Gear",
      description: "Analog signal processors including compressors, EQs, preamps, and effects units from legendary manufacturers.",
      image: '/images/mic-neumann.jpg',
      count: "30+ processors",
      rentalExample: "Universal Audio 1176 - $50/day"
    },
    {
      title: "Portable Recording Systems",
      description: "Professional field recorders, portable mixers, and location audio equipment for capturing audio anywhere.",
      image: '/images/mobile-recording.jpg',
      count: "10+ systems",
      rentalExample: "Sound Devices MixPre-10 - $85/day"
    },
    {
      title: "Vintage and Specialty",
      description: "Rare and sought-after audio equipment including vintage compressors, tape machines, and unique processors.",
      image: '/images/gear-1176.jpg',
      count: "15+ specialty items",
      rentalExample: "Studer A800 Tape Machine - $150/day"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[300px] md:h-[400px] lg:h-[500px]">
        <div className="absolute inset-0">
          <img 
            src="/images/page-banners/equipment-banner.jpg" 
            alt="Equipment Rental" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Equipment Rental Program</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Professional audio equipment for on-site and off-site use, with flexible rental options and membership benefits
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar */}
          <aside className="lg:w-1/4">
            <div className="bg-light-DEFAULT p-6 rounded-lg shadow-md mb-8 sticky top-6">
              <h3 className="text-xl font-bold border-b border-gray-200 pb-3 mb-4">Rental Information</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#categories" className="text-primary-DEFAULT hover:text-primary-dark">
                    Equipment Categories
                  </a>
                </li>
                <li>
                  <a href="#bundles" className="text-primary-DEFAULT hover:text-primary-dark">
                    Equipment Bundles
                  </a>
                </li>
                <li>
                  <a href="#benefits" className="text-primary-DEFAULT hover:text-primary-dark">
                    Rental Benefits
                  </a>
                </li>
                <li>
                  <a href="#process" className="text-primary-DEFAULT hover:text-primary-dark">
                    Rental Process
                  </a>
                </li>
                <li>
                  <a href="#faqs" className="text-primary-DEFAULT hover:text-primary-dark">
                    FAQs
                  </a>
                </li>
              </ul>

              <h3 className="text-xl font-bold border-b border-gray-200 pb-3 mb-4 mt-8">Related Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/services/membership" className="text-primary-DEFAULT hover:text-primary-dark">
                    Studio Membership
                  </Link>
                </li>
                <li>
                  <Link href="/services/mobile-recording" className="text-primary-DEFAULT hover:text-primary-dark">
                    Mobile Recording
                  </Link>
                </li>
                <li>
                  <Link href="/services/education" className="text-primary-DEFAULT hover:text-primary-dark">
                    Equipment Workshops
                  </Link>
                </li>
              </ul>

              <div className="mt-8 p-4 bg-primary-DEFAULT text-white rounded-lg">
                <h4 className="font-bold text-lg mb-2">Need equipment advice?</h4>
                <p className="mb-4">Our equipment specialists can help you select the right tools for your project.</p>
                <Link 
                  href="/contact?subject=Equipment Consultation" 
                  className="block text-center bg-white text-primary-DEFAULT hover:bg-gray-100 py-2 px-4 rounded-lg transition-colors font-medium"
                >
                  Request Consultation
                </Link>
              </div>
            </div>
          </aside>

          {/* Content Area */}
          <div className="lg:w-3/4">
            {/* Introduction Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Professional Equipment, Flexible Access</h2>
              
              <div className="prose max-w-none text-gray-700">
                <p className="mb-4">
                  Elemental Sound's Equipment Rental Program provides creators with access to professional-grade audio equipment 
                  without the substantial capital investment typically required. Our comprehensive inventory includes everything 
                  from premium microphones and preamps to portable recording systems and instruments.
                </p>
                <p className="mb-4">
                  Designed to integrate seamlessly with our membership program, equipment rental represents another pathway into 
                  our ecosystem and offers substantial benefits to both casual renters and regular members. While any client can 
                  rent equipment, membership holders receive priority access, discounted rates, and extended rental durations.
                </p>
                <p className="mb-6">
                  Whether you need a single piece of specialized gear for a specific project or a complete recording setup for 
                  location work, our rental program offers the flexibility to access exactly what you need, when you need it.
                </p>
              </div>

              <div className="bg-light-DEFAULT p-6 rounded-lg mt-8">
                <h3 className="text-xl font-bold mb-4">Program Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl mb-2">250+</div>
                    <p className="text-gray-700">Items available for rent</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-2">10-50%</div>
                    <p className="text-gray-700">Member discount range</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-2">24/7</div>
                    <p className="text-gray-700">Technical support for renters</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Equipment Categories Section */}
            <section id="categories" className="scroll-mt-6 mb-16">
              <h2 className="text-3xl font-bold mb-8">Equipment Categories</h2>
              
              <div className="space-y-12">
                {equipmentCategories.map((category, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      {category.image && (
                        <div className="md:w-1/3">
                          <img 
                            src={category.image} 
                            alt={category.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className={`p-6 ${category.image ? 'md:w-2/3' : 'w-full'}`}>
                        <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                        <p className="text-gray-700 mb-4">{category.description}</p>
                        
                        <div className="overflow-x-auto">
                          <table className="min-w-full bg-white border-collapse">
                            <thead>
                              <tr className="bg-gray-100">
                                <th className="py-3 px-4 text-left border-b">Equipment</th>
                                <th className="py-3 px-4 text-right border-b">Daily Rate</th>
                                <th className="py-3 px-4 text-right border-b">Weekly Rate</th>
                                <th className="py-3 px-4 text-right border-b">Member Discount</th>
                                <th className="py-3 px-4 text-right border-b">Availability</th>
                              </tr>
                            </thead>
                            <tbody>
                              {category.equipment.map((item, i) => (
                                <tr key={i} className="border-b hover:bg-gray-50">
                                  <td className="py-3 px-4">
                                    <div className="font-medium">{item.name}</div>
                                    <div className="text-sm text-gray-600">{item.description}</div>
                                  </td>
                                  <td className="py-3 px-4 text-right">${item.dailyRate}</td>
                                  <td className="py-3 px-4 text-right">${item.weeklyRate}</td>
                                  <td className="py-3 px-4 text-right">{item.memberDiscount}</td>
                                  <td className="py-3 px-4 text-right">
                                    <span className={`inline-block px-2 py-1 rounded text-xs font-medium
                                      ${item.availability === 'In stock' 
                                        ? 'bg-green-100 text-green-800' 
                                        : 'bg-yellow-100 text-yellow-800'}`}
                                    >
                                      {item.availability}
                                    </span>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-light-DEFAULT rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold mb-3">Need equipment not listed here?</h3>
                <p className="text-gray-700 mb-4">
                  Our inventory is constantly growing. If you need equipment that's not listed, 
                  we may be able to source it for your project.
                </p>
                <Link 
                  href="/contact?subject=Special Equipment Request" 
                  className="inline-block bg-primary-DEFAULT hover:bg-primary-dark text-white py-2 px-6 rounded-lg transition-colors"
                >
                  Submit Special Request
                </Link>
              </div>
            </section>

            {/* Equipment Bundles Section */}
            <section id="bundles" className="scroll-mt-6 mb-16">
              <h2 className="text-3xl font-bold mb-8">Equipment Bundles</h2>
              <p className="text-gray-700 mb-6">
                Our pre-configured equipment bundles provide everything you need for specific production scenarios, 
                curated by our technical specialists for optimal performance and value.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {bundles.map((bundle, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all">
                    <h3 className="text-xl font-bold mb-2">{bundle.name}</h3>
                    <div className="text-lg font-semibold text-primary-DEFAULT mb-3">{bundle.price}</div>
                    <p className="text-gray-700 mb-4">{bundle.description}</p>
                    
                    <h4 className="font-semibold mb-2">Includes:</h4>
                    <ul className="space-y-1 mb-6">
                      {bundle.contents.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-primary-DEFAULT mr-2">•</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link 
                      href="/contact?subject=Bundle Inquiry" 
                      className="block text-center bg-primary-DEFAULT hover:bg-primary-dark text-white py-2 px-4 rounded-lg transition-colors"
                    >
                      Reserve Bundle
                    </Link>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-light-DEFAULT rounded-lg text-center">
                <p className="font-medium">
                  All bundles include 15% discount compared to individual item rental. 
                  Members receive additional 10-25% discount on bundle prices.
                </p>
              </div>
            </section>

            {/* Rental Benefits Section */}
            <section id="benefits" className="scroll-mt-6 mb-16">
              <h2 className="text-3xl font-bold mb-8">Rental Benefits</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rentalBenefits.map((benefit, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                    <div className="text-4xl mb-4">{benefit.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-gray-700">{benefit.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 bg-light-DEFAULT rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Membership Integration</h3>
                <p className="text-gray-700 mb-6">
                  While equipment rental is available to all clients, membership holders receive substantial 
                  additional benefits that make equipment access even more valuable.
                </p>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white rounded-lg">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="py-3 px-4 text-left border-b">Benefit</th>
                        <th className="py-3 px-4 text-center border-b">Non-Member</th>
                        <th className="py-3 px-4 text-center border-b">Creator Pass</th>
                        <th className="py-3 px-4 text-center border-b">Producer Pass</th>
                        <th className="py-3 px-4 text-center border-b">Professional Pass</th>
                        <th className="py-3 px-4 text-center border-b">Studio Partner</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3 px-4 font-medium">Rental Discount</td>
                        <td className="py-3 px-4 text-center">—</td>
                        <td className="py-3 px-4 text-center">10%</td>
                        <td className="py-3 px-4 text-center">15%</td>
                        <td className="py-3 px-4 text-center">25%</td>
                        <td className="py-3 px-4 text-center">50%</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4 font-medium">Advance Reservations</td>
                        <td className="py-3 px-4 text-center">7 days</td>
                        <td className="py-3 px-4 text-center">14 days</td>
                        <td className="py-3 px-4 text-center">30 days</td>
                        <td className="py-3 px-4 text-center">60 days</td>
                        <td className="py-3 px-4 text-center">90 days</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4 font-medium">Overnight Privileges</td>
                        <td className="py-3 px-4 text-center">No</td>
                        <td className="py-3 px-4 text-center">No</td>
                        <td className="py-3 px-4 text-center">No</td>
                        <td className="py-3 px-4 text-center">Yes</td>
                        <td className="py-3 px-4 text-center">Yes</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4 font-medium">Extended Hours Pickup</td>
                        <td className="py-3 px-4 text-center">No</td>
                        <td className="py-3 px-4 text-center">No</td>
                        <td className="py-3 px-4 text-center">Yes</td>
                        <td className="py-3 px-4 text-center">Yes</td>
                        <td className="py-3 px-4 text-center">Yes</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium">Priority Access</td>
                        <td className="py-3 px-4 text-center">No</td>
                        <td className="py-3 px-4 text-center">Limited</td>
                        <td className="py-3 px-4 text-center">Yes</td>
                        <td className="py-3 px-4 text-center">Enhanced</td>
                        <td className="py-3 px-4 text-center">Guaranteed</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Rental Process Section */}
            <section id="process" className="scroll-mt-6 mb-16">
              <h2 className="text-3xl font-bold mb-8">Rental Process</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rentalProcess.map((step, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6 relative">
                    <div className="absolute top-4 left-4 w-8 h-8 bg-primary-DEFAULT text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div className="ml-6">
                      <div className="text-3xl mb-4 mt-2">{step.icon}</div>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-gray-700">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faqs" className="scroll-mt-6 mb-16">
              <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                {rentalFAQs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-primary-DEFAULT text-white p-8 rounded-lg text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Enhance Your Production Capabilities?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Access professional equipment for your next project without the capital investment.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/contact?subject=Equipment Rental Inquiry" 
                  className="px-6 py-3 bg-white text-primary-DEFAULT hover:bg-gray-100 rounded-lg transition-colors font-medium"
                >
                  Browse Full Inventory
                </Link>
                <Link 
                  href="/services/membership" 
                  className="px-6 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-DEFAULT rounded-lg transition-colors font-medium"
                >
                  Explore Membership Discounts
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
} 