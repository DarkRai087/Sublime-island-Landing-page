import React, { useState } from 'react'
import { MdExpandLess, MdExpandMore } from 'react-icons/md'

const FAQSection = ({ title, description, isVisible, toggleVisibility }) => (
  <div className="w-4/5 bg-white m-2 py-6 px-4 shadow-sm hover:shadow-md">
    <button className="w-full cursor-pointer" onClick={toggleVisibility}>
      <div className="flex items-center justify-between">
        <h3 className="mx-2 text-left text-xl text-gray-900 font-semibold font-sans">{title}</h3>
        <div className="expand">
          {isVisible ? <MdExpandLess /> : <MdExpandMore />}
        </div>
      </div>
    </button>
    {isVisible && (
      <div
        className={`mt-2 ${
          isVisible
            ? 'max-h-auto opacity-100 transition-all duration-1000 ease-in-out'
            : 'max-h-0 overflow-hidden opacity-0 transition-all duration-1000 ease-in-out'
        }`}
      >
        <p className="flex-col text-gray-900 text-lg italic pt-2">{description}</p>
      </div>
    )}
  </div>
)

const FAQs = () => {
  const sections = [
    {
      title: 'Can we customise our tour package?',
      description:
        'Yes, Sublime Island is an expert travel company based out of Andaman Islands. We are expert agents in operating tours in the islands. Our holiday experts will surely customise a trip as per your requirements.',
    },
    {
      title: 'How many days should I plan my Andaman trip?',
      description:
        'We recommend atleast 5 days to Andaman Islands, however, if you are short of time then you can connect with us for a favourable tour itinerary.',
    },
    {
      title: 'Is Sublime Island based out of Andaman Islands?',
      description:
        'Yes, we are based out of Andaman Islands. Our head office is in Port Blair (Capital of Andaman Islands). We are less than 10 mins drive from the Port Blair airport.',
    },
    {
      title: 'How expensive is your trip?',
      description:
        'Our price is very competitive and real value for money. You can say us as the wholesaler for the Andaman Island tours. Rest assured in terms of pricing factor when it comes to Andaman.',
    },
  ]

  const [visibleSection, setVisibleSection] = useState('')

  return (
    <div className="flex w-full flex-col items-center p-6">
      <h1 className="m-2 p-2 text-center text-3xl font-semibold">FAQs</h1>
      {sections.map((section, index) => (
        <FAQSection
          key={index}
          title={section.title}
          description={section.description}
          isVisible={visibleSection === section.title.toLowerCase()}
          toggleVisibility={() => {
            setVisibleSection(
              visibleSection === section.title.toLowerCase()
                ? ''
                : section.title.toLowerCase()
            )
          }}
        />
      ))}
    </div>
  )
}

export default FAQs
