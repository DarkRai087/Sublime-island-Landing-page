import Image from 'next/image'
import Mailbox from '../../../../Images/flagmailbox.png'
import { useState } from 'react'
import Swal from 'sweetalert2'

const successAlert = () => {
  Swal.fire({
    title: 'Thank you for subscribing to Sublime Islands!',
    text: 'We promise you to bring the best of deals, tips and travel hacks.\nWe also adhere not to spam in your mail',
    icon: 'success',
  })
}

const FooterCard = () => {
  const [formData, setFormData] = useState({
    email: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      // Authorize and authenticate with Google Sheets API
      let url =
        'https://api.sheety.co/0c5ea17850e926fa4fe0a7af201e3487/sublimeIslandNewsletterEmailData/sheet1'
      let body = {
        sheet1: {
          item: formData.email,

          // Add other fields and data you want to update or insert
        },
      }

      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
          }
          return response.json()
        })
        .then((json) => {
          // Do something with the response from Sheety
          console.log(json.sheet1)
        })
        .then(() => {
          successAlert()
        })
        .catch((error) => {
          console.error('Error:', error)
        })
    } catch {
      console.error()
    }
  }
  return (
    <div className="relative mx-auto mb-[-40px] w-4/5 rounded-3xl bg-gradient-to-br from-red-500 via-red-600 to-purple-700 p-10 shadow-xl">
      <div className="card-body">
        <div className="flex justify-between">
          <div>
            <h1 className="w-2/5 text-6xl font-bold lexs:text-2xl">
              Subscribe Newsletter
            </h1>
            <p className="mt-9 text-3xl font-bold">The Travel</p>
            <p>
              Get inspired! Receive travel discounts, tips and behind the scenes
              stories.
            </p>
            <div className="mt-4">
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  placeholder="Your Email Address"
                  className="input mb-4 mr-2 h-12 w-full max-w-xs flex-shrink rounded-md border border-transparent px-4 text-base leading-6 placeholder-opacity-20"
                  onChange={handleChange}
                />
                <button
                  className="btn inline-flex h-12 cursor-pointer items-center justify-center rounded-md border border-transparent bg-gray-700 px-4 text-lg font-semibold uppercase text-white duration-200 hover:scale-105 hover:bg-slate-600"
                  type="submit"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="md:hidden">
            <Image
              src={Mailbox}
              alt="Mailbox Icon"
              className="ml-5 h-auto w-auto rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterCard